<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
        then: function (): void {
            Route::get('/__deployment-check', function (Request $request) {
                $appKey = config('app.key');
                $checks = [
                    'environment' => app()->environment(),
                    'debug' => (bool) config('app.debug'),
                    'app_key' => [
                        'present' => is_string($appKey) && $appKey !== '',
                        'base64_format' => is_string($appKey) && str_starts_with($appKey, 'base64:'),
                    ],
                    'session_driver' => config('session.driver'),
                    'cache_store' => config('cache.default'),
                    'queue_connection' => config('queue.default'),
                    'log_channel' => config('logging.default'),
                    'vite_manifest' => file_exists(public_path('build/manifest.json')),
                    'storage_writable' => is_writable(storage_path('framework')),
                ];

                foreach ([
                    'encryption' => static fn () => app('encrypter')->encryptString('deployment-check'),
                    'session' => static function (): string {
                        $session = app('session')->driver();
                        $handler = $session->getHandler();

                        if (method_exists($handler, 'setRequest')) {
                            $handler->setRequest(request());
                        }

                        $session->start();
                        $session->put('deployment-check', true);
                        $session->save();

                        return 'ok';
                    },
                    'inertia' => static fn () => Inertia::render('Welcome')
                        ->toResponse(request())
                        ->getStatusCode(),
                ] as $name => $check) {
                    try {
                        $check();
                        $checks[$name] = ['ok' => true];
                    } catch (\Throwable $exception) {
                        $checks[$name] = [
                            'ok' => false,
                            'exception' => $exception::class,
                            'message' => $exception->getMessage(),
                        ];
                    }
                }

                return response()->json($checks);
            });
        },
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        $exceptions->report(function (\Throwable $exception): void {
            error_log(json_encode([
                'level' => 'error',
                'logger' => 'laravel.exception',
                'exception' => $exception::class,
                'message' => $exception->getMessage(),
                'file' => $exception->getFile(),
                'line' => $exception->getLine(),
            ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
        });

        $exceptions->shouldRenderJsonWhen(
            fn (Request $request) => $request->is('api/*') || $request->expectsJson(),
        );
    })->create();

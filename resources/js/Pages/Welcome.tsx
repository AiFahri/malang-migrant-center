import PublicHero from '@/Components/Public/PublicHero';
import PublicHeader from '@/Components/Public/PublicHeader';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Informasi Kerja Luar Negeri | Malang Migrant Centre" />

            <a className="skip-link" href="#main-content">
                Lewati ke konten utama
            </a>

            <div className="min-h-screen bg-mmc-navy text-white">
                <PublicHeader />
                <main id="main-content">
                    <PublicHero />
                </main>
            </div>
        </>
    );
}

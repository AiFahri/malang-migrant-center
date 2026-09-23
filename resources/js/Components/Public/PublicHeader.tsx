import Container from '@/Components/Public/Container';
import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

const navigation = [
    { label: 'Beranda', href: '/', current: true },
    { label: 'Tentang MMC', href: '/tentang' },
    { label: 'Panduan Migrasi', href: '/panduan' },
    { label: 'Negara Tujuan', href: '/negara' },
    { label: 'Informasi & Program', href: '/informasi' },
    { label: 'Pusat Informasi', href: '/pusat-informasi' },
    { label: 'Hubungi MMC', href: '/kontak' },
];

export default function PublicHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        firstMenuLinkRef.current?.focus();

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', closeOnEscape);

        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [menuOpen]);

    return (
        <header className="public-header">
            <Container className="flex h-[5.25rem] items-center justify-between gap-8 xl:h-24">
                <Link
                    aria-label="Malang Migrant Centre, kembali ke beranda"
                    className="brand-lockup"
                    href="/"
                >
                    <span className="brand-lockup__mark">MMC</span>
                    <span className="brand-lockup__name">
                        Malang Migrant
                        <br />
                        Centre
                    </span>
                </Link>

                <nav aria-label="Navigasi utama" className="hidden xl:block">
                    <ul className="flex items-center gap-1">
                        {navigation.map((item) => (
                            <li key={item.href}>
                                <Link
                                    aria-current={item.current ? 'page' : undefined}
                                    className="desktop-nav-link"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button
                    ref={menuButtonRef}
                    aria-controls="mobile-navigation"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Tutup menu utama' : 'Buka menu utama'}
                    className="menu-button xl:hidden"
                    onClick={() => setMenuOpen((open) => !open)}
                    type="button"
                >
                    <span aria-hidden="true" className="text-sm font-semibold">
                        {menuOpen ? 'Tutup' : 'Menu'}
                    </span>
                    {menuOpen ? (
                        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20">
                            <path d="m5 5 10 10M15 5 5 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                        </svg>
                    ) : (
                        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20">
                            <path d="M3 6h14M3 14h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                        </svg>
                    )}
                </button>
            </Container>

            <nav
                aria-label="Navigasi utama seluler"
                className={`mobile-navigation xl:hidden ${menuOpen ? 'is-open' : ''}`}
                id="mobile-navigation"
            >
                <Container>
                    <ul className="divide-y divide-white/15 border-t border-white/15 pb-7">
                        {navigation.map((item, index) => (
                            <li key={item.href}>
                                <Link
                                    ref={index === 0 ? firstMenuLinkRef : undefined}
                                    aria-current={item.current ? 'page' : undefined}
                                    className="mobile-nav-link"
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    tabIndex={menuOpen ? 0 : -1}
                                >
                                    <span>{item.label}</span>
                                    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 20 20">
                                        <path d="M4 10h12m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    </svg>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </nav>
        </header>
    );
}

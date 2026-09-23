import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import { Link } from '@inertiajs/react';

const footerNavigation = [
    { label: 'Tentang MMC', href: '/tentang' },
    { label: 'Panduan Migrasi', href: '/panduan' },
    { label: 'Negara Tujuan', href: '/negara' },
    { label: 'Informasi & Program', href: '/informasi' },
    { label: 'Pusat Informasi', href: '/pusat-informasi' },
    { label: 'Hubungi MMC', href: '/kontak' },
];

export default function PublicFooter() {
    return (
        <footer className="public-footer">
            <Container>
                <div className="public-footer__main">
                    <div className="public-footer__identity">
                        <Link className="brand-lockup" href="/" aria-label="Malang Migrant Centre, kembali ke beranda">
                            <span className="brand-lockup__mark">MMC</span>
                            <span className="brand-lockup__name">
                                Malang Migrant
                                <br />
                                Centre
                            </span>
                        </Link>
                        <p>
                            Ruang informasi dan layanan bagi masyarakat Kabupaten Malang yang
                            ingin memahami proses bekerja ke luar negeri.
                        </p>
                    </div>

                    <nav aria-label="Navigasi footer" className="public-footer__navigation">
                        <p className="public-footer__heading">Navigasi penting</p>
                        <ul>
                            {footerNavigation.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="public-footer__contact">
                        <p className="public-footer__heading">Kontak resmi</p>
                        <dl>
                            <div>
                                <dt>Alamat layanan</dt>
                                <dd>TBC / perlu verifikasi MMC</dd>
                            </div>
                            <div>
                                <dt>WhatsApp</dt>
                                <dd>TBC / perlu verifikasi MMC</dd>
                            </div>
                            <div>
                                <dt>Email</dt>
                                <dd>TBC / perlu verifikasi MMC</dd>
                            </div>
                            <div>
                                <dt>Media sosial</dt>
                                <dd>TBC / perlu verifikasi MMC</dd>
                            </div>
                        </dl>
                        <Link className="public-footer__contact-link" href="/kontak">
                            Lihat halaman kontak
                            <ArrowIcon className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="public-footer__bottom">
                    <p>© 2026 Malang Migrant Centre</p>
                    <p>Informasi situs dalam tahap pengembangan.</p>
                </div>
            </Container>
        </footer>
    );
}

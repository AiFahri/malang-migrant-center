import Container from '@/Components/Public/Container';
import PublicButton from '@/Components/Public/PublicButton';
import { Link } from '@inertiajs/react';

export default function PublicHero() {
    return (
        <section aria-labelledby="hero-title" className="public-hero">
            <Container className="grid min-h-[calc(100svh-5.25rem)] lg:grid-cols-[1.08fr_0.92fr] xl:min-h-[calc(100svh-6rem)]">
                <div className="hero-copy">
                    <p className="hero-eyebrow">Malang Migrant Centre</p>
                    <h1 id="hero-title" className="hero-title">
                        Ingin bekerja ke luar negeri?
                    </h1>
                    <p className="hero-lead">
                        Mulai dengan informasi yang benar dan langkah yang lebih aman.
                    </p>
                    <p className="hero-description">
                        Malang Migrant Centre (MMC) hadir sebagai ruang informasi dan layanan
                        bagi masyarakat Kabupaten Malang yang ingin memahami peluang kerja di
                        luar negeri, persiapan sebelum keberangkatan, proses yang perlu
                        diperhatikan, serta perlindungan sebagai Pekerja Migran Indonesia.
                    </p>

                    <div className="hero-actions">
                        <PublicButton href="/negara">Lihat Negara Tujuan</PublicButton>
                        <PublicButton href="/panduan" variant="secondary">
                            Pelajari Panduan Migrasi
                        </PublicButton>
                    </div>

                    <Link className="hero-contact-link" href="/kontak">
                        <span>Butuh bantuan? Hubungi MMC</span>
                        <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                            <path d="M4 12 12 4m-6 0h6v6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                        </svg>
                    </Link>

                    <p className="hero-supporting-copy">
                        Kenali prosesnya. Siapkan diri dengan baik. Gunakan jalur yang aman dan
                        resmi.
                    </p>
                </div>

                <figure className="hero-media">
                    <div
                        aria-label="Placeholder untuk foto dokumentasi resmi Malang Migrant Centre"
                        className="hero-media__placeholder"
                        role="img"
                    >
                        <span aria-hidden="true" className="hero-media__corner hero-media__corner--top" />
                        <span aria-hidden="true" className="hero-media__route">
                            <span />
                        </span>
                        <div className="hero-media__label">
                            <p>Foto dokumentasi resmi MMC</p>
                            <span>Placeholder aset — siap diganti</span>
                        </div>
                        <span aria-hidden="true" className="hero-media__index">MLG / 01</span>
                        <span aria-hidden="true" className="hero-media__corner hero-media__corner--bottom" />
                    </div>
                    <figcaption>
                        Ruang untuk dokumentasi kegiatan, layanan, atau pendampingan MMC.
                    </figcaption>
                </figure>
            </Container>
        </section>
    );
}

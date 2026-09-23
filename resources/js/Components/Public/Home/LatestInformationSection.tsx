import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import SectionHeading from '@/Components/Public/SectionHeading';
import { Link } from '@inertiajs/react';

const sourceUrl =
    'https://malangkab.go.id/Content/detail/bersama-gus-muhaimin-bupati-malamg-resmikan-malang-migrant-center-untuk-perkuat-pemberdayaan-pekerja-migran';

const mockItems = [
    {
        category: 'Panduan',
        title: 'Apa yang perlu diperiksa sebelum menerima tawaran kerja?',
        description: 'Panduan ringkas untuk memeriksa informasi, biaya, dokumen, dan proses sebelum mengambil keputusan.',
        slug: 'periksa-tawaran-kerja',
    },
    {
        category: 'Program',
        title: 'Persiapan bahasa dan budaya sebelum keberangkatan',
        description: 'Ruang program untuk membantu calon pekerja memahami kesiapan yang perlu dibangun sejak awal.',
        slug: 'persiapan-bahasa-budaya',
    },
];

export default function LatestInformationSection() {
    return (
        <section aria-labelledby="latest-title" className="page-section latest-section">
            <Container>
                <div className="section-intro-grid section-intro-grid--dark">
                    <SectionHeading
                        label="Informasi & Program Terbaru"
                        theme="dark"
                        title="Ikuti informasi, kegiatan, dan materi terbaru dari MMC"
                        titleId="latest-title"
                    />
                    <div className="section-intro-grid__aside">
                        <p>
                            Temukan berita, kegiatan, pelatihan, program, dan pengumuman yang
                            membantu masyarakat mengikuti perkembangan layanan MMC.
                        </p>
                        <Link className="text-arrow-link text-arrow-link--light" href="/informasi">
                            <span>Lihat Semua Informasi</span>
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>

                <div className="latest-layout">
                    <article className="featured-story">
                        <a
                            aria-label="Baca berita peresmian MMC di Portal Kabupaten Malang, membuka tab baru"
                            className="featured-story__image"
                            href={sourceUrl}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img
                                alt="Bupati Malang menyampaikan sambutan pada peresmian Malang Migrant Center"
                                height="1280"
                                loading="lazy"
                                src="/images/mmc/peresmian-mmc-2026.jpg"
                                width="853"
                            />
                        </a>
                        <div className="featured-story__body">
                            <div className="story-meta">
                                <span>Berita MMC</span>
                                <time dateTime="2026-08-26">26 Agustus 2026</time>
                            </div>
                            <h3>
                                <a
                                    aria-label="Malang Migrant Center diresmikan untuk memperkuat pemberdayaan pekerja migran, membuka tab baru"
                                    href={sourceUrl}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Malang Migrant Center diresmikan untuk memperkuat pemberdayaan pekerja migran
                                </a>
                            </h3>
                            <p>
                                Pemkab Malang meresmikan MMC sebagai ruang edukasi, perlindungan,
                                dan pemberdayaan bagi pekerja migran dan keluarganya.
                            </p>
                            <a
                                aria-label="Baca berita di Portal Kabupaten Malang, membuka tab baru"
                                className="story-link"
                                href={sourceUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <span>Baca di Portal Kabupaten Malang</span>
                                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                                    <path d="M4 12 12 4m-6 0h6v6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                                </svg>
                            </a>
                        </div>
                    </article>

                    <div className="story-list">
                        {mockItems.map((item) => (
                            <article className="story-list__item" key={item.slug}>
                                <div className="story-list__placeholder" aria-hidden="true">
                                    <span>Ruang poster resmi</span>
                                    <strong>{item.category}</strong>
                                </div>
                                <div className="story-list__content">
                                    <div className="story-meta">
                                        <span>{item.category}</span>
                                        <span>Konten contoh · perlu verifikasi MMC</span>
                                    </div>
                                    <h3>
                                        <Link href={`/informasi/${item.slug}`}>{item.title}</Link>
                                    </h3>
                                    <p>{item.description}</p>
                                    <Link className="story-link" href={`/informasi/${item.slug}`}>
                                        <span>Baca informasi</span>
                                        <ArrowIcon className="h-4 w-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

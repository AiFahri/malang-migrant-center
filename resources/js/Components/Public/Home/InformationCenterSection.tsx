import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import SectionHeading from '@/Components/Public/SectionHeading';
import { Link } from '@inertiajs/react';

const categories = [
    { title: 'Persiapan Sebelum Berangkat', question: 'Apa yang perlu disiapkan sejak awal?', slug: 'persiapan-sebelum-berangkat' },
    { title: 'Jalur Aman & Legal', question: 'Bagaimana mengenali proses yang resmi?', slug: 'jalur-aman-legal' },
    { title: 'Hak & Kewajiban', question: 'Apa yang perlu dipahami sebagai pekerja?', slug: 'hak-kewajiban' },
    { title: 'Waspada Penipuan', question: 'Tanda apa yang perlu diwaspadai?', slug: 'waspada-penipuan' },
    { title: 'Untuk Keluarga PMI', question: 'Informasi apa yang dibutuhkan keluarga?', slug: 'keluarga-pmi' },
    { title: 'Purna PMI', question: 'Apa yang dapat dipersiapkan setelah kembali?', slug: 'purna-pmi' },
];

export default function InformationCenterSection() {
    return (
        <section aria-labelledby="information-center-title" className="page-section information-center-section">
            <Container>
                <div className="section-intro-grid">
                    <SectionHeading
                        label="Pusat Informasi"
                        title="Temukan informasi sesuai dengan kebutuhan Anda"
                        titleId="information-center-title"
                    />
                    <div className="section-intro-grid__aside">
                        <p>
                            Gunakan topik berikut untuk memahami persiapan, perlindungan, dan
                            langkah yang perlu diperiksa pada setiap tahap perjalanan migrasi.
                        </p>
                        <Link className="text-arrow-link" href="/pusat-informasi">
                            <span>Buka Pusat Informasi</span>
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>

                <div className="information-center-layout">
                    <article className="safety-highlight">
                        <p className="safety-highlight__label">Perlu diperhatikan</p>
                        <h3>Jangan terburu-buru menerima tawaran kerja</h3>
                        <p>
                            Pastikan identitas perekrut, proses penempatan, biaya, kontrak, dan
                            dokumen dapat diverifikasi. Waspadai tawaran yang menjanjikan proses
                            sangat cepat atau mengarahkan keberangkatan melalui jalur tidak resmi.
                        </p>
                        <Link className="text-arrow-link text-arrow-link--light" href="/panduan/jalur-aman-legal">
                            <span>Pelajari Jalur Aman & Legal</span>
                            <ArrowIcon />
                        </Link>
                    </article>

                    <div className="information-topics">
                        {categories.map((category, index) => (
                            <Link href={`/pusat-informasi/${category.slug}`} key={category.slug}>
                                <span className="information-topic__number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="information-topic__text">
                                    <strong>{category.title}</strong>
                                    <small>{category.question}</small>
                                </span>
                                <ArrowIcon />
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

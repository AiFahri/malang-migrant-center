import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import { Link } from '@inertiajs/react';

const pillars = [
    {
        title: 'Edukasi & Informasi',
        description: 'Informasi awal yang membantu masyarakat memahami pilihan dan proses migrasi.',
    },
    {
        title: 'Kesiapan & Kompetensi',
        description: 'Ruang pembekalan untuk mendukung kesiapan sebelum bekerja di luar negeri.',
    },
    {
        title: 'Perlindungan & Pendampingan',
        description: 'Arah informasi perlindungan bagi CPMI, PMI, dan keluarganya.',
    },
    {
        title: 'Pemberdayaan Purna PMI',
        description: 'Dukungan informasi bagi pekerja migran yang kembali ke Indonesia.',
    },
    {
        title: 'Kolaborasi Layanan',
        description: 'Penghubung kerja bersama pemerintah, perguruan tinggi, dan pemangku kepentingan.',
    },
];

export default function AboutSection() {
    return (
        <section aria-labelledby="about-title" className="page-section about-section">
            <Container className="about-layout">
                <div className="about-copy">
                    <p className="section-heading__label">Tentang MMC</p>
                    <h2 id="about-title">Satu ruang informasi untuk setiap tahap perjalanan migrasi</h2>
                    <p>
                        Malang Migrant Centre dirancang sebagai ruang edukasi, perlindungan, dan
                        pemberdayaan bagi calon pekerja migran, pekerja migran, purna PMI, serta
                        keluarga. MMC membantu masyarakat memahami langkah yang perlu disiapkan
                        sebelum berangkat, selama bekerja, hingga kembali ke tanah air.
                    </p>
                    <Link className="text-arrow-link" href="/tentang">
                        <span>Kenali MMC lebih lanjut</span>
                        <ArrowIcon />
                    </Link>
                </div>

                <div className="pillars" aria-label="Lima fokus layanan MMC">
                    <div className="pillars__heading">
                        <div>
                            <p>5 Pilar MMC</p>
                            <h3>Lima fokus layanan yang saling terhubung</h3>
                        </div>
                        <span className="verification-note">Label kerja · perlu verifikasi MMC</span>
                    </div>
                    <ol>
                        {pillars.map((pillar, index) => (
                            <li key={pillar.title}>
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <div>
                                    <h4>{pillar.title}</h4>
                                    <p>{pillar.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </Container>
        </section>
    );
}

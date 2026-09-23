import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import { Link } from '@inertiajs/react';

const steps = [
    {
        title: 'Cari Informasi',
        description: 'Pelajari negara dan bidang kerja yang ingin dipertimbangkan.',
    },
    {
        title: 'Kenali Persyaratan',
        description: 'Pahami persyaratan umum dan dokumen yang perlu disiapkan.',
    },
    {
        title: 'Siapkan Diri',
        description: 'Bangun kesiapan bahasa, budaya, kesehatan, dan keuangan.',
    },
    {
        title: 'Verifikasi',
        description: 'Periksa perekrut, proses, biaya, dan jalur penempatan.',
    },
    {
        title: 'Pahami Kontrak',
        description: 'Baca pekerjaan, hak, kewajiban, biaya, dan ketentuan dengan teliti.',
    },
    {
        title: 'Berangkat Aman',
        description: 'Pastikan proses dan dokumen dapat diverifikasi sebelum berangkat.',
    },
];

export default function MigrationStepsSection() {
    return (
        <section aria-labelledby="migration-title" className="page-section migration-section">
            <Container>
                <div className="migration-heading">
                    <div>
                        <p className="section-heading__label">Mulai dari mana?</p>
                        <h2 id="migration-title">Rencanakan keberangkatan dari informasi yang tepat</h2>
                    </div>
                    <p>
                        Bekerja di luar negeri bukan hanya tentang menemukan pekerjaan. Pahami
                        proses, dokumen, kontrak, kesiapan, serta perlindungan sejak awal.
                    </p>
                </div>

                <ol className="migration-steps">
                    {steps.map((step, index) => (
                        <li key={step.title}>
                            <span className="migration-step__number">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </li>
                    ))}
                </ol>

                <Link className="text-arrow-link" href="/panduan">
                    <span>Pelajari Panduan Migrasi</span>
                    <ArrowIcon />
                </Link>
            </Container>
        </section>
    );
}

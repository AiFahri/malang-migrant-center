import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import { Link } from '@inertiajs/react';

const faqs = [
    {
        question: 'Saya ingin bekerja ke luar negeri. Harus mulai dari mana?',
        answer: 'Mulailah dengan mempelajari negara dan bidang kerja yang diminati, lalu pahami persyaratan, dokumen, kesiapan, serta jalur penempatan yang perlu diverifikasi.',
    },
    {
        question: 'Bagaimana memastikan tawaran kerja lebih aman?',
        answer: 'Periksa identitas perekrut, proses penempatan, biaya, kontrak, dan dokumen melalui kanal resmi. Hubungi MMC apabila ada informasi yang belum jelas atau sulit diverifikasi.',
    },
    {
        question: 'Dokumen apa yang perlu disiapkan?',
        answer: 'Kebutuhan dokumen dapat berbeda menurut negara, bidang kerja, dan proses penempatan. Gunakan panduan negara sebagai titik awal dan selalu periksa informasi terbaru.',
    },
    {
        question: 'Apa yang perlu diperiksa sebelum menandatangani kontrak?',
        answer: 'Baca dengan teliti jenis pekerjaan, lokasi kerja, masa kontrak, upah, jam kerja, biaya, hak, kewajiban, dan cara memperoleh bantuan. Jangan menandatangani bagian yang belum dipahami.',
    },
    {
        question: 'Apakah keluarga PMI dapat mencari informasi melalui MMC?',
        answer: 'Ya. MMC juga menjadi ruang informasi bagi keluarga PMI yang ingin memahami persiapan, komunikasi, perlindungan, dan langkah mencari bantuan.',
    },
];

export default function FaqSection() {
    return (
        <section aria-labelledby="faq-title" className="page-section faq-section">
            <Container className="faq-layout">
                <div className="faq-intro">
                    <p className="section-heading__label">Pertanyaan yang sering diajukan</p>
                    <h2 id="faq-title">Jawaban awal untuk pertanyaan penting</h2>
                    <p>
                        Jawaban berikut bersifat umum. Persyaratan dan proses dapat berbeda,
                        sehingga informasi terbaru tetap perlu diverifikasi.
                    </p>
                    <Link className="text-arrow-link" href="/pusat-informasi#faq">
                        <span>Lihat Semua FAQ</span>
                        <ArrowIcon />
                    </Link>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <details key={faq.question}>
                            <summary>
                                <span className="faq-list__number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span>{faq.question}</span>
                                <svg aria-hidden="true" className="faq-list__icon" fill="none" viewBox="0 0 20 20">
                                    <path d="M4 7.5 10 13l6-5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </svg>
                            </summary>
                            <p>{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </Container>
        </section>
    );
}

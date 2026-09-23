import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import { Link } from '@inertiajs/react';

export default function ContactSection() {
    return (
        <section aria-labelledby="contact-title" className="contact-section">
            <Container className="contact-section__layout">
                <div>
                    <p className="contact-section__label">Hubungi MMC</p>
                    <h2 id="contact-title">Masih punya pertanyaan?</h2>
                </div>
                <div className="contact-section__copy">
                    <p>
                        MMC dapat menjadi titik awal untuk mencari informasi dan memahami langkah
                        yang perlu disiapkan sebelum bekerja ke luar negeri.
                    </p>
                    <Link className="contact-section__button" href="/kontak">
                        <span>Hubungi MMC</span>
                        <ArrowIcon />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

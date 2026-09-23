import ArrowIcon from '@/Components/Public/ArrowIcon';
import Container from '@/Components/Public/Container';
import SectionHeading from '@/Components/Public/SectionHeading';
import { Link } from '@inertiajs/react';

const countries = [
    { name: 'Jepang', nativeName: '日本', code: 'JP', slug: 'jepang' },
    { name: 'Hong Kong', nativeName: '香港', code: 'HK', slug: 'hong-kong' },
    { name: 'Malaysia', nativeName: 'Malaysia', code: 'MY', slug: 'malaysia' },
    { name: 'Singapura', nativeName: 'Singapore', code: 'SG', slug: 'singapura' },
    {
        name: 'Arab Saudi',
        nativeName: 'المملكة العربية السعودية',
        code: 'SA',
        slug: 'arab-saudi',
    },
    { name: 'Jerman', nativeName: 'Deutschland', code: 'DE', slug: 'jerman' },
];

export default function CountrySection() {
    return (
        <section aria-labelledby="countries-title" className="page-section countries-section">
            <Container>
                <div className="section-intro-grid">
                    <SectionHeading
                        label="Negara Tujuan"
                        title="Pelajari negara tujuan sebelum mengambil keputusan"
                        titleId="countries-title"
                    />
                    <div className="section-intro-grid__aside">
                        <p>
                            Setiap negara memiliki karakter pekerjaan, persyaratan, proses, dan
                            hal yang perlu diperhatikan. Gunakan panduan negara sebagai titik
                            awal, lalu verifikasi informasi terbaru melalui kanal resmi dan MMC.
                        </p>
                        <Link className="text-arrow-link" href="/negara">
                            <span>Lihat Semua Negara</span>
                            <ArrowIcon />
                        </Link>
                    </div>
                </div>

                <div className="country-grid">
                    {countries.map((country) => (
                        <Link
                            className="country-card"
                            href={`/negara/${country.slug}`}
                            key={country.slug}
                        >
                            <div className="country-card__meta">
                                <span>Panduan negara</span>
                                <span>{country.code}</span>
                            </div>
                            <div>
                                <span aria-hidden="true" className="country-card__native-name">
                                    {country.nativeName}
                                </span>
                                <h3>{country.name}</h3>
                            </div>
                            <span className="country-card__action">
                                Pelajari panduan
                                <ArrowIcon />
                            </span>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}

import AboutSection from '@/Components/Public/Home/AboutSection';
import ContactSection from '@/Components/Public/Home/ContactSection';
import CountrySection from '@/Components/Public/Home/CountrySection';
import FaqSection from '@/Components/Public/Home/FaqSection';
import InformationCenterSection from '@/Components/Public/Home/InformationCenterSection';
import LatestInformationSection from '@/Components/Public/Home/LatestInformationSection';
import MigrationStepsSection from '@/Components/Public/Home/MigrationStepsSection';
import PublicHero from '@/Components/Public/PublicHero';
import PublicFooter from '@/Components/Public/PublicFooter';
import PublicHeader from '@/Components/Public/PublicHeader';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Informasi Kerja Luar Negeri | Malang Migrant Centre" />

            <a className="skip-link" href="#main-content">
                Lewati ke konten utama
            </a>

            <div className="min-h-screen bg-mmc-navy text-white">
                <PublicHeader />
                <main id="main-content">
                    <PublicHero />
                    <CountrySection />
                    <MigrationStepsSection />
                    <AboutSection />
                    <LatestInformationSection />
                    <InformationCenterSection />
                    <FaqSection />
                    <ContactSection />
                </main>
                <PublicFooter />
            </div>
        </>
    );
}

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MissionStatement from '../components/MissionStatement';
import FeaturesGrid from '../components/FeaturesGrid';
import HowItWorks from '../components/HowItWorks';
import BentoShowcase from '../components/BentoShowcase';
import VitalsGrid from '../components/VitalsGrid';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <MissionStatement />
            <FeaturesGrid />
            <HowItWorks />
            <BentoShowcase />
            <VitalsGrid />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}

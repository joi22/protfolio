import ContactSection from "@/sections/ContactSection";
import CTASection from "@/sections/CTASection";
import FeaturesSection from "@/sections/FeaturesSection"; // Featured Services
import HeroSection from "@/sections/HeroSection";
import TestimonialSection from "@/sections/TestimonialSection";
import StatsSection from "@/sections/StatsSection";
import SelectedProjectsSection from "@/sections/SelectedProjectsSection";

export default function Page() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <StatsSection />
            <SelectedProjectsSection />
            <TestimonialSection />
            <ContactSection />
            <CTASection />
        </>
    );
}
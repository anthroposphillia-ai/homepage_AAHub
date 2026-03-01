import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UrgencyBanner from "@/components/UrgencyBanner";
import StorySection from "@/components/StorySection";
import StatsBar from "@/components/StatsBar";
import AnimalGrid from "@/components/AnimalGrid";
import WorldShelters from "@/components/WorldShelters";
import ChannelHub from "@/components/ChannelHub";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Section 2: Hero */}
            <HeroSection />

            {/* Section 3: Urgency Banner */}
            <UrgencyBanner />

            {/* Section 4: Story */}
            <StorySection />

            {/* Section 5: Stats Bar */}
            <StatsBar />

            {/* Section 6: Animal Grid */}
            <AnimalGrid />

            {/* Section 7: World Shelters */}
            <WorldShelters />

            {/* Section 8: Channel Hub */}
            <ChannelHub />

            {/* Section 9: Donate */}
            <DonateSection />

            {/* Section 10: Footer */}
            <Footer />
        </main>
    );
}

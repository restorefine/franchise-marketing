import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeatureStrip from "@/components/FeatureStrip";
import WhyMumuso from "@/components/WhyMumuso";
import Categories from "@/components/Categories";
import StorySplit from "@/components/StorySplit";
import ProcessSteps from "@/components/ProcessSteps";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <FeatureStrip />
        <WhyMumuso />
        <Categories />
        <StorySplit />
        <ProcessSteps />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

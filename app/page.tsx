import FAQs from "@/components/faqs-1";
import Features from "@/components/features-1";
import Footer from "@/components/footer-3";
import HeroSection from "@/components/hero-section-2";
import Integrations from "@/components/integrations-2";
import Stats from "@/components/stats-3";
import Team from "@/components/team-1";
import Image from "next/image";

export default function Home() {
  return <div>
    <HeroSection/>
    <Features/>
    <Integrations/>
    <Stats/>
    <Team/>
    <FAQs/>
    <Footer/>
  </div>
}

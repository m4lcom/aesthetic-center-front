import Link from "next/link";
import Hero from "@/src/components/Hero";
import TreatmentsSection from "@/src/components/TreatmentsSection";
import AboutSection from "@/src/components/AboutSection";
import ContactSection from "@/src/components/ContactSection";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <TreatmentsSection />
      <AboutSection />
      <ContactSection isHome={true} />
    </div>
  );
}

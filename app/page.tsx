import AboutUs from "@/components/landing/about-us";
import ContactInfo from "@/components/landing/contact-info";
import CTA from "@/components/landing/cta";
import ForPlayers from "@/components/landing/for-players";
import ForTeams from "@/components/landing/for-teams";
import Hero from "@/components/landing/hero";
import OurMotivation from "@/components/landing/our-motivation";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-figtree)]">
      <Hero />
      <AboutUs />
      <ForPlayers />
      <ForTeams />
      <OurMotivation />
      <CTA />
      <ContactInfo />
    </main>
  );
}

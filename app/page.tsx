import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import LogosBand from "@/components/landing/LogosBand";
import Pain from "@/components/landing/Pain";
import HowItWorks from "@/components/landing/HowItWorks";
import Benefits from "@/components/landing/Benefits";
import Actions from "@/components/landing/Actions";
import Credibility from "@/components/landing/Credibility";
import Pricing from "@/components/landing/Pricing";
import Guarantee from "@/components/landing/Guarantee";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import MobileCTABar from "@/components/landing/MobileCTABar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogosBand />
        <Pain />
        <HowItWorks />
        <Benefits />
        <Actions />
        <Credibility />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}

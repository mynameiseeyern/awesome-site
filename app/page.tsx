import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { HowIWork } from "@/components/HowIWork";
import { Experience, OffTheClock, Mentoring } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CrayonFilter } from "@/components/Crayon";

export default function Page() {
  return (
    <>
      <CrayonFilter />
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <HowIWork />
        <Experience />
        <OffTheClock />
        <Mentoring />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

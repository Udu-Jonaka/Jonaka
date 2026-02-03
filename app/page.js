import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import AOSInit from "@/components/AOSInit";

export default function Home() {
  return (
    <main>
      <AOSInit />
      <Hero />
      <Stats />
      <Offers />
      <Portfolio />
      <Contact />
    </main>
  );
}

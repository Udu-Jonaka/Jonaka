import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
import AOSInit from "@/components/AOSInit";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <AOSInit />
      <Hero />
      <Stats />
      <Offers />
      <Portfolio />
      <ContactForm />
    </main>
  );
}

import { A11yWidget } from "@/components/a11y";
import { WhatsAppButton } from "@/components/floating";
import { Header } from "@/components/header";
import { Loader } from "@/components/loader";
import { RevealController } from "@/components/reveal";
import { About, Books, Contact, Expertise, Footer, Hero, Media, Schedule, Services } from "@/components/sections";

export default function HomePage() {
  return (
    <div className="page">
      <Loader />
      <Header />
      <main className="site-main">
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Schedule />
        <Media />
        <Books />
        <Contact />
      </main>
      <Footer />
      <A11yWidget />
      <WhatsAppButton />
      <RevealController />
    </div>
  );
}

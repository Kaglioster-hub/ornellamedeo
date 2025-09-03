import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChiSono from "../components/ChiSono";
import Servizi from "../components/Servizi";
import AdrEuropa from "../components/AdrEuropa";
import Pubblicazioni from "../components/Pubblicazioni";
import Modulistica from "../components/Modulistica";
import Contatti from "../components/Contatti";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChiSono />
      <Servizi />
      <AdrEuropa />
      <Pubblicazioni />
      <Modulistica />
      <Contatti />
      <Footer />
    </div>
  );
}

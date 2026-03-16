import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Chefs from "./components/Chefs";
import Brands from "./components/Brands";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Chefs />
        <Brands />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
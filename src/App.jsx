import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HeroStatement from "./components/HeroStatement.jsx";
import Problem from "./components/Problem.jsx";
import Solution from "./components/Solution.jsx";
import ProductPreview from "./components/ProductPreview.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import ValueProposition from "./components/ValueProposition.jsx";
import Audience from "./components/Audience.jsx";
import Trust from "./components/Trust.jsx";
import Africa from "./components/Africa.jsx";
import BrandStatement from "./components/BrandStatement.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import { initReveal } from "./components/reveal.js";

function App() {
  useEffect(() => {
    const disconnect = initReveal();
    return disconnect;
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <HeroStatement />
        <Problem />
        <Solution />
        <ProductPreview />
        <HowItWorks />
        <ValueProposition />
        <Audience />
        <Trust />
        <Africa />
        <BrandStatement />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
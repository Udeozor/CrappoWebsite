import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";
import Aos from "aos";
import "aos/dist/aos.css";
import Why from "./components/Why";
import Checker from "./components/Checker";
import Trade from "./components/Trade";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  //mobile navigation
  const [navMobile, setNavMobile] = useState(false);

  // aos init

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      {/* mobile navigation */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Checker />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;

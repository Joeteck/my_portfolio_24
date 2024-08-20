"use client";
import { useState, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Hero from "@/components/Hero";
import Section2 from "@/components/section2";
import Section3 from "@/components/Section3";

export default function Home() {
  const [activeSection, setActiveSection] = useState(1);

  const handleScroll = () => {
    const section1Top = document.getElementById("section1").offsetTop;
    const section2Top = document.getElementById("section2").offsetTop;
    const section3Top = document.getElementById("section3").offsetTop;
    const scrollY = window.scrollY + window.innerHeight / 2;

    if (scrollY >= section3Top) {
      setActiveSection(3);
    } else if (scrollY >= section2Top) {
      setActiveSection(2);
    } else {
      setActiveSection(1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-[100%] min-h-screen bg-primary-green">
            {/* Section 1 */}
      <section
        id="section1"
        className={`p-4 w-full h-full flex drop-shadow-lg shadow-grey justify-center bg-primary-green transition-transform duration-700 sticky top-0 ${
          activeSection >= 2 ? "z-0" : "z-50"
        }`}
      >
        <BackgroundBeams />
        <Hero/>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        className={`p-4 w-full h-full flex items-center shadow-lg shadow-black justify-center transition-transform duration-700 sticky top-0 ${
          activeSection >= 3 ? "z-0" : "z-50"
        }`}
      >
        <Section2/>
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        className={`p-4 w-full h-[100vh] flex items-center shadow-lg shadow-primary-green-700 justify-center transition-transform duration-700 sticky top-0 left-0 z-50`}
      >
        <Section3/>
      </section>
    </main>
  );
}

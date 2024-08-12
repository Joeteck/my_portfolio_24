"use client";
import { useState, useEffect } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Hero from "@/components/Hero";

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
    <main className="w-full min-h-screen md:px-8 px-4 bg-primary-green">
      {/* Section 1 */}
      <section
        id="section1"
        className={`w-full h-[100vh] flex drop-shadow-lg shadow-green-300 justify-center bg-primary-green transition-transform duration-700 sticky top-0 ${
          activeSection >= 2 ? "z-0" : "z-50"
        }`}
      >
        <BackgroundBeams />
        <Hero/>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        className={`w-full h-[100vh] flex items-center shadow-lg drop-shadow-lg justify-center bg-green-700 transition-transform duration-700 sticky top-0 ${
          activeSection >= 3 ? "z-0" : "z-50"
        }`}
      >
        <h2 className="text-green-100 text-4xl">SECTION 1</h2>
      </section>

      {/* Section 3 */}
      <section
        id="section3"
        className={`w-full h-[100vh] flex items-center shadow-lg justify-center bg-green-500 transition-transform duration-700 sticky top-0 z-50`}
      >
        <h2 className="text-green-100 text-4xl">SECTION 2</h2>
      </section>
    </main>
  );
}

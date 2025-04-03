"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SmoothScroll from "smooth-scroll";
import anime from "animejs";
import Particles from "react-tsparticles";
import * as THREE from "three";
import Link from "next/link";
import CodeSnippet from "@/components/globals/ui/CodeSnippet";

// Register GSAP Plugins
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// 3D Rotating Torus Component
const RotatingTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Initial rotation position set to 45 degrees for both axes
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 4; // 45 degrees in radians
      meshRef.current.rotation.y = Math.PI / 8; // 22.5 degrees in radians
    }
  }, []);

  // Continuous rotation of the torus
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;  // Continuous rotation along the Y axis
      meshRef.current.rotation.x += 0.001;  // Continuous rotation along the X axis
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[3, 0.7, 16, 100]} />
      <meshStandardMaterial color="#00ffcc" wireframe />
    </mesh>
  );
};

// Custom Cursor Component
const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor absolute w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full pointer-events-none z-[50] transition-transform duration-300 mix-blend-difference"
    ></div>
  );
};

const LeadingPage = () => {
  const [mode, setMode] = useState("dark"); // State to manage light/dark mode
  const mousePosition = useRef({ x: 0, y: 0 });

  // Toggle between dark and light modes
  const toggleMode = () => {
    setMode(prevMode => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const smoothScroll = new SmoothScroll("a[href*='#']", { speed: 1000, speedAsDuration: true });

    // GSAP Animations
    gsap.from(".title", { opacity: 0, y: -100, duration: 1.5, ease: "power4.out" });
    gsap.from(".subheading", { opacity: 0, y: 100, duration: 1.5, ease: "power4.out", delay: 1 });

    // Scroll Trigger Zoom-in Effect on 3D Object
    gsap.to(".threeD-container", {
      scale: 1.8,
      opacity: 0.3,
      scrollTrigger: {
        trigger: ".threeD-container",
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
    });

    anime({
      targets: ".title",
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutExpo",
    });
    anime({
      targets: ".subheading",
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutExpo",
      delay: 500,
    });

    return () => {
      smoothScroll.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`relative w-full flex flex-col justify-center items-center h-screen overflow-hidden ${mode === "dark" ? "dark" : "light"}`}>
      <CodeSnippet /> {/* Add this line */}

      {/* Custom Cursor */}
      <Cursor />

      {/* Background Particles */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 80 },
            size: { value: 4 },
            move: { speed: 1 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            line_linked: { enable: false },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* 3D Background */}
      <div className="threeD-container absolute inset-0 flex items-center justify-center">
        <Canvas role="presentation">
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="cyan" />
          <RotatingTorus />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>

      {/* Scroll-Down Section */}
      <div id="learn-more" className="h-screen flex flex-col justify-center items-center bg-transparent text-white text-center">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">Stay Tuned for the Big Reveal!</h2>
        <p className="text-lg text-white opacity-80 mt-4">We’re crafting something truly special.</p>

        {/* Back to Top Button */}
        <Link
          href="/joeteck"
          className="mt-6 px-8 py-3 bg-white text-black font-bold rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300 z-[30]"
        >
          ⬆ Visit testing page
        </Link>
      </div>

      {/* Gradient Background Animation */}
      <style jsx>{`
        .relative {
          background: linear-gradient(45deg, #081f2d, #072722, #220d32);
          background-size: 600% 600%;
          animation: gradientAnimation 15s ease infinite;
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Light Mode Styles */
        .light {
          color: #333;
        }

        .light .title, .light .subheading {
          color: #333;
        }

        /* Dark Mode Styles */
        .dark {
          color: #eee;
        }

        .dark .title, .dark .subheading {
          color: #eee;
        }
      `}</style>

      {/* Light/Dark Mode Toggle */}
      <div 
        onClick={toggleMode} 
        className="absolute top-5 right-5 text-white cursor-pointer z-[50]"
        title="Toggle Light/Dark Mode"
      >
        {mode === "dark" ? "🌞" : "🌙"}
      </div>
    </div>
  );
};

export default LeadingPage;

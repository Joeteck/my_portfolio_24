"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Oswald, IBM_Plex_Mono, Inter } from "next/font/google";
import ThemeSwitch from "@/components/globals/ui/ThemeSwitch"; 
import Image from "next/image";
import Button  from "@/components/globals/ui/Button";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const techMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-tech",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

type Artifact = {
  id: string;
  label: string;
  category: string;
  code: string;
  top: string;
  left: string;
  rotate: number;
  color: string;
};

const ARTIFACTS: Artifact[] = [
  { id: "btn", label: "<Button />", category: "Interactive", code: 'variant="solid" size="lg" onClick={fire}', top: "14%", left: "6%", rotate: -4, color: "#10b981" },
  { id: "nav", label: "<Navbar />", category: "Layout", code: 'sticky={true} blur={20} theme="auto"', top: "8%", left: "54%", rotate: 3, color: "#3b82f6" },
  { id: "card", label: "<Card />", category: "Surface", code: 'elevation="xl" interactive border', top: "44%", left: "68%", rotate: -3, color: "#f59e0b" },
  { id: "mod", label: "<Modal />", category: "Overlay", code: 'backdrop="blur" isOpen={state}', top: "66%", left: "10%", rotate: 4, color: "#8b5cf6" },
  { id: "tst", label: "<Toast />", category: "Feedback", code: 'duration={3000} icon="⚡" action={undo}', top: "62%", left: "46%", rotate: -2, color: "#ec4899" },
];

export default function LeadingPage() {
  const yardRef = useRef<HTMLDivElement>(null);
  const systemReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [activeArtifact, setActiveArtifact] = useState<Artifact | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reduceMotion = mounted ? systemReduceMotion : false;

  return (
    <div className={`${display.variable} ${techMono.variable} ${body.variable} page-wrapper`}>
      <div className="ambient-glow" aria-hidden="true" />
      
      <h1 className="sr-only">Joeteck Portfolio — Software Engineer, UI Specialist & Product Builder</h1>

      {/* ================= FLOATING HEADER ================= */}
      <header className="header-bar">
        <div className="branding">
          <Link href="/" className="logo-link" aria-label="Joeteck Home">
            <Image src="/images/joeteck_logo.png" alt="Joeteck Logo" width={48} height={48} className="logo-mark" />
          </Link>
          <span className="tagline">Software Engineer · UI Specialist · Product Builder</span>
        </div>

            <ThemeSwitch />
      </header>

      {/* ================= MAIN STAGE ================= */}
      <main className="stage">
        
        {/* ---- Left: Pitch Section ---- */}
        <motion.div
          className="pitch"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="status-pill">
            <span className="pulse-indicator" />
            <span className="status-text">Available for new opportunities</span>
          </div>

          <h2>
            Engineering interfaces that feel <span className="highlight-gradient">alive.</span>
          </h2>
          
          <p className="description">
            I bridge complex engineering with pixel-perfect design. Explore my production applications, interactive design systems, and technical case studies.
          </p>

          <div className="action-row">
            <Link href="/portfolio" className="btn-primary rounded-lg">
              <Button className="btn-primary">
                  Enter Portfolio
                <span className="btn-icon" aria-hidden="true">→</span>
              </Button>
            </Link>
            
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary">
              <span>GitHub Profile</span>
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </motion.div>

        {/* ---- Right: Interactive Workbench Canvas ---- */}
        <section className="workbench-wrap" aria-label="Interactive component playground">
          <div className="workbench-header">
            <div className="window-dots" aria-hidden="true">
              <span className="dot dot-close" />
              <span className="dot dot-min" />
              <span className="dot dot-max" />
            </div>
            <span className="workbench-title">CANVAS // COMPONENT PLAYGROUND</span>
            <span className="workbench-badge">INTERACTIVE</span>
          </div>

          <div ref={yardRef} className="workbench-canvas">
            {/* Corner Crosshairs */}
            <span className="crosshair top-left" aria-hidden="true">+</span>
            <span className="crosshair top-right" aria-hidden="true">+</span>
            <span className="crosshair bottom-left" aria-hidden="true">+</span>
            <span className="crosshair bottom-right" aria-hidden="true">+</span>

            {/* Center Background Watermark */}
            <div className="canvas-watermark" aria-hidden="true">
              <div className="watermark-icon">
                <Image src="/images/joeteck_logo.png" alt="Watermark" width={32} height={32} />
                </div>
              <span>DRAG & INSPECT COMPONENTS</span>
            </div>

            {/* Draggable Component Artifacts */}
            <div className="artifact-field" aria-hidden="true">
              {ARTIFACTS.map((item, index) => (
                <div
                  key={item.id}
                  className="artifact-slot"
                  style={{ top: item.top, left: item.left }}
                >
                  <motion.div
                    className={`artifact-card ${activeArtifact?.id === item.id ? "is-active" : ""}`}
                    style={{ "--accent-color": item.color } as React.CSSProperties}
                    drag={!reduceMotion}
                    dragConstraints={yardRef}
                    dragElastic={0.1}
                    dragMomentum={false}
                    onDragStart={() => setActiveArtifact(item)}
                    onHoverStart={() => setActiveArtifact(item)}
                    whileHover={{ scale: 1.05, zIndex: 50 }}
                    whileDrag={{ scale: 1.08, zIndex: 60, cursor: "grabbing" }}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            scale: 1,
                            y: [0, -4, 0],
                            rotate: item.rotate,
                          }
                    }
                    transition={{
                      opacity: { duration: 0.3, delay: 0.15 + index * 0.06 },
                      y: {
                        repeat: Infinity,
                        duration: 3.5 + index * 0.4,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      },
                      rotate: { type: "spring", stiffness: 260, damping: 20 },
                    }}
                  >
                    <span className="artifact-dot" />
                    <span className="artifact-label">{item.label}</span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Live Telemetry HUD Bottom Inspector */}
            <div className="telemetry-hud" aria-live="polite">
              <AnimatePresence mode="wait">
                {activeArtifact ? (
                  <motion.div
                    key={activeArtifact.id}
                    className="hud-data"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="hud-category" style={{ color: activeArtifact.color }}>
                      [{activeArtifact.category}]
                    </span>
                    <span className="hud-name">{activeArtifact.label}</span>
                    <code className="hud-code">{activeArtifact.code}</code>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    className="hud-data idle-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span>✦ System Ready — Hover or drag any component artifact above to inspect props</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer-bar">
        <div className="footer-meta">
          <span>© {new Date().getFullYear()} Joeteck</span>
          <span className="divider" aria-hidden="true">/</span>
          <span>Engineered with Next.js & Framer Motion</span>
        </div>
        <div className="footer-status">
          <span className="status-dot" aria-hidden="true">●</span>
          <span>All Systems Operational</span>
        </div>
      </footer>

      <style jsx>{`
        /* ================= THEME & COLOR SYSTEM ================= */
        :global(:root), :global(.light), :global([data-theme="light"]) {
          --bg-main: #f8fafc;
          --bg-surface: rgba(255, 255, 255, 0.85);
          --bg-surface-hover: rgba(255, 255, 255, 1);
          --border-subtle: rgba(15, 23, 42, 0.08);
          --border-strong: rgba(15, 23, 42, 0.18);
          --text-primary: #0f172a;
          --text-secondary: #334155;
          --text-dim: #64748b;
          --accent: #10b981;
          --accent-glow: rgba(16, 185, 129, 0.15);
          --canvas-bg: #ffffff;
          --canvas-grid: rgba(15, 23, 42, 0.04);
          --card-bg: rgba(255, 255, 255, 0.95);
          --card-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.06);
          --hud-bg: rgba(241, 245, 249, 0.9);
        }

        :global(.dark), :global([data-theme="dark"]), :global(body.dark) {
          --bg-main: #060a08;
          --bg-surface: rgba(18, 26, 22, 0.75);
          --bg-surface-hover: rgba(26, 38, 32, 0.9);
          --border-subtle: rgba(255, 255, 255, 0.08);
          --border-strong: rgba(255, 255, 255, 0.18);
          --text-primary: #f8fafc;
          --text-secondary: #cbd5e1;
          --text-dim: #94a3b8;
          --accent: #10b981;
          --accent-glow: rgba(16, 185, 129, 0.25);
          --canvas-bg: rgba(10, 16, 13, 0.6);
          --canvas-grid: rgba(255, 255, 255, 0.04);
          --card-bg: rgba(18, 26, 22, 0.9);
          --card-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.12);
          --hud-bg: rgba(6, 10, 8, 0.85);
        }

        /* Fallback auto-detection if no class is set */
        @media (prefers-color-scheme: dark) {
          :global(:root:not(.light):not([data-theme="light"])) {
            --bg-main: #060a08;
            --bg-surface: rgba(18, 26, 22, 0.75);
            --bg-surface-hover: rgba(26, 38, 32, 0.9);
            --border-subtle: rgba(255, 255, 255, 0.08);
            --border-strong: rgba(255, 255, 255, 0.18);
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --text-dim: #94a3b8;
            --accent: #10b981;
            --accent-glow: rgba(16, 185, 129, 0.25);
            --canvas-bg: rgba(10, 16, 13, 0.6);
            --canvas-grid: rgba(255, 255, 255, 0.04);
            --card-bg: rgba(18, 26, 22, 0.9);
            --card-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.12);
            --hud-bg: rgba(6, 10, 8, 0.85);
          }
        }

        /* ================= BASE LAYOUT ================= */
        :global(html), :global(body) {
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: var(--bg-main);
        }

        .page-wrapper {
          height: 100vh;
          height: 100dvh;
          width: 100%;
          display: grid;
          grid-template-rows: auto 1fr auto;
          gap: clamp(1rem, 2vh, 2rem);
          padding: clamp(1rem, 3vw, 2.5rem);
          background-color: var(--bg-main);
          color: var(--text-primary);
          font-family: var(--font-body);
          position: relative;
          z-index: 1;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Dot pattern background */
        .page-wrapper::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--canvas-grid) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
          z-index: -2;
          pointer-events: none;
        }

        .ambient-glow {
          position: absolute;
          top: -15%;
          left: 20%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, var(--accent-glow) 0%, rgba(0,0,0,0) 70%);
          z-index: -1;
          pointer-events: none;
          filter: blur(50px);
        }

        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }

        /* ================= HEADER ================= */
        .header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0.6rem 1.25rem;
          border-radius: 999px;
          background: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          backdrop-filter: blur(16px);
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
        }

        .branding {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          color: var(--text-primary);
        }

        .logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: linear-gradient(135deg, var(--accent), #059669);
          color: #000;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px var(--accent-glow);
        }

        .wordmark {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .tagline {
          color: var(--text-dim);
          font-family: var(--font-tech);
          font-size: 0.78rem;
          letter-spacing: 0.03em;
          padding-left: 1.25rem;
          border-left: 1px solid var(--border-strong);
        }

        .nav-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          border-radius: 999px;
          background: var(--bg-main);
          border: 1px solid var(--border-strong);
          color: var(--text-primary);
          font-family: var(--font-tech);
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-cta:hover {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 16px var(--accent-glow);
        }

        .nav-arrow {
          transition: transform 0.2s ease;
        }

        .nav-cta:hover .nav-arrow {
          transform: translateX(3px);
        }

        /* ================= MAIN STAGE ================= */
        .stage {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
          gap: clamp(2rem, 4vw, 4.5rem);
          min-height: 0;
          align-items: center;
        }

        .pitch {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 540px;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          width: fit-content;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .pulse-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; box-shadow: 0 0 14px var(--accent); }
          100% { transform: scale(0.95); opacity: 0.8; }
        }

        .status-text {
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          font-family: var(--font-tech);
        }

        .pitch h2 {
          font-family: var(--font-display);
          font-weight: 700;
          line-height: 1.05;
          font-size: clamp(2.4rem, 1.8rem + 3vw, 4.2rem);
          margin: 0;
          text-transform: uppercase;
          color: var(--text-primary);
        }

        .highlight-gradient {
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          color: var(--text-secondary);
          line-height: 1.65;
          font-size: clamp(0.98rem, 0.9rem + 0.3vw, 1.12rem);
          margin: 0;
        }

        .action-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          height: 52px;
          padding: 0 1.75rem;
          border-radius: 12px;
          background: var(--accent);
          color: #000000;
          font-weight: 600;
          font-size: 0.98rem;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 8px 20px -4px rgba(16, 185, 129, 0.4);
        }

        .btn-primary:hover {
          background: #34d399;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -4px rgba(16, 185, 129, 0.6);
        }

        .btn-icon {
          font-family: var(--font-tech);
          font-weight: 700;
          transition: transform 0.2s ease;
        }

        .btn-primary:hover .btn-icon {
          transform: translateX(4px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 1.5rem;
          border-radius: 12px;
          background: var(--bg-surface);
          border: 1px solid var(--border-strong);
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background: var(--bg-surface-hover);
          border-color: var(--text-dim);
        }

        /* ================= WORKBENCH CANVAS ================= */
        .workbench-wrap {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 380px;
          border: 1px solid var(--border-strong);
          border-radius: 16px;
          overflow: hidden;
          background: var(--canvas-bg);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(12px);
        }

        .workbench-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border-subtle);
        }

        .window-dots {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-close { background-color: #ef4444; }
        .dot-min { background-color: #f59e0b; }
        .dot-max { background-color: #10b981; }

        .workbench-title {
          font-family: var(--font-tech);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .workbench-badge {
          font-family: var(--font-tech);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent);
          background: rgba(16, 185, 129, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .workbench-canvas {
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .crosshair {
          position: absolute;
          font-family: var(--font-tech);
          color: var(--border-strong);
          font-size: 1.2rem;
          line-height: 1;
          pointer-events: none;
          z-index: 1;
        }
        .top-left { top: 10px; left: 14px; }
        .top-right { top: 10px; right: 14px; }
        .bottom-left { bottom: 50px; left: 14px; }
        .bottom-right { bottom: 50px; right: 14px; }

        .canvas-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
        }

        .watermark-icon {
          font-size: 2rem;
          color: var(--text-dim);
        }

        .canvas-watermark span {
          font-family: var(--font-tech);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: var(--text-dim);
          font-weight: 600;
        }

        .artifact-field {
          position: absolute;
          inset: 0;
          bottom: 44px; /* Leave space for HUD */
        }

        .artifact-slot {
          position: absolute;
          z-index: 10;
        }

        .artifact-card {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 1.1rem;
          border-radius: 8px;
          background: var(--card-bg);
          color: var(--text-primary);
          border: 1px solid var(--border-strong);
          font-family: var(--font-tech);
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: grab;
          user-select: none;
          touch-action: none;
          box-shadow: var(--card-shadow);
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .artifact-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-color, #fff);
          box-shadow: 0 0 10px var(--accent-color, #fff);
        }

        .artifact-card:hover, .artifact-card.is-active {
          border-color: var(--accent-color, var(--accent));
          box-shadow: 0 14px 30px -5px rgba(0, 0, 0, 0.3), 0 0 15px -3px var(--accent-color, var(--accent));
        }

        .artifact-card:active {
          cursor: grabbing;
        }

        /* Telemetry HUD Inspector */
        .telemetry-hud {
          position: relative;
          z-index: 20;
          height: 42px;
          margin-top: auto;
          background: var(--hud-bg);
          border-top: 1px solid var(--border-subtle);
          padding: 0 1.25rem;
          display: flex;
          align-items: center;
          font-family: var(--font-tech);
          font-size: 0.78rem;
          backdrop-filter: blur(8px);
        }

        .hud-data {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .idle-state {
          color: var(--text-dim);
        }

        .hud-category {
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .hud-name {
          color: var(--text-primary);
          font-weight: 700;
        }

        .hud-code {
          color: var(--text-secondary);
          font-family: var(--font-tech);
          background: rgba(15, 23, 42, 0.06);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
        }

        /* ================= FOOTER ================= */
        .footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
          font-family: var(--font-tech);
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        .footer-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .divider {
          color: var(--border-strong);
        }

        .footer-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
        }

        .status-dot {
          color: var(--accent);
          font-size: 0.6rem;
        }

        /* ================= RESPONSIVE BREAKPOINTS ================= */
        @media (max-width: 900px) {
          .stage {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            gap: 2.5rem;
          }

          .pitch {
            max-width: 100%;
          }

          .tagline {
            display: none;
          }

          .workbench-wrap {
            min-height: 340px;
          }
        }

        @media (max-width: 640px) {
          .page-wrapper {
            padding: 1rem;
            grid-template-rows: auto 1fr auto;
            overflow-y: auto;
          }

          .header-bar {
            padding: 0.5rem 1rem;
          }

          .action-row {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .canvas-watermark {
            display: none;
          }

          .artifact-field {
            position: static;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: center;
            gap: 0.6rem;
            padding: 1.5rem 1rem;
          }

          .artifact-slot {
            position: static;
          }

          .footer-bar {
            flex-direction: column;
            gap: 0.6rem;
            align-items: flex-start;
          }
        }

        @media (max-height: 600px) {
          .footer-bar, .tagline, .workbench-badge {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse-indicator {
            animation: none;
          }
          .btn-primary, .nav-cta, .artifact-card {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
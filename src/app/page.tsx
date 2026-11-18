// app/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Inter } from "next/font/google";
import ThemeSwitch from "@/components/globals/ui/ThemeSwitch";
import JoeteckPlayground from "@/components/features/company/JoeteckPlayground";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--lp-font-sans",
  display: "swap",
});

const PLAYGROUND_FEATURES = [
  {
    icon: "✳",
    title: "Drag & drop",
    desc: "Assemble layouts from a curated library of 22+ production-ready blocks.",
  },
  {
    icon: "◈",
    title: "Make it yours",
    desc: "Tune content, colour, spacing, and Framer Motion animation — live on the canvas.",
  },
  {
    icon: "↗",
    title: "Take it with you",
    desc: "Export any artboard as a crisp PNG or PDF, ready to share or ship.",
  },
];

export default function LeadingPage() {
  const systemReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reduceMotion = mounted ? systemReduceMotion : false;

  return (
    <div className={`${inter.variable} page-wrapper relative flex flex-col bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-hidden`}>
      <h1 className="sr-only">Joeteck — Software Engineer, UI Specialist & Product Builder</h1>

      {/* Noise Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-noise-dark opacity-30 dark:opacity-100 mix-blend-multiply z-10"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="bg-gradient-to-b from-transparent via-white/40 to-[#e8faf5] dark:via-[#010604]/50 dark:to-[#03100b] w-full h-full" />
      </div>

      {/* ================= HEADER ================= */}
      <header className="lp-header relative z-10">
        <div className="lp-brand">
          <Link href="/" className="lp-logo-link" aria-label="Joeteck Home">
            <span className="lp-logo flex items-center justify-center">
              <Image 
                src="/logo/joeteckBlack.jpg" 
                alt="Joeteck Logo" 
                width={30} 
                height={30} 
                className="w-[30px] h-[30px] rounded-[10px] object-cover"
              />
            </span>
            <span className="lp-wordmark">Joeteck</span>
          </Link>
          <span className="lp-brand-divider" aria-hidden="true" />
          <span className="lp-brand-tag">Playground</span>
        </div>

        <nav className="lp-nav" aria-label="Primary">
          <a href="#playground" className="lp-nav-link">Playground</a>
          <Link href="/portfolio" className="lp-nav-link">Portfolio</Link>
          <a href="#playground" className="lp-btn-primary lp-btn-sm">
            <span>Try it</span>
            <span className="lp-btn-arrow" aria-hidden="true">→</span>
          </a>
          <ThemeSwitch />
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <main className="lp-hero relative z-10">
        <motion.div
          className="lp-hero-inner"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lp-chip">
            <span className="lp-chip-dot" />
            <span>Available for new opportunities</span>
          </div>

          <p className="lp-eyebrow">
            Software Engineering · Product Design · Creative Technology
          </p>

          <h2 className="lp-hero-title">
            Engineering interfaces
            <br />
            that feel <span className="lp-highlight">alive.</span>
          </h2>

          <p className="lp-hero-desc">
            I turn complex ideas into thoughtful digital experiences. Explore the products I
            build, the systems behind them, and the details that make technology feel effortless.
          </p>

          <div className="lp-hero-actions">
            <a href="#playground" className="lp-btn-primary">
              <span>Enter the playground</span>
              <span className="lp-btn-arrow" aria-hidden="true">→</span>
            </a>
            <Link href="/portfolio" className="lp-btn-ghost">
              <span>Explore my work</span>
              <span className="lp-btn-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="lp-proof" aria-label="Areas of focus">
            <span className="lp-proof-chip"><i /> Frontend engineering</span>
            <span className="lp-proof-chip"><i /> UI systems</span>
            <span className="lp-proof-chip"><i /> Product building</span>
          </div>
        </motion.div>
      </main>

      {/* ================= PLAYGROUND SHOWCASE ================= */}
      <section className="lp-playground relative z-10" id="playground" aria-labelledby="playground-title">
        <div className="lp-playground-grid">
          <div className="lp-playground-copy">
            <span className="lp-kicker">
              <i className="lp-kicker-dot" /> A creative space to build
            </span>
            <h2 id="playground-title" className="lp-playground-title">
              Ideas become interfaces.
              <br />
              <span>One block at a time.</span>
            </h2>
            <p>
              Meet <strong>Joeteck Playground</strong> — a visual studio for experimenting with
              layouts, components, colours and motion. Drag blocks onto the artboard, tune the
              details, then export what you create.
            </p>
          </div>

          <div className="lp-features" aria-label="Playground features">
            {PLAYGROUND_FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="lp-feature-card"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="lp-feature-icon" aria-hidden="true">{f.icon}</span>
                <div className="lp-feature-copy">
                  <b>{f.title}</b>
                  <small>{f.desc}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Browser window wrapping the playground */}
        <motion.div
          className="lp-browser"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lp-chrome">
            <div className="lp-chrome-dots" aria-hidden="true">
              <span className="lp-dot lp-dot-close" />
              <span className="lp-dot lp-dot-min" />
              <span className="lp-dot lp-dot-max" />
            </div>
            <div className="lp-chrome-url">
              <span className="lp-url-text">
                joeteck.app<span className="lp-url-path">/playground</span>
              </span>
            </div>
            <div className="lp-chrome-tools" aria-hidden="true">
              <span className="lp-live">
                <i />
                Live
              </span>
            </div>
          </div>
          <div className="lp-browser-stage">
            <JoeteckPlayground embedded/>
          </div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="lp-footer relative z-10">
        <div className="lp-footer-left">
          <span>© {new Date().getFullYear()} Joeteck</span>
          <span className="lp-divider" aria-hidden="true">·</span>
          <span>Engineered with Next.js &amp; Framer Motion</span>
        </div>
        <div className="lp-footer-right">
          <span className="lp-footer-dot" aria-hidden="true" />
          <span>All systems operational</span>
        </div>
      </footer>

      <style jsx>{`
        /* ====================== DESIGN TOKENS (Portfolio Integrated) ====================== */
        .page-wrapper {
          --lp-ink: #07080b;
          --lp-ink-2: #141629;
          --lp-text: #2a2d34;
          --lp-muted: #8a8e96;
          --lp-faint: #b4b8be;
          --lp-line: rgba(1, 172, 129, 0.15);
          --lp-line-2: rgba(233, 161, 33, 0.2);
          --lp-bg: #f8faf9;
          --lp-fill: rgba(1, 172, 129, 0.04);
          --lp-fill-2: rgba(233, 161, 33, 0.04);
          --lp-surface: #ffffff;

          --lp-accent: #01ac81;
          --lp-accent-hover: #019670;
          --lp-accent-soft: rgba(1, 172, 129, 0.1);
          --lp-accent-line: rgba(1, 172, 129, 0.3);

          --lp-gold: #e9a121;
          --lp-green: #01ac81;
          --lp-green-soft: rgba(1, 172, 129, 0.12);
          --lp-green-line: rgba(1, 172, 129, 0.35);

          --lp-shadow-card: 0 2px 6px rgba(1, 172, 129, 0.04);
          --lp-shadow-lift: 0 8px 24px rgba(1, 172, 129, 0.08);
          --lp-shadow-lg: 0 30px 70px rgba(1, 8, 6, 0.12);
        }

        :global(.dark) .page-wrapper,
        :global([data-theme="dark"]) .page-wrapper {
          --lp-ink: #f3f4f4;
          --lp-ink-2: #e1e4e4;
          --lp-text: #c8cad4;
          --lp-muted: #8a8e96;
          --lp-faint: #6b6f78;
          --lp-line: rgba(1, 172, 129, 0.15);
          --lp-line-2: rgba(233, 161, 33, 0.2);
          --lp-bg: #030d09;
          --lp-fill: rgba(1, 172, 129, 0.06);
          --lp-fill-2: rgba(233, 161, 33, 0.06);
          --lp-surface: #071610;

          --lp-accent: #01ac81;
          --lp-accent-hover: #02c493;
          --lp-accent-soft: rgba(1, 172, 129, 0.15);
          --lp-accent-line: rgba(1, 172, 129, 0.35);

          --lp-gold: #e9a121;
          --lp-green: #01ac81;
          --lp-green-soft: rgba(1, 172, 129, 0.18);
          --lp-green-line: rgba(1, 172, 129, 0.4);

          --lp-shadow-card: 0 2px 6px rgba(0, 0, 0, 0.3);
          --lp-shadow-lift: 0 8px 24px rgba(0, 0, 0, 0.4);
          --lp-shadow-lg: 0 30px 70px rgba(0, 0, 0, 0.6);
        }

        .page-wrapper {
          font-family: var(--lp-font-sans), ui-sans-serif, system-ui, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }

        /* ====================== HEADER ====================== */
        .lp-header {
          position: sticky;
          top: 0;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 0 clamp(16px, 4vw, 40px);
          background: color-mix(in srgb, var(--lp-bg) 82%, transparent);
          border-bottom: 1px solid var(--lp-line);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .lp-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .lp-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--lp-ink);
          flex-shrink: 0;
        }

        .lp-wordmark {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--lp-ink);
        }

        .lp-brand-divider {
          width: 1px;
          height: 18px;
          background: var(--lp-line-2);
        }

        .lp-brand-tag {
          font-size: 11px;
          font-weight: 600;
          color: var(--lp-gold);
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .lp-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .lp-nav-link {
          font-size: 13px;
          font-weight: 550;
          color: var(--lp-text);
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 99px;
          transition: background-color 0.15s, color 0.15s;
        }

        .lp-nav-link:hover {
          background: var(--lp-fill);
          color: var(--lp-accent);
        }

        /* ====================== BUTTONS ====================== */
        .lp-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 44px;
          padding: 0 20px;
          border: 0;
          border-radius: 99px;
          background: var(--lp-accent);
          color: #ffffff;
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 650;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background-color 0.15s, transform 0.15s, box-shadow 0.15s;
          box-shadow: 0 8px 20px -10px rgba(1, 172, 129, 0.5);
        }
        .lp-btn-primary:hover {
          background: var(--lp-accent-hover);
          transform: translateY(-1px);
        }
        .lp-btn-primary .lp-btn-arrow {
          transition: transform 0.15s;
        }
        .lp-btn-primary:hover .lp-btn-arrow {
          transform: translateX(3px);
        }
        .lp-btn-sm {
          height: 34px;
          padding: 0 14px;
          font-size: 12.5px;
        }

        .lp-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 44px;
          padding: 0 20px;
          border: 1px solid var(--lp-accent-line);
          border-radius: 99px;
          background: var(--lp-surface);
          color: var(--lp-ink);
          font-family: inherit;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: background-color 0.15s, border-color 0.15s, transform 0.15s;
        }
        .lp-btn-ghost:hover {
          background: var(--lp-fill);
          border-color: var(--lp-accent);
          transform: translateY(-1px);
        }

        /* ====================== HERO ====================== */
        .lp-hero {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(56px, 9vw, 104px) clamp(16px, 4vw, 40px) clamp(48px, 6vw, 72px);
        }

        .lp-hero-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 820px;
        }

        .lp-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          height: 30px;
          padding: 0 14px;
          border-radius: 99px;
          border: 1px solid var(--lp-green-line);
          background: var(--lp-green-soft);
          color: var(--lp-accent);
          font-size: 12px;
          font-weight: 600;
        }

        .lp-chip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--lp-accent);
          animation: lp-pulse 2s infinite;
        }

        @keyframes lp-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 var(--lp-accent); }
          50%      { opacity: 0.85; box-shadow: 0 0 0 3px transparent; }
        }

        .lp-eyebrow {
          margin: 4px 0 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--lp-gold);
        }

        .lp-hero-title {
          margin: 0;
          font-size: clamp(2.8rem, 8vw, 5.6rem);
          font-weight: 800;
          line-height: 0.96;
          letter-spacing: -0.045em;
          color: var(--lp-ink);
        }

        .lp-highlight {
          display: inline-block;
          padding: 0.02em 0.28em 0.08em;
          margin: 0 -0.06em;
          border-radius: 0.18em;
          background: var(--lp-gold);
          color: #07080b;
          line-height: 1;
          transform: rotate(-0.5deg);
        }

        .lp-hero-desc {
          margin: 0;
          max-width: 620px;
          font-size: clamp(15px, 1.15vw, 17px);
          line-height: 1.7;
          color: var(--lp-text);
        }

        .lp-hero-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .lp-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .lp-proof-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 28px;
          padding: 0 12px;
          border-radius: 99px;
          background: var(--lp-fill);
          border: 1px solid var(--lp-line);
          font-size: 12px;
          font-weight: 600;
          color: var(--lp-text);
        }

        .lp-proof-chip i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--lp-gold);
          box-shadow: 0 0 8px rgba(233, 161, 33, 0.6);
        }

        /* ====================== PLAYGROUND SECTION ====================== */
        .lp-playground {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 clamp(16px, 4vw, 40px) clamp(56px, 8vw, 96px);
          display: flex;
          flex-direction: column;
          gap: clamp(28px, 4vw, 44px);
        }

        .lp-playground-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(24px, 4vw, 48px);
          align-items: start;
        }

        .lp-playground-copy {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .lp-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--lp-gold);
          margin: 0;
        }

        .lp-kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--lp-accent);
          box-shadow: 0 0 8px rgba(1, 172, 129, 0.65);
        }

        .lp-playground-title {
          margin: 0;
          font-size: clamp(2rem, 4.4vw, 3.4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: var(--lp-ink);
        }

        .lp-playground-title span {
          color: var(--lp-faint);
        }

        .lp-playground-copy p {
          margin: 0;
          max-width: 560px;
          font-size: 15px;
          line-height: 1.7;
          color: var(--lp-text);
        }

        .lp-playground-copy strong {
          color: var(--lp-ink);
          font-weight: 700;
        }

        .lp-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .lp-feature-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 20px;
          background: var(--lp-fill);
          border: 1px solid var(--lp-line);
          color: var(--lp-ink);
          transition: background-color 0.15s, box-shadow 0.15s, transform 0.15s;
        }

        .lp-feature-card:hover {
          background: var(--lp-surface);
          border-color: var(--lp-accent);
          box-shadow: var(--lp-shadow-lift);
          transform: translateY(-2px);
        }

        .lp-feature-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: var(--lp-accent-soft);
          color: var(--lp-accent);
          font-size: 20px;
          font-weight: 700;
        }

        .lp-feature-copy {
          display: flex;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .lp-feature-copy b {
          font-size: 14px;
          font-weight: 650;
          color: var(--lp-ink);
        }

        .lp-feature-copy small {
          font-size: 12.5px;
          line-height: 1.5;
          color: var(--lp-muted);
        }

        /* ====================== BROWSER MOCKUP ====================== */
        .lp-browser {
          width: 100%;
          border-radius: 32px;
          overflow: hidden;
          border: 1px solid var(--lp-accent-line);
          background: var(--lp-surface);
          box-shadow: var(--lp-shadow-lg);
        }

        .lp-chrome {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          background: var(--lp-fill);
          border-bottom: 1px solid var(--lp-line);
        }

        .lp-chrome-dots {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .lp-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .lp-dot-close { background-color: #ff5f57; }
        .lp-dot-min   { background-color: #febc2e; }
        .lp-dot-max   { background-color: #28c840; }

        .lp-chrome-url {
          flex: 1;
          max-width: 360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          padding: 0 12px;
          border-radius: 99px;
          background: var(--lp-surface);
          border: 1px solid var(--lp-line);
          font-family: ui-monospace, monospace;
          font-size: 11px;
          color: var(--lp-text);
        }

        .lp-url-text { font-weight: 500; }
        .lp-url-path { color: var(--lp-faint); }

        .lp-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 22px;
          padding: 0 10px;
          border-radius: 99px;
          border: 1px solid var(--lp-green-line);
          background: var(--lp-green-soft);
          color: var(--lp-accent);
          font-family: ui-monospace, monospace;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .lp-live i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--lp-accent);
        }

        .lp-browser-stage {
          background: var(--lp-surface);
        }

        .lp-browser-stage :global(.nexa-app-embedded),
        .lp-browser-stage :global(.nexa-app) {
          border-radius: 0 !important;
        }

        /* ====================== FOOTER ====================== */
        .lp-footer {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: auto;
          padding: 20px clamp(16px, 4vw, 40px);
          border-top: 1px solid var(--lp-line);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-size: 12px;
          color: var(--lp-muted);
          font-weight: 500;
        }

        .lp-footer-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .lp-divider {
          color: var(--lp-line-2);
        }

        .lp-footer-right {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--lp-text);
        }

        .lp-footer-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--lp-gold);
          box-shadow: 0 0 8px rgba(233, 161, 33, 0.5);
        }

        @media (max-width: 900px) {
          .lp-brand-tag { display: none; }
          .lp-playground-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .lp-nav-link { display: none; }
          .lp-hero-title { font-size: clamp(2.4rem, 12vw, 3.4rem); }
          .lp-hero-actions { flex-direction: column; align-items: stretch; }
          .lp-btn-primary, .lp-btn-ghost { width: 100%; }
          .lp-live { display: none; }
          .lp-footer { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </div>
  );
}
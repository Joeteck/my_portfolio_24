"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Oswald, IBM_Plex_Mono, Inter } from "next/font/google";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const techMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-tech",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

type Crate = {
  id: string;
  label: string;
  top: string;
  left: string;
  rotate: number;
};

const CRATES: Crate[] = [
  { id: "button", label: "<Button />", top: "8%", left: "6%", rotate: -6 },
  { id: "navbar", label: "<Navbar />", top: "5%", left: "40%", rotate: -3 },
  { id: "card", label: "<Card />", top: "18%", left: "74%", rotate: 5 },
  { id: "tooltip", label: "<Tooltip />", top: "36%", left: "86%", rotate: 6 },
  { id: "modal", label: "<Modal />", top: "56%", left: "8%", rotate: 3 },
  { id: "toast", label: "<Toast />", top: "60%", left: "78%", rotate: -5 },
  { id: "avatar", label: "<Avatar />", top: "74%", left: "45%", rotate: -4 },
];

const RULER_TICKS = Array.from({ length: 21 }, (_, i) => i);

export default function LeadingPage() {
  const yardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className={`${display.variable} ${techMono.variable} ${body.variable} page`}>

      <h1 className="sr-only">
        Joeteck Portfolio
      </h1>

      <div className="page-shell">

        {/* ================= HEADER ================= */}

        <header className="header">

          <div className="branding">

            <span className="wordmark">
              JOETECK
            </span>

            <span className="tagline">
              Software Engineer · UI Engineer · Product Builder
            </span>

          </div>

          <Link
            href="/portfolio"
            className="header-button"
          >
            View Portfolio →
          </Link>

        </header>

        {/* ================= RULER ================= */}

        <div
          className="ruler"
          aria-hidden="true"
        >
          {RULER_TICKS.map((tick) => (
            <span
              key={tick}
              className={`tick ${tick % 5 === 0 ? "tick--major" : ""}`}
            >
              {tick % 5 === 0 ? tick * 10 : ""}
            </span>
          ))}
        </div>

        {/* ================= HERO ================= */}

        <section className="hero">

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: .7,
            }}
            className="hero-copy"
          >

            <span className="hero-status">

              ✔ PORTFOLIO LIVE

            </span>

            <h2>

              Explore my work today.

            </h2>

            <p>

              Welcome to Joeteck.

              My portfolio is live and ready to explore.

              While you&apos;re here, you&apos;ll also get a preview of my upcoming
              Component Playground—a drag-and-drop UI builder currently under
              construction.

            </p>

            <div className="hero-actions">

              <Link
                href="/portfolio"
                className="hero-primary"
              >
                Visit Portfolio
              </Link>

              <span className="hero-note">

                Playground coming soon 🚧

              </span>

            </div>

          </motion.div>

        </section>

        {/* ================= WORKSHOP ================= */}

        <section
          ref={yardRef}
          className="yard"
        >

          <div className="stamp-wrap">

            <motion.div
              className="stamp"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 1.1,
                      rotate: 0,
                    }
              }
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                      rotate: -4,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
            >

              <span className="stamp-text">

                COMPONENT

                <br />

                PLAYGROUND

              </span>

              <span className="stamp-sub">

                UNDER CONSTRUCTION

              </span>

              <p className="stamp-description">

                The portfolio is finished.

                This playground is where I&apos;m building reusable UI components,
                interactions and experiments.

              </p>

            </motion.div>

          </div>
                      {CRATES.map((crate, index) => (
              <div
                key={crate.id}
                className="crate-slot"
                style={{
                  top: crate.top,
                  left: crate.left,
                }}
              >
                <div className="crate-idle">
                  <motion.div
                    className="crate"
                    drag={!reduceMotion}
                    dragConstraints={yardRef}
                    dragElastic={0.14}
                    dragMomentum={false}
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileDrag={{
                      scale: 1.08,
                      zIndex: 30,
                    }}
                    whileFocus={{
                      scale: 1.04,
                    }}
                    tabIndex={0}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -25,
                            rotate: 0,
                          }
                    }
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            opacity: 1,
                            y: 0,
                            rotate: crate.rotate,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 + index * 0.08,
                    }}
                    aria-label={`${crate.label} draggable component`}
                  >
                    {crate.label}
                  </motion.div>
                </div>
              </div>
            ))}

        </section>

        {/* ================= DESTINATIONS ================= */}

        <section className="destinations">

          {/* ================= PORTFOLIO ================= */}

          <motion.div
            className="portfolio-card"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              delay: .55,
            }}
          >

            <span className="card-status live">

              ✔ LIVE

            </span>

            <h3>

              Portfolio

            </h3>

            <p>

              Browse my projects, experience, technical articles and the
              products I&apos;ve built over the years.

            </p>

            <ul className="portfolio-list">

              <li>Projects</li>

              <li>Experience</li>

              <li>Case Studies</li>

              <li>Blog</li>

            </ul>

            <Link
              href="/portfolio"
              className="portfolio-button"
            >
              Visit Portfolio →
            </Link>

          </motion.div>

          {/* ================= PLAYGROUND ================= */}

          <motion.div
            className="playground-card"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              delay: .7,
            }}
          >

            <span className="card-status building">

              🚧 BUILDING

            </span>

            <h3>

              Component Playground

            </h3>

            <p>

              A drag-and-drop design playground powered by the same reusable
              components that drive this portfolio.

            </p>

            <div className="coming-soon">

              Coming Soon

            </div>

          </motion.div>

        </section>

        {/* ================= FOOTER ================= */}

        <footer className="title-block">

          <span>

            PROJECT:
            <strong> JOETECK WEBSITE</strong>

          </span>

          <span>

            RELEASE:
            <strong> PORTFOLIO V1.0</strong>

          </span>

          <span>

            NEXT BUILD:
            <strong> COMPONENT PLAYGROUND</strong>

          </span>

          <span>

            STATUS:
            <strong> ACTIVE DEVELOPMENT</strong>

          </span>

        </footer>

      </div>

      <style jsx>{`
      .page {
  --bg: #061f18;
  --grid-line: rgba(255,255,255,.06);
  --grid-line-strong: rgba(127,184,224,.28);

  --paper: #efe6d3;
  --paper-edge: #d8cbaa;

  --ink: #1b1a15;

  --text: #d7e4f0;
  --text-dim: #84a5c3;

  --hazard: #ffc53d;
  --hazard-dark: #17130c;

  --go: #39c86b;

  min-height: 100vh;
  width: 100%;

  overflow-x: hidden;

  background: var(--bg);

  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(
      90deg,
      var(--grid-line) 1px,
      transparent 1px
    );

  background-size: 32px 32px;

  color: var(--text);

  font-family: var(--font-body);
}

/* ===========================
   PAGE
=========================== */

.page-shell{

  width:min(1700px,100%);

  margin-inline:auto;

  min-height:100vh;

  display:flex;

  flex-direction:column;

  padding:

    clamp(1rem,2vw,2rem);

  gap:

    clamp(1rem,1.5vw,1.5rem);

}

/* ===========================
   ACCESSIBILITY
=========================== */

.sr-only{

  position:absolute;

  width:1px;
  height:1px;

  padding:0;

  margin:-1px;

  overflow:hidden;

  clip:rect(0,0,0,0);

  white-space:nowrap;

  border:0;

}

/* ===========================
   HEADER
=========================== */

.header{

  display:flex;

  justify-content:space-between;

  align-items:center;

  gap:1rem;

  flex-wrap:wrap;

}

.branding{

  display:flex;

  flex-direction:column;

  gap:.35rem;

}

.wordmark{

  font-family:var(--font-display);

  font-size:clamp(
    1.4rem,
    1rem + 1vw,
    2.25rem
  );

  font-weight:700;

  letter-spacing:.08em;

}

.tagline{

  color:var(--text-dim);

  font-family:var(--font-tech);

  font-size:clamp(
    .68rem,
    .6rem + .15vw,
    .9rem
  );

  letter-spacing:.05em;

}

.header-button{

  display:inline-flex;

  align-items:center;

  justify-content:center;

  padding:

    .9rem 1.5rem;

  border-radius:8px;

  text-decoration:none;

  background:var(--go);

  color:#082010;

  font-weight:700;

  transition:
    transform .25s,
    box-shadow .25s,
    background .25s;

  box-shadow:
    0 10px 30px rgba(57,200,107,.22);

}

.header-button:hover{

  transform:translateY(-2px);

  box-shadow:
    0 18px 40px rgba(57,200,107,.35);

}

.header-button:focus-visible{

  outline:2px solid white;

  outline-offset:4px;

}

/* ===========================
   RULER
=========================== */

.ruler{

  display:flex;

  width:100%;

  overflow:hidden;

  border-top:
    1px solid var(--grid-line-strong);

  border-bottom:
    1px solid var(--grid-line-strong);

}

.tick{

  flex:1;

  min-width:6px;

  height:14px;

  display:flex;

  align-items:flex-end;

  padding-left:2px;

  border-left:
    1px solid var(--grid-line-strong);

  color:var(--text-dim);

  font-size:.55rem;

  font-family:var(--font-tech);

}

.tick--major{

  height:22px;

  border-left-color:
    var(--text);

}

/* ===========================
   HERO
=========================== */

.hero{

  display:grid;

  grid-template-columns:1fr;

  gap:2rem;

  align-items:center;

  padding-block:
    clamp(1rem,2vw,2rem);

}

.hero-copy{

  max-width:780px;

}

.hero-status{

  display:inline-flex;

  align-items:center;

  gap:.5rem;

  padding:

    .45rem .9rem;

  border-radius:999px;

  background:
    rgba(57,200,107,.15);

  color:var(--go);

  font-size:.8rem;

  font-weight:700;

  letter-spacing:.08em;

  font-family:var(--font-tech);

}

.hero-copy h2{

  margin-top:1rem;

  margin-bottom:1rem;

  font-family:var(--font-display);

  font-weight:700;

  line-height:1.05;

  font-size:

    clamp(
      2.2rem,
      5vw,
      4.8rem
    );

}

.hero-copy p{

  max-width:680px;

  color:var(--text-dim);

  line-height:1.8;

  font-size:

    clamp(
      1rem,
      .95rem + .2vw,
      1.15rem
    );

}

.hero-actions{

  margin-top:2rem;

  display:flex;

  align-items:center;

  gap:1rem;

  flex-wrap:wrap;

}

.hero-primary{

  display:inline-flex;

  align-items:center;

  justify-content:center;

  padding:

    1rem 2rem;

  border-radius:10px;

  background:var(--go);

  color:#082010;

  font-weight:700;

  text-decoration:none;

  transition:
    transform .25s,
    box-shadow .25s;

  box-shadow:
    0 12px 30px rgba(57,200,107,.28);

}

.hero-primary:hover{

  transform:translateY(-3px);

}

.hero-note{

  color:var(--text-dim);

  font-family:var(--font-tech);

  font-size:.9rem;

}
/* ===========================
   WORKSHOP
=========================== */

.yard{

  position:relative;

  width:100%;

  min-height:520px;

  height:clamp(
    520px,
    58vh,
    760px
  );

  border:1px dashed var(--grid-line-strong);

  border-radius:18px;

  overflow:hidden;

  background:
    linear-gradient(
      rgba(255,255,255,.015),
      rgba(255,255,255,.015)
    );

  backdrop-filter:blur(3px);

  box-shadow:
    inset 0 0 0 1px rgba(255,255,255,.02);

}

/* ===========================
   CENTER STAMP
=========================== */

.stamp-wrap{

  position:absolute;

  inset:0;

  display:flex;

  align-items:center;

  justify-content:center;

  pointer-events:none;

  z-index:2;

  padding:2rem;

}

.stamp{

  width:min(700px,95%);

  text-align:center;

  padding:
    clamp(1.5rem,2vw,2.5rem)
    clamp(1.5rem,4vw,3.5rem);

  border:5px solid var(--hazard);

  border-radius:10px;

  background:
    rgba(0,0,0,.22);

  backdrop-filter:blur(6px);

  box-shadow:
    0 15px 40px rgba(0,0,0,.35);

}

.stamp-text{

  display:block;

  font-family:var(--font-display);

  color:var(--hazard);

  font-weight:700;

  letter-spacing:.08em;

  line-height:.9;

  font-size:
    clamp(
      2rem,
      5vw,
      5rem
    );

}

.stamp-sub{

  display:inline-block;

  margin-top:1rem;

  padding:.45rem 1rem;

  border-radius:999px;

  background:
    rgba(255,197,61,.12);

  color:var(--hazard);

  font-family:var(--font-tech);

  font-size:.8rem;

  letter-spacing:.08em;

}

.stamp-description{

  max-width:520px;

  margin:
    1.25rem auto 0;

  color:var(--text-dim);

  line-height:1.8;

  font-size:
    clamp(
      .9rem,
      .85rem + .15vw,
      1rem
    );

}

/* ===========================
   CRATES
=========================== */

.crate-slot{

  position:absolute;

  z-index:5;

}

.crate-idle{

  animation:
    floatCrate
    3.8s
    ease-in-out
    infinite;

}

.crate{

  display:flex;

  align-items:center;

  justify-content:center;

  min-width:135px;

  min-height:48px;

  padding:
    .8rem 1rem;

  border-radius:6px;

  background:var(--paper);

  color:var(--ink);

  border:
    1px solid var(--paper-edge);

  font-family:var(--font-tech);

  font-size:.82rem;

  font-weight:500;

  white-space:nowrap;

  cursor:grab;

  user-select:none;

  touch-action:none;

  box-shadow:
    0 10px 24px rgba(0,0,0,.28);

  transition:
    transform .25s,
    box-shadow .25s;

}

.crate:hover{

  box-shadow:
    0 18px 36px rgba(0,0,0,.38);

}

.crate:active{

  cursor:grabbing;

}

.crate:focus-visible{

  outline:
    2px solid var(--hazard);

  outline-offset:3px;

}

/* ===========================
   FLOAT ANIMATION
=========================== */

@keyframes floatCrate{

  0%,
  100%{

    transform:
      translateY(0);

  }

  50%{

    transform:
      translateY(-10px);

  }

}

@media (prefers-reduced-motion:reduce){

  .crate-idle{

    animation:none;

  }

}

/* ===========================
   MOBILE
=========================== */

@media (max-width:768px){

  .yard{

    min-height:430px;

    height:430px;

  }

  .stamp{

    padding:
      1.25rem
      1.5rem;

  }

  .stamp-description{

    line-height:1.6;

  }

  .crate{

    min-width:110px;

    min-height:42px;

    font-size:.72rem;

  }

  /* Reduce visual clutter */

  .crate-slot:nth-child(7){

    display:none;

  }

  .crate-slot:nth-child(8){

    display:none;

  }

}

/* ===========================
   TABLET
=========================== */

@media (min-width:769px) and (max-width:1100px){

  .yard{

    height:560px;

  }

}

/* ===========================
   LARGE SCREENS
=========================== */

@media (min-width:1400px){

  .yard{

    height:700px;

  }

  .stamp{

    max-width:760px;

  }

  .crate{

    min-width:150px;

    font-size:.9rem;

  }

}
/* ===========================
   DESTINATIONS
=========================== */

.destinations{

  display:grid;

  grid-template-columns:
    2fr
    1fr;

  gap:1.5rem;

  align-items:stretch;

}

/* ===========================
   CARD BASE
=========================== */

.portfolio-card,
.playground-card{

  position:relative;

  display:flex;

  flex-direction:column;

  padding:
    clamp(1.5rem,2vw,2.5rem);

  border-radius:18px;

  border:
    1px solid var(--grid-line-strong);

  background:
    rgba(255,255,255,.03);

  backdrop-filter:
    blur(6px);

  overflow:hidden;

}

.portfolio-card::before{

  content:"";

  position:absolute;

  inset:0;

  background:
    linear-gradient(
      135deg,
      rgba(57,200,107,.12),
      transparent 55%
    );

  pointer-events:none;

}

.playground-card::before{

  content:"";

  position:absolute;

  inset:0;

  background:
    linear-gradient(
      135deg,
      rgba(255,197,61,.08),
      transparent 55%
    );

  pointer-events:none;

}

/* ===========================
   STATUS BADGES
=========================== */

.card-status{

  align-self:flex-start;

  display:inline-flex;

  align-items:center;

  padding:
    .45rem .9rem;

  border-radius:999px;

  font-size:.78rem;

  font-family:var(--font-tech);

  font-weight:700;

  letter-spacing:.08em;

}

.live{

  color:var(--go);

  background:
    rgba(57,200,107,.12);

}

.building{

  color:var(--hazard);

  background:
    rgba(255,197,61,.12);

}

/* ===========================
   CARD TITLES
=========================== */

.portfolio-card h3,
.playground-card h3{

  margin-top:1rem;

  margin-bottom:.75rem;

  font-family:var(--font-display);

  font-size:
    clamp(
      2rem,
      3vw,
      3rem
    );

  line-height:1.05;

}

.portfolio-card p,
.playground-card p{

  color:var(--text-dim);

  line-height:1.8;

  max-width:560px;

}

/* ===========================
   PORTFOLIO LIST
=========================== */

.portfolio-list{

  margin:
    2rem 0;

  padding:0;

  list-style:none;

  display:grid;

  grid-template-columns:
    repeat(2,1fr);

  gap:.85rem;

}

.portfolio-list li{

  display:flex;

  align-items:center;

  gap:.6rem;

  color:var(--text);

  font-weight:500;

}

.portfolio-list li::before{

  content:"✓";

  color:var(--go);

  font-weight:700;

}

/* ===========================
   BUTTON
=========================== */

.portfolio-button{

  margin-top:auto;

  align-self:flex-start;

  display:inline-flex;

  align-items:center;

  justify-content:center;

  padding:
    1rem
    2rem;

  border-radius:10px;

  text-decoration:none;

  background:var(--go);

  color:#081d10;

  font-weight:700;

  transition:
    transform .25s,
    box-shadow .25s;

  box-shadow:
    0 15px 40px rgba(57,200,107,.22);

}

.portfolio-button:hover{

  transform:
    translateY(-3px);

  box-shadow:
    0 20px 50px rgba(57,200,107,.35);

}

/* ===========================
   COMING SOON
=========================== */

.coming-soon{

  margin-top:auto;

  display:inline-flex;

  align-items:center;

  justify-content:center;

  align-self:flex-start;

  padding:
    .8rem
    1.4rem;

  border-radius:999px;

  border:
    1px solid var(--hazard);

  color:var(--hazard);

  font-family:var(--font-tech);

  font-weight:700;

  letter-spacing:.08em;

  cursor:not-allowed;

}

/* ===========================
   FOOTER
=========================== */

.title-block{

  display:flex;

  justify-content:space-between;

  flex-wrap:wrap;

  gap:1rem;

  padding-top:1.5rem;

  margin-top:.5rem;

  border-top:
    1px solid var(--grid-line-strong);

  font-family:var(--font-tech);

  font-size:.75rem;

  color:var(--text-dim);

}

.title-block strong{

  color:var(--text);

  font-weight:600;

}

/* ===========================
   RESPONSIVE
=========================== */

@media (max-width:1100px){

  .destinations{

    grid-template-columns:1fr;

  }

  .portfolio-card{

    order:1;

  }

  .playground-card{

    order:2;

  }

}

@media (max-width:768px){

  .portfolio-card,
  .playground-card{

    padding:1.5rem;

  }

  .portfolio-card h3,
  .playground-card h3{

    font-size:2rem;

  }

  .portfolio-list{

    grid-template-columns:1fr;

  }

  .title-block{

    flex-direction:column;

    gap:.5rem;

  }

}

@media (min-width:1600px){

  .page-shell{

    max-width:1800px;

  }

  .hero-copy{

    max-width:900px;

  }

  .portfolio-card{

    min-height:420px;

  }

  .playground-card{

    min-height:420px;

  }

}

`}</style>

    </div>
  );
}
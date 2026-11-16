// components/features/company/JoeteckPlayground.tsx
"use client";

import React, { CSSProperties, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlignCenter, AlignLeft, AlignRight, ArrowDown, ArrowUp, Bell, Blocks, Box,
  Check, ChevronDown, ChevronRight, CircleHelp, Columns3, Copy, Download, Eye,
  FileImage, FileText, Grid2X2, Image as ImageIcon, Layers, LayoutDashboard,
  LayoutTemplate, List, Menu, Minus, Monitor, MousePointer2, PanelLeftClose,
  PanelLeftOpen, Pencil, Play, Plus, Quote, Search, Settings2, Smartphone,
  Sparkles, Star, Tablet, Trash2, Type, Video, WandSparkles, X, Zap,
} from "lucide-react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BlockType =
  | "navbar" | "hero" | "heading" | "paragraph" | "button" | "image" | "video"
  | "card" | "featureGrid" | "stats" | "testimonial" | "pricing" | "faq" | "logoCloud"
  | "gallery" | "divider" | "spacer" | "form" | "footer" | "appHeader" | "appMetric" | "appList";

type Align = "left" | "center" | "right";
type MotionPreset =
  | "none" | "fade" | "rise" | "slideLeft" | "slideRight"
  | "scale" | "blur" | "flip" | "spring" | "bounce";
type Easing = "easeOut" | "easeInOut" | "linear" | "backOut";
type Device = "desktop" | "tablet" | "mobile";
type PanelTab = "blocks" | "layers" | "customise";

type Block = {
  id: string; type: BlockType; name: string;
  content: string; subtitle: string;
  accent: string; background: string; textColor: string; mutedColor: string;
  fontWeight: number; align: Align; fontSize: number;
  padding: number; radius: number; shadow: number;
  width: number; gap: number; columns: number;
  variant: string; imageUrl: string;
  animation: MotionPreset; hover: "none" | "lift" | "scale" | "glow" | "tilt";
  duration: number; delay: number; easing: Easing;
  repeat: boolean; inView: boolean; items: string[];
};

type LibraryItem = {
  type: BlockType; label: string; desc: string; group: string; icon: React.ElementType;
};

/* ------------------------------------------------------------------ */
/*  Design tokens                                                      */
/* ------------------------------------------------------------------ */

const INK = "#07080B";
const LIME = "#C8F560";
const MIST = "#F3F4F4";

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.trim().replace("#", "");
  if (!/^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(m)) return null;
  const full = m.length === 3 ? m.split("").map(c => c + c).join("") : m;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function luminance(hex: string): number {
  const rgb = hexToRgb(hex);
  if (!rgb) return 1;
  const [r, g, b] = rgb.map(v => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const readableOn = (bg: string) => (luminance(bg) > 0.45 ? INK : "#FFFFFF");
const isDark = (bg: string) => luminance(bg) < 0.25;
const soft = (color: string, pct: number) => `color-mix(in srgb, ${color} ${pct}%, transparent)`;

/* ------------------------------------------------------------------ */
/*  Component library                                                  */
/* ------------------------------------------------------------------ */

const LIBRARY: LibraryItem[] = [
  { type: "navbar", label: "Navigation bar", desc: "Brand, links & action", group: "Structure", icon: Menu },
  { type: "hero", label: "Hero section", desc: "Headline with clear CTA", group: "Structure", icon: LayoutTemplate },
  { type: "featureGrid", label: "Feature grid", desc: "Benefits in a clean grid", group: "Structure", icon: Grid2X2 },
  { type: "stats", label: "Stats & metrics", desc: "Numbers that build trust", group: "Structure", icon: LayoutDashboard },
  { type: "footer", label: "Footer", desc: "Links and copyright", group: "Structure", icon: LayoutTemplate },
  { type: "gallery", label: "Image gallery", desc: "Visual collection", group: "Media", icon: ImageIcon },
  { type: "image", label: "Image block", desc: "Responsive image frame", group: "Media", icon: ImageIcon },
  { type: "video", label: "Video preview", desc: "Video cover with play state", group: "Media", icon: Video },
  { type: "heading", label: "Heading", desc: "A strong section title", group: "Typography", icon: Type },
  { type: "paragraph", label: "Paragraph", desc: "Supporting body copy", group: "Typography", icon: FileText },
  { type: "button", label: "Button", desc: "Primary or secondary action", group: "Interactive", icon: MousePointer2 },
  { type: "form", label: "Contact form", desc: "Input fields and submit", group: "Interactive", icon: Bell },
  { type: "card", label: "Content card", desc: "Flexible content surface", group: "Surfaces", icon: Box },
  { type: "testimonial", label: "Testimonial", desc: "Quote and customer detail", group: "Social proof", icon: Quote },
  { type: "logoCloud", label: "Logo cloud", desc: "Trusted by brands", group: "Social proof", icon: Columns3 },
  { type: "pricing", label: "Pricing card", desc: "Plan, price and benefits", group: "Commerce", icon: Star },
  { type: "faq", label: "FAQ list", desc: "Questions and answers", group: "Content", icon: List },
  { type: "divider", label: "Divider", desc: "Subtle visual separation", group: "Layout tools", icon: Minus },
  { type: "spacer", label: "Spacer", desc: "Control vertical rhythm", group: "Layout tools", icon: Plus },
  { type: "appHeader", label: "App top bar", desc: "Compact app navigation", group: "App UI", icon: Menu },
  { type: "appMetric", label: "Metric tile", desc: "Dashboard KPI card", group: "App UI", icon: Zap },
  { type: "appList", label: "Data list", desc: "Rows, status and details", group: "App UI", icon: List },
];

const iconFor = (type: BlockType): React.ElementType =>
  LIBRARY.find(x => x.type === type)?.icon ?? Box;

const USES_SUBTITLE: BlockType[] = [
  "navbar", "hero", "heading", "video", "card", "featureGrid", "stats", "testimonial",
  "pricing", "faq", "logoCloud", "gallery", "form", "footer", "appHeader", "appMetric", "appList",
];
const USES_ITEMS: BlockType[] = ["featureGrid", "stats", "pricing", "faq", "logoCloud", "footer", "appList"];

const SUBTITLE_HINT: Partial<Record<BlockType, string>> = {
  navbar: "Separate links with commas",
  testimonial: "Format: name | role",
  appMetric: "Format: value | change",
};
const ITEMS_HINT: Partial<Record<BlockType, string>> = {
  stats: "One per line: value | label",
  faq: "One per line: question | answer",
  appList: "One per line: title | id | status",
};

/* ------------------------------------------------------------------ */
/*  Block factory                                                      */
/* ------------------------------------------------------------------ */

const base = (
  type: BlockType,
  id = `${type}-${Math.random().toString(36).slice(2, 8)}`
): Block => {
  const common: Block = {
    id, type,
    name: LIBRARY.find(x => x.type === type)?.label || "Block",
    content: "", subtitle: "",
    accent: LIME, background: "#FFFFFF", textColor: INK, mutedColor: "#7C8087",
    fontWeight: 600, align: "left", fontSize: 24, padding: 28, radius: 24, shadow: 0,
    width: 100, gap: 16, columns: 3, variant: "default",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85",
    animation: "rise", hover: "lift", duration: 6, delay: 0, easing: "easeOut",
    repeat: false, inView: false, items: [],
  };

  const presets: Record<BlockType, Partial<Block>> = {
    navbar: { content: "Joeteck", subtitle: "Product, Resources, Pricing", radius: 40, padding: 18 },
    hero: {
      content: "Make your next big idea feel real.",
      subtitle: "Build a beautiful digital experience with flexible blocks, thoughtful details and a little imagination.",
      background: MIST, fontSize: 54, padding: 56, radius: 32, variant: "split",
    },
    heading: { content: "Everything you need to get started", fontSize: 34, padding: 14 },
    paragraph: {
      content: "Great ideas deserve a clear, confident presentation. Use this space to explain the value, share your story and help people take the next step.",
      fontSize: 16, fontWeight: 400, padding: 12,
    },
    button: { content: "Explore the experience", fontSize: 14, padding: 16, radius: 40, variant: "dark" },
    image: { content: "A workspace made for ideas", padding: 0, radius: 24 },
    video: { content: "A two-minute product tour", subtitle: "See what you can create", padding: 0, radius: 24 },
    card: {
      content: "Thoughtful by design", subtitle: "A flexible card for a feature, service or important message.",
      background: MIST, padding: 26, radius: 28, fontSize: 20,
    },
    featureGrid: {
      content: "Everything works together", subtitle: "A few thoughtful tools to help you move from idea to launch.",
      items: ["Design with freedom", "Build at your pace", "Share with confidence"], padding: 34, radius: 28, columns: 3,
    },
    stats: {
      content: "Small steps. Big progress.", subtitle: "A snapshot of the impact your team is making.",
      items: ["24k|Active creators", "98%|Happy customers", "4.9/5|Average rating"],
      background: INK, textColor: "#FFFFFF", mutedColor: "#A3A8B0", padding: 36, radius: 28, columns: 3,
    },
    testimonial: {
      content: "This made it possible for our team to turn ideas into something people can actually use. The whole process feels effortless.",
      subtitle: "Amara Okafor|Founder, Studio North", background: MIST, padding: 36, radius: 28, fontSize: 22,
    },
    pricing: {
      content: "Studio plan", subtitle: "For teams ready to create without limits.",
      items: ["Unlimited projects", "Premium blocks", "Export to PDF & image"], padding: 30, radius: 28,
    },
    faq: {
      content: "Frequently asked questions", subtitle: "A few things you might want to know.",
      items: [
        "Can I customise every block?|Yes. You can change content, colours, spacing, layout and motion settings.",
        "Can I export my work?|Yes. Export the artboard as a PNG image or PDF.",
        "Do I need to write code?|No. The playground is designed around visual blocks.",
      ],
      padding: 28, radius: 20,
    },
    logoCloud: {
      content: "Teams building better things", subtitle: "A few names you might recognise.",
      items: ["NORTHSTAR", "MOTION LAB", "KINDA", "FOLIO", "MADEWELL"], padding: 30,
    },
    gallery: { content: "A little inspiration", subtitle: "Bring your story to life with visuals.", items: ["01", "02", "03"], padding: 24, radius: 20 },
    divider: { content: "", background: "#E6E8E8", padding: 10, radius: 99, shadow: 0 },
    spacer: { content: "", padding: 34, background: "transparent", shadow: 0 },
    form: {
      content: "Let's talk about your idea", subtitle: "Tell us a little about what you're building.",
      background: MIST, padding: 30, radius: 28,
    },
    footer: {
      content: "Joeteck", subtitle: "Made for the ideas that move things forward.",
      items: ["About", "Features", "Contact", "Privacy"],
      background: INK, textColor: "#FFFFFF", mutedColor: "#A3A8B0", padding: 36, radius: 28,
    },
    appHeader: { content: "Overview", subtitle: "Good morning, Alex", background: "#FFFFFF", padding: 20, radius: 22 },
    appMetric: { content: "Total revenue", subtitle: "$48,290|+12.8% this month", background: "#FFFFFF", padding: 22, radius: 22 },
    appList: {
      content: "Recent activity", subtitle: "Your latest updates",
      items: ["New order received|#ORD-2048|Paid", "Subscription renewed|#SUB-0912|Complete", "New customer joined|#CUS-1830|Pending"],
      background: "#FFFFFF", padding: 24, radius: 22,
    },
  };

  return { ...common, ...presets[type] };
};

const INITIAL: Block[] = [
  base("navbar", "nav-1"),
  base("hero", "hero-1"),
  base("featureGrid", "features-1"),
  base("stats", "stats-1"),
  base("testimonial", "quote-1"),
  base("footer", "footer-1"),
];

const animationMap: Record<MotionPreset, { initial: Record<string, number | string>; animate: Record<string, number | string> }> = {
  none: { initial: { opacity: 1 }, animate: { opacity: 1 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  rise: { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 } },
  slideLeft: { initial: { opacity: 0, x: 34 }, animate: { opacity: 1, x: 0 } },
  slideRight: { initial: { opacity: 0, x: -34 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } },
  blur: { initial: { opacity: 0, filter: "blur(12px)" }, animate: { opacity: 1, filter: "blur(0px)" } },
  flip: { initial: { opacity: 0, rotateX: -18 }, animate: { opacity: 1, rotateX: 0 } },
  spring: { initial: { opacity: 0, scale: 0.86, y: 18 }, animate: { opacity: 1, scale: 1, y: 0 } },
  bounce: { initial: { opacity: 0, y: 38, scale: 0.94 }, animate: { opacity: 1, y: 0, scale: 1 } },
};

const FEATURE_ICONS: React.ElementType[] = [Zap, Grid2X2, Sparkles, Star, Layers, Check];

/* ------------------------------------------------------------------ */
/*  Block rendering                                                    */
/* ------------------------------------------------------------------ */

function BlockContent({ block: b }: { block: Block }) {
  const dark = isDark(b.background);

  const titleStyle: CSSProperties = {
    color: b.textColor, fontSize: b.fontSize, lineHeight: 1.1,
    letterSpacing: "-0.04em", fontWeight: b.fontWeight, margin: 0,
    overflowWrap: "break-word", wordBreak: "break-word",
  };

  const subStyle: CSSProperties = {
    color: b.mutedColor, fontSize: 15, lineHeight: 1.65,
    margin: b.align === "center" ? "12px auto 0" : b.align === "right" ? "12px 0 0 auto" : "12px 0 0",
    maxWidth: 620, overflowWrap: "break-word",
  };

  const alignStyle: CSSProperties = { textAlign: b.align };
  const justify = b.align === "center" ? "center" : b.align === "right" ? "flex-end" : "flex-start";

  const cta = (label: string, tone: "dark" | "accent" = "dark", icon?: React.ReactNode) => {
    const bg = tone === "dark" ? b.textColor : b.accent;
    return (
      <button type="button" className="nb-pill-button" style={{ background: bg, color: readableOn(bg) }}>
        {icon}
        {label}
      </button>
    );
  };

  const items = b.items.length ? b.items : ["Design with freedom", "Build at your pace", "Share with confidence"];

  switch (b.type) {
    case "navbar":
      return (
        <div className="nb-navbar" style={{ background: b.background, borderRadius: b.radius }}>
          <strong style={{ color: b.textColor }}>
            <span className="nb-brand-mark" style={{ background: b.textColor, color: b.accent }}>
              {b.content.trim().charAt(0).toUpperCase() || "J"}
            </span>
            <span className="nb-brand-text">{b.content}</span>
          </strong>
          <div className="nb-nav-links" style={{ color: b.mutedColor }}>
            {(b.subtitle || "Product, Resources, Pricing").split(",").map((x, i) => (
              <span key={i}>{x.trim()}</span>
            ))}
          </div>
          {cta("Get started")}
        </div>
      );

    case "hero":
      return (
        <div
          className={`nb-hero ${b.variant === "split" ? "split" : ""}`}
          style={{ background: b.background, borderRadius: b.radius, padding: b.padding, ...alignStyle }}
        >
          <div className="nb-hero-copy">
            <div style={{ display: "flex", justifyContent: justify }}>
              <span className="nb-eyebrow" style={{ background: b.accent, color: readableOn(b.accent) }}>
                <Sparkles size={13} /> Your next chapter starts here
              </span>
            </div>
            <h1 style={titleStyle}>{b.content}</h1>
            <p style={subStyle}>{b.subtitle}</p>
            <div className="nb-hero-actions" style={{ justifyContent: justify }}>
              {cta("Start creating", "dark", <Play size={12} fill="currentColor" />)}
              <span className="nb-ghost-pill" style={{ color: b.textColor }}>Explore the blocks</span>
            </div>
          </div>
          {b.variant === "split" && (
            <div className="nb-hero-art">
              <div className="nb-art-window">
                <div className="nb-art-dots"><i /><i /><i /></div>
                <div
                  className="nb-art-gradient"
                  style={{ background: `linear-gradient(135deg, ${b.accent}, color-mix(in srgb, ${b.accent} 35%, white))` }}
                />
                <div className="nb-art-card">
                  <span className="nb-art-icon" style={{ background: b.textColor, color: b.accent }}>
                    <Sparkles size={16} />
                  </span>
                  <b>Ideas, meet possibility.</b>
                  <small>Made with Joeteck</small>
                </div>
              </div>
            </div>
          )}
        </div>
      );

    case "heading":
      return (
        <div style={{ padding: b.padding, ...alignStyle }}>
          <h2 style={titleStyle}>{b.content}</h2>
          {b.subtitle && <p style={subStyle}>{b.subtitle}</p>}
        </div>
      );

    case "paragraph":
      return (
        <p style={{ padding: b.padding, margin: 0, color: b.textColor, fontSize: b.fontSize, fontWeight: b.fontWeight, lineHeight: 1.75, ...alignStyle }}>
          {b.content}
        </p>
      );

    case "button": {
      const v = b.variant;
      const bg = v === "outline" ? "transparent" : v === "solid" ? b.accent : b.textColor;
      const fg = v === "outline" ? b.textColor : readableOn(bg);
      return (
        <div style={{ padding: b.padding, textAlign: b.align }}>
          <button
            type="button"
            className="nb-pill-button"
            style={{
              background: bg, color: fg, fontSize: b.fontSize, borderRadius: b.radius,
              border: v === "outline" ? `1.5px solid ${b.textColor}` : "1.5px solid transparent",
            }}
          >
            {b.content}
          </button>
        </div>
      );
    }

    case "image":
      return (
        <div style={{ padding: b.padding }}>
          <img className="nb-image" src={b.imageUrl} alt={b.content} style={{ borderRadius: b.radius }} />
          {b.content && <p className="nb-image-caption" style={{ color: b.mutedColor }}>{b.content}</p>}
        </div>
      );

    case "video":
      return (
        <div
          className="nb-video"
          style={{
            borderRadius: b.radius,
            backgroundImage: `linear-gradient(0deg,rgba(7,8,11,.62),rgba(7,8,11,.04)),url(${b.imageUrl})`,
          }}
        >
          <button type="button" className="nb-play" style={{ background: b.accent, color: readableOn(b.accent) }}>
            <Play size={20} fill="currentColor" />
          </button>
          <div><b>{b.content}</b><span>{b.subtitle}</span></div>
        </div>
      );

    case "card":
      return (
        <div
          className="nb-card"
          style={{
            padding: b.padding, borderRadius: b.radius, background: b.background,
            boxShadow: `0 12px 36px rgba(7,8,11,${b.shadow * 0.04})`,
          }}
        >
          <div className="nb-card-icon" style={{ background: b.accent, color: readableOn(b.accent) }}>
            <WandSparkles size={20} />
          </div>
          <h3 style={{ color: b.textColor, fontSize: b.fontSize, fontWeight: b.fontWeight }}>{b.content}</h3>
          <p style={{ color: b.mutedColor }}>{b.subtitle}</p>
          <span className="nb-card-link" style={{ color: b.textColor }}>Discover more</span>
        </div>
      );

    case "featureGrid":
      return (
        <div className="nb-section" style={{ padding: b.padding, background: b.background, borderRadius: b.radius }}>
          <div style={alignStyle}>
            <h2 style={titleStyle}>{b.content}</h2>
            <p style={subStyle}>{b.subtitle}</p>
          </div>
          <div className="nb-feature-grid" data-cols={b.columns} style={{ gap: b.gap }}>
            {items.slice(0, 6).map((x, i) => {
              const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
              return (
                <div className="nb-feature" key={i} style={{ background: dark ? "rgba(255,255,255,.07)" : MIST }}>
                  <div className="nb-feature-icon" style={{ background: b.accent, color: readableOn(b.accent) }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ color: b.textColor }}>{x}</h3>
                  <p style={{ color: b.mutedColor }}>
                    Everything you need, thoughtfully designed to make your workflow feel effortless.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );

    case "stats":
      return (
        <div className="nb-section" style={{ padding: b.padding, background: b.background, color: b.textColor, borderRadius: b.radius }}>
          <h2 style={{ ...titleStyle, ...alignStyle }}>{b.content}</h2>
          <p style={subStyle}>{b.subtitle}</p>
          <div className="nb-stats" data-cols={b.columns} style={{ gap: b.gap }}>
            {items.slice(0, 4).map((x, i) => {
              const [n, l] = x.split("|");
              return (
                <div key={i} style={{ borderTopColor: soft(b.textColor, 16) }}>
                  <strong style={{ color: dark ? b.accent : b.textColor }}>{n}</strong>
                  <span style={{ color: b.mutedColor }}>{l || "A little more progress"}</span>
                </div>
              );
            })}
          </div>
        </div>
      );

    case "testimonial": {
      const [name, role] = b.subtitle.split("|").map(s => s.trim());
      return (
        <div
          className="nb-testimonial"
          style={{ padding: b.padding, background: b.background, borderRadius: b.radius, textAlign: b.align }}
        >
          <span className="nb-quote-badge" style={{ background: b.accent, color: readableOn(b.accent) }}>
            <Quote size={18} />
          </span>
          <p style={{ color: b.textColor, fontSize: b.fontSize, fontWeight: b.fontWeight }}>{b.content}</p>
          <div className="nb-author" style={{ justifyContent: justify }}>
            <span className="nb-avatar-dot" style={{ background: b.textColor, color: b.accent }}>
              {(name || "A").charAt(0).toUpperCase()}
            </span>
            <span>
              <b style={{ color: b.textColor }}>{name}</b>
              {role && <small style={{ color: b.mutedColor }}>{role}</small>}
            </span>
          </div>
        </div>
      );
    }

    case "pricing":
      return (
        <div
          className="nb-pricing"
          style={{
            padding: b.padding, borderRadius: b.radius, background: b.background, borderColor: b.textColor,
            boxShadow: `0 14px 40px rgba(7,8,11,${b.shadow * 0.04})`,
          }}
        >
          <span className="nb-plan" style={{ background: b.accent, color: readableOn(b.accent) }}>Most popular</span>
          <h3 style={{ color: b.textColor }}>{b.content}</h3>
          <p style={{ color: b.mutedColor }}>{b.subtitle}</p>
          <div className="nb-price" style={{ color: b.textColor }}>$24 <small>/ month</small></div>
          {items.map((x, i) => (
            <span className="nb-checkline" key={i} style={{ color: b.textColor }}>
              <i style={{ background: b.accent, color: readableOn(b.accent) }}><Check size={11} strokeWidth={3} /></i>
              {x}
            </span>
          ))}
          {cta("Choose this plan")}
        </div>
      );

    case "faq":
      return (
        <div className="nb-section" style={{ padding: b.padding }}>
          <h2 style={titleStyle}>{b.content}</h2>
          <p style={subStyle}>{b.subtitle}</p>
          <div className="nb-faq-list">
            {items.map((x, i) => {
              const [q, a] = x.split("|");
              return (
                <details key={i} open={i === 0} style={{ background: MIST }}>
                  <summary style={{ color: b.textColor }}>
                    {q}
                    <span className="nb-faq-chevron"><ChevronDown size={15} /></span>
                  </summary>
                  <p style={{ color: b.mutedColor }}>{a || "Add your answer in the inspector."}</p>
                </details>
              );
            })}
          </div>
        </div>
      );

    case "logoCloud":
      return (
        <div className="nb-section" style={{ padding: b.padding, textAlign: "center" }}>
          <h3 style={{ color: b.textColor, fontSize: 18, fontWeight: b.fontWeight, margin: 0 }}>{b.content}</h3>
          <p style={{ ...subStyle, margin: "10px auto 0" }}>{b.subtitle}</p>
          <div className="nb-logos">
            {items.map((x, i) => <b key={i} style={{ color: b.mutedColor }}>{x}</b>)}
          </div>
        </div>
      );

    case "gallery":
      return (
        <div className="nb-section" style={{ padding: b.padding }}>
          <h2 style={titleStyle}>{b.content}</h2>
          <p style={subStyle}>{b.subtitle}</p>
          <div className="nb-gallery">
            {["photo-1497366754035-f200968a6e72", "photo-1497366216548-37526070297c", "photo-1524758631624-e2822e304c36"].map(x => (
              <img key={x} src={`https://images.unsplash.com/${x}?w=700&q=80`} alt="Gallery preview" style={{ borderRadius: b.radius }} />
            ))}
          </div>
        </div>
      );

    case "divider":
      return <div style={{ padding: `${b.padding}px 0` }}><div style={{ height: 1, background: b.background }} /></div>;

    case "spacer":
      return (
        <div
          style={{
            height: b.padding, borderRadius: 10, opacity: 0.7,
            background: "repeating-linear-gradient(135deg,#F6F7F7,#F6F7F7 5px,#EDEFEF 5px,#EDEFEF 10px)",
          }}
        />
      );

    case "form":
      return (
        <div className="nb-form" style={{ padding: b.padding, borderRadius: b.radius, background: b.background }}>
          <h2 style={titleStyle}>{b.content}</h2>
          <p style={subStyle}>{b.subtitle}</p>
          <div className="nb-form-grid">
            <input placeholder="Your name" />
            <input placeholder="Email address" />
            <textarea placeholder="Tell us about your project" />
          </div>
          {cta("Send message")}
        </div>
      );

    case "footer":
      return (
        <div className="nb-footer" style={{ padding: b.padding, background: b.background, color: b.textColor, borderRadius: b.radius }}>
          <div>
            <b>
              <i style={{ background: b.accent }} />
              {b.content}
            </b>
            <p style={{ color: b.mutedColor }}>{b.subtitle}</p>
          </div>
          <div className="nb-footer-links" style={{ color: b.mutedColor }}>
            {items.map((x, i) => <span key={`${x}-${i}`}>{x}</span>)}
          </div>
          <small style={{ color: b.mutedColor, borderTopColor: soft(b.textColor, 14) }}>
            © 2026 {b.content}. All rights reserved.
          </small>
        </div>
      );

    case "appHeader":
      return (
        <div className="nb-app-header" style={{ padding: b.padding, borderRadius: b.radius, background: b.background }}>
          <div>
            <span style={{ color: b.mutedColor }}>Workspace / Dashboard</span>
            <h3 style={{ color: b.textColor }}>{b.content}</h3>
            <p style={{ color: b.mutedColor }}>{b.subtitle}</p>
          </div>
          <div className="nb-avatar" style={{ background: b.accent, color: readableOn(b.accent) }}>A</div>
        </div>
      );

    case "appMetric": {
      const [value, change] = b.subtitle.split("|");
      return (
        <div className="nb-metric" style={{ padding: b.padding, borderRadius: b.radius, background: b.background }}>
          <span style={{ color: b.mutedColor }}>{b.content}</span>
          <strong style={{ color: b.textColor }}>{value || "$48,290"}</strong>
          <small className="nb-delta">↗ {change || "+12.8% this month"}</small>
          <svg className="nb-sparkline" viewBox="0 0 120 36" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="0,36 0,28 15,24 30,26 45,17 60,20 75,11 90,15 105,6 120,3 120,36" fill={soft(b.accent, 55)} />
            <polyline
              points="0,28 15,24 30,26 45,17 60,20 75,11 90,15 105,6 120,3"
              fill="none" stroke={b.textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      );
    }

    case "appList":
      return (
        <div className="nb-data-list" style={{ padding: b.padding, borderRadius: b.radius, background: b.background }}>
          <h3 style={{ color: b.textColor }}>{b.content}</h3>
          <p style={{ color: b.mutedColor }}>{b.subtitle}</p>
          {items.map((x, i) => {
            const [a, id, status] = x.split("|");
            return (
              <div className="nb-data-row" key={i}>
                <span className="nb-row-icon" style={{ background: b.accent, color: readableOn(b.accent) }}><Box size={15} /></span>
                <div><b style={{ color: b.textColor }}>{a}</b><small style={{ color: b.mutedColor }}>{id}</small></div>
                <em>{status || "Complete"}</em>
              </div>
            );
          })}
        </div>
      );

    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/*  Playground                                                         */
/* ------------------------------------------------------------------ */

export default function JoeteckPlayground({ embedded = false }: { embedded?: boolean }) {
  const [blocks, setBlocks] = useState<Block[]>(INITIAL);
  const [selectedId, setSelectedId] = useState<string | null>("hero-1");
  const [device, setDevice] = useState<Device>("desktop");

  const [panelOpen, setPanelOpen] = useState(true);
  const [panelTab, setPanelTab] = useState<PanelTab>("blocks");
  const [inspectorTab, setInspectorTab] = useState<"content" | "style" | "motion">("content");

  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const [dragging, setDragging] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [guideStep, setGuideStep] = useState(0);

  const [preview, setPreview] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);

  const [projectName, setProjectName] = useState("Untitled project");
  const [editingName, setEditingName] = useState(false);

  const artboardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = blocks.find(b => b.id === selectedId) || null;

  /* ---------- library ---------- */
  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = LIBRARY.filter(x => !q || `${x.label} ${x.desc} ${x.group}`.toLowerCase().includes(q));
    return Array.from(new Set(matches.map(x => x.group))).map(name => ({
      name,
      items: matches.filter(x => x.group === name),
    }));
  }, [query]);

  /* ---------- block actions ---------- */
  const addBlock = (type: BlockType, index = blocks.length) => {
    const next = base(type);
    setBlocks(old => [...old.slice(0, index), next, ...old.slice(index)]);
    setSelectedId(next.id);
    setInspectorTab("content");
    setPanelTab("customise");
    setPanelOpen(true);
  };

  const update = (patch: Partial<Block>) => {
    if (!selectedId) return;
    setBlocks(old => old.map(b => (b.id === selectedId ? { ...b, ...patch } : b)));
  };

  const remove = (id: string) => {
    setBlocks(old => old.filter(b => b.id !== id));
    setSelectedId(cur => (cur === id ? null : cur));
  };

  const duplicate = (id: string) => {
    const i = blocks.findIndex(b => b.id === id);
    if (i < 0) return;
    const copy = { ...blocks[i], id: `${blocks[i].type}-${Date.now()}`, name: `${blocks[i].name} copy` };
    setBlocks(old => [...old.slice(0, i + 1), copy, ...old.slice(i + 1)]);
    setSelectedId(copy.id);
    setInspectorTab("content");
    setPanelTab("customise");
    setPanelOpen(true);
  };

  const move = (id: string, direction: -1 | 1) => {
    setBlocks(old => {
      const i = old.findIndex(b => b.id === id);
      const j = i + direction;
      if (i < 0 || j < 0 || j >= old.length) return old;
      const next = [...old];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };

  const selectBlock = (id: string) => {
    setSelectedId(id);
    setInspectorTab("content");
    setPanelTab("customise");
    setPanelOpen(true);
  };

  const openTab = (tab: PanelTab) => {
    if (panelOpen && panelTab === tab) {
      setPanelOpen(false);
      return;
    }
    setPanelTab(tab);
    setPanelOpen(true);
  };

  /* ---------- drag & drop ---------- */
  const isBlockDrag = (e: React.DragEvent) =>
    Array.from(e.dataTransfer.types).includes("application/joeteck-block");

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const type = e.dataTransfer.getData("application/joeteck-block") as BlockType;
    if (LIBRARY.some(x => x.type === type)) addBlock(type);
  };

  /* ---------- keyboard ---------- */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const t = e.target as HTMLElement;
    const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName) || t.isContentEditable;
    if (typing) return;
    if (e.key === "/") {
      e.preventDefault();
      setPanelTab("blocks");
      setPanelOpen(true);
      window.setTimeout(() => searchRef.current?.focus(), 60);
    } else if (e.key === "Escape") {
      setSelectedId(null);
      setExportOpen(false);
    }
  };

  /* ---------- export ---------- */
  const exportFile = async (format: "png" | "pdf") => {
    const node = artboardRef.current;
    if (!node) return;
    setExporting(true);
    try {
      await new Promise<void>(r => requestAnimationFrame(() => requestAnimationFrame(() => r())));
      const data = await toPng(node, { cacheBust: true, pixelRatio: 2, backgroundColor: "#ffffff" });
      const safeName = projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "joeteck-project";
      if (format === "png") {
        const a = document.createElement("a");
        a.download = `${safeName}.png`;
        a.href = data;
        a.click();
      } else {
        const w = node.scrollWidth;
        const h = node.scrollHeight;
        const pdf = new jsPDF({ orientation: w > h ? "landscape" : "portrait", unit: "px", format: [w, h] });
        pdf.addImage(data, "PNG", 0, 0, w, h);
        pdf.save(`${safeName}.pdf`);
      }
    } catch (error) {
      console.error("Export failed", error);
      alert("Export could not be completed. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  /* ---------- motion (preview only) ---------- */
  const motionTransition = (b: Block) =>
    b.easing === "backOut"
      ? { type: "spring" as const, stiffness: 240, damping: 18, delay: b.delay / 10 }
      : {
          duration: b.duration / 10,
          delay: b.delay / 10,
          ease: b.easing === "linear" ? ("linear" as const) : b.easing === "easeInOut" ? ("easeInOut" as const) : ("easeOut" as const),
          repeat: b.repeat ? Infinity : 0,
        };

  /* ---------- inspector helpers ---------- */
  const field = (label: string, child: React.ReactNode, hint?: string) => (
    <label className="nb-field">
      <span>{label}</span>
      {child}
      {hint && <small>{hint}</small>}
    </label>
  );

  const textInput = (key: "content" | "subtitle" | "imageUrl", label: string, multiline = false, hint?: string) =>
    field(label, multiline ? (
      <textarea value={selected?.[key] || ""} onChange={e => update({ [key]: e.target.value } as Partial<Block>)} rows={3} />
    ) : (
      <input value={selected?.[key] || ""} onChange={e => update({ [key]: e.target.value } as Partial<Block>)} />
    ), hint);

  const range = (key: keyof Block, label: string, min: number, max: number, suffix = "") =>
    field(`${label}  ${selected?.[key]}${suffix}`, (
      <input
        type="range" min={min} max={max} value={Number(selected?.[key] ?? min)}
        onChange={e => update({ [key]: Number(e.target.value) } as Partial<Block>)}
      />
    ));

  const color = (key: "accent" | "background" | "textColor" | "mutedColor", label: string) =>
    field(label, (
      <div className="nb-color-control">
        <input
          type="color"
          value={hexToRgb(selected?.[key] || "") ? (selected?.[key] as string) : "#ffffff"}
          onChange={e => update({ [key]: e.target.value } as Partial<Block>)}
        />
        <input value={selected?.[key] || ""} onChange={e => update({ [key]: e.target.value } as Partial<Block>)} />
      </div>
    ));

  const showGrid = selected ? ["featureGrid", "stats"].includes(selected.type) : false;

  /* ================================================================ */
  /*  Render                                                           */
  /* ================================================================ */

  return (
    <main
      className={`nexa-app${embedded ? " nexa-app-embedded" : ""}${preview ? " is-preview" : ""}`}
      onKeyDown={handleKeyDown}
    >
      <div className="nb-frame">
        {/* ============ RAIL ============ */}
        {!preview && (
          <nav className="nb-rail" aria-label="Playground sections">
            <div className="nb-logo" title="Joeteck Playground"><span /></div>

            <div className="nb-rail-group">
              <button
                type="button" title="Blocks"
                className={`nb-rail-btn ${panelOpen && panelTab === "blocks" ? "active" : ""}`}
                onClick={() => openTab("blocks")}
              >
                <Blocks size={18} />
              </button>
              <button
                type="button" title="Layers"
                className={`nb-rail-btn ${panelOpen && panelTab === "layers" ? "active" : ""}`}
                onClick={() => openTab("layers")}
              >
                <Layers size={18} />
                {blocks.length > 0 && <i className="nb-rail-badge">{blocks.length}</i>}
              </button>
              <button
                type="button" title="Customise"
                className={`nb-rail-btn ${panelOpen && panelTab === "customise" ? "active" : ""}`}
                onClick={() => openTab("customise")}
              >
                <Settings2 size={18} />
                {selected && <i className="nb-rail-dot" />}
              </button>
            </div>

            <div className="nb-rail-bottom">
              <button
                type="button" title="Quick guide" className="nb-rail-btn"
                onClick={() => { setPanelTab("blocks"); setPanelOpen(true); setShowGuide(true); setGuideStep(0); }}
              >
                <CircleHelp size={18} />
              </button>
              <span className="nb-rail-avatar" title="Joeteck">J</span>
            </div>
          </nav>
        )}

        {/* ============ UNIFIED LEFT PANEL (blocks / layers / customise) ============ */}
        {!preview && (
          <aside className={`nb-panel ${panelOpen ? "is-open" : "is-closed"} ${panelTab === "customise" ? "is-wide" : ""}`}>
            <div className="nb-panel-inner">
              {/* ---- BLOCKS TAB ---- */}
              {panelTab === "blocks" && (
                <>
                  <div className="nb-panel-head">
                    <div>
                      <h2>Blocks</h2>
                      <p>{LIBRARY.length} components</p>
                    </div>
                    <button type="button" className="nb-icon-btn" onClick={() => setPanelOpen(false)} title="Hide panel">
                      <PanelLeftClose size={16} />
                    </button>
                  </div>

                  {showGuide && (
                    <div className="nb-guide">
                      <div className="nb-guide-top">
                        <span><Sparkles size={13} />Quick start</span>
                        <button type="button" onClick={() => setShowGuide(false)} title="Dismiss"><X size={14} /></button>
                      </div>
                      <div className="nb-guide-progress">
                        <i style={{ width: `${((guideStep + 1) / 3) * 100}%` }} />
                      </div>
                      <b>{["Choose a block", "Drop it on your artboard", "Make it yours"][guideStep]}</b>
                      <p>
                        {[
                          "Start with a section, text, image or app component from the library.",
                          "Drag a block onto the canvas, or click it to add it to the end.",
                          "Select a block to edit its content, styling and motion in Customise.",
                        ][guideStep]}
                      </p>
                      <div className="nb-guide-bottom">
                        <small>Step {guideStep + 1} of 3</small>
                        <button type="button" onClick={() => (guideStep === 2 ? setShowGuide(false) : setGuideStep(guideStep + 1))}>
                          {guideStep === 2 ? "Got it" : "Next step"}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="nb-search">
                    <Search size={15} />
                    <input
                      ref={searchRef}
                      placeholder="Search blocks…"
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                    />
                    <kbd>/</kbd>
                  </div>

                  <div className="nb-library-scroll">
                    {sections.map(section => {
                      const isCollapsed = !query && collapsed[section.name];
                      return (
                        <div className="nb-lib-section" key={section.name}>
                          <button
                            type="button" className="nb-section-head"
                            onClick={() => setCollapsed(c => ({ ...c, [section.name]: !c[section.name] }))}
                            aria-expanded={!isCollapsed}
                          >
                            <span>{section.name}</span>
                            {isCollapsed ? <Plus size={14} /> : <Minus size={14} />}
                          </button>
                          {!isCollapsed && (
                            <div className="nb-tile-grid">
                              {section.items.map(item => (
                                <button
                                  key={item.type}
                                  type="button"
                                  className="nb-tile"
                                  draggable
                                  title={item.desc}
                                  onDragStart={e => {
                                    e.dataTransfer.setData("application/joeteck-block", item.type);
                                    e.dataTransfer.effectAllowed = "copy";
                                  }}
                                  onClick={() => addBlock(item.type)}
                                >
                                  <span className="nb-tile-icon"><item.icon size={20} strokeWidth={1.7} /></span>
                                  <span className="nb-tile-label">{item.label}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {sections.length === 0 && (
                      <p className="nb-empty-library">No blocks match “{query}”. Try another word.</p>
                    )}
                  </div>

                  <div className="nb-panel-foot">
                    <span><MousePointer2 size={13} />Drag to canvas or click to add</span>
                  </div>
                </>
              )}

              {/* ---- LAYERS TAB ---- */}
              {panelTab === "layers" && (
                <>
                  <div className="nb-panel-head">
                    <div>
                      <h2>Layers</h2>
                      <p>{blocks.length} on this page</p>
                    </div>
                    <button type="button" className="nb-icon-btn is-lime" onClick={() => addBlock("heading")} title="Add a heading">
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="nb-layer-list">
                    {blocks.map((b, i) => {
                      const Icon = iconFor(b.type);
                      return (
                        <div
                          key={b.id}
                          className={`nb-layer-row ${selectedId === b.id ? "active" : ""}`}
                          onClick={() => selectBlock(b.id)}
                        >
                          <span className="nb-layer-index">{i + 1}</span>
                          <span className="nb-layer-type"><Icon size={15} /></span>
                          <span className="nb-layer-name">{b.name}</span>
                          <div className="nb-layer-actions">
                            <button type="button" title="Move up" onClick={e => { e.stopPropagation(); move(b.id, -1); }}><ArrowUp size={13} /></button>
                            <button type="button" title="Move down" onClick={e => { e.stopPropagation(); move(b.id, 1); }}><ArrowDown size={13} /></button>
                            <button type="button" title="Duplicate" onClick={e => { e.stopPropagation(); duplicate(b.id); }}><Copy size={13} /></button>
                            <button type="button" title="Delete" className="is-danger" onClick={e => { e.stopPropagation(); remove(b.id); }}><Trash2 size={13} /></button>
                          </div>
                        </div>
                      );
                    })}
                    {blocks.length === 0 && <p className="nb-empty-library">Your layers will appear here.</p>}
                  </div>
                </>
              )}

              {/* ---- CUSTOMISE TAB ---- */}
              {panelTab === "customise" && (
                <>
                  {selected ? (
                    <>
                      <div className="nb-panel-head">
                        <div>
                          <h2>{selected.name}</h2>
                          <p>{selected.type} component</p>
                        </div>
                        <div className="nb-head-actions">
                          <button type="button" className="nb-icon-btn" onClick={() => duplicate(selected.id)} title="Duplicate"><Copy size={15} /></button>
                          <button type="button" className="nb-icon-btn" onClick={() => setPanelOpen(false)} title="Close panel"><X size={15} /></button>
                        </div>
                      </div>

                      <div className="nb-seg is-block nb-tabs-padded" role="tablist" aria-label="Inspector sections">
                        <button type="button" role="tab" aria-selected={inspectorTab === "content"} className={inspectorTab === "content" ? "active" : ""} onClick={() => setInspectorTab("content")}>Content</button>
                        <button type="button" role="tab" aria-selected={inspectorTab === "style"} className={inspectorTab === "style" ? "active" : ""} onClick={() => setInspectorTab("style")}>Style</button>
                        <button type="button" role="tab" aria-selected={inspectorTab === "motion"} className={inspectorTab === "motion" ? "active" : ""} onClick={() => setInspectorTab("motion")}>Motion</button>
                      </div>

                      <div className="nb-inspector-scroll">
                        {inspectorTab === "content" && (
                          <>
                            <div className="nb-prop-section">
                              <h3>Content</h3>
                              {field("Layer name", (
                                <input value={selected.name} onChange={e => update({ name: e.target.value })} />
                              ))}

                              {selected.type !== "divider" && selected.type !== "spacer" && (
                                textInput(
                                  "content",
                                  selected.type === "paragraph" || selected.type === "testimonial" ? "Text" : "Title",
                                  selected.type === "paragraph" || selected.type === "testimonial"
                                )
                              )}

                              {USES_SUBTITLE.includes(selected.type) &&
                                textInput("subtitle", "Supporting text", true, SUBTITLE_HINT[selected.type])}

                              {USES_ITEMS.includes(selected.type) &&
                                field("Items", (
                                  <textarea
                                    rows={5} value={selected.items.join("\n")}
                                    onChange={e => update({ items: e.target.value.split("\n") })}
                                  />
                                ), ITEMS_HINT[selected.type] || "One item per line")}

                              {["image", "video"].includes(selected.type) && textInput("imageUrl", "Image URL")}

                              {selected.type === "button" &&
                                field("Button style", (
                                  <select value={selected.variant} onChange={e => update({ variant: e.target.value })}>
                                    <option value="dark">Black</option>
                                    <option value="solid">Accent</option>
                                    <option value="outline">Outline</option>
                                  </select>
                                ))}

                              {selected.type === "hero" &&
                                field("Layout", (
                                  <select value={selected.variant} onChange={e => update({ variant: e.target.value })}>
                                    <option value="split">Text and artwork</option>
                                    <option value="default">Text only</option>
                                  </select>
                                ))}
                            </div>

                            <div className="nb-prop-section">
                              <h3>Layout</h3>
                              {field("Text alignment", (
                                <div className="nb-align-picker">
                                  {(["left", "center", "right"] as Align[]).map(a => (
                                    <button type="button" key={a} className={selected.align === a ? "active" : ""} onClick={() => update({ align: a })}>
                                      {a === "left" ? <AlignLeft size={15} /> : a === "center" ? <AlignCenter size={15} /> : <AlignRight size={15} />}
                                    </button>
                                  ))}
                                </div>
                              ))}
                              {range("width", "Block width", 35, 100, "%")}
                              {showGrid && range("columns", "Grid columns", 1, 4)}
                              {showGrid && range("gap", "Item gap", 8, 40, "px")}
                            </div>
                          </>
                        )}

                        {inspectorTab === "style" && (
                          <>
                            <div className="nb-prop-section">
                              <h3>Colours</h3>
                              {color("accent", "Accent")}
                              {color("background", "Background")}
                              {color("textColor", "Text")}
                              {color("mutedColor", "Secondary text")}
                            </div>

                            <div className="nb-prop-section">
                              <h3>Typography</h3>
                              {range("fontSize", "Font size", 12, 72, "px")}
                              {field("Font weight", (
                                <select value={selected.fontWeight} onChange={e => update({ fontWeight: Number(e.target.value) })}>
                                  <option value={400}>Regular</option>
                                  <option value={500}>Medium</option>
                                  <option value={600}>Semibold</option>
                                  <option value={700}>Bold</option>
                                  <option value={800}>Extra bold</option>
                                </select>
                              ))}
                            </div>

                            <div className="nb-prop-section">
                              <h3>Spacing and shape</h3>
                              {range("padding", "Inner spacing", 0, 88, "px")}
                              {range("radius", "Corner radius", 0, 40, "px")}
                              {range("shadow", "Shadow", 0, 8)}
                              {field("Surface preset", (
                                <div className="nb-preset-row">
                                  {[{ n: "Clean", v: 0 }, { n: "Soft", v: 2 }, { n: "Float", v: 5 }].map(x => (
                                    <button type="button" key={x.n} className={selected.shadow === x.v ? "active" : ""} onClick={() => update({ shadow: x.v })}>
                                      {x.n}
                                    </button>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {inspectorTab === "motion" && (
                          <>
                            <div className="nb-motion-intro">
                              <Sparkles size={16} />
                              <span>Entrance animations play in Preview. Switch to Preview to see this block move.</span>
                            </div>
                            <div className="nb-prop-section">
                              <h3>Entrance</h3>
                              {field("Animation preset", (
                                <select value={selected.animation} onChange={e => update({ animation: e.target.value as MotionPreset })}>
                                  {(["none", "fade", "rise", "slideLeft", "slideRight", "scale", "blur", "flip", "spring", "bounce"] as MotionPreset[]).map(x => (
                                    <option key={x} value={x}>{x.charAt(0).toUpperCase() + x.slice(1)}</option>
                                  ))}
                                </select>
                              ))}
                              {range("duration", "Duration", 1, 20, " × 0.1s")}
                              {range("delay", "Delay", 0, 20, " × 0.1s")}
                              {field("Easing", (
                                <select value={selected.easing} onChange={e => update({ easing: e.target.value as Easing })}>
                                  <option value="easeOut">Ease out</option>
                                  <option value="easeInOut">Ease in-out</option>
                                  <option value="linear">Linear</option>
                                  <option value="backOut">Spring</option>
                                </select>
                              ))}
                              <label className="nb-toggle">
                                <span>Repeat animation</span>
                                <input type="checkbox" checked={selected.repeat} onChange={e => update({ repeat: e.target.checked })} />
                                <i />
                              </label>
                              <label className="nb-toggle">
                                <span>Trigger on scroll into view</span>
                                <input type="checkbox" checked={selected.inView} onChange={e => update({ inView: e.target.checked })} />
                                <i />
                              </label>
                            </div>
                            <div className="nb-prop-section">
                              <h3>Interactions</h3>
                              {field("Hover effect", (
                                <select value={selected.hover} onChange={e => update({ hover: e.target.value as Block["hover"] })}>
                                  <option value="none">None</option>
                                  <option value="lift">Lift</option>
                                  <option value="scale">Scale</option>
                                  <option value="glow">Glow</option>
                                  <option value="tilt">Tilt</option>
                                </select>
                              ))}
                              <p className="nb-helper-copy">
                                Hover effects also run in Preview. Motion uses Framer Motion&apos;s animation and gesture primitives.
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      <div className="nb-inspector-bottom">
                        <button type="button" className="nb-delete-button" onClick={() => remove(selected.id)}>
                          <Trash2 size={14} />Delete
                        </button>
                        <button type="button" className="nb-done-button" onClick={() => setSelectedId(null)}>
                          <Check size={14} />Done
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="nb-inspector-empty">
                      <div><MousePointer2 size={22} /></div>
                      <b>Select a block to edit</b>
                      <p>Choose any block on the artboard to change its content, style and motion.</p>
                      <button type="button" onClick={() => { setPanelTab("blocks"); }}>
                        <Settings2 size={14} />Browse blocks
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </aside>
        )}

        {/* ============ MAIN ============ */}
        <section className="nb-main">
          <header className="nb-topbar">
            <div className="nb-crumbs">
              {!preview && (
                <button
                  type="button" className="nb-icon-btn"
                  onClick={() => setPanelOpen(!panelOpen)}
                  title={panelOpen ? "Hide panel" : "Show panel"}
                >
                  {panelOpen ? <PanelLeftClose size={16} /> : <PanelLeftOpen size={16} />}
                </button>
              )}
              <span className="nb-crumb-root"><Blocks size={16} />Playground</span>
              <ChevronRight size={15} className="nb-crumb-sep" />
              {editingName ? (
                <input
                  className="nb-name-input" autoFocus value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  onBlur={() => setEditingName(false)}
                  onKeyDown={e => e.key === "Enter" && setEditingName(false)}
                />
              ) : (
                <button type="button" className="nb-crumb-name" onClick={() => setEditingName(true)} title="Rename project">
                  {projectName}
                  <Pencil size={12} />
                </button>
              )}
              <span className="nb-chip"><i />Draft</span>
            </div>

            <div className="nb-top-actions">
              <div className="nb-seg" role="tablist" aria-label="Mode">
                <button type="button" role="tab" aria-selected={!preview} className={!preview ? "active" : ""} onClick={() => setPreview(false)}>
                  <Pencil size={13} />Editor
                </button>
                <button type="button" role="tab" aria-selected={preview} className={preview ? "active" : ""} onClick={() => { setPreview(true); setSelectedId(null); }}>
                  <Eye size={13} />Preview
                </button>
              </div>

              <div className="nb-seg nb-seg-icons nb-device-switch" aria-label="Device">
                <button type="button" className={device === "desktop" ? "active" : ""} onClick={() => setDevice("desktop")} title="Desktop"><Monitor size={15} /></button>
                <button type="button" className={device === "tablet" ? "active" : ""} onClick={() => setDevice("tablet")} title="Tablet"><Tablet size={15} /></button>
                <button type="button" className={device === "mobile" ? "active" : ""} onClick={() => setDevice("mobile")} title="Mobile"><Smartphone size={15} /></button>
              </div>

              <div className="nb-export-wrap">
                <button type="button" className="nb-btn-lime" disabled={exporting} onClick={() => setExportOpen(o => !o)}>
                  <Download size={15} />
                  <span>{exporting ? "Exporting…" : "Export"}</span>
                  <ChevronDown size={13} />
                </button>
                {exportOpen && (
                  <>
                    <div className="nb-backdrop" onClick={() => setExportOpen(false)} />
                    <div className="nb-export-menu">
                      <div>
                        <button type="button" onClick={() => { setExportOpen(false); exportFile("png"); }}>
                          <FileImage size={15} />Export as PNG
                        </button>
                        <button type="button" onClick={() => { setExportOpen(false); exportFile("pdf"); }}>
                          <FileText size={15} />Export as PDF
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </header>

          <div className="nb-main-body">
            <div
              ref={canvasRef}
              className={`nb-canvas-scroll ${dragging ? "is-dragging" : ""}`}
              onDragOver={e => { if (isBlockDrag(e)) { e.preventDefault(); setDragging(true); } }}
              onDragLeave={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDragging(false); }}
              onDrop={handleDrop}
            >
              <div
                className={`nb-artboard ${device} ${preview ? "preview-mode" : ""} ${exporting ? "is-exporting" : ""}`}
                ref={artboardRef}
                onClick={() => !preview && setSelectedId(null)}
              >
                {blocks.length === 0 && (
                  <div className="nb-empty-canvas">
                    <div><Blocks size={26} /></div>
                    <h2>Your canvas is ready</h2>
                    <p>Drag your first block here or choose one from the library.</p>
                    <button type="button" onClick={() => addBlock("hero")}>
                      <Plus size={14} />Add a hero section
                    </button>
                  </div>
                )}

                <AnimatePresence key={preview ? "preview" : "edit"} initial={preview}>
                  {blocks.map(b => {
                    const variants = animationMap[b.animation];
                    const isSelected = selectedId === b.id && !preview;
                    return (
                      <motion.div
                        key={b.id}
                        layout={!preview}
                        className={`nb-canvas-block ${isSelected ? "selected" : ""}`}
                        onClick={e => { e.stopPropagation(); if (!preview) selectBlock(b.id); }}
                        initial={preview ? variants.initial : { opacity: 0, y: 8 }}
                        animate={preview && !b.inView ? variants.animate : preview ? undefined : { opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={preview ? motionTransition(b) : { duration: 0.22, ease: "easeOut" }}
                        whileHover={
                          !preview ? undefined : b.hover === "lift" ? { y: -4 }
                          : b.hover === "scale" ? { scale: 1.02 }
                          : b.hover === "glow" ? { boxShadow: "0 12px 32px rgba(200,245,96,0.45)" }
                          : b.hover === "tilt" ? { rotate: 1.2, scale: 1.01 }
                          : undefined
                        }
                        whileTap={preview ? { scale: 0.99 } : undefined}
                        whileInView={preview && b.inView ? variants.animate : undefined}
                        viewport={{ once: true, amount: 0.2, root: canvasRef }}
                        style={{
                          width: `${b.width}%`,
                          alignSelf: b.width === 100 ? "stretch" : b.align === "center" ? "center" : b.align === "right" ? "flex-end" : "flex-start",
                        }}
                      >
                        <BlockContent block={b} />
                        {isSelected && (
                          <>
                            <div className="nb-selection-ui nb-selection-label">{b.name}</div>
                            <div className="nb-selection-ui nb-block-toolbar" onClick={e => e.stopPropagation()}>
                              <button type="button" title="Move up" onClick={() => move(b.id, -1)}><ArrowUp size={14} /></button>
                              <button type="button" title="Move down" onClick={() => move(b.id, 1)}><ArrowDown size={14} /></button>
                              <button type="button" title="Duplicate" onClick={() => duplicate(b.id)}><Copy size={14} /></button>
                              <button type="button" title="Delete" className="is-danger" onClick={() => remove(b.id)}><Trash2 size={14} /></button>
                            </div>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {!preview && (
                  <button type="button" className="nb-add-section" onClick={e => { e.stopPropagation(); addBlock("heading"); }}>
                    <Plus size={14} />Add section
                  </button>
                )}
              </div>

              {dragging && (
                <div className="nb-drop-overlay">
                  <div><Plus size={20} /><b>Drop to add to your canvas</b></div>
                </div>
              )}
            </div>
          </div>

          <footer className="nb-stage-footer">
            <span><i className="nb-footer-dot" />Artboard, {device}</span>
            <span>{blocks.length} {blocks.length === 1 ? "block" : "blocks"} on the page</span>
            <button
              type="button"
              onClick={() => { setPreview(false); setPanelTab("blocks"); setPanelOpen(true); setShowGuide(true); setGuideStep(0); }}
            >
              <CircleHelp size={13} />Need a hand?
            </button>
          </footer>
        </section>
      </div>

      <style jsx global>{`
        /* =====================================================================
           TOKENS
           ===================================================================== */
        .nexa-app {
          --nb-ink: #07080b;
          --nb-ink-2: #141629;
          --nb-text: #2a2d34;
          --nb-muted: #8a8e96;
          --nb-faint: #b4b8be;
          --nb-line: #ecefef;
          --nb-line-2: #e1e4e4;
          --nb-bg: #f6f7f7;
          --nb-fill: #f3f4f4;
          --nb-fill-2: #eceeee;
          --nb-surface: #ffffff;
          --nb-lime: #c8f560;
          --nb-lime-hover: #bbeb4c;
          --nb-lime-soft: #f2fbd6;
          --nb-lime-line: #e0f2ae;
          --nb-green: #1f9d55;
          --nb-green-soft: #e8f7ee;
          --nb-green-line: #bfe6cf;
          --nb-danger: #e4572e;
          --nb-danger-soft: #fdeee9;
          --nb-panel-w: 300px;
          --nb-panel-w-wide: 340px;
        }

        .nexa-app *, .nexa-app *::before, .nexa-app *::after { box-sizing: border-box; }
        .nexa-app button, .nexa-app input, .nexa-app textarea, .nexa-app select { font: inherit; }
        .nexa-app button { cursor: pointer; }
        .nexa-app button:disabled { cursor: not-allowed; }
        .nexa-app :focus-visible { outline: 2px solid var(--nb-ink); outline-offset: 2px; }

        .nexa-app {
          height: 100vh;
          min-height: 650px;
          display: flex;
          padding: 14px;
          background:
            radial-gradient(1200px 500px at 15% -10%, #f7f9f9 0%, transparent 60%),
            linear-gradient(180deg, #e9ecec 0%, #f1f3f3 100%);
          color: var(--nb-ink);
          font-family: var(--nb-font, "Inter"), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
          font-size: 13px;
          -webkit-font-smoothing: antialiased;
        }
        .nexa-app-embedded {
          height: min(900px, 88vh);
          min-height: 700px;
          border-radius: 40px;
        }

        .nb-frame {
          position: relative;
          flex: 1;
          min-width: 0;
          display: flex;
          background: var(--nb-surface);
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow:
            0 0 0 1px #dcdfdf,
            0 1px 0 rgba(255, 255, 255, 0.8) inset,
            0 30px 70px rgba(18, 22, 26, 0.12);
          overflow: hidden;
        }

        /* =============================== RAIL =============================== */
        .nb-rail {
          width: 64px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          padding: 18px 0;
          background: var(--nb-surface);
          border-right: 1px solid var(--nb-line);
        }
        .nb-logo {
          width: 38px;
          height: 38px;
          border-radius: 13px;
          background: var(--nb-ink);
          display: grid;
          place-items: center;
        }
        .nb-logo span {
          width: 14px;
          height: 14px;
          border-radius: 4px;
          background: var(--nb-lime);
          transform: rotate(45deg);
        }
        .nb-rail-group, .nb-rail-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .nb-rail-bottom { margin-top: auto; }
        .nb-rail-btn {
          position: relative;
          width: 40px;
          height: 40px;
          border: 0;
          border-radius: 13px;
          background: transparent;
          color: #7a7e86;
          display: grid;
          place-items: center;
          transition: background-color 0.15s, color 0.15s;
        }
        .nb-rail-btn:hover { background: var(--nb-fill); color: var(--nb-ink); }
        .nb-rail-btn.active { background: var(--nb-lime); color: var(--nb-ink); }
        .nb-rail-badge {
          position: absolute;
          top: -3px;
          right: -3px;
          min-width: 17px;
          height: 17px;
          padding: 0 4px;
          border-radius: 999px;
          background: var(--nb-ink);
          color: var(--nb-lime);
          font-style: normal;
          font-size: 10px;
          font-weight: 700;
          display: grid;
          place-items: center;
          border: 2px solid var(--nb-surface);
        }
        .nb-rail-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--nb-ink);
          border: 2px solid var(--nb-surface);
          box-sizing: content-box;
        }
        .nb-rail-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--nb-fill-2);
          color: var(--nb-ink);
          font-weight: 700;
          font-size: 13px;
          display: grid;
          place-items: center;
        }

        /* ============================== PANEL =============================== */
        .nb-panel {
          flex-shrink: 0;
          overflow: hidden;
          background: var(--nb-surface);
          border-right: 1px solid var(--nb-line);
          transition: width 0.25s ease, opacity 0.15s ease;
        }
        .nb-panel.is-open { width: var(--nb-panel-w); opacity: 1; }
        .nb-panel.is-open.is-wide { width: var(--nb-panel-w-wide); }
        .nb-panel.is-closed { width: 0; opacity: 0; pointer-events: none; border-right-color: transparent; }
        .nb-panel-inner {
          width: var(--nb-panel-w);
          height: 100%;
          display: flex;
          flex-direction: column;
          min-height: 0;
          transition: width 0.25s ease;
        }
        .nb-panel.is-wide .nb-panel-inner { width: var(--nb-panel-w-wide); }
        .nb-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 20px 18px 14px;
          flex-shrink: 0;
        }
        .nb-panel-head h2 {
          margin: 0;
          font-size: 17px;
          font-weight: 650;
          letter-spacing: -0.03em;
        }
        .nb-panel-head p {
          margin: 3px 0 0;
          font-size: 12px;
          color: var(--nb-muted);
        }
        .nb-head-actions { display: flex; gap: 6px; }

        .nb-icon-btn {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          border: 1px solid var(--nb-line);
          border-radius: 50%;
          background: var(--nb-surface);
          color: #50545c;
          display: grid;
          place-items: center;
          transition: background-color 0.15s, border-color 0.15s;
        }
        .nb-icon-btn:hover { background: var(--nb-fill); border-color: var(--nb-line-2); color: var(--nb-ink); }
        .nb-icon-btn.is-lime { background: var(--nb-lime); border-color: var(--nb-lime); color: var(--nb-ink); }
        .nb-icon-btn.is-lime:hover { background: var(--nb-lime-hover); }

        /* quick start */
        .nb-guide {
          margin: 0 14px 12px;
          padding: 14px;
          background: var(--nb-lime-soft);
          border: 1px solid var(--nb-lime-line);
          border-radius: 20px;
          flex-shrink: 0;
        }
        .nb-guide-top { display: flex; align-items: center; justify-content: space-between; }
        .nb-guide-top span {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 650;
        }
        .nb-guide-top button { border: 0; background: none; padding: 2px; color: #7c8363; display: grid; }
        .nb-guide-progress {
          height: 4px;
          margin: 11px 0 12px;
          border-radius: 99px;
          background: rgba(7, 8, 11, 0.09);
          overflow: hidden;
        }
        .nb-guide-progress i {
          display: block;
          height: 100%;
          border-radius: 99px;
          background: var(--nb-ink);
          transition: width 0.25s;
        }
        .nb-guide > b { font-size: 13px; font-weight: 650; }
        .nb-guide p { margin: 5px 0 12px; font-size: 12px; line-height: 1.55; color: #4c5139; }
        .nb-guide-bottom { display: flex; align-items: center; justify-content: space-between; }
        .nb-guide-bottom small { font-size: 11px; color: #7c8363; }
        .nb-guide-bottom button {
          border: 0;
          border-radius: 99px;
          background: var(--nb-ink);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 13px;
        }

        /* search */
        .nb-search {
          margin: 0 14px 6px;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 8px 0 13px;
          border-radius: 99px;
          background: var(--nb-fill);
          color: #868a92;
          flex-shrink: 0;
          transition: box-shadow 0.15s, background-color 0.15s;
        }
        .nb-search:focus-within { background: #fff; box-shadow: 0 0 0 1.5px var(--nb-ink); }
        .nb-search input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: none;
          background: transparent;
          color: var(--nb-ink);
          font-size: 13px;
        }
        .nb-search input::placeholder { color: #9a9ea6; }
        .nb-search kbd {
          font: inherit;
          font-size: 11px;
          font-weight: 600;
          color: #7a7e86;
          background: #fff;
          border-radius: 99px;
          padding: 3px 9px;
        }

        /* library */
        .nb-library-scroll { flex: 1; min-height: 0; overflow: auto; padding: 0 14px 14px; }
        .nb-section-head {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 0;
          background: none;
          padding: 16px 2px 10px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #5c6068;
        }
        .nb-section-head svg { color: #9a9ea6; }
        .nb-section-head:hover svg { color: var(--nb-ink); }
        .nb-tile-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
        .nb-tile {
          min-height: 88px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          padding: 13px 13px 12px;
          border: 0;
          border-radius: 18px;
          background: var(--nb-fill);
          color: var(--nb-ink);
          text-align: left;
          transition: background-color 0.15s, box-shadow 0.15s, transform 0.15s;
        }
        .nb-tile:hover { background: #fff; box-shadow: 0 0 0 1.5px var(--nb-ink); }
        .nb-tile:active { transform: scale(0.98); }
        .nb-tile[draggable="true"] { cursor: grab; }
        .nb-tile-icon { display: grid; color: var(--nb-ink); }
        .nb-tile-label { font-size: 12.5px; font-weight: 550; line-height: 1.25; color: #2b2e35; }
        .nb-empty-library { padding: 28px 10px; text-align: center; font-size: 12px; color: #9a9ea6; }
        .nb-panel-foot {
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          padding: 0 18px;
          border-top: 1px solid var(--nb-line);
          font-size: 11.5px;
          color: #9a9ea6;
        }
        .nb-panel-foot span { display: flex; align-items: center; gap: 7px; }

        /* layers */
        .nb-layer-list { flex: 1; min-height: 0; overflow: auto; padding: 4px 12px 14px; }
        .nb-layer-row {
          height: 46px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 8px 0 10px;
          border-radius: 14px;
          color: #60646c;
          cursor: pointer;
        }
        .nb-layer-row:hover { background: var(--nb-fill); }
        .nb-layer-row.active { background: var(--nb-lime-soft); box-shadow: inset 0 0 0 1px var(--nb-lime-line); color: var(--nb-ink); }
        .nb-layer-index { width: 16px; text-align: center; font-size: 11px; font-weight: 600; color: #b4b8be; flex-shrink: 0; }
        .nb-layer-type {
          width: 28px;
          height: 28px;
          border-radius: 9px;
          background: #fff;
          box-shadow: 0 0 0 1px var(--nb-line);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          color: var(--nb-ink);
        }
        .nb-layer-name {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 13px;
          font-weight: 550;
          color: var(--nb-ink);
        }
        .nb-layer-actions { display: none; align-items: center; gap: 1px; }
        .nb-layer-row:hover .nb-layer-actions, .nb-layer-row.active .nb-layer-actions { display: flex; }
        .nb-layer-actions button {
          width: 24px;
          height: 24px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: #7a7e86;
          display: grid;
          place-items: center;
        }
        .nb-layer-actions button:hover { background: rgba(7, 8, 11, 0.07); color: var(--nb-ink); }
        .nb-layer-actions button.is-danger:hover { background: var(--nb-danger-soft); color: var(--nb-danger); }

        /* ============================== MAIN =============================== */
        .nb-main { flex: 1; min-width: 0; display: flex; flex-direction: column; background: var(--nb-bg); }

        .nb-topbar {
          height: 68px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 0 18px;
          background: var(--nb-surface);
          border-bottom: 1px solid var(--nb-line);
          position: relative;
          z-index: 40;
        }
        .nb-crumbs { display: flex; align-items: center; gap: 10px; min-width: 0; }
        .nb-crumb-root {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 650;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .nb-crumb-sep { color: #a4a8af; flex-shrink: 0; }
        .nb-crumb-name {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          max-width: 220px;
          border: 0;
          background: none;
          padding: 4px 8px;
          margin: 0 -4px;
          border-radius: 10px;
          color: #7d818a;
          font-size: 15px;
          letter-spacing: -0.01em;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .nb-crumb-name svg { flex-shrink: 0; opacity: 0; transition: opacity 0.15s; }
        .nb-crumb-name:hover { background: var(--nb-fill); color: var(--nb-ink); }
        .nb-crumb-name:hover svg { opacity: 1; }
        .nb-name-input {
          width: 190px;
          height: 34px;
          padding: 0 13px;
          border: 0;
          border-radius: 99px;
          background: var(--nb-fill);
          box-shadow: 0 0 0 1.5px var(--nb-ink);
          outline: none;
          font-size: 14px;
        }
        .nb-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 26px;
          padding: 0 10px;
          border-radius: 99px;
          border: 1px solid var(--nb-green-line);
          background: var(--nb-green-soft);
          color: var(--nb-green);
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }
        .nb-chip i { width: 6px; height: 6px; border-radius: 50%; background: var(--nb-green); }

        .nb-top-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

        .nb-seg {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          padding: 4px;
          border-radius: 99px;
          background: var(--nb-fill-2);
        }
        .nb-seg button {
          height: 30px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 0;
          border-radius: 99px;
          background: transparent;
          color: #50545c;
          font-size: 12.5px;
          font-weight: 600;
          white-space: nowrap;
          transition: background-color 0.15s, color 0.15s;
        }
        .nb-seg button:hover { color: var(--nb-ink); }
        .nb-seg button.active {
          background: #fff;
          color: var(--nb-ink);
          box-shadow: 0 1px 3px rgba(7, 8, 11, 0.1);
        }
        .nb-seg-icons button { width: 34px; padding: 0; }
        .nb-seg.is-block { display: flex; width: 100%; }
        .nb-seg.is-block button { flex: 1; }
        .nb-tabs-padded { margin: 0 16px 4px !important; width: auto !important; flex-shrink: 0; }

        .nb-btn-lime {
          height: 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 16px 0 15px;
          border: 0;
          border-radius: 99px;
          background: var(--nb-lime);
          color: var(--nb-ink);
          font-size: 13px;
          font-weight: 650;
          white-space: nowrap;
          transition: background-color 0.15s;
        }
        .nb-btn-lime:hover { background: var(--nb-lime-hover); }
        .nb-btn-lime:disabled { opacity: 0.6; }
        .nb-export-wrap { position: relative; }
        .nb-backdrop { position: fixed; inset: 0; z-index: 60; }
        .nb-export-menu { position: absolute; right: 0; top: 100%; padding-top: 8px; z-index: 70; width: 190px; }
        .nb-export-menu > div {
          padding: 6px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid var(--nb-line);
          box-shadow: 0 20px 50px rgba(7, 8, 11, 0.14);
        }
        .nb-export-menu button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 12px;
          border: 0;
          border-radius: 14px;
          background: transparent;
          color: var(--nb-ink);
          font-size: 13px;
          font-weight: 550;
          text-align: left;
        }
        .nb-export-menu button:hover { background: var(--nb-fill); }

        .nb-main-body { position: relative; flex: 1; min-height: 0; display: flex; }

        /* ============================= CANVAS ============================== */
        .nb-canvas-scroll {
          position: relative;
          flex: 1;
          min-width: 0;
          min-height: 0;
          overflow: auto;
          padding: 36px 32px 40px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background-color: var(--nb-bg);
          background-image: radial-gradient(#d6dada 1.1px, transparent 1.3px);
          background-size: 20px 20px;
        }
        .nb-canvas-scroll.is-dragging { background-color: var(--nb-lime-soft); }

        .nb-artboard {
          position: relative;
          width: 100%;
          max-width: 1400px;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 40px 44px 48px;
          background: #fff;
          border-radius: 28px;
          box-shadow: 0 0 0 1px #e6e9e9, 0 24px 60px rgba(18, 22, 26, 0.07);
          container-type: inline-size;
          container-name: artboard;
          transition: max-width 0.3s ease, padding 0.3s ease;
        }
        .nb-artboard.desktop { max-width: 1400px; }
        .nb-artboard.tablet { max-width: 820px; padding: 28px 28px 36px; }
        .nb-artboard.mobile {
          max-width: 390px;
          padding: 16px 16px 24px;
          min-height: 780px;
          border-radius: 36px;
        }

        .nb-canvas-block {
          position: relative;
          min-width: 0;
          border-radius: 20px;
          cursor: pointer;
          outline: 1.5px solid transparent;
          outline-offset: 5px;
          transition: outline-color 0.15s;
        }
        .nb-artboard:not(.preview-mode) .nb-canvas-block:hover { outline-color: #c3c8c8; }
        .nb-artboard:not(.preview-mode) .nb-canvas-block.selected { outline-color: var(--nb-ink); }
        .nb-artboard.preview-mode .nb-canvas-block { cursor: default; }

        .nb-selection-label {
          position: absolute;
          top: -30px;
          left: -5px;
          z-index: 6;
          padding: 4px 10px;
          border-radius: 99px;
          background: var(--nb-ink);
          color: var(--nb-lime);
          font-size: 11px;
          font-weight: 650;
          white-space: nowrap;
          pointer-events: none;
        }
        .nb-block-toolbar {
          position: absolute;
          left: -5px;
          top: calc(100% + 12px);
          z-index: 8;
          display: flex;
          gap: 2px;
          padding: 4px;
          border-radius: 13px;
          background: var(--nb-ink-2);
          box-shadow: 0 10px 28px rgba(20, 22, 41, 0.28);
        }
        .nb-block-toolbar button {
          width: 28px;
          height: 28px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: #e9ebf5;
          display: grid;
          place-items: center;
        }
        .nb-block-toolbar button:hover { background: rgba(255, 255, 255, 0.14); }
        .nb-block-toolbar button.is-danger:hover { background: rgba(228, 87, 46, 0.28); color: #ff9a78; }

        .nb-add-section {
          align-self: center;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 12px;
          padding: 9px 16px;
          border: 1.5px dashed #c3c8c8;
          border-radius: 99px;
          background: #fff;
          color: #50545c;
          font-size: 12.5px;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.2s, border-color 0.15s, color 0.15s;
        }
        .nb-artboard:hover .nb-add-section, .nb-add-section:focus-visible { opacity: 1; }
        .nb-add-section:hover { border-color: var(--nb-ink); color: var(--nb-ink); }

        .nb-artboard.is-exporting .nb-selection-ui,
        .nb-artboard.is-exporting .nb-add-section { display: none !important; }
        .nb-artboard.is-exporting .nb-canvas-block { outline-color: transparent !important; }

        .nb-drop-overlay {
          position: absolute;
          inset: 16px;
          display: grid;
          place-items: center;
          border: 2px dashed var(--nb-ink);
          border-radius: 28px;
          background: rgba(242, 251, 214, 0.82);
          pointer-events: none;
          z-index: 20;
        }
        .nb-drop-overlay > div {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 20px;
          border-radius: 99px;
          background: var(--nb-ink);
          color: var(--nb-lime);
          font-size: 13px;
        }

        .nb-empty-canvas { margin: auto; padding: 100px 20px; text-align: center; color: #868a92; }
        .nb-empty-canvas > div {
          width: 56px;
          height: 56px;
          margin: auto;
          border-radius: 20px;
          background: var(--nb-lime);
          color: var(--nb-ink);
          display: grid;
          place-items: center;
        }
        .nb-empty-canvas h2 { margin: 18px 0 6px; font-size: 21px; letter-spacing: -0.03em; color: var(--nb-ink); }
        .nb-empty-canvas p { margin: 0; font-size: 13px; }
        .nb-empty-canvas button {
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 0;
          border-radius: 99px;
          background: var(--nb-ink);
          color: #fff;
          padding: 11px 18px;
          font-size: 13px;
          font-weight: 600;
        }

        .nb-stage-footer {
          height: 38px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 0 20px;
          background: #fff;
          border-top: 1px solid var(--nb-line);
          font-size: 12px;
          color: #9a9ea6;
        }
        .nb-stage-footer > span:first-child { display: flex; align-items: center; gap: 8px; color: #60646c; font-weight: 600; text-transform: capitalize; }
        .nb-footer-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--nb-lime); box-shadow: 0 0 0 1px #9ccb2c; }
        .nb-stage-footer button {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          border: 0;
          background: none;
          color: #7a7e86;
          font-size: 12px;
        }
        .nb-stage-footer button:hover { color: var(--nb-ink); }

        /* ============================ INSPECTOR (in-panel) ============================= */
        .nb-inspector-scroll { flex: 1; min-height: 0; overflow: auto; padding: 0 18px 12px; }

        .nb-prop-section { padding: 16px 0 6px; border-bottom: 1px solid var(--nb-line); }
        .nb-prop-section:last-child { border-bottom: 0; }
        .nb-prop-section h3 { margin: 0 0 12px; font-size: 14px; font-weight: 650; letter-spacing: -0.02em; }

        .nb-field { display: flex; flex-direction: column; gap: 7px; margin-bottom: 14px; }
        .nb-field > span { font-size: 12px; font-weight: 600; color: #60646c; white-space: pre; }
        .nb-field small { font-size: 11.5px; line-height: 1.45; color: #9a9ea6; }
        .nb-field input:not([type="range"]):not([type="color"]),
        .nb-field textarea,
        .nb-field select {
          width: 100%;
          border: 0;
          border-radius: 99px;
          background: var(--nb-fill);
          padding: 0 14px;
          height: 40px;
          font-size: 13px;
          color: var(--nb-ink);
          outline: none;
          transition: box-shadow 0.15s, background-color 0.15s;
        }
        .nb-field textarea { height: auto; min-height: 84px; padding: 12px 14px; border-radius: 18px; resize: vertical; line-height: 1.5; }
        .nb-field select {
          appearance: none;
          -webkit-appearance: none;
          padding-right: 36px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%238a8e96' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
        .nb-field input:not([type="range"]):not([type="color"]):focus,
        .nb-field textarea:focus,
        .nb-field select:focus { background-color: #fff; box-shadow: 0 0 0 1.5px var(--nb-ink); }
        .nb-field input[type="range"] { width: 100%; height: 4px; accent-color: var(--nb-ink); margin: 8px 0 4px; }

        .nb-color-control { display: flex; gap: 8px; align-items: center; }
        .nb-color-control input[type="color"] {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          padding: 4px;
          border: 0;
          border-radius: 50%;
          background: var(--nb-fill);
          cursor: pointer;
        }
        .nb-color-control input[type="color"]::-webkit-color-swatch-wrapper { padding: 0; }
        .nb-color-control input[type="color"]::-webkit-color-swatch { border: 0; border-radius: 50%; }
        .nb-color-control input[type="color"]::-moz-color-swatch { border: 0; border-radius: 50%; }
        .nb-color-control input:not([type="color"]) { flex: 1; min-width: 0; font-variant-numeric: tabular-nums; }

        .nb-align-picker { display: flex; gap: 2px; padding: 4px; border-radius: 99px; background: var(--nb-fill-2); }
        .nb-align-picker button {
          flex: 1;
          height: 32px;
          border: 0;
          border-radius: 99px;
          background: transparent;
          color: #7a7e86;
          display: grid;
          place-items: center;
        }
        .nb-align-picker button.active { background: #fff; color: var(--nb-ink); box-shadow: 0 1px 3px rgba(7, 8, 11, 0.1); }

        .nb-preset-row { display: flex; gap: 6px; }
        .nb-preset-row button {
          flex: 1;
          height: 36px;
          border: 0;
          border-radius: 99px;
          background: var(--nb-fill);
          color: #60646c;
          font-size: 12.5px;
          font-weight: 600;
        }
        .nb-preset-row button.active { background: var(--nb-ink); color: #fff; }

        .nb-motion-intro {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin: 14px 0 0;
          padding: 12px 14px;
          border-radius: 18px;
          background: var(--nb-lime-soft);
          border: 1px solid var(--nb-lime-line);
          font-size: 12px;
          line-height: 1.5;
          color: #4c5139;
        }
        .nb-motion-intro svg { flex-shrink: 0; margin-top: 1px; color: var(--nb-ink); }

        .nb-toggle { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 0 0 14px; font-size: 12.5px; font-weight: 550; color: #3a3d44; cursor: pointer; }
        .nb-toggle input { position: absolute; opacity: 0; width: 0; height: 0; }
        .nb-toggle i {
          position: relative;
          width: 38px;
          height: 22px;
          flex-shrink: 0;
          border-radius: 99px;
          background: #dcdfdf;
          transition: background-color 0.2s;
        }
        .nb-toggle i::after {
          content: "";
          position: absolute;
          top: 3px;
          left: 3px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s, background-color 0.2s;
        }
        .nb-toggle input:checked + i { background: var(--nb-ink); }
        .nb-toggle input:checked + i::after { transform: translateX(16px); background: var(--nb-lime); }
        .nb-toggle input:focus-visible + i { outline: 2px solid var(--nb-ink); outline-offset: 2px; }
        .nb-helper-copy { margin: 2px 0 10px; font-size: 11.5px; line-height: 1.55; color: #9a9ea6; }

        .nb-inspector-bottom { display: flex; gap: 8px; flex-shrink: 0; padding: 14px 16px; border-top: 1px solid var(--nb-line); }
        .nb-delete-button, .nb-done-button {
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 99px;
          font-size: 13px;
          font-weight: 650;
        }
        .nb-delete-button { flex: 1; border: 1px solid #f3d6cc; background: #fff; color: var(--nb-danger); }
        .nb-delete-button:hover { background: var(--nb-danger-soft); }
        .nb-done-button { flex: 1.3; border: 0; background: var(--nb-ink); color: #fff; }
        .nb-done-button:hover { background: #20222b; }

        .nb-inspector-empty { margin: auto; padding: 40px 28px; display: flex; flex-direction: column; align-items: center; text-align: center; }
        .nb-inspector-empty > div {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          background: var(--nb-lime);
          color: var(--nb-ink);
          display: grid;
          place-items: center;
        }
        .nb-inspector-empty b { margin: 16px 0 6px; font-size: 15px; font-weight: 650; letter-spacing: -0.02em; }
        .nb-inspector-empty p { margin: 0; font-size: 12.5px; line-height: 1.6; color: #868a92; }
        .nb-inspector-empty button {
          margin-top: 16px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          height: 38px;
          padding: 0 16px;
          border: 1px solid var(--nb-line-2);
          border-radius: 99px;
          background: #fff;
          color: var(--nb-ink);
          font-size: 12.5px;
          font-weight: 600;
        }
        .nb-inspector-empty button:hover { background: var(--nb-fill); }

        /* ==================== BLOCK CONTENT ==================== */
        .nb-pill-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          max-width: 100%;
          padding: 13px 22px;
          border: 0;
          border-radius: 99px;
          font-size: 13.5px;
          font-weight: 600;
          white-space: normal;
          overflow-wrap: break-word;
          text-align: center;
          letter-spacing: -0.01em;
        }
        .nb-ghost-pill {
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          border-radius: 99px;
          border: 1px solid var(--nb-line-2);
          background: #fff;
          font-size: 13.5px;
          font-weight: 600;
        }

        .nb-navbar {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 9px 9px 9px 20px;
          border: 1px solid var(--nb-line);
          flex-wrap: wrap;
        }
        .nb-navbar > strong {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .nb-brand-text { overflow: hidden; text-overflow: ellipsis; }
        .nb-brand-mark {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 800;
        }
        .nb-nav-links { display: flex; gap: 22px; flex-shrink: 0; flex-wrap: wrap; font-size: 13px; font-weight: 500; }

        .nb-hero { display: flex; align-items: center; justify-content: center; gap: 36px; flex-wrap: wrap; overflow: hidden; }
        .nb-hero-copy { flex: 1 1 320px; min-width: 0; }
        .nb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 20px;
          padding: 6px 13px 6px 10px;
          border-radius: 99px;
          font-size: 12.5px;
          font-weight: 600;
        }
        .nb-hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .nb-hero-art { flex: 0 1 42%; width: 42%; min-width: 220px; max-width: 400px; }
        .nb-art-window {
          position: relative;
          height: 230px;
          overflow: hidden;
          border: 6px solid #fff;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 24px 50px rgba(18, 22, 26, 0.12);
          transform: rotate(3deg);
        }
        .nb-art-dots { position: absolute; top: 12px; left: 14px; z-index: 2; display: flex; gap: 5px; }
        .nb-art-dots i { width: 7px; height: 7px; border-radius: 50%; background: rgba(7, 8, 11, 0.22); }
        .nb-art-gradient { position: absolute; inset: 30px 10px 10px; border-radius: 18px; }
        .nb-art-card {
          position: absolute;
          left: 24px;
          bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 13px 16px 13px 13px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 10px 24px rgba(7, 8, 11, 0.14);
        }
        .nb-art-icon { width: 30px; height: 30px; border-radius: 10px; display: grid; place-items: center; margin-bottom: 4px; }
        .nb-art-card b { font-size: 13px; letter-spacing: -0.02em; color: var(--nb-ink); }
        .nb-art-card small { font-size: 11.5px; color: #868a92; }

        .nb-section { padding: 30px; }
        .nb-feature-grid { display: grid; margin-top: 28px; }
        .nb-feature-grid[data-cols="1"] { grid-template-columns: minmax(0, 1fr); }
        .nb-feature-grid[data-cols="2"] { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .nb-feature-grid[data-cols="3"] { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .nb-feature-grid[data-cols="4"] { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .nb-feature { min-width: 0; padding: 20px; border-radius: 22px; }
        .nb-feature-icon { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; }
        .nb-feature h3 { margin: 16px 0 6px; font-size: 15px; font-weight: 650; letter-spacing: -0.02em; overflow-wrap: break-word; }
        .nb-feature p { margin: 0; font-size: 13px; line-height: 1.6; overflow-wrap: break-word; }

        .nb-stats { display: grid; margin-top: 30px; }
        .nb-stats[data-cols="1"] { grid-template-columns: minmax(0, 1fr); }
        .nb-stats[data-cols="2"] { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .nb-stats[data-cols="3"] { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .nb-stats[data-cols="4"] { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .nb-stats > div { min-width: 0; display: flex; flex-direction: column; gap: 6px; padding-top: 16px; border-top: 1px solid; }
        .nb-stats strong { font-size: 38px; font-weight: 650; letter-spacing: -0.05em; overflow-wrap: break-word; }
        .nb-stats span { font-size: 13px; overflow-wrap: break-word; }

        .nb-image { display: block; width: 100%; max-height: 360px; object-fit: cover; }
        .nb-image-caption { margin: 10px 0 0; font-size: 12.5px; }

        .nb-video {
          position: relative;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-position: center;
          background-size: cover;
          color: #fff;
        }
        .nb-video > div { position: absolute; left: 22px; bottom: 20px; display: flex; flex-direction: column; gap: 4px; }
        .nb-video > div b { font-size: 15px; letter-spacing: -0.02em; }
        .nb-video > div span { font-size: 12.5px; opacity: 0.85; }
        .nb-play { width: 58px; height: 58px; border: 0; border-radius: 50%; display: grid; place-items: center; }

        .nb-card { max-width: 520px; min-width: 0; }
        .nb-card-icon { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; }
        .nb-card h3 { margin: 18px 0 6px; letter-spacing: -0.03em; overflow-wrap: break-word; }
        .nb-card p { margin: 0; font-size: 14px; line-height: 1.6; overflow-wrap: break-word; }
        .nb-card-link { display: inline-block; margin-top: 18px; font-size: 13px; font-weight: 650; text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1.5px; }

        .nb-testimonial { max-width: 820px; min-width: 0; margin: 0 auto; }
        .nb-quote-badge { width: 40px; height: 40px; border-radius: 50%; display: inline-grid; place-items: center; }
        .nb-testimonial > p { margin: 18px 0 22px; line-height: 1.5; letter-spacing: -0.025em; overflow-wrap: break-word; }
        .nb-author { display: flex; align-items: center; gap: 11px; text-align: left; }
        .nb-author > span:last-child { display: flex; flex-direction: column; gap: 2px; }
        .nb-author b { font-size: 14px; font-weight: 650; }
        .nb-author small { font-size: 12.5px; }
        .nb-avatar-dot { width: 38px; height: 38px; flex-shrink: 0; border-radius: 50%; display: grid; place-items: center; font-size: 14px; font-weight: 700; }

        .nb-pricing {
          max-width: 420px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          border: 1.5px solid;
        }
        .nb-plan { padding: 5px 12px; border-radius: 99px; font-size: 12px; font-weight: 650; }
        .nb-pricing h3 { margin: 4px 0 0; font-size: 20px; letter-spacing: -0.03em; }
        .nb-pricing > p { margin: 0; font-size: 13.5px; }
        .nb-price { margin: 6px 0; font-size: 42px; font-weight: 650; letter-spacing: -0.05em; }
        .nb-price small { font-size: 13px; font-weight: 500; letter-spacing: 0; color: #868a92; }
        .nb-checkline { display: flex; align-items: center; gap: 10px; font-size: 13.5px; }
        .nb-checkline i { width: 20px; height: 20px; flex-shrink: 0; border-radius: 50%; display: grid; place-items: center; }
        .nb-pricing .nb-pill-button { width: 100%; margin-top: 10px; }

        .nb-faq-list { margin-top: 22px; display: flex; flex-direction: column; gap: 8px; }
        .nb-faq-list details { padding: 16px 18px; border-radius: 20px; }
        .nb-faq-list summary {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .nb-faq-list summary::-webkit-details-marker { display: none; }
        .nb-faq-chevron { width: 28px; height: 28px; flex-shrink: 0; border-radius: 50%; background: #fff; display: grid; place-items: center; transition: transform 0.2s; }
        .nb-faq-list details[open] .nb-faq-chevron { transform: rotate(180deg); }
        .nb-faq-list details p { margin: 12px 36px 0 0; font-size: 13.5px; line-height: 1.6; }

        .nb-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 26px; }
        .nb-logos b { padding: 10px 18px; border-radius: 99px; background: var(--nb-fill); font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; }

        .nb-gallery { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 10px; margin-top: 20px; }
        .nb-gallery img { width: 100%; height: 180px; object-fit: cover; }

        .nb-form { max-width: 660px; }
        .nb-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 22px 0 14px; }
        .nb-form-grid input, .nb-form-grid textarea {
          min-width: 0;
          padding: 0 18px;
          height: 46px;
          border: 0;
          border-radius: 99px;
          background: #fff;
          font-size: 13.5px;
          outline: none;
        }
        .nb-form-grid textarea { grid-column: 1 / -1; height: auto; min-height: 100px; padding: 14px 18px; border-radius: 22px; resize: vertical; }

        .nb-footer { display: flex; align-items: flex-start; gap: 20px; flex-wrap: wrap; min-width: 0; }
        .nb-footer > div:first-child { flex: 1 1 180px; min-width: 0; }
        .nb-footer > div:first-child > b { display: flex; align-items: center; gap: 9px; font-size: 17px; font-weight: 700; letter-spacing: -0.03em; }
        .nb-footer > div:first-child > b i { width: 10px; height: 10px; border-radius: 50%; }
        .nb-footer > div:first-child p { margin: 8px 0 0; font-size: 13px; }
        .nb-footer-links { display: flex; flex-wrap: wrap; gap: 20px; padding-top: 4px; font-size: 13px; }
        .nb-footer > small { width: 100%; padding-top: 16px; border-top: 1px solid; font-size: 12px; }

        .nb-app-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; border: 1px solid var(--nb-line); }
        .nb-app-header > div:first-child { flex: 1 1 auto; min-width: 0; }
        .nb-app-header span { font-size: 12px; }
        .nb-app-header h3 { margin: 6px 0 3px; font-size: 20px; letter-spacing: -0.03em; }
        .nb-app-header p { margin: 0; font-size: 13px; }
        .nb-avatar { width: 38px; height: 38px; flex-shrink: 0; border-radius: 50%; display: grid; place-items: center; font-weight: 700; }

        .nb-metric { max-width: 360px; min-width: 0; display: flex; flex-direction: column; gap: 8px; border: 1px solid var(--nb-line); }
        .nb-metric > span { font-size: 13px; }
        .nb-metric > strong { font-size: 34px; font-weight: 650; letter-spacing: -0.05em; overflow-wrap: break-word; }
        .nb-delta {
          align-self: flex-start;
          padding: 4px 10px;
          border-radius: 99px;
          border: 1px solid var(--nb-green-line);
          background: var(--nb-green-soft);
          color: var(--nb-green);
          font-size: 12px;
          font-weight: 600;
        }
        .nb-sparkline { display: block; width: 100%; height: 44px; margin-top: 6px; }

        .nb-data-list { min-width: 0; border: 1px solid var(--nb-line); }
        .nb-data-list h3 { margin: 0; font-size: 17px; letter-spacing: -0.03em; }
        .nb-data-list > p { margin: 5px 0 14px; font-size: 13px; }
        .nb-data-row { min-width: 0; display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid var(--nb-line); }
        .nb-row-icon { width: 34px; height: 34px; flex-shrink: 0; border-radius: 50%; display: grid; place-items: center; }
        .nb-data-row > div { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
        .nb-data-row b { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13.5px; font-weight: 600; }
        .nb-data-row small { font-size: 12px; }
        .nb-data-row em {
          flex-shrink: 0;
          padding: 4px 10px;
          border-radius: 99px;
          border: 1px solid var(--nb-green-line);
          background: var(--nb-green-soft);
          color: var(--nb-green);
          font-style: normal;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* ================== CONTAINER QUERIES ================== */
        @container artboard (max-width: 900px) {
          .nb-feature-grid[data-cols="3"], .nb-feature-grid[data-cols="4"],
          .nb-stats[data-cols="3"], .nb-stats[data-cols="4"] { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .nb-gallery { grid-template-columns: 1fr 1fr; }
          .nb-gallery > img:nth-child(3) { display: none; }
        }
        @container artboard (max-width: 700px) {
          .nb-hero-art, .nb-nav-links { display: none; }
          .nb-section { padding: 22px !important; }
          .nb-hero { gap: 22px; }
          .nb-form-grid { grid-template-columns: 1fr; }
        }
        @container artboard (max-width: 500px) {
          .nb-feature-grid, .nb-stats { grid-template-columns: minmax(0, 1fr) !important; }
          .nb-gallery { grid-template-columns: 1fr; }
          .nb-gallery > img { display: block !important; }
          .nb-hero-actions { flex-direction: column; align-items: stretch !important; }
          .nb-hero-actions .nb-pill-button, .nb-hero-actions .nb-ghost-pill { width: 100%; justify-content: center; }
          .nb-navbar { padding: 8px 8px 8px 14px; gap: 12px; }
          .nb-section { padding: 16px !important; }
          .nb-stats strong { font-size: 28px; }
          .nb-footer-links { gap: 14px; }
        }

        /* ======================== VIEWPORT RESPONSIVE ======================== */
        @media (max-width: 1100px) {
          .nexa-app { --nb-panel-w: 280px; --nb-panel-w-wide: 310px; }
          .nb-chip { display: none; }
        }
        @media (max-width: 900px) {
          .nb-crumb-root, .nb-crumb-sep { display: none; }
          .nb-canvas-scroll { padding: 24px 16px; }
        }
        @media (max-width: 680px) {
          .nexa-app { height: 100dvh; min-height: 0; padding: 0; }
          .nexa-app-embedded { height: 900px; min-height: 900px; border-radius: 0; }
          .nb-frame { flex-direction: column; border-radius: 0; border: 0; box-shadow: none; }

          .nb-rail { width: 100%; height: 54px; flex-direction: row; gap: 12px; padding: 0 12px; border-right: 0; border-bottom: 1px solid var(--nb-line); }
          .nb-rail-group, .nb-rail-bottom { flex-direction: row; }
          .nb-rail-bottom { margin: 0 0 0 auto; }

          .nb-panel, .nb-panel.is-open, .nb-panel.is-open.is-wide {
            width: 100% !important;
            max-height: 46vh;
            border-right: 0;
            border-bottom: 1px solid var(--nb-line);
          }
          .nb-panel-inner, .nb-panel.is-wide .nb-panel-inner { width: 100%; }
          .nb-panel.is-closed { max-height: 0; border-bottom: 0; }

          .nb-topbar { height: 60px; padding: 0 12px; gap: 8px; }
          .nb-device-switch { display: none; }
          .nb-seg button svg { display: none; }
          .nb-seg button { padding: 0 12px; }
          .nb-btn-lime { padding: 0 13px; }
          .nb-btn-lime span { display: none; }
          .nb-crumb-name { max-width: 120px; }

          .nb-canvas-scroll { padding: 16px 12px 24px; }
          .nb-artboard, .nb-artboard.desktop { padding: 16px; border-radius: 20px; }
          .nb-artboard.tablet, .nb-artboard.mobile { max-width: 100%; min-height: auto; }
          .nb-stage-footer { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .nexa-app *, .nexa-app *::before, .nexa-app *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
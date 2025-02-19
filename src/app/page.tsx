"use client";
import ThemeSwitch from './components/ThemeSwitch';
import { useState, useEffect } from 'react';

export default function StyleGuide() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex flex-col gap-16 min-h-screen p-12 bg-background text-foreground">
      <ThemeSwitch setTheme={setTheme} theme={theme} />
      
      {/* Typography */}
      <section>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>This is a paragraph with normal text.</p>
        <p className="font-mono">This is a paragraph with monospace font.</p>
        <ul className="list-disc ml-6">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </section>
      
      {/* Buttons */}
      <section className="flex flex-wrap gap-4">
        <button className="btn btn-primary">Primary Button</button>
        <button className="btn btn-secondary">Secondary Button</button>
        <button className="btn btn-accent">Accent Button</button>
        <button className="btn btn-error">Error Button</button>
        <button className="btn btn-success">Success Button</button>
        <button className="btn btn-outline">Outline Button</button>
        <button className="btn btn-outline border-secondary text-secondary">Modified Outline</button>
        <button className="btn btn-ghost">Ghost Button</button>
        <button className="btn btn-disabled" disabled>Disabled Button</button>
      </section>
      
      {/* Cards & Dividers */}
      <section className="space-y-8">
        <h3>Card Variants</h3>

        {/* Default Card */}
        <div className="card">
          <p>This is a default card with a shadow.</p>
        </div>

        {/* Elevated Card */}
        <div className="card shadow-lg">
          <p>This is an elevated card.</p>
        </div>

        {/* Outlined Card */}
        <div className="card border border-gray-300 dark:border-gray-700">
          <p>This is an outlined card.</p>
        </div>

        {/* Glassmorphic Card */}
        <div className="card backdrop-blur-lg bg-white/20 dark:bg-black/20 border border-white/10">
          <p>This is a glassmorphic card.</p>
        </div>

        {/* Neumorphic Card */}
        <div className="card bg-gray-200 dark:bg-gray-800 shadow-inner">
          <p>This is a neumorphic card.</p>
        </div>

        {/* Interactive Card */}
        <div className="card hover:shadow-xl transition-shadow">
          <p>This is an interactive card. Hover to see the effect.</p>
        </div>

        <div className="divider-horizontal"></div>
      </section>
      
      {/* Forms */}
      <section className="space-y-4">
        <h3>Sign Up Form</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
        </div>
        <input type="email" placeholder="Email Address" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <textarea placeholder="Tell us about yourself" className="textarea"></textarea>
        <select className="select">
          <option>Choose a role</option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Product Manager</option>
        </select>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="terms" className="w-5 h-5" />
          <label htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <button className="btn btn-primary w-full">Sign Up</button>
      </section>
    </div>
  );
}

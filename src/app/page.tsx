'use client';
import Image from 'next/image';
import ThemeSwitch from './components/ThemeSwitch';
import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');

  // Apply the `dark` class to the <html> element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="flex flex-col gap-16 min-h-screen p-24 bg-background text-foreground">
      <ThemeSwitch setTheme={setTheme} theme={theme} />
      <div className="mt-4 spacing-md">
        <p className="text-foreground hover:text-primary">Theme toggle test</p>
        <Image src="/next.svg" alt="Next.js logo" width={100} height={20} />
      </div>

      <div className="card">
        <p className="font-sans">This is a card with a custom shadow.</p>
      </div>
    </div>
  );
}
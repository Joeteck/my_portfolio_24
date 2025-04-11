import type { Metadata } from 'next';
import '../styles/globals.css';
import { Providers } from '../components/globals/ui/Provider';
import { ThemeProvider } from '@/context/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Roboto, Roboto_Mono, Alex_Brush } from 'next/font/google';

// Import Alex Brush font
const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'], // You can adjust the weights if needed
  variable: '--font-alex-brush', // Optional: to use as a variable font if you want
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "Joeteck",
  description:
    "Joeteck is a unique and comprehensive web platform that combines a portfolio website, company page, and a flexible playground for exploring web components and UI design. It leverages a dynamic theming system, real-time design previews, and full responsiveness to ensure an engaging and accessible user experience. Whether you're showcasing your work or experimenting with UI concepts, Joeteck offers the tools to create visually rich and functional web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable} ${alexBrush.variable}`}>
      <body className="font-sans bg-background text-foreground" suppressHydrationWarning>
        <Providers>
          <ThemeProvider>
            <SpeedInsights />
            <Analytics />
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

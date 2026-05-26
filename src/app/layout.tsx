import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/system/LayoutShell";
import { LandingTutorial } from "@/components/system/LandingTutorial";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Motionary | 1000+ Production-Ready Motion Components",
  description: "The ultimate interactive encyclopedia of motion design. Copy-paste 1000+ React & Tailwind motion components for your next project.",
  keywords: ["react motion", "tailwind animations", "framer motion components", "ui library", "motion design system", "copy paste components", "web animation", "ui interactions", "frontend development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <LandingTutorial />
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}

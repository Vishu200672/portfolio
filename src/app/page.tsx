"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import InteractivePlayground from "@/components/InteractivePlayground";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";
import HackathonsTimeline from "@/components/HackathonsTimeline";
import ResumeSection from "@/components/ResumeSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import TechnicalCoordinateSystem from "@/components/TechnicalCoordinateSystem";
import NoiseOverlay from "@/components/NoiseOverlay";
import { soundEffects } from "@/utils/audio";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global key listener for '/' and 'Ctrl+K' / 'Cmd+K'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (!isInput && e.key === "/") {
        e.preventDefault();
        soundEffects.playPulse();
        setCommandPaletteOpen(true);
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        soundEffects.playPulse();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#05070b] text-[#f1f5f9] relative selection:bg-[#00f0ff]/25 selection:text-white">
      {/* Matte Film-Grain Noise Texture */}
      <NoiseOverlay />

      {/* Futuristic Technical Coordinate HUD Overlay */}
      <TechnicalCoordinateSystem />

      {/* Primary Navigation Bar */}
      <Navbar
        onOpenCommandPalette={() => {
          soundEffects.playPulse();
          setCommandPaletteOpen(true);
        }}
      />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Main Content Sections */}
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <InteractivePlayground />
      <EngineeringPhilosophy />
      <HackathonsTimeline />
      <ResumeSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

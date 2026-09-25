"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Terminal,
  FileText,
  Menu,
  X,
  Cpu,
  ChevronRight,
  Volume2,
  VolumeX
} from "lucide-react";
import { Linkedin, Github } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";
import { soundEffects } from "@/utils/audio";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    setAudioEnabled(soundEffects.getAudioState());
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const newState = soundEffects.toggleAudio();
    setAudioEnabled(newState);
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Live Playground", href: "#playground" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Philosophy", href: "#philosophy" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#05070b]/90 backdrop-blur-md border-b border-[#172033] py-2.5 shadow-xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Vishvam Trivedi Home"
            onClick={() => soundEffects.playClick(900)}
          >
            <div className="w-8 h-8 rounded-lg bg-[#0a0e17] border border-[#172033] group-hover:border-[#00f0ff] flex items-center justify-center transition-colors">
              <Cpu className="w-4 h-4 text-[#00f0ff]" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>VISHVAM TRIVEDI</span>
                <span className="text-[10px] text-[#00f0ff] font-normal px-1.5 py-0.2 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                  ML_ENG
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#64748b]">
                ITM BARODA • CGPA 8.62
              </div>
            </div>
          </Link>

          {/* Status badge desktop */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-[#172033]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span className="text-[11px] font-mono text-[#94a3b8] uppercase tracking-wider">
              {profileData.statusText}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#090d16]/80 p-1.5 rounded-full border border-[#172033]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => soundEffects.playClick(850)}
              className="px-3 py-1.5 text-xs font-mono text-[#94a3b8] hover:text-[#00f0ff] hover:bg-[#0f172a] rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={handleToggleAudio}
            title={audioEnabled ? "Disable UI Sound Synthesis" : "Enable Futuristic UI Sound Synthesis"}
            aria-label="Toggle UI Audio Synthesis"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border text-xs font-mono transition-all ${
              audioEnabled
                ? "bg-[#10b981]/15 border-[#10b981]/40 text-[#10b981]"
                : "bg-[#0a0f1b] border-[#172033] text-[#64748b] hover:text-[#94a3b8]"
            }`}
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden xl:inline text-[10px]">{audioEnabled ? "SFX: ON" : "SFX: OFF"}</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              soundEffects.playPulse();
              onOpenCommandPalette();
            }}
            aria-label="Open command palette"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0a0f1b] border border-[#172033] hover:border-[#00f0ff]/50 text-xs font-mono text-[#94a3b8] hover:text-white transition-all shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="hidden sm:inline">Commands</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-[#131b2e] border border-[#1e293b] rounded text-[#64748b]">
              /
            </kbd>
          </button>

          {/* Direct Resume CTA */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEffects.playClick(900)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 text-xs font-mono font-medium transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Social Links */}
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vishvam Trivedi GitHub Profile"
            className="p-2 text-[#94a3b8] hover:text-white hover:bg-[#0f172a] rounded-md transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Vishvam Trivedi LinkedIn Profile"
            className="p-2 text-[#94a3b8] hover:text-[#00f0ff] hover:bg-[#0f172a] rounded-md transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 text-[#94a3b8] hover:text-white hover:bg-[#0f172a] rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bg-[#05070b]/98 border-b border-[#172033] p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#172033]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs font-mono text-[#94a3b8]">
                {profileData.statusText}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#00f0ff]">
              CGPA 8.62
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundEffects.playClick(850);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono text-[#cbd5e1] hover:text-[#00f0ff] hover:bg-[#0d1424] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#475569]" />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#172033] flex gap-2">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#00f0ff] text-[#05070b] font-mono text-xs font-bold"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="px-3 py-2 rounded-lg bg-[#0a0f1b] border border-[#172033] text-xs font-mono text-[#94a3b8]"
            >
              ⌘K
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

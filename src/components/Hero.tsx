"use client";

import React from "react";
import {
  ArrowDown,
  FileDown,
  Mail,
  ExternalLink,
  Cpu,
  Eye,
  Sparkles,
  Terminal,
  Activity
} from "lucide-react";
import { Linkedin, Github } from "@/components/icons/BrandIcons";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";
import ArchitectureFlow from "./ArchitectureFlow";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden bg-tech-grid"
      aria-label="Hero Introduction"
    >
      {/* Background Neural Canvas */}
      <NeuralNetworkCanvas />

      {/* Ambient Radial Lighting Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#00f0ff]/10 via-[#3b82f6]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-[#10b981]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
        {/* Engineering Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a0f1b]/90 border border-[#172033] shadow-sm mb-6 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wider text-[#cbd5e1] uppercase">
            {profileData.statusText}
          </span>
          <span className="text-[#334155]">•</span>
          <span className="text-xs font-mono text-[#00f0ff]">
            B.TECH CSE • CGPA 8.62
          </span>
        </div>

        {/* Primary Identity & Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 max-w-4xl font-sans">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            {profileData.name}
          </span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#818cf8] mt-2">
            {profileData.role}
          </span>
        </h1>

        {/* Secondary Descriptor */}
        <p className="text-base sm:text-lg lg:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-8 font-mono leading-relaxed">
          {profileData.headline}
        </p>

        {/* Verifiable Work Callout Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mb-8">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#172033] text-xs font-mono text-[#94a3b8]">
            <Eye className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Computer Vision (ConvNeXt & Edge APK)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#172033] text-xs font-mono text-[#94a3b8]">
            <Sparkles className="w-3.5 h-3.5 text-[#818cf8]" />
            <span>Transformers (Sentence-BERT r = 0.9733)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#172033] text-xs font-mono text-[#94a3b8]">
            <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
            <span>FastAPI Serving & Microservices</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00f0ff] text-[#05070b] font-mono text-sm font-bold shadow-[0_0_20px_-3px_rgba(0,240,255,0.4)] hover:bg-[#38bdf8] transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#00f0ff]/50 text-white font-mono text-sm transition-all hover:bg-[#0f172a]"
          >
            <Github className="w-4 h-4 text-[#00f0ff]" />
            <span>View GitHub</span>
          </a>

          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#10b981]/50 text-white font-mono text-sm transition-all hover:bg-[#0f172a]"
          >
            <FileDown className="w-4 h-4 text-[#10b981]" />
            <span>Download Resume</span>
          </a>

          <a
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#818cf8]/50 text-[#94a3b8] hover:text-white font-mono text-sm transition-all hover:bg-[#0f172a]"
            aria-label="Send direct email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">vtpt2072@gmail.com</span>
          </a>
        </div>

        {/* Dynamic Neural Pipeline Flow Visualizer */}
        <div className="w-full max-w-5xl mt-2">
          <ArchitectureFlow />
        </div>
      </div>
    </section>
  );
}

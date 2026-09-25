"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  FileDown,
  Mail,
  ExternalLink,
  Cpu,
  Eye,
  Sparkles,
  Terminal,
  Activity,
  Layers
} from "lucide-react";
import { Linkedin, Github } from "@/components/icons/BrandIcons";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";
import ArchitectureFlow from "./ArchitectureFlow";
import TensorEmbeddingInspector from "./TensorEmbeddingInspector";
import { profileData } from "@/data/profile";
import { soundEffects } from "@/utils/audio";

export default function Hero() {
  const [heroTab, setHeroTab] = useState<"pipeline" | "tensor">("pipeline");

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
        {/* Engineering Status Pill with Specular Border */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a0f1b]/90 border border-[#172033] shadow-[0_0_20px_-5px_rgba(0,240,255,0.2)] mb-6 backdrop-blur-md relative"
        >
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
        </motion.div>

        {/* Primary Identity & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 max-w-4xl font-sans">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
              {profileData.name}
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#818cf8] mt-2">
              {profileData.role}
            </span>
          </h1>
        </motion.div>

        {/* Secondary Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg lg:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-8 font-mono leading-relaxed"
        >
          {profileData.headline}
        </motion.p>

        {/* Verifiable Work Callout Badges with Hover Haptics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mb-8"
        >
          <div
            onMouseEnter={() => soundEffects.playClick(1100)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#172033] hover:border-[#00f0ff]/40 text-xs font-mono text-[#94a3b8] transition-all hover:scale-105 cursor-default"
          >
            <Eye className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>Computer Vision (ConvNeXt & Edge APK)</span>
          </div>
          <div
            onMouseEnter={() => soundEffects.playClick(1100)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#172033] hover:border-[#818cf8]/40 text-xs font-mono text-[#94a3b8] transition-all hover:scale-105 cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#818cf8]" />
            <span>Transformers (Sentence-BERT r = 0.9733)</span>
          </div>
          <div
            onMouseEnter={() => soundEffects.playClick(1100)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0e17] border border-[#172033] hover:border-[#10b981]/40 text-xs font-mono text-[#94a3b8] transition-all hover:scale-105 cursor-default"
          >
            <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
            <span>FastAPI Serving & Microservices</span>
          </div>
        </motion.div>

        {/* CTAs with interactive hover animations & haptics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12"
        >
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => soundEffects.playClick(900)}
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00f0ff] text-[#05070b] font-mono text-sm font-bold shadow-[0_0_20px_-3px_rgba(0,240,255,0.4)] hover:bg-[#38bdf8] transition-colors"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => soundEffects.playClick(900)}
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#00f0ff]/50 text-white font-mono text-sm transition-colors hover:bg-[#0f172a]"
          >
            <Github className="w-4 h-4 text-[#00f0ff]" />
            <span>View GitHub</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => soundEffects.playClick(900)}
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#10b981]/50 text-white font-mono text-sm transition-colors hover:bg-[#0f172a]"
          >
            <FileDown className="w-4 h-4 text-[#10b981]" />
            <span>Download Resume</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => soundEffects.playClick(900)}
            href={`mailto:${profileData.email}`}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#818cf8]/50 text-[#94a3b8] hover:text-white font-mono text-sm transition-colors hover:bg-[#0f172a]"
            aria-label="Send direct email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">vtpt2072@gmail.com</span>
          </motion.a>
        </motion.div>

        {/* Hero Interactive Lab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mt-2 space-y-4"
        >
          {/* Module Switcher Buttons */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <button
              onClick={() => {
                soundEffects.playClick(850);
                setHeroTab("pipeline");
              }}
              className={`relative px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
                heroTab === "pipeline"
                  ? "text-[#00f0ff] font-bold"
                  : "text-[#64748b] hover:text-[#cbd5e1] bg-[#090d16]/80 border border-[#172033]"
              }`}
            >
              {heroTab === "pipeline" && (
                <motion.div
                  layoutId="activeHeroLabTab"
                  className="absolute inset-0 bg-[#00f0ff]/10 border border-[#00f0ff]/40 rounded-lg pointer-events-none"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>END-TO-END PIPELINE ARCHITECTURE</span>
              </span>
            </button>

            <button
              onClick={() => {
                soundEffects.playClick(850);
                setHeroTab("tensor");
              }}
              className={`relative px-4 py-2 rounded-lg text-xs font-mono transition-colors ${
                heroTab === "tensor"
                  ? "text-[#00f0ff] font-bold"
                  : "text-[#64748b] hover:text-[#cbd5e1] bg-[#090d16]/80 border border-[#172033]"
              }`}
            >
              {heroTab === "tensor" && (
                <motion.div
                  layoutId="activeHeroLabTab"
                  className="absolute inset-0 bg-[#00f0ff]/10 border border-[#00f0ff]/40 rounded-lg pointer-events-none"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                <span>LIVE 384-DIM TENSOR INSPECTOR</span>
              </span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {heroTab === "pipeline" ? (
              <motion.div
                key="pipeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <ArchitectureFlow />
              </motion.div>
            ) : (
              <motion.div
                key="tensor"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <TensorEmbeddingInspector />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

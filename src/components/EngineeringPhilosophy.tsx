"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  Activity,
  Zap,
  HelpCircle,
  Repeat,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { philosophyPillars } from "@/data/philosophy";
import { FadeIn } from "@/components/MotionWrapper";
import SpotlightCard from "@/components/SpotlightCard";
import { soundEffects } from "@/utils/audio";

export default function EngineeringPhilosophy() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activePillar = philosophyPillars[selectedIdx];

  const cycleSteps = [
    { label: "PREDICT", desc: "Formulate task & constraints" },
    { label: "EXPLAIN", desc: "Attribution & auditability" },
    { label: "DEPLOY", desc: "Sub-100ms or on-device serving" },
    { label: "ITERATE", desc: "Calibrate against human error" }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#05070b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-[#172033] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>// 05. CORE ENGINEERING ETHOS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Engineering Philosophy
              </h2>
            </div>
            <div className="font-mono text-xs text-[#94a3b8]">
              METHODOLOGY • MEASUREMENT OVER HYPE
            </div>
          </div>
        </FadeIn>

        {/* Central Visual Mantra: Predict -> Explain -> Deploy -> Iterate */}
        <FadeIn delay={0.1}>
          <div className="mb-12 p-6 rounded-2xl bg-[#090d16] border border-[#172033] shadow-lg">
            <div className="text-xs font-mono text-[#64748b] uppercase mb-4 text-center tracking-widest">
              THE APPLIED ML CONTINUUM
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cycleSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-4 rounded-xl bg-[#060910] border border-[#172033] hover:border-[#24324f] transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#00f0ff]">
                      PHASE 0{idx + 1}
                    </span>
                    {idx < cycleSteps.length - 1 && (
                      <ArrowRight className="hidden md:block w-3.5 h-3.5 text-[#334155] absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
                    )}
                  </div>
                  <div className="font-mono text-base font-bold text-white tracking-wider">
                    {step.label}
                  </div>
                  <div className="text-[11px] text-[#94a3b8] mt-1 font-mono">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Pillars Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Principles Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            {philosophyPillars.map((p, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    soundEffects.playClick(600 + idx * 50);
                    setSelectedIdx(idx);
                  }}
                  className={`w-full p-4 rounded-xl text-left border transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? "bg-[#0f172a] border-[#00f0ff] shadow-[0_0_15px_-3px_rgba(0,240,255,0.2)]"
                      : "bg-[#090d16] border-[#172033] hover:border-[#24324f] hover:bg-[#0c121e]"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activePhilosophyIndicator"
                      className="absolute inset-0 bg-[#00f0ff]/5 pointer-events-none rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#64748b] mb-1 relative z-10">
                    <span>{p.step}</span>
                    <span className={isSelected ? "text-[#00f0ff]" : "text-[#475569]"}>
                      {p.number}
                    </span>
                  </div>
                  <div
                    className={`font-mono text-xs sm:text-sm font-bold relative z-10 ${
                      isSelected ? "text-[#00f0ff]" : "text-white"
                    }`}
                  >
                    {p.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Principle Deep Dive Card with AnimatePresence */}
          <div className="lg:col-span-7 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.number}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 240, 255, 0.16)"
                  className="p-6 sm:p-8 space-y-6"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#172033]">
                    <div className="text-xs font-mono text-[#00f0ff]">
                      PRINCIPLE // {activePillar.step}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                      SYSTEM LAW
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                      &ldquo;{activePillar.title}&rdquo;
                    </h3>
                    <p className="font-mono text-sm text-[#00f0ff] mt-2">
                      {activePillar.principle}
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#94a3b8] uppercase block mb-1">
                        Architectural Rationale:
                      </span>
                      <p>{activePillar.rationale}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#060910] border border-[#1e293b] space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#10b981]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>How I Applied This In Production:</span>
                      </div>
                      <p className="text-xs text-[#94a3b8] font-mono leading-relaxed">
                        {activePillar.inPractice}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

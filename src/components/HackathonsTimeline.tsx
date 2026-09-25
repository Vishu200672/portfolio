"use client";

import React from "react";
import {
  Terminal,
  CheckCircle2,
  Cpu,
  Sparkles,
  AlertCircle,
  ArrowUpRight,
  Award
} from "lucide-react";
import { hackathonsData } from "@/data/experience";
import { FadeIn } from "@/components/MotionWrapper";
import SpotlightCard from "@/components/SpotlightCard";

export default function HackathonsTimeline() {
  return (
    <section id="hackathons" className="py-24 bg-[#070b12] relative border-t border-[#172033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 border-b border-[#172033] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>// 06. COMPETITIVE ARENA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Hackathons & Engineering Competitions
              </h2>
            </div>
            <div className="font-mono text-xs text-[#94a3b8]">
              PROBLEM → ML SOLUTION → MY CONTRIBUTION → VERIFIED OUTCOME
            </div>
          </div>
        </FadeIn>

        {/* Timeline Component */}
        <div className="relative border-l border-[#172033] ml-4 md:ml-32 space-y-10">
          {hackathonsData.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <div className="relative pl-6 md:pl-10 group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#090d16] border-2 border-[#00f0ff] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,240,255,0.4)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                </div>

                {/* Year badge offset left on desktop */}
                <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right font-mono text-xs text-[#00f0ff] font-bold">
                  {item.year}
                </div>

                <SpotlightCard
                  spotlightColor="rgba(0, 240, 255, 0.14)"
                  className="p-6 sm:p-7 space-y-4"
                >
                  {/* Top Bar: Event, Role, and Badge */}
                  <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-[#172033]">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="md:hidden text-xs font-mono text-[#00f0ff] font-bold">
                          [{item.year}]
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                          {item.event}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-[#64748b]">ROLE:</span>
                        <span className="text-white font-semibold">{item.role}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-bold">
                        {item.badge}
                      </span>
                      {item.linkedProjectName && (
                        <a
                          href="#projects"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#00f0ff] hover:underline"
                        >
                          <span>Project: {item.linkedProjectName}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Problem & ML/AI Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {/* Problem */}
                    <div className="p-3.5 rounded-xl bg-[#060910] border border-[#172033] flex flex-col justify-start">
                      <div className="text-[10px] font-mono text-[#f59e0b] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-bold">
                        <AlertCircle className="w-3.5 h-3.5 text-[#f59e0b] shrink-0" />
                        <span>PROBLEM STATEMENT</span>
                      </div>
                      <p className="text-[#cbd5e1] leading-relaxed font-sans text-xs">
                        {item.problem}
                      </p>
                    </div>

                    {/* ML / AI Solution */}
                    <div className="p-3.5 rounded-xl bg-[#060910] border border-[#172033] flex flex-col justify-start">
                      <div className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-bold">
                        <Cpu className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                        <span>ML / AI SOLUTION</span>
                      </div>
                      <p className="text-[#cbd5e1] leading-relaxed font-sans text-xs">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* MY ML CONTRIBUTION - Visually Prominent */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#00f0ff]/10 via-[#00f0ff]/5 to-transparent border border-[#00f0ff]/30 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
                        <span className="text-[11px] font-mono font-bold text-[#00f0ff] uppercase tracking-wider">
                          MY ML / ENGINEERING CONTRIBUTION
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40 font-bold">
                        PRIMARY ARCHITECTURE
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-white leading-relaxed font-sans">
                      {item.myContribution}
                    </p>
                  </div>

                  {/* Outcome Bar */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono border-t border-[#172033]/60 text-[#94a3b8]">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[#64748b]">OUTCOME:</span>
                      <span className="text-[#10b981] font-semibold">{item.outcome}</span>
                    </div>
                    <span className="flex items-center gap-1 text-[#10b981] shrink-0 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Competition Record
                    </span>
                  </div>
                </SpotlightCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

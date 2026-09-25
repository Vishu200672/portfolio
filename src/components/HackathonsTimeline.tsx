"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Terminal,
  Calendar,
  CheckCircle2,
  Users,
  Compass
} from "lucide-react";
import { hackathonsData } from "@/data/experience";
import { FadeIn } from "@/components/MotionWrapper";

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
                Hackathons & Competitive Milestones
              </h2>
            </div>
            <div className="font-mono text-xs text-[#94a3b8]">
              VERIFIED OUTCOMES • HIGH-PRESSURE RAPID ARCHITECTURE
            </div>
          </div>
        </FadeIn>

        {/* Timeline Component */}
        <div className="relative border-l border-[#172033] ml-4 md:ml-32 space-y-10">
          {hackathonsData.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1}>
              <div className="relative pl-6 md:pl-10 group">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090d16] border-2 border-[#00f0ff] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,240,255,0.4)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                </div>

                {/* Year badge offset left on desktop */}
                <div className="hidden md:block absolute -left-32 top-1 w-24 text-right font-mono text-xs text-[#00f0ff] font-bold">
                  {item.year}
                </div>

                {/* Content Card with motion */}
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-[#090d16] border border-[#172033] group-hover:border-[#00f0ff]/40 transition-colors duration-200"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="md:hidden text-xs font-mono text-[#00f0ff] font-bold">
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                        {item.event}
                      </h3>
                    </div>

                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#94a3b8] mb-3">
                    <div>
                      <span className="text-[#64748b]">ROLE: </span>
                      <span className="text-white">{item.role}</span>
                    </div>
                    <div>
                      <span className="text-[#64748b]">OUTCOME: </span>
                      <span className="text-[#00f0ff] font-semibold">{item.outcome}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#172033]/60 flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                    <span>FOCUS: {item.projectFocus}</span>
                    <span className="flex items-center gap-1 text-[#10b981]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

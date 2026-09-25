"use client";

import React, { useState } from "react";
import {
  Cpu,
  Eye,
  Sparkles,
  Server,
  Wrench,
  CheckCircle2,
  Terminal,
  Filter
} from "lucide-react";
import { skillCategories, SkillCategoryGroup, SkillItem } from "@/data/skills";

export default function TechStack() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    "machine-learning": Cpu,
    "computer-vision": Eye,
    nlp: Sparkles,
    deployment: Server,
    engineering: Wrench,
  };

  const allSkills: SkillItem[] = skillCategories.flatMap((cat) => cat.skills);

  const displayedSkills: SkillItem[] =
    activeCategoryId === "all"
      ? allSkills
      : skillCategories.find((cat) => cat.id === activeCategoryId)?.skills || [];

  return (
    <section id="stack" className="py-20 bg-[#070b12] relative border-t border-[#172033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#172033] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 02. TECHNICAL ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Verified Technical Stack
            </h2>
          </div>
          <div className="font-mono text-xs text-[#94a3b8]">
            EVIDENCE-GROUNDED • ZERO UNVERIFIED CLAIMS
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveCategoryId("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all shrink-0 ${
              activeCategoryId === "all"
                ? "bg-[#00f0ff] text-[#05070b] font-bold shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)]"
                : "bg-[#0a0f1b] text-[#94a3b8] hover:text-white border border-[#172033] hover:border-[#24324f]"
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>ALL TECHNOLOGIES ({allSkills.length})</span>
          </button>

          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Cpu;
            const isSelected = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all shrink-0 ${
                  isSelected
                    ? "bg-[#00f0ff] text-[#05070b] font-bold shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)]"
                    : "bg-[#0a0f1b] text-[#94a3b8] hover:text-white border border-[#172033] hover:border-[#24324f]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name.toUpperCase()}</span>
                <span className="text-[10px] opacity-75">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group p-4 rounded-xl bg-[#090d16] border border-[#172033] hover:border-[#00f0ff]/40 hover:bg-[#0c121e] transition-all duration-200 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                    <h3 className="font-mono text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                    VERIFIED
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#64748b] mb-2 uppercase tracking-wide">
                  {skill.category}
                </div>

                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {skill.evidence}
                </p>
              </div>

              {/* Bottom hairline accent */}
              <div className="mt-3 pt-3 border-t border-[#172033]/60 flex items-center justify-between text-[10px] font-mono text-[#64748b]">
                <span>REPOSITORY PROVEN</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Discipline Callout */}
        <div className="mt-12 p-6 rounded-xl bg-[#0a0e17] border border-[#172033] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-mono text-xs font-bold text-[#00f0ff]">
              CRITICAL TRUTHFULNESS & REPRODUCIBILITY AUDIT
            </div>
            <p className="text-xs text-[#94a3b8] max-w-3xl">
              Every tool and framework cataloged above is backed by tangible repository commits, fine-tuning scripts, or working deployment artifacts. Technologies not utilized in completed code are deliberately excluded.
            </p>
          </div>
          <div className="text-xs font-mono px-3 py-1.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 shrink-0">
            100% REPO BACKED
          </div>
        </div>
      </div>
    </section>
  );
}

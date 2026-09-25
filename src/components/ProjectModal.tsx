"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Globe,
  Server,
  Layers,
  Cpu,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Terminal,
  FileCode
} from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import { ProjectDetail } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "architecture" | "model" | "engineering" | "challenges" | "metrics"
  >("overview");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  const tabs = [
    { id: "overview", label: "Overview & Problem", icon: Terminal },
    { id: "architecture", label: "System Pipeline", icon: Layers },
    { id: "model", label: "Model & Algorithms", icon: Cpu },
    { id: "engineering", label: "Serving & Latency", icon: Server },
    { id: "challenges", label: "Engineering Realities", icon: AlertTriangle },
    { id: "metrics", label: "Verified Benchmarks", icon: Activity }
  ] as const;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-5xl bg-[#090d16] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Telemetry Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#172033] bg-[#05070d]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
              PROJECT {project.number} // {project.teamType.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-[#64748b]">
              PERIOD: {project.period}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#131b2e] transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#172033] bg-[#070b12]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2
                id="modal-title"
                className="text-2xl sm:text-3xl font-bold font-sans text-white tracking-tight"
              >
                {project.title}
              </h2>
              <div className="text-sm font-mono text-[#00f0ff] mt-1">
                {project.subtitle}
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#00f0ff] text-[#05070b] text-xs font-mono font-bold hover:bg-[#38bdf8] transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.links.huggingFace && (
                <a
                  href={project.links.huggingFace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-mono transition-colors"
                >
                  <span className="text-[#ffd21e]">🤗</span>
                  <span>Hugging Face Space</span>
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#131b2e] hover:bg-[#1e293b] text-[#94a3b8] hover:text-white text-xs font-mono transition-colors border border-[#1e293b]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0d1424] text-[#94a3b8] border border-[#172033]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 border-b border-[#172033] bg-[#060910] overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-3.5 text-xs font-mono font-medium border-b-2 transition-all whitespace-nowrap ${
                  isCurrent
                    ? "border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5"
                    : "border-transparent text-[#94a3b8] hover:text-white hover:bg-[#0f172a]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm leading-relaxed text-[#cbd5e1]">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Screenshots Gallery if available */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="space-y-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-[#1e293b] bg-black">
                    <Image
                      src={project.screenshots[activeScreenshotIdx].src}
                      alt={project.screenshots[activeScreenshotIdx].caption}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                    <span>{project.screenshots[activeScreenshotIdx].caption}</span>
                    <span className="text-[#64748b]">
                      {activeScreenshotIdx + 1} / {project.screenshots.length}
                    </span>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {project.screenshots.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScreenshotIdx(idx)}
                        className={`relative w-20 h-12 rounded border overflow-hidden shrink-0 transition-all ${
                          activeScreenshotIdx === idx
                            ? "border-[#00f0ff] ring-1 ring-[#00f0ff]"
                            : "border-[#172033] opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={s.src}
                          alt="thumbnail"
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#070b12] border border-[#172033]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#f87171] uppercase font-bold mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#070b12] border border-[#172033]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#10b981] uppercase font-bold mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The Technical Approach</span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>

              {/* Verified Result Card */}
              <div className="p-5 rounded-xl bg-[#070b12] border border-[#1e293b]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase font-bold mb-2">
                  <Activity className="w-4 h-4" />
                  <span>Verified Outcome</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SYSTEM PIPELINE */}
          {activeTab === "architecture" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-[#070b12] border border-[#172033] text-xs text-[#94a3b8]">
                {project.architecture}
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-white uppercase">
                  Sequential Execution Pipeline:
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.pipeline.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#070b12] border border-[#172033] flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-white">
                            {step.label}
                          </span>
                          <span className="text-[11px] font-mono text-[#00f0ff]">
                            [{step.sublabel}]
                          </span>
                        </div>
                        <p className="text-xs text-[#94a3b8] mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MODEL & ALGORITHMS */}
          {activeTab === "model" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-5 rounded-xl bg-[#070b12] border border-[#172033]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase font-bold mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>Model Formulation & Architecture</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {project.model}
                </p>
              </div>

              {/* Key algorithmic specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#070b12] border border-[#172033]"
                  >
                    <div className="text-[11px] font-mono text-[#64748b] uppercase">
                      {m.label}
                    </div>
                    <div className="text-xl font-mono font-bold text-white mt-1">
                      {m.value}
                    </div>
                    <p className="text-[11px] text-[#94a3b8] mt-1">
                      {m.description}
                    </p>
                    {m.benchmark && (
                      <div className="text-[10px] font-mono text-[#10b981] mt-2">
                        Benchmark: {m.benchmark}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SERVING & LATENCY */}
          {activeTab === "engineering" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-5 rounded-xl bg-[#070b12] border border-[#172033]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#818cf8] uppercase font-bold mb-3">
                  <Server className="w-4 h-4" />
                  <span>Model Serving, APIs & Infrastructure</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {project.engineering}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070b12] border border-[#1e293b] flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-white">
                    DEPLOYMENT TARGET
                  </div>
                  <div className="text-xs text-[#94a3b8] mt-0.5">
                    {project.teamType} • {project.role}
                  </div>
                </div>
                <div className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2.5 py-1 rounded border border-[#10b981]/20">
                  READY_FOR_EVALUATION
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: AUTHENTIC CHALLENGES */}
          {activeTab === "challenges" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-5 rounded-xl bg-[#0c0d16] border border-[#f59e0b]/30">
                <div className="flex items-center gap-2 text-xs font-mono text-[#f59e0b] uppercase font-bold mb-3">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Honest Engineering Trade-offs & Limitations</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#070b12] border border-[#172033] text-xs text-[#94a3b8]">
                <span className="font-mono font-bold text-white">Why this matters:</span>{" "}
                Junior portfolios pretend ML models are flawless. Production ML engineers acknowledge distribution shifts, dataset constraints, and hardware bottlenecks.
              </div>
            </div>
          )}

          {/* TAB 6: VERIFIED BENCHMARKS */}
          {activeTab === "metrics" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[#070b12] border border-[#172033] flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-[#64748b] uppercase">
                        {metric.label}
                      </div>
                      <div className="text-3xl font-mono font-bold text-[#00f0ff] mt-2">
                        {metric.value}
                      </div>
                      <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                    {metric.benchmark && (
                      <div className="mt-4 pt-3 border-t border-[#172033] text-[11px] font-mono text-[#10b981]">
                        {metric.benchmark}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Links */}
        <div className="px-6 py-4 border-t border-[#172033] bg-[#05070d] flex items-center justify-between text-xs font-mono">
          <span className="text-[#64748b]">
            ESC TO CLOSE • ALL METRICS VERIFIED
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#131b2e] hover:bg-[#1e293b] text-white transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

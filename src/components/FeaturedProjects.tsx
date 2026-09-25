"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  Terminal,
  Activity,
  CheckCircle,
  Eye,
  Cpu,
  ChevronRight
} from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import { projectsData, ProjectDetail } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#05070b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-[#172033] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 03. CORE PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Featured ML Projects
            </h2>
          </div>
          <div className="font-mono text-xs text-[#94a3b8]">
            END-TO-END IMPLEMENTATIONS • LIVE REPOSITORIES & DEPLOYMENTS
          </div>
        </div>

        {/* Cinematic Projects List */}
        <div className="space-y-16">
          {projectsData.map((project, pIdx) => {
            const isEven = pIdx % 2 === 1;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#090d16] border border-[#172033] hover:border-[#00f0ff]/50 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                {/* Subtle top indicator bar */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00f0ff]/40 to-transparent" />

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Top metadata row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#172033]/80">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-[#00f0ff]">
                        {project.number}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0d1424] text-[#cbd5e1] border border-[#172033]">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                        {project.teamType}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#64748b]">
                      ROLE: {project.role.toUpperCase()}
                    </div>
                  </div>

                  {/* Main Grid: Content & Architecture / Screenshots */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Description & Specs */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base font-mono text-[#00f0ff] mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Architecture Pipeline Visualization */}
                      <div className="p-4 rounded-xl bg-[#060910] border border-[#172033] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-[#00f0ff]" />
                            Architecture Pipeline
                          </span>
                          <span className="text-[10px] font-mono text-[#64748b]">
                            {project.pipeline.length} STAGES
                          </span>
                        </div>

                        {/* Pipeline stages badges */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                          {project.pipeline.map((step, sIdx) => (
                            <React.Fragment key={sIdx}>
                              <span className="px-2 py-1 rounded bg-[#0b101c] border border-[#1e293b] text-[#cbd5e1] text-[11px]">
                                {step.label}
                              </span>
                              {sIdx < project.pipeline.length - 1 && (
                                <ChevronRight className="w-3 h-3 text-[#334155] shrink-0" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Verified Metrics Chips */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-lg bg-[#070b12] border border-[#172033]"
                          >
                            <div className="text-[10px] font-mono text-[#64748b] truncate">
                              {metric.label}
                            </div>
                            <div className="text-base sm:text-lg font-mono font-bold text-[#00f0ff] mt-0.5">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0d1424] text-[#94a3b8] border border-[#172033]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Visual / Screenshot Preview & Action CTAs */}
                    <div className="lg:col-span-5 space-y-4">
                      {project.screenshots && project.screenshots.length > 0 ? (
                        <div
                          className="relative aspect-video rounded-xl overflow-hidden border border-[#1e293b] bg-black cursor-pointer group/img"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Image
                            src={project.screenshots[0].src}
                            alt={project.title}
                            fill
                            className="object-cover group-hover/img:scale-105 transition-transform duration-300"
                            sizes="(max-width: 1024px) 100vw, 450px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                            <span className="text-[11px] font-mono text-white/90 truncate">
                              {project.screenshots[0].caption}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-video rounded-xl border border-[#1e293b] bg-[#070b12] p-5 flex flex-col justify-between">
                          <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                            <span>ARCHITECTURAL SPECIFICATION</span>
                            <Cpu className="w-4 h-4 text-[#00f0ff]" />
                          </div>
                          <div className="text-center font-mono text-sm text-[#94a3b8]">
                            {project.title} — End-to-end Microservice Implementation
                          </div>
                          <div className="text-center text-xs font-mono text-[#10b981]">
                            Verified in live repository
                          </div>
                        </div>
                      )}

                      {/* Action buttons row */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {project.links.liveDemo && (
                          <a
                            href={project.links.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00f0ff] text-[#05070b] font-mono text-xs font-bold hover:bg-[#38bdf8] transition-colors shadow-sm"
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
                            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#131b2e] hover:bg-[#1e293b] text-white font-mono text-xs transition-colors border border-[#1e293b]"
                          >
                            <span className="text-[#ffd21e]">🤗</span>
                            <span>HF Space</span>
                          </a>
                        )}

                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0a0f1b] hover:bg-[#131b2e] text-[#cbd5e1] hover:text-white font-mono text-xs transition-colors border border-[#172033]"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}

                        {/* Deep dive modal button */}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] text-[#00f0ff] font-mono text-xs font-medium border border-[#00f0ff]/30 transition-all hover:border-[#00f0ff]"
                        >
                          <span>Inspect Full System Architecture & Code</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

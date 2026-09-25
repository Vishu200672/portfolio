"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  Code2,
  PieChart
} from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import { projectsData, ProjectDetail } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import SpotlightCard from "./SpotlightCard";
import { FadeIn } from "@/components/MotionWrapper";
import { soundEffects } from "@/utils/audio";

interface ProjectCardState {
  activeView: "visual" | "api" | "benchmarks";
}

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [projectCardViews, setProjectCardViews] = useState<Record<string, "visual" | "api" | "benchmarks">>({
    "smarthire-ai": "visual",
    "breed-recognizer": "visual",
    "customer360-ai": "visual",
    "smarthire-enterprise": "visual"
  });

  const setCardView = (projectId: string, view: "visual" | "api" | "benchmarks") => {
    soundEffects.playClick(950);
    setProjectCardViews((prev) => ({ ...prev, [projectId]: view }));
  };

  const getApiPayload = (projectId: string) => {
    switch (projectId) {
      case "smarthire-ai":
        return {
          method: "POST",
          endpoint: "/match",
          headers: { "Content-Type": "multipart/form-data" },
          request: {
            jd_text: "Seeking AI/ML Engineer with PyTorch, Transformers, FastAPI...",
            resumes: ["candidate_vishvam.pdf"],
            similarity_weight: 0.70
          },
          response: {
            status: "success",
            duration_sec: 0.058,
            summary: { average_score: 85.0, highly_recommended: 1 },
            ranked_candidates: [
              {
                rank: 1,
                candidate: "Vishvam_Trivedi",
                composite_score_pct: 85.0,
                semantic_similarity: 91.2,
                skill_coverage_pct: 75.0,
                recommendation: "Highly Recommended",
                matched_skills: ["python", "pytorch", "transformers", "fastapi"],
                critical_missing: []
              }
            ]
          }
        };
      case "breed-recognizer":
        return {
          method: "ON-DEVICE INFERENCE",
          endpoint: "TorchScript Runtime (Android APK)",
          headers: { "Execution-Target": "ARM64 CPU", "Cloud-Dependency": "None" },
          request: {
            input_frame: "image_256x256_rgb.raw",
            preprocessing: "Canny Edge + Adaptive Equalization"
          },
          response: {
            status: "classified",
            inference_latency: "21.4s",
            apk_footprint: "~30 MB",
            predictions: [
              { breed: "Gir Cattle", confidence: 0.958, indigenous: true },
              { breed: "Kankrej Cattle", confidence: 0.032, indigenous: true },
              { breed: "Sahiwal Cattle", confidence: 0.010, indigenous: true }
            ]
          }
        };
      case "customer360-ai":
        return {
          method: "POST",
          endpoint: "/demo-predict",
          headers: { "X-API-Key": "c360_live_key_9f8a2b7c4e1d" },
          request: {
            recency_days: 14,
            frequency_12m: 18,
            monetary_spend: 4200.00
          },
          response: {
            cluster_id: 0,
            cohort: "VIP Champions",
            churn_risk_score: 0.12,
            clv_projection: 12450.00,
            next_best_action: "Enroll in Executive Concierge Beta",
            shap_attributions: {
              recency_days: -0.42,
              order_frequency: -0.68,
              monetary_spend: -0.85
            }
          }
        };
      default:
        return {
          method: "OData V4 GET",
          endpoint: "/sap/opu/odata4/sap/zui_onboarding/srvd_a2x/sap/onboarding/0001",
          headers: { "Accept": "application/json", "CleanCore": "ABAP Cloud" },
          request: { entity: "OnboardingTracker", filter: "Status eq 'Active'" },
          response: {
            value: [
              { EmployeeID: "EMP_9012", Status: "Provisioned", SLA: "Met", RAP_Draft: false }
            ]
          }
        };
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#05070b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
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
        </FadeIn>

        {/* Cinematic Projects List with SpotlightCard & View Switcher */}
        <div className="space-y-16">
          {projectsData.map((project, pIdx) => {
            const currentView = projectCardViews[project.id] || "visual";
            const apiData = getApiPayload(project.id);

            return (
              <FadeIn key={project.id} delay={pIdx * 0.1}>
                <SpotlightCard
                  enableTilt={true}
                  showCorners={true}
                  spotlightColor="rgba(0, 240, 255, 0.14)"
                  className="p-6 sm:p-8 lg:p-10"
                >
                  {/* Top metadata row with View Switcher */}
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

                    {/* Card Inner View Mode Switcher */}
                    <div className="flex items-center gap-1 bg-[#060910] p-1 rounded-lg border border-[#1e293b]">
                      <button
                        onClick={() => setCardView(project.id, "visual")}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors flex items-center gap-1.5 ${
                          currentView === "visual"
                            ? "bg-[#00f0ff] text-[#05070b] font-bold"
                            : "text-[#94a3b8] hover:text-white"
                        }`}
                      >
                        <Layers className="w-3 h-3" />
                        <span>Visual</span>
                      </button>

                      <button
                        onClick={() => setCardView(project.id, "api")}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors flex items-center gap-1.5 ${
                          currentView === "api"
                            ? "bg-[#00f0ff] text-[#05070b] font-bold"
                            : "text-[#94a3b8] hover:text-white"
                        }`}
                      >
                        <Code2 className="w-3 h-3" />
                        <span>API Payload</span>
                      </button>

                      <button
                        onClick={() => setCardView(project.id, "benchmarks")}
                        className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors flex items-center gap-1.5 ${
                          currentView === "benchmarks"
                            ? "bg-[#00f0ff] text-[#05070b] font-bold"
                            : "text-[#94a3b8] hover:text-white"
                        }`}
                      >
                        <PieChart className="w-3 h-3" />
                        <span>Gauges</span>
                      </button>
                    </div>
                  </div>

                  {/* Main Grid: Content & Dynamic Right Panel */}
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
                            className="p-3 rounded-lg bg-[#070b12] border border-[#172033] hover:border-[#24324f] transition-colors"
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

                    {/* Right Column: View-Switched Interactive Panel */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="min-h-[260px] rounded-xl overflow-hidden border border-[#1e293b] bg-[#060910]">
                        <AnimatePresence mode="wait">
                          {/* VIEW 1: VISUAL / SCREENSHOT */}
                          {currentView === "visual" && (
                            <motion.div
                              key="visual"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="h-full flex flex-col justify-between"
                            >
                              {project.screenshots && project.screenshots.length > 0 ? (
                                <div
                                  className="relative aspect-video w-full h-[220px] bg-black cursor-pointer group/img overflow-hidden"
                                  onClick={() => {
                                    soundEffects.playPulse();
                                    setSelectedProject(project);
                                  }}
                                >
                                  <Image
                                    src={project.screenshots[0].src}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                                    sizes="(max-width: 1024px) 100vw, 450px"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                                    <span className="text-[11px] font-mono text-white/90 truncate">
                                      {project.screenshots[0].caption}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="p-6 flex flex-col justify-between h-[220px]">
                                  <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                                    <span>ARCHITECTURAL SPECIFICATION</span>
                                    <Cpu className="w-4 h-4 text-[#00f0ff]" />
                                  </div>
                                  <div className="text-center font-mono text-sm text-[#94a3b8]">
                                    {project.title} — End-to-end Systems Architecture
                                  </div>
                                  <div className="text-center text-xs font-mono text-[#10b981]">
                                    Verified in live codebase
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}

                          {/* VIEW 2: LIVE API PAYLOAD PREVIEW */}
                          {currentView === "api" && (
                            <motion.div
                              key="api"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-4 space-y-3 font-mono text-xs overflow-y-auto max-h-[260px] text-[#cbd5e1]"
                            >
                              <div className="flex items-center justify-between pb-2 border-b border-[#172033]">
                                <span className="text-[#00f0ff] font-bold">
                                  {apiData.method} {apiData.endpoint}
                                </span>
                                <span className="text-[10px] text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded border border-[#10b981]/20">
                                  200 OK
                                </span>
                              </div>

                              <div>
                                <span className="text-[10px] text-[#64748b] block mb-1">
                                  REQUEST PAYLOAD:
                                </span>
                                <pre className="p-2 rounded bg-[#040609] text-[10px] text-[#94a3b8] overflow-x-auto">
                                  {JSON.stringify(apiData.request, null, 2)}
                                </pre>
                              </div>

                              <div>
                                <span className="text-[10px] text-[#64748b] block mb-1">
                                  RESPONSE BODY:
                                </span>
                                <pre className="p-2 rounded bg-[#040609] text-[10px] text-[#10b981] overflow-x-auto">
                                  {JSON.stringify(apiData.response, null, 2)}
                                </pre>
                              </div>
                            </motion.div>
                          )}

                          {/* VIEW 3: BENCHMARKS & GAUGES */}
                          {currentView === "benchmarks" && (
                            <motion.div
                              key="benchmarks"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-5 flex flex-col justify-between h-full space-y-4"
                            >
                              <div className="text-xs font-mono font-bold text-white uppercase flex items-center justify-between">
                                <span>Verified Benchmark Gauges</span>
                                <span className="text-[10px] text-[#10b981]">HELD-OUT AUDIT</span>
                              </div>

                              <div className="grid grid-cols-2 gap-3">
                                {project.metrics.slice(0, 2).map((m, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3.5 rounded-xl bg-[#070b12] border border-[#172033] flex flex-col items-center justify-center text-center"
                                  >
                                    <div className="text-2xl font-mono font-bold text-[#00f0ff]">
                                      {m.value}
                                    </div>
                                    <div className="text-[11px] font-mono text-white mt-1">
                                      {m.label}
                                    </div>
                                    <div className="text-[10px] text-[#64748b] mt-0.5 truncate max-w-full">
                                      {m.benchmark}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="p-2.5 rounded-lg bg-[#070b12] border border-[#172033] text-[11px] font-mono text-[#94a3b8] text-center">
                                Zero synthetic claims • 100% verified against test benchmarks
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Action buttons row */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {project.links.liveDemo && (
                          <motion.a
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onMouseEnter={() => soundEffects.playClick(900)}
                            href={project.links.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00f0ff] text-[#05070b] font-mono text-xs font-bold hover:bg-[#38bdf8] transition-colors shadow-sm"
                          >
                            <Globe className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}

                        {project.links.huggingFace && (
                          <motion.a
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onMouseEnter={() => soundEffects.playClick(900)}
                            href={project.links.huggingFace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#131b2e] hover:bg-[#1e293b] text-white font-mono text-xs transition-colors border border-[#1e293b]"
                          >
                            <span className="text-[#ffd21e]">🤗</span>
                            <span>HF Space</span>
                          </motion.a>
                        )}

                        {project.links.github && (
                          <motion.a
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onMouseEnter={() => soundEffects.playClick(900)}
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0a0f1b] hover:bg-[#131b2e] text-[#cbd5e1] hover:text-white font-mono text-xs transition-colors border border-[#172033]"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </motion.a>
                        )}

                        {/* Deep dive modal button */}
                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            soundEffects.playPulse();
                            setSelectedProject(project);
                          }}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] text-[#00f0ff] font-mono text-xs font-medium border border-[#00f0ff]/30 transition-all hover:border-[#00f0ff]"
                        >
                          <span>Inspect Full System Architecture & Code</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </FadeIn>
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

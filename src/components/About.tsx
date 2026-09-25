"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  Terminal,
  Cpu,
  Layers,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Code2
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#05070b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-[#172033] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 01. ENGINEERING POSITIONING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              About & Technical Discipline
            </h2>
          </div>
          <div className="font-mono text-xs text-[#64748b]">
            LOCATION: GUJARAT, INDIA • REMOTE-READY
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Statement & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0a0e17] border border-[#172033] rounded-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#00f0ff]">
                <Cpu className="w-4 h-4" />
                <span>CORE DIRECTIVE</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-mono text-white leading-relaxed mb-6 border-l-2 border-[#00f0ff] pl-4">
                &ldquo;This person builds real machine-learning systems and understands how to take models from experimentation to usable applications.&rdquo;
              </blockquote>

              <div className="space-y-4 text-sm text-[#94a3b8] leading-relaxed font-sans">
                <p>
                  I am a fourth-year Computer Science student at ITM (SLS) Baroda University (CGPA 8.62) focusing on{" "}
                  <strong className="text-white font-mono">AI/ML Engineering, Computer Vision, and Applied NLP</strong>. 
                  My engineering practice is built on a simple conviction: an algorithm in an isolated notebook is merely an unfinished hypothesis. True ML engineering begins when mathematical models survive the constraints of real deployment environments.
                </p>
                <p>
                  My work spans the full model lifecycle—from data curation, tokenization pipelines, and PyTorch fine-tuning to quantized edge delivery (deploying an offline ~30MB Computer Vision APK to Android with zero cloud dependency) and high-throughput REST APIs (FastAPI microservices delivering sub-100ms vector search).
                </p>
                <p>
                  Rather than chasing synthetic hype or vanity metrics, I prioritize reproducible evaluation: Pearson r = 0.9733 correlation against human-annotated NLP benchmarks, 94.2% top-1 accuracy on 26 bovine breeds under unconstrained field lighting, and SHAP tree explainability for high-stakes predictive decisions.
                </p>
              </div>

              {/* What I Deliver */}
              <div className="mt-8 pt-6 border-t border-[#172033] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#00f0ff]/10 text-[#00f0ff] mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-white uppercase">
                      Edge & Offline ML
                    </h3>
                    <p className="text-xs text-[#94a3b8] mt-0.5">
                      Quantized TorchScript runtimes engineered for resource-constrained, zero-connectivity mobile devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#10b981]/10 text-[#10b981] mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-bold text-white uppercase">
                      Production Microservices
                    </h3>
                    <p className="text-xs text-[#94a3b8] mt-0.5">
                      Stateless FastAPI microservices, persistent vector indexing, and 24/7 uptime monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Verified Certifications */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Credentials */}
            <div className="bg-[#0a0e17] border border-[#172033] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION RECORD</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
                  CGPA: 8.62
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1">
                {profileData.education.degree}
              </h3>
              <div className="text-xs font-mono text-[#00f0ff] mb-2">
                {profileData.education.institution}
              </div>
              <div className="text-xs font-mono text-[#64748b] mb-3">
                {profileData.education.period}
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {profileData.education.details}
              </p>
            </div>

            {/* Verified Certifications */}
            <div className="bg-[#0a0e17] border border-[#172033] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#818cf8]">
                  <Award className="w-4 h-4" />
                  <span>VERIFIED CERTIFICATIONS</span>
                </div>
                <span className="text-[11px] font-mono text-[#64748b]">
                  AUDITED
                </span>
              </div>

              <div className="space-y-3.5">
                {profileData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#070b12] border border-[#172033] hover:border-[#24324f] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-mono text-xs font-semibold text-white">
                        {cert.title}
                      </div>
                      {cert.period && (
                        <span className="text-[10px] font-mono text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded border border-[#10b981]/20 shrink-0">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-1 text-[11px] text-[#94a3b8] font-mono">
                      <span>{cert.issuer}</span>
                      {cert.period && <span>{cert.period}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Systems Engineering Range Note */}
            <div className="p-4 rounded-xl bg-[#090d16] border border-[#1e293b] flex items-center gap-3">
              <Code2 className="w-5 h-5 text-[#00f0ff] shrink-0" />
              <div className="text-xs text-[#94a3b8]">
                <span className="text-white font-semibold font-mono">Backend Systems Fluency:</span>{" "}
                Certified in SAP ABAP Cloud / RAP, bridging statistical AI modeling with enterprise transactional architectures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

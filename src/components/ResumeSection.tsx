"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  ExternalLink,
  Terminal,
  CheckCircle2,
  GraduationCap,
  Award,
  Layers,
  Sparkles,
  X
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function ResumeSection() {
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  return (
    <section id="resume" className="py-24 bg-[#05070b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 border-b border-[#172033] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 07. CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Verified Technical Resume
            </h2>
          </div>
          <div className="font-mono text-xs text-[#94a3b8]">
            FORMAT: REVISED ATS-COMPLIANT PDF
          </div>
        </div>

        {/* Resume Card Container */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#090d16] border border-[#172033] relative overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    Vishvam Trivedi — ML & CV Engineer
                  </h3>
                  <div className="text-xs font-mono text-[#00f0ff] mt-0.5">
                    B.Tech CSE • ITM (SLS) Baroda University (CGPA 8.62)
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Download the official single-page resume highlighting real model weights, Pearson r = 0.9733 fine-tuning results, ~30MB quantized Android Computer Vision APK delivery, and SAP ABAP Cloud certifications.
              </p>

              {/* Quick highlights badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-mono">
                <div className="p-2 rounded bg-[#070b12] border border-[#172033] text-[#cbd5e1]">
                  ✓ 94.2% Test Acc (CV)
                </div>
                <div className="p-2 rounded bg-[#070b12] border border-[#172033] text-[#cbd5e1]">
                  ✓ r = 0.9733 (NLP)
                </div>
                <div className="p-2 rounded bg-[#070b12] border border-[#172033] text-[#cbd5e1]">
                  ✓ SAP Certified Developer
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={profileData.resumeUrl}
                download="Vishvam_Trivedi_AI_ML_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00f0ff] text-[#05070b] font-mono text-sm font-bold shadow-[0_0_20px_-3px_rgba(0,240,255,0.4)] hover:bg-[#38bdf8] transition-all transform hover:-translate-y-0.5 text-center"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => setShowPdfViewer(true)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-white font-mono text-sm border border-[#172033] hover:border-[#00f0ff]/40 transition-all text-center"
              >
                <Eye className="w-4 h-4 text-[#00f0ff]" />
                <span>View In-Browser</span>
              </button>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#64748b] hover:text-[#94a3b8] transition-colors text-center"
              >
                <span>Open Raw File in New Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded PDF Modal Viewer */}
        {showPdfViewer && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          >
            <div className="relative w-full max-w-4xl h-[90vh] bg-[#090d16] border border-[#1e293b] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#172033] bg-[#05070d]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
                  <FileText className="w-4 h-4" />
                  <span>Vishvam_Trivedi_AI_ML_Resume_Final.pdf</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={profileData.resumeUrl}
                    download="Vishvam_Trivedi_Resume.pdf"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#00f0ff] text-[#05070b] text-xs font-mono font-bold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setShowPdfViewer(false)}
                    className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#131b2e]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-[#1e293b]">
                <iframe
                  src={`${profileData.resumeUrl}#toolbar=0`}
                  title="Vishvam Trivedi Resume"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

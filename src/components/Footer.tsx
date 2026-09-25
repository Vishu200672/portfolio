"use client";

import React from "react";
import { Cpu, Mail, ArrowUp } from "lucide-react";
import { Linkedin, Github } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070b] border-t border-[#172033] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#172033]">
          {/* Brand & Mission */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#0a0e17] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff]">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                VISHVAM TRIVEDI
              </span>
              <span className="text-[10px] font-mono text-[#00f0ff] px-1.5 py-0.5 rounded bg-[#00f0ff]/10">
                AI/ML & CV
              </span>
            </div>
            <p className="text-xs text-[#94a3b8] font-mono max-w-md">
              Building intelligent systems across Computer Vision, NLP, and Machine Learning APIs. Taking models from experimentation to production.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#00f0ff] text-[#94a3b8] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#00f0ff] text-[#94a3b8] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={profileData.huggingface}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#00f0ff] text-[#94a3b8] hover:text-white transition-colors"
                aria-label="Hugging Face"
              >
                <span className="text-sm">🤗</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0a0f1b] border border-[#172033] hover:border-[#00f0ff] text-xs font-mono text-[#94a3b8] hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#00f0ff]" />
            </button>
          </div>
        </div>

        {/* Telemetry bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-[#64748b]">
          <div>
            © {new Date().getFullYear()} Vishvam Trivedi. All verified benchmarks grounded in repository code.
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              SYS_STATUS: OPTIMAL
            </span>
            <span>•</span>
            <span>NEXT.js 16 // REACT 19</span>
            <span>•</span>
            <span>HALOL, GUJARAT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

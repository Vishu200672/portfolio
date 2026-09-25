"use client";

import React from "react";
import {
  Star,
  GitFork,
  ExternalLink,
  Code,
  Terminal,
  Activity,
  Layers,
  BookOpen
} from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";

interface RepoItem {
  name: string;
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  tags: string[];
  link: string;
  isHF?: boolean;
}

const repos: RepoItem[] = [
  {
    name: "SmartHire-AI",
    repo: "Vishu200672/SmartHire-AI",
    description:
      "ATS-inspired AI recruitment engine matching resumes with job descriptions using fine-tuned Sentence Transformer embeddings (r=0.9733) and persistent vector search.",
    language: "Python / PyTorch",
    languageColor: "#3572A5",
    tags: ["transformers", "fastapi", "chromadb", "nlp", "streamlit"],
    link: "https://github.com/Vishu200672/SmartHire-AI"
  },
  {
    name: "Breed-Recognizer",
    repo: "Vishu200672/Breed-Recognizer",
    description:
      "Computer Vision classification system fine-tuning ConvNeXt Nano on 2,600+ images across 26 Indian bovine breeds, quantized for on-device Android offline inference.",
    language: "Python / PyTorch",
    languageColor: "#ee4c2c",
    tags: ["convnext", "computer-vision", "android-apk", "opencv", "quantization"],
    link: "https://github.com/Vishu200672/Breed-Recognizer"
  },
  {
    name: "Customer360-AI",
    repo: "Vishu2006/customer",
    description:
      "Production machine learning intelligence engine synthesizing RFM customer signals, K-Means clustering, XGBoost churn & purchase intent predictions, and SHAP explainability.",
    language: "Python / XGBoost",
    languageColor: "#3572A5",
    tags: ["xgboost", "shap", "fastapi", "gradio", "crm-intelligence"],
    link: "https://huggingface.co/spaces/Vishu2006/customer",
    isHF: true
  }
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 bg-[#070b12] relative border-t border-[#172033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 border-b border-[#172033] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 08. CODE REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Open-Source & Verifiable Work
            </h2>
          </div>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] hover:underline"
          >
            <span>github.com/Vishu200672</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#090d16] border border-[#172033] hover:border-[#00f0ff]/50 hover:bg-[#0c121e] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-white">
                    {repo.isHF ? (
                      <span className="text-lg">🤗</span>
                    ) : (
                      <Github className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00f0ff] transition-colors" />
                    )}
                    <span className="font-mono text-sm font-bold truncate">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-white transition-colors" />
                </div>

                <div className="text-[11px] font-mono text-[#64748b] mb-3">
                  {repo.repo}
                </div>

                <p className="text-xs text-[#94a3b8] leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060910] text-[#64748b] border border-[#172033]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Footer Language Metadata */}
                <div className="pt-3 border-t border-[#172033] flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span>{repo.language}</span>
                  </div>

                  <span className="text-[10px] text-[#10b981]">
                    PUBLIC_REPO
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

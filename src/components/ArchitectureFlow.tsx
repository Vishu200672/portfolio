"use client";

import React, { useState } from "react";
import { Database, Cpu, Layers, Zap, Server, Layout, ArrowRight, CheckCircle2 } from "lucide-react";

interface PipelineNode {
  id: string;
  name: string;
  subname: string;
  icon: React.ElementType;
  color: string;
  tech: string;
  detail: string;
  metric: string;
}

const nodes: PipelineNode[] = [
  {
    id: "data",
    name: "DATA",
    subname: "Ingestion & Ground Truth",
    icon: Database,
    color: "#38bdf8",
    tech: "PDF/DOCX, 2600+ Field Images, CSV Signals",
    detail: "Multi-modal input ingestion with layout-preserving sanitization and dataset balancing.",
    metric: "127 curated resume-JD pairs | 26 breed classes"
  },
  {
    id: "features",
    name: "FEATURES",
    subname: "Domain Representations",
    icon: Layers,
    color: "#60a5fa",
    tech: "400-token Chunks, Canny Filters, RFM Vectors",
    detail: "Sliding-window tokenization, illumination-invariant visual edges, and normalized behavioral features.",
    metric: "300+ skill ontology | adaptive thresholding"
  },
  {
    id: "model",
    name: "MODEL",
    subname: "Neural & Tree Backbones",
    icon: Cpu,
    color: "#00f0ff",
    tech: "all-MiniLM-L6-v2, ConvNeXt Nano, XGBoost",
    detail: "PyTorch bi-encoders with CosineSimilarityLoss and inverted bottleneck convolutional networks.",
    metric: "Pearson r = 0.9733 | 94.2% top-1 accuracy"
  },
  {
    id: "inference",
    name: "INFERENCE",
    subname: "Edge & Low-Cost Serving",
    icon: Zap,
    color: "#10b981",
    tech: "8-bit Quantization, TorchScript, Mean Pooling",
    detail: "Sub-0.06s CPU inference and ~30MB mobile APK binaries engineered for zero cloud dependency.",
    metric: "<0.06s per doc | <25s on budget mobile"
  },
  {
    id: "api",
    name: "API",
    subname: "Contract & Protocols",
    icon: Server,
    color: "#818cf8",
    tech: "FastAPI, 12 REST Endpoints, ChromaDB",
    detail: "Stateless asynchronous microservices, persistent vector indexing, and local SHAP explainability.",
    metric: "Sub-100ms vector search | OpenAPI 3.0"
  },
  {
    id: "app",
    name: "APPLICATION",
    subname: "End-User Systems",
    icon: Layout,
    color: "#a78bfa",
    tech: "Streamlit Studio, Android Native, Gradio",
    detail: "Production-grade interfaces putting functional machine learning directly into users' hands.",
    metric: "Zero cloud dependency APK | Live Web Apps"
  }
];

export default function ArchitectureFlow() {
  const [selectedNode, setSelectedNode] = useState<string>("model");
  const active = nodes.find((n) => n.id === selectedNode) || nodes[2];

  return (
    <div className="w-full bg-[#070b12]/90 border border-[#172033] rounded-xl p-4 md:p-6 backdrop-blur-md relative overflow-hidden">
      {/* Decorative technical header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#172033]/80">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8]">
            End-To-End Machine Learning System Architecture
          </span>
        </div>
        <div className="text-[11px] font-mono text-[#00f0ff]/80 bg-[#00f0ff]/10 px-2.5 py-1 rounded border border-[#00f0ff]/20">
          STATUS: INFERENCE_PIPELINE_VERIFIED
        </div>
      </div>

      {/* Horizontal / responsive node pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 relative">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isSelected = selectedNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`group flex flex-col p-3 rounded-lg border text-left transition-all duration-200 relative ${
                isSelected
                  ? "bg-[#0f172a] border-[#00f0ff] shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)]"
                  : "bg-[#090d16] border-[#172033] hover:border-[#24324f] hover:bg-[#0c121e]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-[#64748b]">
                  0{idx + 1}
                </span>
                <Icon
                  className="w-4 h-4 transition-transform group-hover:scale-110"
                  style={{ color: node.color }}
                />
              </div>

              <span
                className="text-xs font-mono font-bold tracking-wider"
                style={{ color: isSelected ? "#00f0ff" : "#f1f5f9" }}
              >
                {node.name}
              </span>

              <span className="text-[10px] text-[#94a3b8] truncate mt-0.5">
                {node.subname}
              </span>

              {/* Connecting arrow indicator for desktop */}
              {idx < nodes.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-[#1e293b]">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected node telemetry drawer */}
      <div className="mt-4 pt-4 border-t border-[#172033]/80 bg-[#05070d]/60 rounded-lg p-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="space-y-1 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-[#00f0ff]">
              [{active.name}] {active.subname}
            </span>
            <span className="text-[#64748b]">•</span>
            <span className="font-mono text-[#94a3b8]">{active.tech}</span>
          </div>
          <p className="text-[#cbd5e1] leading-relaxed">{active.detail}</p>
        </div>

        <div className="flex items-center gap-2 bg-[#090e1a] border border-[#1e293b] px-3 py-2 rounded-md font-mono text-[11px] shrink-0 text-[#10b981]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{active.metric}</span>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Activity,
  Maximize2,
  Terminal,
  Search
} from "lucide-react";
import { soundEffects } from "@/utils/audio";

interface TensorPreset {
  label: string;
  category: string;
  seed: number;
  description: string;
  topFeatures: string[];
}

const presets: TensorPreset[] = [
  {
    label: "ConvNeXt Nano On-Device Vision",
    category: "Computer Vision",
    seed: 42,
    description: "Inverted bottleneck depthwise convolutions extracting 26 bovine morphology patterns.",
    topFeatures: ["dim_48 [Horn Curvature]", "dim_112 [Dorsal Ridge]", "dim_204 [Dewlap Fold]"]
  },
  {
    label: "Sentence-BERT all-MiniLM-L6-v2",
    category: "NLP & Transformers",
    seed: 97,
    description: "Mean-pooled 384-dimensional bi-encoder embedding with calibrated cosine proximity.",
    topFeatures: ["dim_73 [PyTorch Fluency]", "dim_192 [Contextual Semantics]", "dim_301 [FastAPI API]"]
  },
  {
    label: "FastAPI & Persistent ChromaDB Vectors",
    category: "Microservices",
    seed: 13,
    description: "Stateless HTTP microservice serialization achieving sub-100ms vector search on CPU.",
    topFeatures: ["dim_22 [Pydantic Validation]", "dim_155 [Index Locality]", "dim_350 [Async Worker]"]
  },
  {
    label: "XGBoost Churn & SHAP Attribution",
    category: "Predictive Intelligence",
    seed: 88,
    description: "Gradient boosted tree attributions quantifying marginal RFM behavioral signals.",
    topFeatures: ["dim_60 [Recency Drift]", "dim_180 [Frequency Velocity]", "dim_290 [CLV Decile]"]
  }
];

export default function TensorEmbeddingInspector() {
  const [selectedPresetIdx, setSelectedPresetIdx] = useState(1);
  const [hoveredDim, setHoveredDim] = useState<{ index: number; value: number } | null>(null);
  const activePreset = presets[selectedPresetIdx];

  // Pseudo-deterministic 384-dimensional vector generator based on seed
  const vectorDimensions = useMemo(() => {
    const dims: number[] = [];
    let s = activePreset.seed;
    for (let i = 0; i < 384; i++) {
      s = (s * 9301 + 49297) % 233280;
      const rnd = s / 233280;
      // Normal distribution-like range between -1.0 and +1.0
      const val = Math.sin(rnd * Math.PI * 2) * Math.cos((i / 384) * Math.PI);
      dims.push(Number(val.toFixed(4)));
    }
    // Normalize to unit length
    const norm = Math.sqrt(dims.reduce((sum, v) => sum + v * v, 0));
    return dims.map((v) => Number((v / norm).toFixed(4)));
  }, [activePreset.seed]);

  const handlePresetSelect = (idx: number) => {
    setSelectedPresetIdx(idx);
    soundEffects.playClick(1000);
  };

  const getCellColor = (val: number) => {
    // Map value from -0.15 to +0.15 to color
    if (val > 0.08) return "bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]";
    if (val > 0.03) return "bg-[#38bdf8]";
    if (val > 0) return "bg-[#6366f1]/80";
    if (val > -0.05) return "bg-[#334155]";
    return "bg-[#172033]";
  };

  return (
    <div className="w-full bg-[#070b12]/95 border border-[#172033] rounded-2xl p-6 relative overflow-hidden backdrop-blur-md shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#172033]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-white tracking-wide">
                LIVE TENSOR EMBEDDING INSPECTOR
              </span>
              <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/20">
                DIM: 384 (FP32)
              </span>
            </div>
            <p className="text-xs font-mono text-[#64748b]">
              Interactive latent representation heatmap (all-MiniLM-L6-v2)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#10b981] flex items-center gap-1.5 bg-[#10b981]/10 px-2.5 py-1 rounded-md border border-[#10b981]/20">
            <Activity className="w-3.5 h-3.5" />
            <span>L2 NORM ||v|| = 1.000</span>
          </span>
        </div>
      </div>

      {/* Preset Phrase Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => handlePresetSelect(idx)}
            className={`p-3 rounded-xl border text-left font-mono transition-all duration-200 relative overflow-hidden ${
              selectedPresetIdx === idx
                ? "bg-[#0f172a] border-[#00f0ff] text-white shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)]"
                : "bg-[#090d16] border-[#172033] text-[#94a3b8] hover:border-[#24324f] hover:bg-[#0c121e]"
            }`}
          >
            <div className="text-[10px] text-[#64748b] uppercase tracking-wider mb-1">
              {preset.category}
            </div>
            <div className={`text-xs font-bold truncate ${selectedPresetIdx === idx ? "text-[#00f0ff]" : "text-white"}`}>
              {preset.label}
            </div>
          </button>
        ))}
      </div>

      {/* 384-Cell Tensor Heatmap Grid (16 rows x 24 columns = 384 dimensions) */}
      <div className="p-4 rounded-xl bg-[#040609] border border-[#172033] relative">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#64748b] mb-2.5">
          <span>TENSOR_MATRIX_PROJECTION [16 × 24]</span>
          <span>
            {hoveredDim
              ? `HOVERING: DIM_${hoveredDim.index.toString().padStart(3, "0")} → VALUE: ${hoveredDim.value > 0 ? "+" : ""}${hoveredDim.value}`
              : "HOVER ANY CELL TO INSPECT COMPONENT WEIGHT"}
          </span>
        </div>

        <div className="grid grid-cols-24 gap-1 p-1 overflow-x-auto">
          {vectorDimensions.map((val, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{ opacity: [0.7, 1] }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => {
                setHoveredDim({ index: idx, value: val });
                soundEffects.playClick(1200);
              }}
              onMouseLeave={() => setHoveredDim(null)}
              className={`h-3 rounded-xs cursor-crosshair transition-all duration-200 hover:scale-150 hover:z-30 hover:ring-1 hover:ring-white ${getCellColor(
                val
              )}`}
              title={`dim_${idx}: ${val}`}
            />
          ))}
        </div>

        {/* Gradient Legend */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#172033]/60 text-[10px] font-mono text-[#64748b]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#172033]" />
            <span>Negative Inhibition (-0.15)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#6366f1]" />
            <span>Neutral (0.00)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#00f0ff]" />
            <span>Peak Activation (+0.15)</span>
          </div>
        </div>
      </div>

      {/* Latent Feature Deconstruction Output */}
      <div className="mt-4 pt-4 border-t border-[#172033] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono">
        <div className="space-y-1">
          <span className="text-[#00f0ff] font-bold">
            LATENT SPACE INTERPRETATION:
          </span>
          <p className="text-[#94a3b8]">{activePreset.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {activePreset.topFeatures.map((feat, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded bg-[#090e1a] border border-[#1e293b] text-[#cbd5e1] text-[11px]"
            >
              {feat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

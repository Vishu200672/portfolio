"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Eye,
  Activity,
  Sliders,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Terminal,
  Zap
} from "lucide-react";
import { FadeIn } from "@/components/MotionWrapper";

export default function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState<"smarthire" | "vision" | "customer360">("smarthire");

  // ==========================================
  // 1. SMARTHIRE SIMULATOR STATE
  // ==========================================
  const jobRoles = [
    {
      title: "PyTorch & Computer Vision Engineer",
      requiredSkills: ["python", "pytorch", "opencv", "cnn", "docker", "transfer-learning"],
      targetContext: "Building edge-deployable computer vision models with PyTorch and quantization."
    },
    {
      title: "NLP & Transformer API Engineer",
      requiredSkills: ["python", "pytorch", "transformers", "fastapi", "huggingface", "rest-api"],
      targetContext: "Deploying high-throughput sentence transformer embeddings and semantic search microservices."
    },
    {
      title: "Senior ML Systems Architect",
      requiredSkills: ["python", "fastapi", "docker", "scikit-learn", "xgboost", "microservices"],
      targetContext: "Designing end-to-end predictive intelligence engines with automated model explainability."
    }
  ];

  const candidateProfiles = [
    {
      name: "Candidate Alpha (High ML & Vision Alignment)",
      skills: ["python", "pytorch", "opencv", "cnn", "transfer-learning", "git", "linux"],
      rawSemanticScore: 92.5
    },
    {
      name: "Candidate Beta (Strong Backend / Partial ML)",
      skills: ["python", "fastapi", "docker", "rest-api", "git", "sql"],
      rawSemanticScore: 68.0
    },
    {
      name: "Candidate Gamma (Generic Web Developer / Mismatch)",
      skills: ["javascript", "html", "css", "react", "php"],
      rawSemanticScore: 12.0
    }
  ];

  const [selectedRoleIdx, setSelectedRoleIdx] = useState(0);
  const [selectedCandidateIdx, setSelectedCandidateIdx] = useState(0);
  const [semanticWeight, setSemanticWeight] = useState(0.7); // 70% default in SmartHire AI

  const currentRole = jobRoles[selectedRoleIdx];
  const currentCandidate = candidateProfiles[selectedCandidateIdx];

  // Calculate matching & missing skills
  const matchedSkills = currentRole.requiredSkills.filter((s) =>
    currentCandidate.skills.includes(s)
  );
  const missingSkills = currentRole.requiredSkills.filter(
    (s) => !currentCandidate.skills.includes(s)
  );
  const skillCoveragePct = Math.round(
    (matchedSkills.length / currentRole.requiredSkills.length) * 100
  );

  // Composite score: (Semantic * W) + (Skill * (1-W))
  const finalCompositeScore = Math.round(
    currentCandidate.rawSemanticScore * semanticWeight +
      skillCoveragePct * (1 - semanticWeight)
  );

  const getTier = (score: number) => {
    if (score >= 60) return { label: "Highly Recommended", color: "#10b981", bg: "bg-[#10b981]/10", border: "border-[#10b981]/30" };
    if (score >= 38) return { label: "Recommended", color: "#38bdf8", bg: "bg-[#38bdf8]/10", border: "border-[#38bdf8]/30" };
    if (score >= 18) return { label: "Consider for Review", color: "#f59e0b", bg: "bg-[#f59e0b]/10", border: "border-[#f59e0b]/30" };
    return { label: "Mismatch / Not Recommended", color: "#f87171", bg: "bg-[#f87171]/10", border: "border-[#f87171]/30" };
  };

  const currentTier = getTier(finalCompositeScore);

  // ==========================================
  // 2. VISION PIPELINE STATE
  // ==========================================
  const visionSamples = [
    {
      name: "Gir Cattle (Gujarat)",
      condition: "Direct Sunlight & Open Ground",
      top1: "Gir",
      top1Conf: 95.8,
      top2: "Kankrej",
      top2Conf: 3.2,
      top3: "Sahiwal",
      top3Conf: 1.0,
      edgeDetail: "High convex forehead and curved lyre-shaped horns correctly segmented."
    },
    {
      name: "Murrah Buffalo",
      condition: "Shaded Rural Pen & Wet Mud",
      top1: "Murrah",
      top1Conf: 96.4,
      top2: "Jaffarabadi",
      top2Conf: 2.8,
      top3: "Nili-Ravi",
      top3Conf: 0.8,
      edgeDetail: "Tightly curled spiraled horns identified despite wet coat reflection."
    },
    {
      name: "Kankrej Cattle",
      condition: "Overcast Lighting / Heavy Shadows",
      top1: "Kankrej",
      top1Conf: 93.1,
      top2: "Gir",
      top2Conf: 5.4,
      top3: "Tharparkar",
      top3Conf: 1.5,
      edgeDetail: "Distinctive crescent horns and pendulous dewlap classified with high margin."
    }
  ];

  const [visionSampleIdx, setVisionSampleIdx] = useState(0);
  const currentVision = visionSamples[visionSampleIdx];

  // ==========================================
  // 3. CUSTOMER360 NBA ENGINE STATE
  // ==========================================
  const [recency, setRecency] = useState(35); // days
  const [frequency, setFrequency] = useState(8); // orders
  const [monetary, setMonetary] = useState(2400); // dollars

  const calcChurnRisk = () => {
    let risk = (recency / 120) * 60 - (frequency / 25) * 20 - (monetary / 5000) * 15 + 25;
    return Math.max(5, Math.min(95, Math.round(risk)));
  };

  const churnScore = calcChurnRisk();

  const getClusterInfo = () => {
    if (frequency >= 15 && monetary >= 4000 && recency < 30) {
      return {
        cluster: "Cluster 0: VIP Champions",
        clv: "$12,450",
        nba: "Enroll in Executive Concierge & Early Feature Access Beta",
        color: "#10b981"
      };
    } else if (recency > 60 && churnScore > 65) {
      return {
        cluster: "Cluster 3: High-Risk Attrition Cohort",
        clv: "$1,820",
        nba: "Trigger Urgent Automated Win-Back Outreach with 25% Retention Credit",
        color: "#f87171"
      };
    } else if (frequency < 5 && monetary < 1500) {
      return {
        cluster: "Cluster 4: New / Developing Accounts",
        clv: "$3,100",
        nba: "Send Automated Lifecycle Onboarding Sequence & Product Tour",
        color: "#38bdf8"
      };
    } else {
      return {
        cluster: "Cluster 1: Stable Loyal Core",
        clv: "$6,800",
        nba: "Schedule Quarterly Business Review & Propose Annual License Tier",
        color: "#818cf8"
      };
    }
  };

  const clusterInfo = getClusterInfo();

  return (
    <section id="playground" className="py-20 bg-[#070b12] relative border-t border-[#172033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 border-b border-[#172033] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>// 04. LIVE PIPELINE PLAYGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Interactive ML Model Simulator
              </h2>
            </div>
            <div className="font-mono text-xs text-[#94a3b8]">
              CLIENT-SIDE FORMULATION PROJECTION • TEST SYSTEM LOGIC
            </div>
          </div>
        </FadeIn>

        {/* Simulator Tabs with sliding pill animation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab("smarthire")}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium transition-colors shrink-0 ${
              activeTab === "smarthire"
                ? "text-[#05070b] font-bold"
                : "bg-[#0a0f1b] text-[#94a3b8] hover:text-white border border-[#172033]"
            }`}
          >
            {activeTab === "smarthire" && (
              <motion.div
                layoutId="activePlaygroundTab"
                className="absolute inset-0 bg-[#00f0ff] rounded-lg shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)] pointer-events-none"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <Sparkles className="w-4 h-4 relative z-10" />
            <span className="relative z-10">01. SMARTHIRE SEMANTIC SCORER</span>
          </button>

          <button
            onClick={() => setActiveTab("vision")}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium transition-colors shrink-0 ${
              activeTab === "vision"
                ? "text-[#05070b] font-bold"
                : "bg-[#0a0f1b] text-[#94a3b8] hover:text-white border border-[#172033]"
            }`}
          >
            {activeTab === "vision" && (
              <motion.div
                layoutId="activePlaygroundTab"
                className="absolute inset-0 bg-[#00f0ff] rounded-lg shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)] pointer-events-none"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <Eye className="w-4 h-4 relative z-10" />
            <span className="relative z-10">02. CONVNEXT VISION PIPELINE</span>
          </button>

          <button
            onClick={() => setActiveTab("customer360")}
            className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium transition-colors shrink-0 ${
              activeTab === "customer360"
                ? "text-[#05070b] font-bold"
                : "bg-[#0a0f1b] text-[#94a3b8] hover:text-white border border-[#172033]"
            }`}
          >
            {activeTab === "customer360" && (
              <motion.div
                layoutId="activePlaygroundTab"
                className="absolute inset-0 bg-[#00f0ff] rounded-lg shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)] pointer-events-none"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <Activity className="w-4 h-4 relative z-10" />
            <span className="relative z-10">03. CUSTOMER360 NBA ENGINE</span>
          </button>
        </div>

        {/* Dynamic Simulator Panels with AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === "smarthire" && (
            <motion.div
              key="smarthire"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-[#090d16] border border-[#172033] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#172033]">
                    <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#00f0ff]" />
                      SIMULATION CONTROLS
                    </span>
                    <span className="text-[10px] font-mono text-[#64748b]">
                      SMARTHIRE_RANKING.PY
                    </span>
                  </div>

                  {/* Job Role Selection */}
                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-2 uppercase">
                      Select Target Job Role Description
                    </label>
                    <select
                      value={selectedRoleIdx}
                      onChange={(e) => setSelectedRoleIdx(Number(e.target.value))}
                      className="w-full bg-[#060910] border border-[#1e293b] rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#00f0ff]"
                    >
                      {jobRoles.map((r, i) => (
                        <option key={i} value={i}>
                          {r.title}
                        </option>
                      ))}
                    </select>
                    <p className="text-[11px] text-[#64748b] mt-1.5 font-mono">
                      Context: {currentRole.targetContext}
                    </p>
                  </div>

                  {/* Candidate Selection */}
                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-2 uppercase">
                      Select Candidate Profile Under Review
                    </label>
                    <select
                      value={selectedCandidateIdx}
                      onChange={(e) => setSelectedCandidateIdx(Number(e.target.value))}
                      className="w-full bg-[#060910] border border-[#1e293b] rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-[#00f0ff]"
                    >
                      {candidateProfiles.map((c, i) => (
                        <option key={i} value={i}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Weight Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-mono text-[#94a3b8] mb-2">
                      <span>Ranking Weight Formulation</span>
                      <span className="text-[#00f0ff]">
                        {Math.round(semanticWeight * 100)}% Semantic /{" "}
                        {Math.round((1 - semanticWeight) * 100)}% Skill
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="0.9"
                      step="0.05"
                      value={semanticWeight}
                      onChange={(e) => setSemanticWeight(parseFloat(e.target.value))}
                      className="w-full accent-[#00f0ff] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#64748b] mt-1">
                      <span>Skill Heuristic Dominant</span>
                      <span>Semantic Dominant (Default 70%)</span>
                    </div>
                  </div>

                  {/* Skills Analysis Breakdown */}
                  <div className="pt-2 border-t border-[#172033] space-y-3">
                    <div>
                      <span className="text-[11px] font-mono text-[#10b981] uppercase block mb-1.5">
                        Matched Competencies ({matchedSkills.length})
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {matchedSkills.length > 0 ? (
                          matchedSkills.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20"
                            >
                              ✓ {s}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-[#64748b]">No direct keyword overlap</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-[#f87171] uppercase block mb-1.5">
                        Missing JD Requirements ({missingSkills.length})
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {missingSkills.length > 0 ? (
                          missingSkills.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#f87171]/10 text-[#f87171] border border-[#f87171]/20"
                            >
                              ✗ {s}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-[#10b981]">100% full skill coverage!</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Telemetry & Score Visualization */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-[#090d16] border border-[#172033] space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-[#172033]">
                    <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#00f0ff]" />
                      CALCULATED OUTPUT TELEMETRY
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00f0ff]/10 text-[#00f0ff]">
                      INFERENCE: ~0.06s
                    </span>
                  </div>

                  {/* Score display */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3.5 rounded-xl bg-[#070b12] border border-[#172033]">
                      <div className="text-[10px] font-mono text-[#64748b]">
                        SEMANTIC (BERT)
                      </div>
                      <div className="text-xl font-mono font-bold text-[#38bdf8] mt-1">
                        {currentCandidate.rawSemanticScore}%
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#070b12] border border-[#172033]">
                      <div className="text-[10px] font-mono text-[#64748b]">
                        SKILL OVERLAP
                      </div>
                      <div className="text-xl font-mono font-bold text-[#818cf8] mt-1">
                        {skillCoveragePct}%
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#070b12] border border-[#00f0ff]/40 shadow-[0_0_15px_-3px_rgba(0,240,255,0.2)]">
                      <div className="text-[10px] font-mono text-[#00f0ff] font-bold">
                        COMPOSITE SCORE
                      </div>
                      <div className="text-2xl font-mono font-bold text-white mt-0.5">
                        {finalCompositeScore}%
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Tier Card */}
                  <div
                    className={`p-4 rounded-xl border ${currentTier.bg} ${currentTier.border} transition-colors duration-300`}
                  >
                    <div className="text-[11px] font-mono text-[#94a3b8] uppercase">
                      Recruiter Action Recommendation
                    </div>
                    <div
                      className="text-lg font-mono font-bold mt-1"
                      style={{ color: currentTier.color }}
                    >
                      {currentTier.label}
                    </div>
                    <p className="text-xs text-[#cbd5e1] mt-1">
                      {finalCompositeScore >= 60
                        ? "Fast-track candidate directly to technical interview rounds."
                        : finalCompositeScore >= 38
                        ? "Candidate possesses sufficient core foundations; schedule preliminary screening call."
                        : finalCompositeScore >= 18
                        ? "Manual portfolio audit recommended to inspect adjacent skill transferability."
                        : "Candidate qualifications fall outside target domain requirements; auto-archive."}
                    </p>
                  </div>

                  {/* Mathematical Formula Footnote */}
                  <div className="p-3 rounded-lg bg-[#060910] border border-[#172033] font-mono text-[11px] text-[#94a3b8] space-y-1">
                    <div className="text-white font-bold text-[10px] uppercase">
                      Exact Formulation from SmartHire AI ranking.py:
                    </div>
                    <code>
                      Score = ({currentCandidate.rawSemanticScore} × {semanticWeight.toFixed(2)}) + ({skillCoveragePct} × {(1 - semanticWeight).toFixed(2)}) = {finalCompositeScore}%
                    </code>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "vision" && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-[#090d16] border border-[#172033] space-y-4">
                  <span className="font-mono text-xs font-bold text-white flex items-center gap-2 pb-2 border-b border-[#172033]">
                    <Eye className="w-4 h-4 text-[#00f0ff]" />
                    SELECT FIELD PHOTOGRAPHY CASE
                  </span>

                  <div className="space-y-2">
                    {visionSamples.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setVisionSampleIdx(i)}
                        className={`w-full p-3 rounded-xl border text-left font-mono transition-all ${
                          visionSampleIdx === i
                            ? "bg-[#0f172a] border-[#00f0ff] text-white"
                            : "bg-[#070b12] border-[#172033] text-[#94a3b8] hover:border-[#24324f]"
                        }`}
                      >
                        <div className="text-xs font-bold">{v.name}</div>
                        <div className="text-[10px] text-[#64748b] mt-0.5">
                          Condition: {v.condition}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#172033] space-y-2 text-xs font-mono text-[#94a3b8]">
                    <div className="flex justify-between">
                      <span>On-Device Footprint:</span>
                      <span className="text-[#10b981]">~30MB APK</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Target Hardware:</span>
                      <span className="text-white">Budget Android CPU</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network Dependency:</span>
                      <span className="text-[#00f0ff]">Zero Cloud Signal</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-2xl bg-[#090d16] border border-[#172033] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#172033]">
                    <span className="font-mono text-xs font-bold text-white">
                      4-STAGE EDGE INFERENCE PIPELINE
                    </span>
                    <span className="text-xs font-mono text-[#10b981]">
                      94.2% ACCURACY SPLIT
                    </span>
                  </div>

                  {/* 4 Pipeline stages */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2.5 rounded-lg bg-[#070b12] border border-[#1e293b] text-center">
                      <div className="text-[9px] font-mono text-[#64748b]">STEP 1</div>
                      <div className="text-xs font-mono font-bold text-white mt-0.5">RAW INPUT</div>
                      <div className="text-[10px] text-[#94a3b8]">256×256 RGB</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#070b12] border border-[#1e293b] text-center">
                      <div className="text-[9px] font-mono text-[#64748b]">STEP 2</div>
                      <div className="text-xs font-mono font-bold text-[#00f0ff] mt-0.5">CANNY EDGE</div>
                      <div className="text-[10px] text-[#94a3b8]">Contour Filter</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#070b12] border border-[#1e293b] text-center">
                      <div className="text-[9px] font-mono text-[#64748b]">STEP 3</div>
                      <div className="text-xs font-mono font-bold text-[#818cf8] mt-0.5">CONVNEXT</div>
                      <div className="text-[10px] text-[#94a3b8]">Depthwise Rep</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#070b12] border border-[#10b981]/30 text-center bg-[#10b981]/5">
                      <div className="text-[9px] font-mono text-[#10b981]">STEP 4</div>
                      <div className="text-xs font-mono font-bold text-[#10b981] mt-0.5">PREDICTION</div>
                      <div className="text-[10px] text-[#10b981]">26 Classes</div>
                    </div>
                  </div>

                  {/* Breed Classification Output Confidences */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono text-[#cbd5e1] font-bold">
                      Softmax Breed Class Probabilities:
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-white font-bold">1. {currentVision.top1}</span>
                          <span className="text-[#10b981] font-bold">{currentVision.top1Conf}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#1e293b] overflow-hidden">
                          <div
                            className="h-full bg-[#10b981] rounded-full transition-all duration-300"
                            style={{ width: `${currentVision.top1Conf}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-[#94a3b8]">2. {currentVision.top2}</span>
                          <span className="text-[#64748b]">{currentVision.top2Conf}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#1e293b] overflow-hidden">
                          <div
                            className="h-full bg-[#38bdf8] rounded-full transition-all duration-300"
                            style={{ width: `${currentVision.top2Conf * 5}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-[#94a3b8]">3. {currentVision.top3}</span>
                          <span className="text-[#64748b]">{currentVision.top3Conf}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#1e293b] overflow-hidden">
                          <div
                            className="h-full bg-[#64748b] rounded-full transition-all duration-300"
                            style={{ width: `${currentVision.top3Conf * 5}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#060910] border border-[#172033] text-xs text-[#cbd5e1]">
                    <span className="font-mono text-[#00f0ff] font-bold">Diagnostic Trace:</span>{" "}
                    {currentVision.edgeDetail}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "customer360" && (
            <motion.div
              key="customer360"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Sliders */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-[#090d16] border border-[#172033] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#172033]">
                    <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-[#00f0ff]" />
                      RFM BEHAVIORAL SIGNALS
                    </span>
                    <span className="text-[10px] font-mono text-[#64748b]">
                      XGBOOST + SHAP ENGINE
                    </span>
                  </div>

                  {/* Recency */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-[#94a3b8] mb-1.5">
                      <span>Recency (Days Since Last Order)</span>
                      <span className="text-[#00f0ff] font-bold">{recency} Days</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="180"
                      value={recency}
                      onChange={(e) => setRecency(Number(e.target.value))}
                      className="w-full accent-[#00f0ff] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#64748b] mt-1">
                      <span>Active Yesterday</span>
                      <span>180 Days Inactive</span>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-[#94a3b8] mb-1.5">
                      <span>Frequency (Orders in Last 12 Months)</span>
                      <span className="text-[#00f0ff] font-bold">{frequency} Orders</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={frequency}
                      onChange={(e) => setFrequency(Number(e.target.value))}
                      className="w-full accent-[#00f0ff] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#64748b] mt-1">
                      <span>1 One-off order</span>
                      <span>50 Power orders</span>
                    </div>
                  </div>

                  {/* Monetary */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-[#94a3b8] mb-1.5">
                      <span>Monetary Value (Annual Spend)</span>
                      <span className="text-[#00f0ff] font-bold">${monetary.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={monetary}
                      onChange={(e) => setMonetary(Number(e.target.value))}
                      className="w-full accent-[#00f0ff] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#64748b] mt-1">
                      <span>$100 Low Spend</span>
                      <span>$10,000 High Spend</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Engine */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-[#090d16] border border-[#172033] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#172033]">
                    <span className="font-mono text-xs font-bold text-white">
                      PREDICTIVE INTELLIGENCE & NBA
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981]">
                      API: /demo-predict
                    </span>
                  </div>

                  {/* Churn Risk Bar */}
                  <div className="p-4 rounded-xl bg-[#070b12] border border-[#172033]">
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-[#94a3b8]">XGBoost Estimated Churn Risk:</span>
                      <span
                        className="font-bold font-mono"
                        style={{
                          color: churnScore > 60 ? "#f87171" : churnScore > 35 ? "#f59e0b" : "#10b981"
                        }}
                      >
                        {churnScore}% Risk
                      </span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-[#1e293b] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${churnScore}%`,
                          backgroundColor: churnScore > 60 ? "#f87171" : churnScore > 35 ? "#f59e0b" : "#10b981"
                        }}
                      />
                    </div>
                  </div>

                  {/* Cluster Assignment */}
                  <div className="p-4 rounded-xl bg-[#070b12] border border-[#172033] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#64748b]">
                        K-MEANS CLUSTER ASSIGNMENT
                      </div>
                      <div className="text-sm font-mono font-bold text-white mt-1">
                        {clusterInfo.cluster}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-[#64748b]">ESTIMATED CLV</div>
                      <div className="text-sm font-mono font-bold text-[#10b981] mt-1">
                        {clusterInfo.clv}
                      </div>
                    </div>
                  </div>

                  {/* Next Best Action Directive */}
                  <div className="p-4 rounded-xl bg-[#060910] border border-[#00f0ff]/30 shadow-[0_0_15px_-3px_rgba(0,240,255,0.15)]">
                    <div className="text-[11px] font-mono text-[#00f0ff] uppercase font-bold flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5" />
                      Automated Next Best Action (NBA) Directive
                    </div>
                    <p className="text-xs text-white font-mono mt-1.5 leading-relaxed">
                      &ldquo;{clusterInfo.nba}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

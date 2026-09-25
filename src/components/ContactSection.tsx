"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Send,
  Terminal,
  ExternalLink,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { Linkedin, Github } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";
import { FadeIn } from "@/components/MotionWrapper";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [sentStatus, setSentStatus] = useState<"idle" | "sent">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Recruiter / Engineer"}`);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSentStatus("sent");
  };

  return (
    <section id="contact" className="py-24 bg-[#05070b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 border-b border-[#172033] pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>// 09. COMMUNICATIONS & DISPATCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Connect & Inquire
              </h2>
            </div>
            <div className="font-mono text-xs text-[#94a3b8]">
              DIRECT REACHABILITY • RESPONSE WITHIN 24 HOURS
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Credentials & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn delay={0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-[#172033] space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">
                    Let&apos;s Build Together
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] mt-2 leading-relaxed font-sans">
                    Available for full-time AI/ML Engineer, Machine Learning Engineer, and Computer Vision Engineer roles. Happy to discuss model architecture, edge inference quantization, or hackathon collaboration.
                  </p>
                </div>

                {/* Email Copy Card */}
                <div className="p-4 rounded-xl bg-[#060910] border border-[#1e293b] space-y-2">
                  <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-wider">
                    PRIMARY INBOX
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm sm:text-base text-white font-bold select-all truncate">
                      {profileData.email}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-[#131b2e] hover:bg-[#1e293b] text-[#00f0ff] transition-colors shrink-0"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                    </motion.button>
                  </div>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[11px] font-mono text-[#10b981] flex items-center gap-1.5 pt-1"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied to clipboard!</span>
                    </motion.div>
                  )}
                </div>

                {/* Geographic & Availability Telemetry */}
                <div className="space-y-3 text-xs font-mono text-[#94a3b8]">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#00f0ff]" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    <span className="text-white font-semibold">{profileData.availability}</span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="pt-4 border-t border-[#172033] flex flex-wrap gap-2">
                  <motion.a
                    whileHover={{ y: -2 }}
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#070b12] border border-[#172033] hover:border-[#00f0ff] text-xs font-mono text-[#cbd5e1] hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#00f0ff]" />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#070b12] border border-[#172033] hover:border-[#00f0ff] text-xs font-mono text-[#cbd5e1] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#00f0ff]" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    href={profileData.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#070b12] border border-[#172033] hover:border-[#00f0ff] text-xs font-mono text-[#cbd5e1] hover:text-white transition-colors"
                  >
                    <span className="text-sm">🤗</span>
                    <span>Hugging Face</span>
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Direct Dispatch Interface */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <form
                onSubmit={handleFormSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-[#172033] space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#172033]">
                  <span className="font-mono text-xs font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
                    DISPATCH DIRECT TRANSMISSION
                  </span>
                  <span className="text-[10px] font-mono text-[#10b981]">
                    ENCRYPTED_MAILTO
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 uppercase">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova / DeepMind Recruiter"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-[#060910] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 uppercase">
                    Your Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full bg-[#060910] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 uppercase">
                    Technical Requirements / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe role scope, team architecture, or model project..."
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    className="w-full bg-[#060910] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#00f0ff] resize-none transition-colors"
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00f0ff] text-[#05070b] font-mono text-xs font-bold shadow-[0_0_15px_-3px_rgba(0,240,255,0.4)] hover:bg-[#38bdf8] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch Email Client Dispatch</span>
                </motion.button>

                {sentStatus === "sent" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30 text-xs font-mono text-[#10b981] flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Email client invoked. Looking forward to communicating!</span>
                  </motion.div>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

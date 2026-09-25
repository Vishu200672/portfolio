"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Search,
  ExternalLink,
  FileDown,
  Layers,
  Sparkles,
  Award,
  Mail,
  Copy,
  Check,
  Globe,
  X,
  ArrowRight,
  Cpu
} from "lucide-react";
import { Linkedin, Github } from "@/components/icons/BrandIcons";
import { profileData } from "@/data/profile";
import { soundEffects } from "@/utils/audio";

interface CommandItem {
  id: string;
  category: "Navigation" | "Project" | "Actions" | "External";
  title: string;
  shortcut?: string;
  icon: React.ElementType;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      soundEffects.playPulse();
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Global key listener for '/' and 'Ctrl+K' / 'Cmd+K' and 'Escape'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (!isInput && e.key === "/") {
        e.preventDefault();
      }

      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
      }

      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const navigateTo = (hash: string) => {
    soundEffects.playClick(850);
    onClose();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    soundEffects.playSuccess();
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const commands: CommandItem[] = [
    {
      id: "projects",
      category: "Navigation",
      title: "View Featured ML Projects",
      shortcut: "#projects",
      icon: Layers,
      action: () => navigateTo("#projects"),
    },
    {
      id: "playground",
      category: "Navigation",
      title: "Open Live ML Pipeline Playground",
      shortcut: "#playground",
      icon: Sparkles,
      action: () => navigateTo("#playground"),
    },
    {
      id: "stack",
      category: "Navigation",
      title: "Inspect Verified Tech Stack",
      shortcut: "#stack",
      icon: Cpu,
      action: () => navigateTo("#stack"),
    },
    {
      id: "philosophy",
      category: "Navigation",
      title: "Explore Engineering Philosophy",
      shortcut: "#philosophy",
      icon: Terminal,
      action: () => navigateTo("#philosophy"),
    },
    {
      id: "hackathons",
      category: "Navigation",
      title: "View Hackathons & Achievements",
      shortcut: "#hackathons",
      icon: Award,
      action: () => navigateTo("#hackathons"),
    },
    {
      id: "resume-sec",
      category: "Navigation",
      title: "Go to Resume Section",
      shortcut: "#resume",
      icon: FileDown,
      action: () => navigateTo("#resume"),
    },
    {
      id: "contact-sec",
      category: "Navigation",
      title: "Reach Out & Send Message",
      shortcut: "#contact",
      icon: Mail,
      action: () => navigateTo("#contact"),
    },
    {
      id: "download-resume",
      category: "Actions",
      title: "Download Resume PDF",
      shortcut: "PDF",
      icon: FileDown,
      action: () => {
        window.open(profileData.resumeUrl, "_blank");
        onClose();
      },
    },
    {
      id: "copy-email",
      category: "Actions",
      title: copied ? "Copied vtpt2072@gmail.com!" : "Copy Email to Clipboard",
      shortcut: "EMAIL",
      icon: copied ? Check : Copy,
      action: copyEmail,
    },
    {
      id: "smarthire-hf",
      category: "Project",
      title: "Open SmartHire AI on Hugging Face",
      shortcut: "HF",
      icon: Globe,
      action: () => {
        window.open("https://huggingface.co/spaces/Vishu2006/SmartHire-AI", "_blank");
        onClose();
      },
    },
    {
      id: "github-link",
      category: "External",
      title: "Open GitHub Profile (Vishu200672)",
      shortcut: "GH",
      icon: Github,
      action: () => {
        window.open(profileData.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin-link",
      category: "External",
      title: "Open LinkedIn Profile",
      shortcut: "IN",
      icon: Linkedin,
      action: () => {
        window.open(profileData.linkedin, "_blank");
        onClose();
      },
    },
    {
      id: "hf-link",
      category: "External",
      title: "Open Hugging Face Profile",
      shortcut: "HF",
      icon: Globe,
      action: () => {
        window.open(profileData.huggingface, "_blank");
        onClose();
      },
    }
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl bg-[#090d16] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#172033] bg-[#05070d]">
              <Search className="w-4 h-4 text-[#00f0ff] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command or jump to section... (e.g. projects, resume, github)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-0 text-sm font-mono text-white placeholder-[#64748b] focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded text-[#64748b] hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <kbd className="px-2 py-0.5 text-[10px] font-mono bg-[#131b2e] border border-[#1e293b] rounded text-[#64748b]">
                ESC
              </kbd>
            </div>

            {/* Command list */}
            <div className="p-2 overflow-y-auto space-y-1 divide-y divide-[#172033]/40">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <motion.button
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                      key={cmd.id}
                      onClick={() => {
                        soundEffects.playClick(900);
                        cmd.action();
                      }}
                      className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-[#0f172a] group transition-colors focus:bg-[#0f172a] focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-md bg-[#070b12] border border-[#172033] text-[#94a3b8] group-hover:text-[#00f0ff] group-hover:border-[#00f0ff]/40 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-white group-hover:text-[#00f0ff] transition-colors block">
                            {cmd.title}
                          </span>
                          <span className="text-[10px] font-mono text-[#64748b]">
                            {cmd.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {cmd.shortcut && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#131b2e] text-[#94a3b8] border border-[#1e293b]">
                            {cmd.shortcut}
                          </span>
                        )}
                        <ArrowRight className="w-3.5 h-3.5 text-[#334155] group-hover:text-[#00f0ff] transition-colors" />
                      </div>
                    </motion.button>
                  );
                })
              ) : (
                <div className="p-8 text-center text-xs font-mono text-[#64748b]">
                  No matching commands found for &ldquo;{query}&rdquo;
                </div>
              )}
            </div>

            {/* Footer info */}
            <div className="px-4 py-2.5 bg-[#05070d] border-t border-[#172033] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
              <span>ENGINEER INTERFACE // COMMAND_PALETTE</span>
              <span>PRESS ESC TO DISMISS</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

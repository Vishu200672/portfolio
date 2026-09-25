"use client";

import React, { useRef, useState } from "react";
import { soundEffects } from "@/utils/audio";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
  showCorners?: boolean;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 240, 255, 0.15)",
  enableTilt = true,
  showCorners = true,
  onMouseEnter,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number }>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Max tilt ±3.5 degrees
      const rotateX = ((y - centerY) / centerY) * -3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    soundEffects.playClick(900);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: -1000, y: -1000 });
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt && isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: isHovered
          ? "transform 0.1s ease-out, border-color 0.3s ease"
          : "transform 0.5s ease-out, border-color 0.3s ease",
      }}
      className={`group relative rounded-2xl bg-[#090d16] border border-[#172033] hover:border-[#00f0ff]/50 overflow-hidden shadow-2xl ${className}`}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Specular Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.4), transparent 60%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
        aria-hidden="true"
      />

      {/* Futuristic Corner Brackets ⌜ ⌝ ⌞ ⌟ */}
      {showCorners && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2 left-2 text-[10px] font-mono leading-none text-[#00f0ff]/25 group-hover:text-[#00f0ff]/70 transition-colors z-20 select-none"
          >
            ⌜
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-2 right-2 text-[10px] font-mono leading-none text-[#00f0ff]/25 group-hover:text-[#00f0ff]/70 transition-colors z-20 select-none"
          >
            ⌝
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 left-2 text-[10px] font-mono leading-none text-[#00f0ff]/25 group-hover:text-[#00f0ff]/70 transition-colors z-20 select-none"
          >
            ⌞
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 right-2 text-[10px] font-mono leading-none text-[#00f0ff]/25 group-hover:text-[#00f0ff]/70 transition-colors z-20 select-none"
          >
            ⌟
          </span>
        </>
      )}

      {/* Card Content */}
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}

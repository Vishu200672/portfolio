"use client";

import React, { useEffect, useState } from "react";

export default function TechnicalCoordinateSystem() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 select-none overflow-hidden"
    >
      {/* Top Left Corner Anchor */}
      <div className="hidden lg:block absolute top-20 left-4 font-mono text-[9px] text-[#00f0ff]/30 leading-tight">
        <div>[SYS_NODE: HALOL_GUJARAT]</div>
        <div>LAT: 22.5034° N</div>
        <div>LON: 73.4716° E</div>
      </div>

      {/* Top Right Corner Cursor Tracker */}
      <div className="hidden lg:block absolute top-20 right-4 font-mono text-[9px] text-[#00f0ff]/30 leading-tight text-right">
        <div>CURSOR_COORDINATES:</div>
        <div>
          X: {coords.x.toString().padStart(4, "0")} Y: {coords.y.toString().padStart(4, "0")}
        </div>
        <div>TENSOR_PRECISION: FP32</div>
      </div>

      {/* Subtle Bottom Margin Crosshairs */}
      <div className="hidden xl:block absolute bottom-4 left-6 font-mono text-[10px] text-[#00f0ff]/20">
        + 00:26:CV
      </div>
      <div className="hidden xl:block absolute bottom-4 right-6 font-mono text-[10px] text-[#00f0ff]/20">
        + BERT:0.9733
      </div>
    </div>
  );
}

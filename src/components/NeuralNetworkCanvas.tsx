"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
  pulsePhase: number;
}

export default function NeuralNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initialize neural network nodes arranged loosely in 5 stages
    let nodes: Node[] = [];
    const layersCount = 5;

    const initNodes = () => {
      nodes = [];
      const nodesPerLayer = width < 768 ? [4, 5, 6, 5, 3] : [5, 7, 9, 7, 4];
      
      for (let l = 0; l < layersCount; l++) {
        const count = nodesPerLayer[l];
        const layerX = (width * 0.15) + (l / (layersCount - 1)) * (width * 0.7);
        
        for (let i = 0; i < count; i++) {
          const layerY = (height * 0.18) + ((i + 0.5) / count) * (height * 0.64);
          nodes.push({
            x: layerX + (Math.random() - 0.5) * 25,
            y: layerY + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5 + 2.5,
            layer: l,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    initNodes();

    let step = 0;

    const render = () => {
      step += prefersReducedMotion ? 0 : 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw connections between adjacent layers
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          // Connect nodes in adjacent or same layers if close enough
          const layerDiff = Math.abs(nodeA.layer - nodeB.layer);
          if (layerDiff <= 1) {
            const dx = nodeA.x - nodeB.x;
            const dy = nodeA.y - nodeB.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = width / (layersCount - 0.5);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.15;
              
              // Mouse hover reaction
              const mouseDx = (nodeA.x + nodeB.x) / 2 - mouseRef.current.x;
              const mouseDy = (nodeA.y + nodeB.y) / 2 - mouseRef.current.y;
              const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
              const mouseBoost = mouseDist < 120 ? (1 - mouseDist / 120) * 0.35 : 0;

              ctx.beginPath();
              ctx.moveTo(nodeA.x, nodeA.y);
              ctx.lineTo(nodeB.x, nodeB.y);
              ctx.strokeStyle = `rgba(0, 240, 255, ${alpha + mouseBoost})`;
              ctx.lineWidth = mouseBoost > 0 ? 1.5 : 0.8;
              ctx.stroke();

              // Subtle simulated data packet pulse travelling along synapse
              if (!prefersReducedMotion && (i + j) % 7 === 0) {
                const packetT = (Math.sin(step * 1.5 + i) + 1) / 2;
                const px = nodeA.x + (nodeB.x - nodeA.x) * packetT;
                const py = nodeA.y + (nodeB.y - nodeA.y) * packetT;

                ctx.beginPath();
                ctx.arc(px, py, 1.8, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(0, 240, 255, 0.75)";
                ctx.shadowColor = "#00f0ff";
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;
              }
            }
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Boundary bounce with damping
          const minX = (node.layer / layersCount) * width;
          const maxX = ((node.layer + 1) / layersCount) * width;
          if (node.x < minX || node.x > maxX) node.vx *= -1;
          if (node.y < 40 || node.y > height - 40) node.vy *= -1;
        }

        // Distance to cursor
        const mdx = node.x - mouseRef.current.x;
        const mdy = node.y - mouseRef.current.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const isHovered = mdist < 80;

        // Outer glow
        const pulse = Math.sin(step + node.pulsePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (isHovered ? 1.8 : 1.3), 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? "rgba(0, 240, 255, 0.4)"
          : `rgba(0, 240, 255, ${0.1 * pulse})`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * (isHovered ? 1.3 : 1), 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#ffffff" : "#00f0ff";
        ctx.shadowColor = "#00f0ff";
        ctx.shadowBlur = isHovered ? 12 : 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-auto overflow-hidden opacity-75">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}

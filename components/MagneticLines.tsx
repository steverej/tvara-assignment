"use client";
import React, { useRef, useState, useEffect } from 'react';

interface MagneticGridProps {
  rows: number;
  cols: number;
  gap?: number;
}

const MagneticGrid: React.FC<MagneticGridProps> = ({ rows, cols, gap = 24 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div 
      ref={containerRef}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: `${gap}px` 
      }}
      className="p-10 bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden w-fit"
    >
      {[...Array(rows * cols)].map((_, i) => (
        <MagneticLine key={i} mousePos={mousePos} />
      ))}
    </div>
  );
};

const MagneticLine = ({ mousePos }: { mousePos: { x: number; y: number } }) => {
  const lineRef = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!lineRef.current) return;
    const rect = lineRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mousePos.x - centerX;
    const dy = mousePos.y - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    const maxDist = 250;
    if (dist < maxDist) {
      const power = (maxDist - dist) / maxDist;
      setOffset({ x: dx * power * 0.4, y: dy * power * 0.4 });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mousePos]);

  return (
    <span
      ref={lineRef}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className="text-zinc-600 text-xl transition-transform duration-200 ease-out select-none pointer-events-none text-center"
    >
      |
    </span>
  );
};

export default MagneticGrid;
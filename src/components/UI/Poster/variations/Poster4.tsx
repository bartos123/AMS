import { useState, useEffect } from 'react';
import { DigitalClock } from "../../Clock";

export const Poster = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const text = "ASSET MANAGEMENT SYSTEM";
  const letters = text.split("");
  const rowCount = 20; // Hustší rastr pro plynulost

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Normalizované souřadnice -0.5 až 0.5
      setMouse({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="h-screen w-full bg-[#050505] text-white flex flex-col justify-end items-center overflow-hidden select-none perspective-[1000px]">
      
      {/* 1. JEMNÝ GRAIN (TEXTURA PAPÍRU) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* 2. HLAVNÍ MATRICE */}
      <div className="w-full flex-1 flex flex-col justify-center items-center px-4 md:px-12 relative">
        <div 
          className="w-full flex flex-col items-center transition-transform duration-300 ease-out"
          style={{ 
            transform: `rotateX(${mouse.y * -5}deg) rotateY(${mouse.x * 10}deg)` 
          }}
        >
          {Array.from({ length: rowCount }).map((_, idx) => {
            const factor = (rowCount - 1 - idx) / (rowCount - 1);
            
            // ŠÍŘKA: Kvadratický nárůst pro elegantnější "trychtýř"
            const rowWidth = 20 + (Math.pow(factor, 2) * 80);
            
            return (
              <div 
                key={idx}
                className="flex justify-between items-center whitespace-nowrap"
                style={{ 
                  width: `${rowWidth}%`,
                  opacity: 1 - (factor * 0.85),
                  filter: factor > 0.5 ? `blur(${factor * 3}px)` : 'none',
                  transform: `translateZ(${factor * 200}px)`, // Písmena nahoře "vystupují" k tobě
                  marginBottom: '-0.4vh'
                }}
              >
                {letters.map((char, charIdx) => (
                  <span 
                    key={charIdx}
                    className="font-black uppercase italic leading-none inline-block tabular-nums transition-transform duration-500"
                    style={{ 
                      fontSize: `${1.1 + (1 - factor) * 1.8}vw`,
                      // Horní řádky se mírně rozbíhají od středu (radial spread)
                      transform: `translateX(${(charIdx - letters.length/2) * factor * 0.5}vw)`
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. RADIKÁLNÍ PATIČKA */}
      <div className="w-full px-12 py-12 flex justify-between items-end border-t border-white/10 bg-black/50 backdrop-blur-md z-50">
        <div className="flex flex-col gap-1">
          <div className="font-mono text-[8px] tracking-[0.8em] uppercase text-white/40">
            A.G. Fronzoni / AMS_RECONSTRUCTION / 2026
          </div>
          <div className="font-mono text-[8px] tracking-[0.8em] uppercase text-white/20">
            Milano / Politecnico di Design
          </div>
        </div>
        
        <div className="flex items-baseline gap-4">
          <div className="font-mono text-[10px] font-bold text-white/40">
            <DigitalClock />
          </div>
          <div className="text-6xl font-black italic tracking-tighter leading-none select-none">
            AMS
          </div>
        </div>
      </div>
    </section>
  );
};
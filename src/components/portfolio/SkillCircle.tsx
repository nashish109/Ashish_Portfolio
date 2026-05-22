import React from "react";

interface SkillCircleProps {
  label: string;
  percent: number; // 0-100
}

export const SkillCircle: React.FC<SkillCircleProps> = ({ label, percent }) => {
  const angle = Math.round((percent / 100) * 360);
  const style = {
    background: `conic-gradient(#22d3ee ${angle}deg, rgba(15, 23, 42, 0.95) ${angle}deg)`,
  } as React.CSSProperties;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative size-24 rounded-full border border-cyan-300/30 p-1 shadow-[0_0_24px_rgba(34,211,238,0.16)]" style={style}>
        <div className="absolute inset-2 grid place-items-center rounded-full border border-white/15 bg-black">
          <span className="font-mono text-sm text-cyan-100">{percent}%</span>
        </div>
      </div>
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-100">{label}</span>
    </div>
  );
};

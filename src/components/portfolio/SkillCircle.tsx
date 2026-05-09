import React from "react";

interface SkillCircleProps {
  label: string;
  percent: number; // 0-100
}

export const SkillCircle: React.FC<SkillCircleProps> = ({ label, percent }) => {
  const angle = Math.round((percent / 100) * 360);
  const style = {
    background: `conic-gradient(hsl(var(--brand-green)) ${angle}deg, hsl(var(--muted)) ${angle}deg)`,
  } as React.CSSProperties;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative size-24 rounded-full p-1" style={style}>
        <div className="absolute inset-2 rounded-full bg-card border border-white/10 grid place-items-center">
          <span className="text-sm text-muted-foreground">{percent}%</span>
        </div>
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
};

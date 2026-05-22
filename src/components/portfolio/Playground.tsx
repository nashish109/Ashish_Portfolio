import { useEffect, useMemo, useState } from "react";
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";

interface Point { x: number; y: number; cluster?: number }

function generatePoints(n = 120): Point[] {
  return Array.from({ length: n }, () => ({
    x: Math.round((Math.random() * 2 - 1) * 100),
    y: Math.round((Math.random() * 2 - 1) * 60),
  }));
}

function distance(a: Point, b: Point) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

function kmeans(data: Point[], k: number, iterations = 6): { points: Point[]; centroids: Point[] } {
  let centroids = data.slice(0, k).map((p) => ({ x: p.x, y: p.y }));
  let points = data.map((p) => ({ ...p }));

  for (let it = 0; it < iterations; it++) {
    points = points.map((p) => {
      let best = 0;
      let bestD = Infinity;
      centroids.forEach((c, i) => {
        const d = distance(p, c);
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      return { ...p, cluster: best };
    });

    centroids = centroids.map((c, i) => {
      const group = points.filter((p) => p.cluster === i);
      const cx = group.reduce((s, p) => s + p.x, 0) / (group.length || 1);
      const cy = group.reduce((s, p) => s + p.y, 0) / (group.length || 1);
      return { x: Math.round(cx), y: Math.round(cy) };
    });
  }

  return { points, centroids };
}

export const Playground = () => {
  const [k, setK] = useState<number>(3);
  const [seed, setSeed] = useState(0);
  const base = useMemo(() => generatePoints(140), [seed]);
  const { points, centroids } = useMemo(() => kmeans(base, k), [base, k]);
  const colors = ["#22d3ee", "#22c55e", "#a855f7", "#60a5fa", "#e5e7eb"];

  useEffect(() => {
    const id = setInterval(() => setSeed((s) => s + 1), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="retro-window scan-panel">
      <div className="p-4 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="retro-kicker">Data Lab Module</p>
            <h3 className="text-xl font-semibold text-white">Clustering Playground</h3>
            <p className="text-sm text-slate-400">K-means in action - adjust K and watch clusters form.</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="font-mono text-xs text-cyan-200">K</label>
            <input className="accent-cyan-300" type="range" min={2} max={5} value={k} onChange={(e) => setK(Number(e.target.value))} />
            <Button className="retro-button" size="sm" onClick={() => setSeed((s) => s + 1)}>Regenerate</Button>
          </div>
        </div>

        <div className="mt-4 h-72 border border-cyan-300/45 bg-black p-2">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(103,232,249,0.18)" />
              <XAxis type="number" dataKey="x" hide domain={[-100, 100]} />
              <YAxis type="number" dataKey="y" hide domain={[-80, 80]} />
              <Tooltip contentStyle={{ background: "rgba(0,0,0,0.92)", border: "1px solid rgba(103,232,249,0.35)", color: "#cffafe" }} />
              {[...Array(k)].map((_, i) => (
                <Scatter key={i} name={`Cluster ${i + 1}`} data={points.filter((p) => p.cluster === i)} fill={colors[i % colors.length]} />
              ))}
              <Scatter name="Centroids" data={centroids} fill="#f8fafc" shape="triangle" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-2 font-mono text-xs text-slate-500">Tip: Click the card to flip project details; use Code/Demo buttons to explore.</p>
      </div>
    </div>
  );
};

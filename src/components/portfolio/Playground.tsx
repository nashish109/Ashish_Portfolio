import { useEffect, useMemo, useState } from "react";
import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { Button } from "@/components/ui/button";

interface Point { x: number; y: number; cluster?: number }

function generatePoints(n = 120): Point[] {
  return Array.from({ length: n }, () => ({
    x: Math.round((Math.random() * 2 - 1) * 100),
    y: Math.round((Math.random() * 2 - 1) * 60),
  }));
}

function distance(a: Point, b: Point) {
  const dx = a.x - b.x, dy = a.y - b.y;
  return Math.hypot(dx, dy);
}

function kmeans(data: Point[], k: number, iterations = 6): { points: Point[]; centroids: Point[] } {
  let centroids = data.slice(0, k).map(p => ({ x: p.x, y: p.y }));
  let points = data.map(p => ({ ...p }));
  for (let it = 0; it < iterations; it++) {
    // assign
    points = points.map(p => {
      let best = 0, bestD = Infinity;
      centroids.forEach((c, i) => {
        const d = distance(p, c);
        if (d < bestD) { bestD = d; best = i; }
      });
      return { ...p, cluster: best };
    });
    // update
    centroids = centroids.map((c, i) => {
      const group = points.filter(p => p.cluster === i);
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

  useEffect(() => {
    const id = setInterval(() => setSeed(s => s + 1), 4000);
    return () => clearInterval(id);
  }, []);

  const colors = ["hsl(var(--brand-blue))", "hsl(var(--brand-green))", "hsl(var(--brand-purple))", "hsl(var(--primary))", "hsl(var(--muted-foreground))"];

  return (
    <div className="glass rounded-xl p-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h3 className="font-semibold">Clustering Playground</h3>
          <p className="text-sm text-muted-foreground">K-means in action — adjust K and watch clusters form.</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-sm text-muted-foreground">K</label>
          <input type="range" min={2} max={5} value={k} onChange={(e) => setK(Number(e.target.value))} />
          <Button variant="secondary" size="sm" onClick={() => setSeed(s => s + 1)}>Regenerate</Button>
        </div>
      </div>

      <div className="h-72 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" dataKey="x" hide domain={[-100, 100]} />
            <YAxis type="number" dataKey="y" hide domain={[-80, 80]} />
            <Tooltip contentStyle={{ background: "hsl(222 84% 8% / 0.9)", border: "1px solid hsl(0 0% 100% / 0.1)" }} />
            {[...Array(k)].map((_, i) => (
              <Scatter key={i} name={`Cluster ${i + 1}`} data={points.filter(p => p.cluster === i)} fill={colors[i % colors.length]} />
            ))}
            <Scatter name="Centroids" data={centroids} fill="hsl(var(--primary))" shape="triangle" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-muted-foreground mt-2">Tip: Click the card to flip project details; use Code/Demo buttons to explore.</p>
    </div>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquareText } from "lucide-react";

const QA: Record<string, string> = {
  skills: "Expertise in ETL, SQL, Python, Power BI/Tableau, Django, Spring Boot, JS/TS, cloud (AWS/Azure).",
  etl: "Experience designing resilient pipelines, schema design, and performance tuning.",
  projects: "Movie Box Office Predictor, Astrological Prediction (Django+MySQL), Student Event Management (Java full-stack).",
  contact: "Reach out via email or LinkedIn links below!",
};

export const Chatbot = () => {
  const [q, setQ] = useState("");
  const [a, setA] = useState<string | null>(null);

  const handleAsk = () => {
    const key = Object.keys(QA).find((k) => q.toLowerCase().includes(k));
    setA(key ? QA[key] : "I can tell you about skills, ETL, or projects. Try asking again!");
  };

  return (
    <div className="retro-window scan-panel">
      <div className="space-y-4 p-4 pt-8">
        <h3 className="flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-cyan-100">
          <MessageSquareText className="h-4 w-4" />
          Assistant Console
        </h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ask e.g. 'What are your core skills?'"
            className="retro-field flex-1 rounded px-3 py-2 font-mono text-sm outline-none focus:border-cyan-200"
          />
          <Button onClick={handleAsk} className="retro-button">Ask</Button>
        </div>
        {a && <p className="rounded border border-cyan-300/20 bg-black/50 p-3 font-mono text-sm text-cyan-100">{a}</p>}
      </div>
    </div>
  );
};

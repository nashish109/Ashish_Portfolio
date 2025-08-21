import { useState } from "react";
import { Button } from "@/components/ui/button";

const QA: Record<string, string> = {
  skills: "Expertise in ETL, SQL, Python, Power BI/Tableau, Django, Spring Boot, JS/TS, cloud (AWS/Azure).",
  etl: "Experience designing resilient pipelines, schema design, and performance tuning.",
  projects: "Movie Box Office Predictor, Astrological Prediction (Django+MySQL), Student Event Management (Java full‑stack).",
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
    <div className="glass rounded-xl p-4">
      <h3 className="font-semibold">Ask about my work</h3>
      <div className="mt-3 flex flex-col sm:flex-row gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask e.g. 'What are your core skills?'"
          className="flex-1 bg-transparent border rounded-md px-3 py-2"
        />
        <Button onClick={handleAsk} variant="hero">Ask</Button>
      </div>
      {a && <p className="text-sm text-muted-foreground mt-3">{a}</p>}
    </div>
  );
};

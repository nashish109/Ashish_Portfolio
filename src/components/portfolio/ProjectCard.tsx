import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  tech: string[];
  problem: string;
  solution: string;
  codeUrl: string;
  demoUrl: string;
  image?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, tech, problem, solution, codeUrl, demoUrl, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border hover:border-primary/50 transition-all duration-300 glassmorphism">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" /> Problem
            </h4>
            <p className="text-sm text-muted-foreground">{problem}</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" /> Solution
            </h4>
            <p className="text-sm text-muted-foreground">{solution}</p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          {codeUrl && (
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> Code
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" className="gap-2" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

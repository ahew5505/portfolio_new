"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Commuter & Light Rail Efficiency Analysis",
    description:
      "Extracted and processed GTFS feeds for NJ Transit commuter and light rail lines. Identified schedule bottlenecks, mapped route coverage, and built an interactive Tableau dashboard to visualize transit efficiency metrics.",
    tags: ["Python", "GTFS", "Tableau", "GIS"],
    github: "https://github.com/ahew5505/rail_efficiency_analysis.git",
  },
  {
    title: "Sentiment Analysis — Beats by Dre",
    description:
      "Used NLP and generative AI (Gemini) to analyze consumer reviews and survey data for the wireless speaker market. Built a comprehensive data dashboard with actionable business insights for product positioning.",
    tags: ["Python", "NLP", "Sentiment Analysis", "Pandas"],
    github: "https://github.com/ahew5505/sentiment_analysis.git",
  },
]

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="projects" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          Projects
        </h2>
        <div className="h-px w-12 bg-primary mb-10" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground leading-tight text-balance">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 ml-4 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

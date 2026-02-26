"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "SQL", "R", "Java", "MATLAB"],
  },
  {
    category: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    category: "GIS & Geospatial",
    items: ["QGIS", "ArcGIS", "GTFS Analytics"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Jupyter", "RStudio", "Tableau", "Microsoft Office"],
  },
  {
    category: "Techniques",
    items: ["Sentiment Analysis", "NLP", "Data Visualization", "GIS/Geospatial"],
  },
]

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          Skills
        </h2>
        <div className="h-px w-12 bg-primary mb-10" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

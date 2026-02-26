"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Briefcase } from "lucide-react"

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          Experience
        </h2>
        <div className="h-px w-12 bg-primary mb-10" />

        <div className="relative border-l-2 border-border pl-8">
          <div className="absolute -left-[11px] top-0 h-5 w-5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <Briefcase size={10} className="text-primary" />
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
              Aug 2025 — Dec 2025 &middot; Remote
            </p>
            <h3 className="text-xl font-semibold text-foreground">
              Data Analytics Extern
            </h3>
            <p className="text-primary font-medium mb-3">Beats by Dre</p>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Conducted sentiment analysis using NLP and Python to extract consumer insights from product reviews and survey data for the wireless speaker market. Built an interactive data dashboard showcasing actionable business recommendations.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "NLP", "Sentiment Analysis", "Pandas", "Data Visualization"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

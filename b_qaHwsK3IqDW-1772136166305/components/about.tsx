"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          About
        </h2>
        <div className="h-px w-12 bg-primary mb-8" />
        <p className="text-lg leading-relaxed text-muted-foreground">
          {"I'm a junior "}
          <span className="text-foreground font-semibold">Data Science</span>
          {" student at "}
          <span className="text-foreground font-semibold">Arizona State University</span>
          {" with a 4.0 GPA, previously studying Software Engineering at Indiana University of Pennsylvania. My passion lies at the intersection of data, weather & climate science, aerospace, and urban transit systems."}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {"I love taking messy, real-world datasets — whether it's GTFS transit feeds, atmospheric data, or consumer sentiment — and transforming them into actionable insights. I'm a Dean's List honoree and Sutton Scholars Award recipient, driven by curiosity and a commitment to data-driven problem solving."}
        </p>
      </div>
    </section>
  )
}

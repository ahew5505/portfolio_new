"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, Award } from "lucide-react"

const educationData = [
  {
    school: "Arizona State University",
    degree: "B.S. Data Science",
    period: "2025 — 2027",
    gpa: "4.0",
    highlights: ["Dean's List x1"],
  },
  {
    school: "Indiana University of Pennsylvania",
    degree: "B.S. Software Engineering (Transferred)",
    period: "2023 — 2025",
    gpa: "3.9",
    highlights: ["Dean's List x5", "Sutton Scholars Award"],
  },
]

export function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section id="education" className="py-24 px-6">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <h2 className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          Education
        </h2>
        <div className="h-px w-12 bg-primary mb-10" />

        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu) => (
            <div
              key={edu.school}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {edu.school}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {edu.period}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{edu.degree}</p>
              <p className="font-mono text-sm text-primary font-semibold mb-3">
                GPA: {edu.gpa}
              </p>
              {edu.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      <Award size={12} />
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

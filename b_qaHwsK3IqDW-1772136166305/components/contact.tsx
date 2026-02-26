"use client"

import { useRef, useState, type FormEvent } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Mail, Linkedin, Github, Globe, Send } from "lucide-react"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ahewitt5505@outlook.com",
    href: "mailto:ahewitt5505@outlook.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "andyhewitt",
    href: "https://linkedin.com/in/andyhewitt",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ahew5505",
    href: "https://github.com/ahew5505",
  },
  {
    icon: Globe,
    label: "Website",
    value: "andrewhewitt.vercel.app",
    href: "https://andrewhewitt.vercel.app",
  },
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem("name") as HTMLInputElement).value
    const email = (form.elements.namedItem("email") as HTMLInputElement).value
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`)
    window.open(`mailto:ahewitt5505@outlook.com?subject=${subject}&body=${body}`, "_self")
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-mono text-sm tracking-widest text-primary uppercase mb-2">
          Contact
        </h2>
        <div className="h-px w-12 bg-primary mb-10" />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Social links */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {"I'm always open to discussing new projects, research opportunities, or just chatting about data, weather, and transit. Reach out anytime."}
            </p>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon size={18} className="text-primary shrink-0" />
                    <span className="font-mono text-sm">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-8">
                <p className="text-center text-primary font-mono text-sm">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

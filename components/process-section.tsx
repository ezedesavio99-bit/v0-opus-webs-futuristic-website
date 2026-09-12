"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Lightbulb, Palette, Code, Gauge, Rocket } from "lucide-react"

const steps = [
  { icon: Search, title: "Análisis", description: "Entendemos tu negocio y objetivos" },
  { icon: Lightbulb, title: "Estrategia", description: "Planificamos cada detalle" },
  { icon: Palette, title: "Diseño UI/UX", description: "Creamos la experiencia visual" },
  { icon: Code, title: "Desarrollo", description: "Construimos con código limpio" },
  { icon: Gauge, title: "Optimización + SEO", description: "Velocidad y posicionamiento" },
  { icon: Rocket, title: "Lanzamiento + Soporte", description: "Te acompañamos siempre" },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="proceso" ref={ref} className="relative py-24 md:py-32 bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            Proceso
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4">
            Un proceso claro. Un resultado de alto nivel.
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border-light-strong)]" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative flex items-center gap-8 mb-10 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-3.5 h-3.5 rounded-full z-10 border-4 border-[var(--surface)]"
                style={{ background: "var(--accent)" }}
              />

              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className={`p-6 rounded-2xl card-light ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>
                        0{index + 1}
                      </span>
                      <h3 className="font-display font-semibold text-lg text-[var(--ink)]">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-[var(--text-muted)] text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

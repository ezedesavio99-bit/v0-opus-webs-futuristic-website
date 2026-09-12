"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe2, Code2, Workflow, Sparkles } from "lucide-react"

const pillars = [
  {
    icon: Globe2,
    title: "Websites premium",
    description: "Sitios diseñados desde cero para transmitir autoridad y generar confianza inmediata.",
  },
  {
    icon: Code2,
    title: "Software a medida",
    description: "Sistemas y dashboards que se adaptan a la operación real de tu negocio.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones",
    description: "Eliminamos procesos manuales para que tu negocio trabaje mejor, todos los días.",
  },
  {
    icon: Sparkles,
    title: "Experiencias digitales",
    description: "Cada detalle pensado para que el usuario entienda, confíe y actúe.",
  },
]

export function ValueSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
              Cómo trabajamos
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4 mb-6 leading-[1.1] text-balance">
              Más que una web.
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-md">
              Construimos presencia digital completa: desde el sitio que te representa hasta el sistema que sostiene
              tu operación.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-xl card-light"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <pillar.icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-display font-semibold text-[var(--ink)] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

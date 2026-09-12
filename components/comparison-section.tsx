"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Gauge, Sparkles, TrendingUp, Layers, Headphones } from "lucide-react"

const differentials = [
  {
    icon: Eye,
    title: "Confianza visual",
    description: "Un diseño que transmite seriedad y autoridad desde el primer segundo.",
  },
  {
    icon: Gauge,
    title: "Velocidad real",
    description: "Sitios livianos y optimizados, pensados para cargar rápido en cualquier dispositivo.",
  },
  {
    icon: Sparkles,
    title: "Diseño a medida",
    description: "Cada proyecto se diseña desde cero, sin plantillas genéricas.",
  },
  {
    icon: TrendingUp,
    title: "Foco en conversión",
    description: "Estructura y contenido pensados para convertir visitas en consultas.",
  },
  {
    icon: Layers,
    title: "Preparado para escalar",
    description: "Arquitectura lista para sumar secciones, tienda online o automatizaciones cuando lo necesites.",
  },
  {
    icon: Headphones,
    title: "Acompañamiento continuo",
    description: "Soporte después del lanzamiento, no solo durante la entrega.",
  },
]

export function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            Por qué elegirnos
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4">
            La diferencia entre tener una web y tener presencia.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-xl card-light"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "var(--accent-soft)" }}
              >
                <item.icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
              </div>
              <h3 className="font-display font-semibold text-[var(--ink)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

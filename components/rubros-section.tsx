"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Car, Building, Dumbbell, Scissors, Store, Briefcase, Music, Lightbulb, Building2 } from "lucide-react"

const rubros = [
  { icon: Car, label: "Concesionarias" },
  { icon: Building, label: "Inmobiliarias" },
  { icon: Dumbbell, label: "Gimnasios" },
  { icon: Scissors, label: "Barberías" },
  { icon: Store, label: "Tiendas" },
  { icon: Briefcase, label: "Profesionales" },
  { icon: Music, label: "Artistas/DJs" },
  { icon: Lightbulb, label: "Emprendedores" },
  { icon: Building2, label: "Empresas" },
]

export function RubrosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="rubros" ref={ref} className="relative py-24 overflow-hidden bg-[var(--surface)]">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            Rubros
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4">
            Para cualquier rubro. Para un solo objetivo: destacar.
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--surface)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--surface)] to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 40, ease: "linear" }}
          className="flex gap-6"
        >
          {[...rubros, ...rubros].map((rubro, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-3 p-6 rounded-2xl card-light min-w-[140px]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-soft)" }}
              >
                <rubro.icon className="w-6 h-6" style={{ color: "var(--accent)" }} />
              </div>
              <span className="text-[var(--ink)] text-sm font-medium">{rubro.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

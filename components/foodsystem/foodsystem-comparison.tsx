"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { X, Check, ArrowRight } from "lucide-react"

const before = [
  "Instagram",
  "WhatsApp",
  "Carta PDF",
  "Reservas manuales",
  "Información repetida",
  "Mucho tiempo perdido",
]

const after = [
  "Sistema profesional",
  "Experiencia moderna",
  "Todo integrado",
  "Más organización",
  "Menos errores",
  "Más tiempo para atender clientes",
]

export function FoodSystemComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            ¿Por qué <span className="holographic-text">FoodSystem?</span>
          </h3>
          <p className="text-[var(--text-muted)] text-lg">La diferencia se ve apenas lo empezás a usar.</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center max-w-4xl mx-auto">
          {/* Antes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass border border-white/10 p-8"
          >
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[var(--text-muted)] mb-5">
              Antes
            </span>
            <ul className="space-y-4">
              {before.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.06 }}
                  className="flex items-center gap-3 text-[var(--text-muted)]"
                >
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400/70" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="mx-auto w-12 h-12 rounded-full glass-strong border border-[var(--glow-cyan)]/40 flex items-center justify-center rotate-90 md:rotate-0"
          >
            <ArrowRight className="w-5 h-5 text-[var(--glow-cyan)]" />
          </motion.div>

          {/* Después */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl bg-gradient-to-b from-[var(--glow-blue)]/15 to-transparent border-2 border-[var(--glow-cyan)]/40 p-8"
          >
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-[var(--glow-cyan)] mb-5">
              Después
            </span>
            <ul className="space-y-4">
              {after.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.06 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--glow-blue)] to-[var(--glow-cyan)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[var(--deep-navy)]" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

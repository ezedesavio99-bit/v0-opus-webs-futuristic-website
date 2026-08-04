"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  MessageCircleOff,
  CalendarCheck,
  ShoppingBag,
  RefreshCcw,
  Smile,
  LayoutDashboard,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"

const benefits: { icon: LucideIcon; title: string }[] = [
  { icon: MessageCircleOff, title: "Menos tiempo respondiendo consultas repetidas" },
  { icon: CalendarCheck, title: "Más reservas" },
  { icon: ShoppingBag, title: "Más pedidos" },
  { icon: RefreshCcw, title: "Información siempre actualizada" },
  { icon: Smile, title: "Mejor experiencia para el cliente" },
  { icon: LayoutDashboard, title: "Todo administrado desde un único panel" },
]

export function FoodSystemBenefits() {
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
            Beneficios <span className="holographic-text">medibles.</span>
          </h3>
          <p className="text-[var(--text-muted)] text-lg">El impacto se nota desde el primer día de uso.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl glass border border-[var(--glow-blue)]/20 hover:border-[var(--glow-cyan)]/40 transition-colors overflow-hidden"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/20 flex items-center justify-center border border-[var(--glow-blue)]/30">
                  <benefit.icon className="w-6 h-6 text-[var(--glow-cyan)]" />
                </div>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.4, delay: index * 0.2 }}
                  className="w-7 h-7 rounded-full bg-[var(--glow-cyan)]/10 flex items-center justify-center"
                >
                  <ArrowUpRight className="w-4 h-4 text-[var(--glow-cyan)]" />
                </motion.div>
              </div>
              <p className="text-white font-medium leading-snug">{benefit.title}</p>

              {/* subtle progress accent */}
              <div className="mt-5 h-1 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1.1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

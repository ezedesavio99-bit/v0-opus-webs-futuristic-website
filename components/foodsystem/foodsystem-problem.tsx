"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Instagram,
  MessageCircle,
  FileText,
  MessagesSquare,
  PackageX,
  FileX2,
  Wrench,
  HelpCircle,
  CalendarCheck,
  Utensils,
  ShoppingBag,
  LayoutDashboard,
  MessageSquareHeart,
  UserPlus,
  Info,
  Ticket,
  Network,
} from "lucide-react"

const problems = [
  { icon: Instagram, label: "Instagram" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: FileText, label: "Carta PDF" },
  { icon: MessagesSquare, label: "Reservas por mensajes" },
  { icon: PackageX, label: "Pedidos desorganizados" },
  { icon: FileX2, label: "Currículums perdidos" },
  { icon: Wrench, label: "Cambios manuales" },
  { icon: HelpCircle, label: "Clientes preguntando siempre lo mismo" },
]

const solutions = [
  { icon: CalendarCheck, label: "Reservas" },
  { icon: Utensils, label: "Carta" },
  { icon: ShoppingBag, label: "Pedidos" },
  { icon: LayoutDashboard, label: "Panel" },
  { icon: MessageSquareHeart, label: "Encuestas" },
  { icon: UserPlus, label: "Postulaciones" },
  { icon: Info, label: "Información" },
  { icon: Ticket, label: "Promociones" },
]

export function FoodSystemProblem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white text-balance">
            Todo separado <span className="text-[var(--text-muted)]">es</span>{" "}
            <span className="holographic-text">todo lento.</span>
          </h3>
          <p className="text-[var(--text-muted)] text-lg">
            Así funciona la mayoría de los restaurantes hoy. Así funciona un restaurante con FoodSystem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-4 items-center max-w-6xl mx-auto">
          {/* Left: problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5">
              <h4 className="text-lg font-semibold text-white/80 mb-1">Así trabajan la mayoría</h4>
              <span className="inline-block text-xs font-medium text-red-400/80 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                Todo separado
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {problems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl glass border border-white/5 hover:border-red-400/20 transition-colors"
                >
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <item.icon className="w-4 h-4 text-red-400/80" />
                  </div>
                  <span className="text-sm text-[var(--text-muted)] leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center: connecting hub */}
          <div className="relative flex lg:flex-col items-center justify-center gap-2 py-6 lg:py-0">
            {/* connector line + flowing dots (desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+8rem)] h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 via-[var(--glow-cyan)]/50 to-[var(--glow-blue)]/30" />
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[var(--glow-cyan)]"
                  animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 3,
                    delay: i * 1,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* mobile connector */}
            <div className="lg:hidden relative w-px h-16">
              <div className="absolute inset-0 bg-gradient-to-b from-red-400/30 via-[var(--glow-cyan)]/50 to-[var(--glow-blue)]/30" />
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--glow-cyan)]"
                  animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: i * 0.6,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(47, 156, 255, 0.3)",
                  "0 0 40px rgba(95, 211, 255, 0.4)",
                  "0 0 20px rgba(47, 156, 255, 0.3)",
                ],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              className="relative z-10 w-16 h-16 rounded-2xl glass-strong border border-[var(--glow-cyan)]/40 flex items-center justify-center shrink-0"
            >
              <Network className="w-7 h-7 text-[var(--glow-cyan)]" />
            </motion.div>
          </div>

          {/* Right: solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-5">
              <h4 className="text-lg font-semibold text-white mb-1">Así funciona FoodSystem</h4>
              <span className="inline-block text-xs font-medium text-[var(--glow-cyan)] px-3 py-1 rounded-full bg-[var(--glow-blue)]/10 border border-[var(--glow-blue)]/30">
                Todo integrado
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.05 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl glass border border-[var(--glow-blue)]/20 hover:border-[var(--glow-cyan)]/50 hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/20 flex items-center justify-center border border-[var(--glow-blue)]/30">
                    <item.icon className="w-4 h-4 text-[var(--glow-cyan)]" />
                  </div>
                  <span className="text-sm text-white leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)] text-center lg:text-left">
              Todo desde un mismo lugar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

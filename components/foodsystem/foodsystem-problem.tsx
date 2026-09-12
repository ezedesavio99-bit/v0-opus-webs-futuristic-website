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
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--ink)" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white text-balance">
            Todo separado <span className="text-[var(--text-on-dark-muted)]">es</span>{" "}
            <span style={{ color: "var(--accent)" }}>todo lento.</span>
          </h3>
          <p className="text-[var(--text-on-dark-muted)] text-lg">
            Así funciona la mayoría de los restaurantes hoy. Así funciona un restaurante con FoodSystem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-4 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
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
              {problems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-[var(--ink-2)]"
                >
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <item.icon className="w-4 h-4 text-red-400/80" />
                  </div>
                  <span className="text-sm text-[var(--text-on-dark-muted)] leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative flex lg:flex-col items-center justify-center gap-2 py-6 lg:py-0">
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+8rem)] h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/25 via-white/10 to-[var(--accent)]/25" />
            </div>
            <div className="lg:hidden relative w-px h-16">
              <div className="absolute inset-0 bg-gradient-to-b from-red-400/25 via-white/10 to-[var(--accent)]/25" />
            </div>

            <div className="relative z-10 w-16 h-16 rounded-2xl border border-white/10 bg-[var(--ink-2)] flex items-center justify-center shrink-0">
              <Network className="w-7 h-7" style={{ color: "var(--accent)" }} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-5">
              <h4 className="text-lg font-semibold text-white mb-1">Así funciona FoodSystem</h4>
              <span
                className="inline-block text-xs font-medium px-3 py-1 rounded-full border"
                style={{ color: "var(--accent)", background: "var(--accent-soft)", borderColor: "var(--accent)33" }}
              >
                Todo integrado
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {solutions.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-[var(--ink-2)] hover:border-white/20 hover:-translate-y-0.5 transition-all"
                >
                  <div
                    className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center border border-white/10"
                    style={{ background: "var(--accent-soft)" }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  </div>
                  <span className="text-sm text-white leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--text-on-dark-muted)] text-center lg:text-left">
              Todo desde un mismo lugar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

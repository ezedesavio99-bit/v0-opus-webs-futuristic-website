"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Heart,
  Gift,
  CreditCard,
  Package,
  BarChart3,
  Zap,
  Wallet,
  Ticket,
  Building2,
  Star,
  Users,
  ChefHat,
  Boxes,
  Bell,
  Contact,
  Plus,
  type LucideIcon,
} from "lucide-react"

const modules: { icon: LucideIcon; label: string }[] = [
  { icon: Heart, label: "Programa de fidelización" },
  { icon: Gift, label: "Gift Cards" },
  { icon: CreditCard, label: "Pagos online" },
  { icon: Package, label: "Pedidos propios" },
  { icon: BarChart3, label: "Estadísticas" },
  { icon: Zap, label: "Automatizaciones" },
  { icon: Wallet, label: "Integración con Mercado Pago" },
  { icon: Ticket, label: "Cupones" },
  { icon: Building2, label: "Múltiples sucursales" },
  { icon: Star, label: "Sistema de puntos" },
  { icon: Users, label: "Panel para empleados" },
  { icon: ChefHat, label: "Panel para cocina" },
  { icon: Boxes, label: "Gestión de stock" },
  { icon: Bell, label: "Notificaciones automáticas" },
  { icon: Contact, label: "CRM para clientes" },
]

export function FoodSystemScalable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--glow-violet)]/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Crece junto a <span className="holographic-text">tu restaurante.</span>
          </h3>
          <p className="text-[var(--text-muted)] text-lg">
            FoodSystem incorpora nuevos módulos a medida que tu negocio lo necesita.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl glass border border-[var(--glow-blue)]/15 hover:border-[var(--glow-cyan)]/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-violet)]/20 flex items-center justify-center border border-[var(--glow-blue)]/20">
                <module.icon className="w-5 h-5 text-[var(--glow-cyan)]" />
              </div>
              <span className="text-xs md:text-sm text-white/90 leading-tight">{module.label}</span>
            </motion.div>
          ))}

          {/* Extensibility tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: modules.length * 0.04 }}
            className="flex flex-col items-center justify-center text-center gap-3 p-5 rounded-2xl border border-dashed border-[var(--glow-cyan)]/30 text-[var(--glow-cyan)]"
          >
            <div className="w-11 h-11 rounded-xl bg-[var(--glow-cyan)]/10 flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
            <span className="text-xs md:text-sm leading-tight">Más módulos en camino</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

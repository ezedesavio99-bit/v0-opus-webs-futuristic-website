"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChefHat, Play, CalendarCheck, MessageCircle, LayoutDashboard, Sparkles } from "lucide-react"
import { MagneticButton } from "../magnetic-button"

const floatingBadges = [
  { icon: CalendarCheck, text: "Reservas en vivo", position: "-top-4 -left-4 md:-left-10" },
  { icon: MessageCircle, text: "Pedido enviado", position: "top-1/3 -right-4 md:-right-10" },
  { icon: LayoutDashboard, text: "Panel en tiempo real", position: "-bottom-6 left-6 md:left-10" },
]

export function FoodSystemHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[var(--glow-violet)]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--glow-blue)]/10 blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[var(--glow-violet)]/30 text-sm text-[var(--glow-cyan)] mb-6">
              <ChefHat className="w-4 h-4" />
              Software para restaurantes
            </div>

            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <span
                style={{
                  background: "linear-gradient(90deg, #5fd3ff 0%, #2f9cff 40%, #7c5cff 80%, #5fd3ff 100%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradient-shift 6s ease infinite",
                }}
              >
                FoodSystem
              </span>
            </h2>

            <p className="text-xl md:text-2xl font-semibold text-white mb-6 text-balance">
              El sistema que centraliza todo tu restaurante en un solo lugar.
            </p>

            <p className="text-[var(--text-muted)] text-lg mb-4 max-w-xl mx-auto lg:mx-0">
              Muchos restaurantes trabajan con Instagram, WhatsApp, cartas PDF, formularios y reservas por separado.
            </p>
            <p className="text-[var(--text-muted)] text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              FoodSystem reúne todo en una única plataforma para mejorar la experiencia del cliente y simplificar la
              gestión diaria del negocio.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <MagneticButton>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-semibold text-lg hover:shadow-[0_0_40px_rgba(47,156,255,0.4)] transition-shadow animate-breathe"
                >
                  <Sparkles className="w-5 h-5" />
                  Solicitar una demo
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#foodsystem-video"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full glass border border-[var(--glow-blue)]/30 text-white font-semibold text-lg hover:border-[var(--glow-cyan)]/50 transition-colors"
                >
                  <Play className="w-5 h-5 text-[var(--glow-cyan)]" />
                  Ver funcionamiento
                </a>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Device mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative max-w-md mx-auto animate-float">
              {/* Monitor */}
              <div className="relative rounded-2xl glass-strong border border-[var(--glow-blue)]/30 p-3 shadow-[0_0_60px_rgba(47,156,255,0.15)]">
                <div className="flex items-center gap-1.5 mb-3 px-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
                <div className="rounded-xl bg-[var(--deep-navy)] border border-[var(--glow-blue)]/10 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-2.5 rounded-full bg-[var(--glow-blue)]/30" />
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: i * 0.3 }}
                          className="w-6 h-2 rounded-full bg-[var(--text-muted)]/30"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: i * 0.4 }}
                        className="h-16 rounded-lg bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/10 border border-[var(--glow-blue)]/20"
                      />
                    ))}
                  </div>
                </div>
                {/* Monitor stand */}
                <div className="w-16 h-3 bg-[var(--secondary-navy)] mx-auto mt-2 rounded-b-md" />
              </div>

              {/* Tablet */}
              <div className="absolute -bottom-8 -left-6 md:-left-14 w-32 rotate-[-8deg] rounded-xl glass-strong border border-[var(--glow-cyan)]/30 p-2 shadow-[0_0_30px_rgba(95,211,255,0.2)]">
                <div className="rounded-lg bg-[var(--deep-navy)] p-2 space-y-1.5">
                  <div className="w-10 h-1.5 rounded-full bg-[var(--glow-cyan)]/40 mx-auto" />
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-1.5 py-1 rounded-md bg-[var(--secondary-navy)]"
                    >
                      <div className="w-8 h-1.5 rounded-full bg-white/20" />
                      <div className="w-4 h-1.5 rounded-full bg-[var(--glow-cyan)]/50" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="absolute -bottom-10 -right-4 md:-right-10 w-24 rotate-[8deg] rounded-2xl glass-strong border border-[var(--glow-violet)]/30 p-1.5 shadow-[0_0_30px_rgba(124,92,255,0.25)]">
                <div className="rounded-xl bg-[var(--deep-navy)] p-2 space-y-1.5">
                  <MessageCircle className="w-4 h-4 text-[var(--glow-cyan)] mx-auto" />
                  <div className="rounded-md bg-[var(--secondary-navy)] p-1.5 space-y-1">
                    <div className="w-full h-1 rounded-full bg-white/20" />
                    <div className="w-2/3 h-1 rounded-full bg-white/10" />
                  </div>
                  <div className="w-full h-4 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)]" />
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                  className={`absolute ${badge.position} hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[var(--glow-cyan)]/30 text-xs text-white whitespace-nowrap z-10`}
                >
                  <badge.icon className="w-3.5 h-3.5 text-[var(--glow-cyan)]" />
                  {badge.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

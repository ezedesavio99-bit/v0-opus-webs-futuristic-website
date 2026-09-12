"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChefHat, Play, CalendarCheck, MessageCircle, LayoutDashboard, Sparkles } from "lucide-react"
import { MagneticButton } from "../magnetic-button"
import { Button } from "../ui-premium/button"
import { Badge } from "../ui-premium/badge"

const floatingBadges = [
  { icon: CalendarCheck, text: "Reservas en vivo", position: "-top-4 -left-4 md:-left-10" },
  { icon: MessageCircle, text: "Pedido enviado", position: "top-1/3 -right-4 md:-right-10" },
  { icon: LayoutDashboard, text: "Panel en tiempo real", position: "-bottom-6 left-6 md:left-10" },
]

export function FoodSystemHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{ background: "var(--ink)" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-[0.12] pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <Badge tone="dark" className="mb-6">
              <ChefHat className="w-3.5 h-3.5" />
              Software para restaurantes
            </Badge>

            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.08] text-white">
              Food<span style={{ color: "var(--accent)" }}>System</span>
            </h2>

            <p className="text-xl md:text-2xl font-semibold text-white mb-6 text-balance">
              El sistema que centraliza todo tu restaurante en un solo lugar.
            </p>

            <p className="text-[var(--text-on-dark-muted)] text-lg mb-4 max-w-xl mx-auto lg:mx-0">
              Muchos restaurantes trabajan con Instagram, WhatsApp, cartas PDF, formularios y reservas por separado.
            </p>
            <p className="text-[var(--text-on-dark-muted)] text-lg mb-10 max-w-xl mx-auto lg:mx-0">
              FoodSystem reúne todo en una única plataforma para mejorar la experiencia del cliente y simplificar la
              gestión diaria del negocio.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <MagneticButton>
                <Button href="#contacto" size="lg">
                  <Sparkles className="w-4 h-4" />
                  Solicitar una demo
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="#foodsystem-video" variant="ghost" size="lg">
                  <Play className="w-4 h-4" />
                  Ver funcionamiento
                </Button>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative max-w-md mx-auto animate-float">
              <div className="relative rounded-2xl border border-white/10 bg-[var(--ink-2)] p-3 shadow-2xl">
                <div className="flex items-center gap-1.5 mb-3 px-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <div className="rounded-xl bg-[var(--ink)] border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-2.5 rounded-full" style={{ background: "var(--accent-soft-strong)" }} />
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-2 rounded-full bg-white/10" />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 rounded-lg border border-white/10" style={{ background: "var(--accent-soft)" }} />
                    ))}
                  </div>
                </div>
                <div className="w-16 h-3 bg-[var(--ink-2)] mx-auto mt-2 rounded-b-md" />
              </div>

              <div className="absolute -bottom-8 -left-6 md:-left-14 w-32 rotate-[-8deg] rounded-xl border border-white/10 bg-[var(--ink-2)] p-2 shadow-xl">
                <div className="rounded-lg bg-[var(--ink)] p-2 space-y-1.5">
                  <div className="w-10 h-1.5 rounded-full mx-auto" style={{ background: "var(--accent-soft-strong)" }} />
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between px-1.5 py-1 rounded-md bg-[var(--ink-2)]">
                      <div className="w-8 h-1.5 rounded-full bg-white/15" />
                      <div className="w-4 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-10 -right-4 md:-right-10 w-24 rotate-[8deg] rounded-2xl border border-white/10 bg-[var(--ink-2)] p-1.5 shadow-xl">
                <div className="rounded-xl bg-[var(--ink)] p-2 space-y-1.5">
                  <MessageCircle className="w-4 h-4 mx-auto" style={{ color: "var(--accent)" }} />
                  <div className="rounded-md bg-[var(--ink-2)] p-1.5 space-y-1">
                    <div className="w-full h-1 rounded-full bg-white/15" />
                    <div className="w-2/3 h-1 rounded-full bg-white/10" />
                  </div>
                  <div className="w-full h-4 rounded-full" style={{ background: "var(--accent)" }} />
                </div>
              </div>

              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                  className={`absolute ${badge.position} hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[var(--ink-2)] text-xs text-white whitespace-nowrap z-10`}
                >
                  <badge.icon className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
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

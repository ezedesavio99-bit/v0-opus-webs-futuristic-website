"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"
import { Button } from "./ui-premium/button"
import { Badge } from "./ui-premium/badge"

const labels = [
  { text: "UX Avanzado", position: "top-4 left-4" },
  { text: "Micro-interacciones", position: "top-4 right-4" },
  { text: "Diseño Vivo", position: "bottom-4 left-4" },
  { text: "Experiencia Premium", position: "bottom-4 right-4" },
]

export function ProModeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative animate-float">
              <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] bg-[var(--ink)] border-4 border-[var(--ink-2)] overflow-hidden shadow-2xl">
                <div className="absolute inset-2 rounded-[2.5rem] bg-[var(--ink-2)] overflow-hidden">
                  <div className="p-4 space-y-3">
                    <div className="w-16 h-2 rounded-full bg-white/15 mx-auto" />
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: i * 0.3 }}
                          className="h-24 rounded-xl border border-white/10"
                          style={{ background: "var(--accent-soft)" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {labels.map((label, index) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`absolute ${label.position} px-3 py-1.5 rounded-full card-light text-xs text-[var(--ink)] whitespace-nowrap`}
                >
                  {label.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <Badge className="mb-6">Modo Pro</Badge>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mb-6 leading-[1.1]">
              Esto pasa cuando una web deja de ser solo una página y se convierte en una{" "}
              <span style={{ color: "var(--accent)" }}>experiencia.</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-8">
              Cada detalle está pensado. Cada transición tiene un propósito. El resultado: una web que no se olvida.
            </p>
            <MagneticButton>
              <Button href="#contacto" size="lg">
                Quiero este nivel
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

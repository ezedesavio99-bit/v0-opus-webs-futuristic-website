"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"
import { Button } from "./ui-premium/button"

export function LiveUISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mb-6 leading-[1.1]">
              Tu sitio debería generar <span style={{ color: "var(--accent)" }}>autoridad.</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-8">
              Creamos experiencias con microinteracciones: el usuario explora, se queda y recuerda. Cada elemento
              tiene un propósito.
            </p>
            <MagneticButton>
              <Button href="#contacto" size="lg">
                Quiero este nivel
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl p-6 card-light">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-light)]">
                <div className="w-8 h-8 rounded-lg" style={{ background: "var(--accent)" }} />
                <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-2 rounded-full bg-[var(--gray-200)]" />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: i * 0.5 }}
                    className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-light)]"
                  >
                    <div className="w-full h-20 rounded-lg mb-3" style={{ background: "var(--accent-soft)" }} />
                    <div className="w-3/4 h-2 rounded-full bg-[var(--gray-200)] mb-2" />
                    <div className="w-1/2 h-2 rounded-full bg-[var(--gray-100)]" />
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-light)]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                      style={{ background: "var(--accent)" }}
                    />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent)" }} />
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">Experiencia en vivo</span>
                </div>
                <div className="w-16 h-8 rounded-lg" style={{ background: "var(--accent)" }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

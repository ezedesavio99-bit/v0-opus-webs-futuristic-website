"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Grid3DSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(10,10,11,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mb-6">
            Construimos tu presencia <span style={{ color: "var(--accent)" }}>desde la base.</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Cada OpusWeb se construye sobre una estructura sólida, escalable y preparada para crecer.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

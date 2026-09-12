"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function StatementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-6xl text-[var(--ink)] mb-6 leading-tight text-balance">
            OpusWebs no sigue tendencias. <span style={{ color: "var(--accent)" }}>Diseña el estándar.</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)]">Webs pensadas para durar, no para pasar de moda.</p>
        </motion.div>
      </div>
    </section>
  )
}

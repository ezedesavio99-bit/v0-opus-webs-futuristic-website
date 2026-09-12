"use client"

import { motion } from "framer-motion"

const items = ["Webs", "Landing Pages", "Tiendas Online", "Branding", "SEO", "Automatización", "Integraciones", "Diseño Premium"]

export function MarqueeSection() {
  return (
    <section className="relative py-7 overflow-hidden bg-white border-y border-[var(--border-light)]">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 30, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-10">
            <span className="text-lg md:text-xl font-medium text-[var(--gray-400)]">{item}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: "var(--accent)" }} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}

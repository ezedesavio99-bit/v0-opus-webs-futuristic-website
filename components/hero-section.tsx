"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MagneticButton } from "./magnetic-button"
import { Zap, Smartphone, Search, TrendingUp } from "lucide-react"

const heroText = "Creamos sitios web que no solo se ven bien, venden."

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= heroText.length) {
        setDisplayText(heroText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const chips = [
    { icon: Smartphone, label: "Mobile First" },
    { icon: Search, label: "SEO Ready" },
    { icon: Zap, label: "Ultra Rápidas" },
    { icon: TrendingUp, label: "Escalables" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Energy ring behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--glow-blue)]/20 animate-glow-pulse" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[var(--glow-cyan)]/15 animate-glow-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--glow-violet)]/10 animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight"
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
              {displayText}
            </span>
            <span
              className={showCursor ? "opacity-100" : "opacity-0"}
              style={{ WebkitTextFillColor: "var(--glow-cyan)" }}
            >
              |
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-lg md:text-xl text-[var(--text-muted)] mb-8 max-w-2xl mx-auto"
          >
            Diseño cyber premium, velocidad, SEO y una experiencia que se siente del futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {chips.map((chip, index) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--glow-blue)]/30 text-sm text-white"
              >
                <chip.icon size={16} className="text-[var(--glow-cyan)]" />
                {chip.label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <MagneticButton>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-semibold text-lg hover:shadow-[0_0_40px_rgba(47,156,255,0.4)] transition-shadow animate-breathe"
              >
                Quiero una web así
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full glass border border-[var(--glow-blue)]/30 text-white font-semibold text-lg hover:border-[var(--glow-cyan)]/50 transition-colors"
              >
                Ver ejemplos
              </a>
            </MagneticButton>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { label: "Diseño", value: "Premium" },
              { label: "Performance", value: "100%" },
              { label: "Conversión", value: "Optimizada" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold holographic-text">{item.value}</div>
                <div className="text-sm text-[var(--text-muted)]">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        
      </motion.div>
    </section>
  )
}

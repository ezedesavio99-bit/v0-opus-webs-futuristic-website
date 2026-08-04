"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, MessageCircle } from "lucide-react"
import { MagneticButton } from "../magnetic-button"

export function FoodSystemCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Energy rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[var(--glow-blue)]/10 animate-glow-pulse" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--glow-violet)]/15 animate-glow-pulse"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--glow-blue)]/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--glow-violet)]/20 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight text-balance">
            Más que una página web.
            <br />
            <span className="holographic-text">El sistema operativo de tu restaurante.</span>
          </h3>
          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-2 max-w-2xl mx-auto">
            FoodSystem fue diseñado para ayudar a restaurantes a vender más, ahorrar tiempo y brindar una mejor
            experiencia a cada cliente.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            <span className="text-[var(--text-muted)]">No reemplaza tu negocio. </span>
            <span className="text-white font-semibold">Lo potencia.</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-bold text-lg hover:shadow-[0_0_60px_rgba(47,156,255,0.5)] transition-shadow animate-breathe"
              >
                <Sparkles className="w-5 h-5" />
                Quiero ver una demo
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://wa.me/TUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full glass border border-[var(--glow-blue)]/30 text-white font-bold text-lg hover:border-[var(--glow-cyan)]/50 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[var(--glow-cyan)]" />
                Hablar por WhatsApp
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

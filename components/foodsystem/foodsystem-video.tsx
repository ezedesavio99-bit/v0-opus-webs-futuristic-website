"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Clock3 } from "lucide-react"

export function FoodSystemVideo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="foodsystem-video" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Darker backdrop for this block */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[var(--glow-blue)]/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[var(--glow-cyan)]/30 text-sm text-[var(--glow-cyan)] mb-6">
            <Clock3 className="w-4 h-4" />
            Menos de 3 minutos
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Descubrí cómo funciona <span className="holographic-text">FoodSystem</span>
          </h3>
          <p className="text-[var(--text-muted)] text-lg">
            En menos de tres minutos vas a entender cómo funciona tanto para tus clientes como para vos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-strong border border-[var(--glow-blue)]/20 group">
            {/* Placeholder backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-navy)] via-[var(--card-dark)] to-[var(--deep-navy)]" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(47,156,255,0.25),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(124,92,255,0.25),transparent_45%)]" />

            {/* Faux UI lines to suggest product footage */}
            <div className="absolute inset-6 md:inset-10 rounded-2xl border border-white/10 overflow-hidden hidden sm:block">
              <div className="p-6 space-y-3 opacity-40">
                <div className="w-1/3 h-2.5 rounded-full bg-white/30" />
                <div className="w-1/2 h-2.5 rounded-full bg-white/15" />
                <div className="grid grid-cols-3 gap-3 pt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 rounded-lg bg-white/10" />
                  ))}
                </div>
              </div>
            </div>

            {/* Play button */}
            <button
              onClick={() => setIsPlaying(true)}
              aria-label="Reproducir video de FoodSystem"
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10"
            >
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(47,156,255,0.4)",
                    "0 0 0 18px rgba(47,156,255,0)",
                    "0 0 0 0 rgba(47,156,255,0)",
                  ],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.2 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[var(--glow-blue)] to-[var(--glow-cyan)] flex items-center justify-center group-hover:scale-105 transition-transform"
              >
                <Play className="w-8 h-8 md:w-9 md:h-9 text-[var(--deep-navy)] ml-1" fill="currentColor" />
              </motion.span>
              <span className="text-white/70 text-sm">
                {isPlaying ? "Video próximamente" : "Reproducir demo de FoodSystem"}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

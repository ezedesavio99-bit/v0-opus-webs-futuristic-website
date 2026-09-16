"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"
import { Button } from "./ui-premium/button"
import { DarkShaderBackground } from "./dark-shader-background"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--ink)" }}>
      <DarkShaderBackground scrimOpacity={0.6} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Si querés una web común, no es acá.
          </h2>
          <p className="text-xl text-[var(--text-on-dark-muted)] mb-10">
            Si querés una web que represente tu nivel, hablemos.
          </p>
          <MagneticButton>
            <Button href="#contacto" size="lg">
              Quiero mi OpusWeb
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

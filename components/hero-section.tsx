"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "./ui-premium/button"
import { Badge } from "./ui-premium/badge"
import { MagneticButton } from "./magnetic-button"
import { DarkShaderBackground } from "./dark-shader-background"
import { Smartphone, Search, Zap, TrendingUp } from "lucide-react"

const chips = [
  { icon: Smartphone, label: "Mobile First" },
  { icon: Search, label: "SEO Ready" },
  { icon: Zap, label: "Ultra rápidas" },
  { icon: TrendingUp, label: "Escalables" },
]

const mockups = [
  { src: "/images/cordaro.png", label: "cordaroinmobiliaria.com" },
  { src: "/images/grupo-ag.png", label: "somosgrupoag.com" },
  { src: "/images/dellepiane.png", label: "dellepianeobrasdearte.com" },
]

function BrowserMockup({
  src,
  label,
  className = "",
}: {
  src: string
  label: string
  className?: string
}) {
  return (
    <div
      className={`absolute w-[320px] sm:w-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[var(--ink-2)] ${className}`}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="ml-3 text-[11px] text-white/40 truncate">{label}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={label} fill className="object-cover object-top" sizes="380px" />
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <DarkShaderBackground scrimOpacity={0.62} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge tone="dark" className="mb-6">
              Websites · Software · Automatización
            </Badge>

            <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6 text-balance">
              Sitios web que no solo se ven bien,{" "}
              <span style={{ color: "var(--accent)" }}>venden.</span>
            </h1>

            <p className="text-lg text-[var(--text-on-dark-muted)] mb-8 max-w-lg leading-relaxed">
              Diseño premium, performance real y una experiencia pensada para convertir visitas en clientes.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {chips.map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 text-sm text-white/70"
                >
                  <chip.icon size={15} style={{ color: "var(--accent)" }} />
                  {chip.label}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <Button href="#contacto" size="lg">
                  Quiero una web así
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/portfolio" variant="ghost" size="lg">
                  Ver ejemplos
                </Button>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[440px]"
          >
            <BrowserMockup {...mockups[0]} className="left-0 top-8 z-10 rotate-[-4deg]" />
            <BrowserMockup {...mockups[1]} className="left-32 top-32 z-20 rotate-[2deg]" />
            <BrowserMockup {...mockups[2]} className="left-16 -top-4 z-0 rotate-[6deg] opacity-90" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

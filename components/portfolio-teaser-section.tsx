"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { HolographicCard } from "./holographic-card"
import { Button } from "./ui-premium/button"
import { projects } from "./portfolio-section"

const featuredTitles = [
  "Cordaro Inmobiliaria",
  "Grupo AG",
  "Dellepiane Obras de Arte",
  "Kosher Winery",
  "Nahuel Coach",
  "Oratoria - El Arte de Conectar",
]

const featured = featuredTitles
  .map((title) => projects.find((p) => p.title === title))
  .filter((p): p is (typeof projects)[number] => Boolean(p))

export function PortfolioTeaserSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
              Portfolio
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4">
              Proyectos reales, resultados reales.
            </h2>
          </div>
          <Button href="/portfolio" variant="secondary">
            Ver portfolio completo
          </Button>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <HolographicCard className="group cursor-pointer h-full">
                  <div className="relative aspect-video overflow-hidden bg-[var(--gray-100)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                      <p className="text-[11px] uppercase tracking-wider text-white/70 mb-1">{project.rubro}</p>
                      <div className="flex items-center gap-2 text-white font-medium text-sm">
                        Ver sitio <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-[var(--ink)]">{project.title}</h3>
                  </div>
                </HolographicCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

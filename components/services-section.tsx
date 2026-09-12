"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Briefcase, User, Rocket, ShoppingCart, Bot, Code2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Diseño Web Profesional",
    description: "Webs que transmiten autoridad y confianza desde el primer segundo.",
  },
  {
    icon: Briefcase,
    title: "Webs para Negocios",
    description: "Presencia digital que convierte visitantes en clientes reales.",
  },
  {
    icon: User,
    title: "Webs para Profesionales",
    description: "Tu marca personal en un sitio que refleja tu expertise.",
  },
  {
    icon: Rocket,
    title: "Landing Pages de Venta",
    description: "Páginas diseñadas estratégicamente para maximizar conversiones.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    description: "E-commerce que venden 24/7 con experiencia de compra premium.",
  },
  {
    icon: Code2,
    title: "Software y Sistemas",
    description: "Soluciones personalizadas para automatizar y optimizar procesos complejos.",
  },
  {
    icon: Bot,
    title: "Webs con IA y Automatización",
    description: "Integraciones inteligentes que trabajan por vos mientras dormís.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" ref={ref} className="relative py-24 md:py-32 bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            Servicios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4 mb-5 leading-[1.1]">
            No hacemos plantillas.
            <br />
            Diseñamos presencia digital.
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Cada web está construida para transmitir autoridad, retener atención y convertir visitas en consultas.
          </p>
        </motion.div>

        <div className="border-t border-[var(--border-light)]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[80px_auto_1fr] items-center gap-4 sm:gap-8 py-7 border-b border-[var(--border-light)] hover:bg-white transition-colors px-2 -mx-2 rounded-lg"
            >
              <span className="font-display text-sm text-[var(--gray-400)] tabular-nums hidden sm:block">
                0{index + 1}
              </span>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-[var(--accent-soft)]"
                style={{ background: "var(--gray-100)" }}
              >
                <service.icon className="w-5 h-5 text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-lg text-[var(--ink)] mb-1">{service.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

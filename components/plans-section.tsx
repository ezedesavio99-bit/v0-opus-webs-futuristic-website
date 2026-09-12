"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"
import { Button } from "./ui-premium/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Para empezar con presencia digital",
    price: "Desde $397 USD",
    features: ["Diseño personalizado", "Responsive 100%", "SEO básico", "Formulario de contacto", "Hosting primer año"],
    highlighted: false,
  },
  {
    name: "Pro",
    description: "El más elegido por negocios",
    price: "Desde $697 USD",
    features: [
      "Todo lo de Starter",
      "Microinteracciones",
      "Animaciones premium",
      "SEO avanzado",
      "Integraciones",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    description: "Presencia digital + Software a medida",
    price: "Consultar",
    features: [
      "Todo lo de Pro",
      "Automatizaciones IA",
      "E-commerce completo",
      "Software personalizado",
      "Sistemas y dashboards",
      "Integraciones complejas",
      "Soporte 24/7",
      "Actualizaciones ilimitadas",
    ],
    highlighted: false,
  },
]

export function PlansSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="planes" ref={ref} className="relative py-24 md:py-32 bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            Planes
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4 mb-4">
            Elegí tu nivel de presencia.
          </h2>
          <p className="text-[var(--text-muted)]">Podés empezar simple y escalar cuando quieras.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.highlighted ? "card-dark md:-translate-y-3 shadow-2xl" : "card-light"}`}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold flex items-center gap-1"
                  style={{ background: "var(--accent)" }}
                >
                  <Star className="w-4 h-4" /> Más elegido
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-display font-bold mb-2 ${plan.highlighted ? "text-white" : "text-[var(--ink)]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? "text-[var(--text-on-dark-muted)]" : "text-[var(--text-muted)]"}`}>
                  {plan.description}
                </p>
                <div className={`text-3xl font-display font-bold ${plan.highlighted ? "text-white" : "text-[var(--ink)]"}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 text-sm ${plan.highlighted ? "text-[var(--text-on-dark-muted)]" : "text-[var(--text-muted)]"}`}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: plan.highlighted ? "rgba(255,255,255,0.12)" : "var(--accent-soft)" }}
                    >
                      <Check className="w-3 h-3" style={{ color: plan.highlighted ? "white" : "var(--accent)" }} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <MagneticButton>
                <Button href="#contacto" variant={plan.highlighted ? "dark" : "secondary"} className="w-full">
                  Elegir
                </Button>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

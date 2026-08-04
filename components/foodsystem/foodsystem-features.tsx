"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  CalendarCheck,
  Utensils,
  MessageCircle,
  MessageSquareHeart,
  UserPlus,
  MapPin,
  LayoutDashboard,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { HolographicCard } from "../holographic-card"

type Feature = {
  icon: LucideIcon
  title: string
  description: string
  tags?: string[]
  highlight?: string
}

const features: Feature[] = [
  {
    icon: CalendarCheck,
    title: "Reservas online",
    description:
      "Los clientes pueden reservar una mesa en pocos segundos desde cualquier dispositivo. Las reservas quedan organizadas automáticamente.",
  },
  {
    icon: Utensils,
    title: "Carta digital",
    description:
      "Actualizá productos, categorías, imágenes y precios sin depender de nadie. Los cambios aparecen al instante.",
  },
  {
    icon: MessageCircle,
    title: "Pedidos por WhatsApp",
    description:
      "El cliente arma su pedido desde la página. Cuando finaliza, el pedido llega listo para enviar por WhatsApp.",
    tags: ["Menos errores", "Más rapidez", "Más ventas"],
  },
  {
    icon: MessageSquareHeart,
    title: "Encuestas de satisfacción",
    description:
      "Recibí opiniones reales después de cada visita. Detectá oportunidades de mejora antes de que aparezcan malas reseñas.",
  },
  {
    icon: UserPlus,
    title: "Trabajá con nosotros",
    description:
      "Los candidatos pueden cargar su CV directamente desde la página. Toda la información queda organizada desde el panel.",
  },
  {
    icon: MapPin,
    title: "Información del restaurante",
    description: "Todo lo que tu cliente necesita saber, siempre a mano y siempre actualizado.",
    tags: ["Ubicación", "Horarios", "Redes sociales", "Eventos", "Galería", "FAQ", "Promociones"],
    highlight: "Todo actualizado.",
  },
  {
    icon: LayoutDashboard,
    title: "Panel de administración",
    description: "Administrá todo desde un único lugar, sin conocimientos técnicos.",
    tags: [
      "Precios",
      "Productos",
      "Imágenes",
      "Textos",
      "Reservas",
      "Postulaciones",
      "Encuestas",
      "Promociones",
    ],
    highlight: "Todo sin conocimientos técnicos.",
  },
]

export function FoodSystemFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[var(--glow-blue)]/30 text-sm text-[var(--glow-cyan)] mb-6">
            <Zap className="w-4 h-4" />
            Todo en un mismo sistema
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            ¿Qué incluye <span className="holographic-text">FoodSystem?</span>
          </h3>
          <p className="text-[var(--text-muted)] text-lg">
            Cada módulo resuelve un problema real, sin salir de la plataforma.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={
                feature.title === "Panel de administración" ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
              }
            >
              <HolographicCard className="h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/20 flex items-center justify-center mb-6 border border-[var(--glow-blue)]/30">
                    <feature.icon className="w-7 h-7 text-[var(--glow-cyan)]" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                  <p className="text-[var(--text-muted)] mb-4">{feature.description}</p>

                  {feature.tags && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {feature.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-[var(--glow-blue)]/10 border border-[var(--glow-blue)]/20 text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {feature.highlight && (
                    <p className="mt-4 text-sm font-medium text-[var(--glow-cyan)]">{feature.highlight}</p>
                  )}
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

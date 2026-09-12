"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Distribuidora Maraio",
    role: "Ecommerce - Distribución mayorista",
    content:
      "Desde que lanzamos la web con OpusWebs recibimos consultas de nuevos clientes mayoristas todas las semanas. La plataforma es intuitiva y nuestros clientes pueden hacer pedidos las 24hs.",
  },
  {
    name: "Don Gregorio Automotores",
    role: "Automotores - Concesionaria",
    content:
      "La web que nos diseñaron transmite la confianza que buscábamos. Los clientes llegan mucho más informados y las ventas se cierran más rápido desde que la tenemos.",
  },
  {
    name: "Dra. Nathercia Lima",
    role: "Profesional - Medicina Estética",
    content:
      "Mi web refleja exactamente el nivel de profesionalismo y exclusividad que mis pacientes esperan. Las consultas por tratamientos premium aumentaron notablemente.",
  },
  {
    name: "Cordaro Inmobiliaria",
    role: "Inmobiliaria - Propiedades premium",
    content:
      "Nuestras propiedades ahora se presentan como merecen. Los compradores nos contactan ya interesados, con la decisión mucho más avanzada.",
  },
  {
    name: "Mansion Gym",
    role: "Fitness - Gimnasio",
    content:
      "La web captura la energía de nuestro gimnasio. Las inscripciones online se simplificaron y los clientes llegan motivados antes de cruzar la puerta.",
  },
  {
    name: "Matías Ricardes",
    role: "Artista - Portfolio creativo",
    content:
      "Por fin tengo un espacio digital que representa mi arte. Las galerías y coleccionistas me toman más en serio desde que lo tengo.",
  },
  {
    name: "Nautiky Road",
    role: "Náutica - Embarcaciones",
    content:
      "El sitio transmite la exclusividad que nuestros clientes buscan. Las consultas por embarcaciones de alta gama aumentaron de forma notoria.",
  },
  {
    name: "Nico Mármoles",
    role: "Construcción - Mármoles y piedras",
    content:
      "Nuestra web ahora muestra nuestros trabajos como merecen. Arquitectos y diseñadores nos contactan directamente para proyectos de alto nivel.",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            Testimonios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4">
            Lo que dicen quienes trabajaron con nosotros.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl p-8 md:p-12 card-light">
            <Quote className="w-10 h-10 mb-6" style={{ color: "var(--accent)" }} />

            <p className="text-xl md:text-2xl text-[var(--ink)] mb-8 leading-relaxed">
              {testimonials[current].content}
            </p>

            <div>
              <div className="font-display font-semibold text-[var(--ink)] text-lg">{testimonials[current].name}</div>
              <div className="text-sm" style={{ color: "var(--accent)" }}>
                {testimonials[current].role}
              </div>
            </div>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-[var(--border-light)]">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Ver testimonio ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      index === current ? "w-6" : "w-1.5 bg-[var(--gray-200)]"
                    }`}
                    style={index === current ? { background: "var(--accent)" } : undefined}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Testimonio anterior"
                  className="w-10 h-10 rounded-full border border-[var(--border-light-strong)] flex items-center justify-center text-[var(--ink)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Siguiente testimonio"
                  className="w-10 h-10 rounded-full border border-[var(--border-light-strong)] flex items-center justify-center text-[var(--ink)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)] transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

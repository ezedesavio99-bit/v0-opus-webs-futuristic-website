"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { Button } from "./ui-premium/button"

const faqs = [
  {
    question: "¿OpusWebs trabaja con cualquier rubro?",
    answer:
      "Sí. Diseñamos sitios web para empresas, negocios locales, profesionales, marcas personales, emprendedores y proyectos digitales de todo tipo.\nCada web se adapta al rubro, al público y al objetivo específico de cada cliente.",
  },
  {
    question: "¿Las páginas son plantillas o diseños personalizados?",
    answer:
      "No usamos plantillas genéricas.\nCada OpusWeb se diseña desde cero, con una estructura, estética y experiencia alineadas a tu marca y a lo que querés lograr con tu web.",
  },
  {
    question: "¿Cuánto tiempo tarda el desarrollo de una web?",
    answer:
      "Depende del tipo de proyecto, pero en promedio:\n\nWebs institucionales: 7 a 14 días\nLanding pages: 5 a 7 días\nProyectos más complejos: tiempos a definir\n\nSiempre priorizamos calidad, performance y detalle.",
  },
  {
    question: "¿Mi web va a funcionar bien en celulares?",
    answer:
      "Sí. Todas las webs se diseñan con enfoque mobile first, adaptándose perfectamente a celulares, tablets y computadoras, sin perder estética ni funcionalidad.",
  },
  {
    question: "¿Incluye posicionamiento en Google (SEO)?",
    answer:
      "Sí. Todas las webs incluyen una optimización SEO base:\nestructura correcta, velocidad de carga, textos optimizados y buenas prácticas para facilitar el posicionamiento en buscadores.",
  },
  {
    question: "¿Después puedo escalar mi web o agregar nuevas funciones?",
    answer:
      "Totalmente.\nLas webs de OpusWebs están pensadas para crecer: se pueden agregar secciones, tiendas online, automatizaciones, integraciones con CRM, formularios avanzados o soluciones con IA.",
  },
  {
    question: "¿Necesito tener dominio y hosting?",
    answer:
      "Podés usar uno propio o podemos ayudarte a gestionarlo.\nTe asesoramos para elegir la mejor opción según tu proyecto y acompañarte en todo el proceso.",
  },
  {
    question: "¿Qué pasa después de que la web se publica?",
    answer:
      "No te dejamos solo.\nPodés contar con mantenimiento, soporte y acompañamiento para mantener tu sitio actualizado, seguro y funcionando al máximo nivel.",
  },
  {
    question: "¿Cómo empiezo?",
    answer:
      "Muy simple.\nCompletás el formulario de contacto, nos contás tu idea y tu rubro, y a partir de ahí te proponemos la mejor solución para tu proyecto.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="relative py-24 md:py-32 bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mt-4 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Resolvemos las dudas más comunes antes de dar el salto a una web profesional.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "card-light" : "bg-white border border-[var(--border-light)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-[var(--ink)] font-medium pr-4 text-base md:text-lg">{faq.question}</span>
                  <div className="flex-shrink-0 w-6 h-6 relative">
                    {isOpen ? (
                      <Minus className="w-5 h-5" style={{ color: "var(--accent)" }} />
                    ) : (
                      <Plus className="w-5 h-5 text-[var(--gray-400)]" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="h-px w-full bg-[var(--border-light)] mb-4" />
                    <p className="text-[var(--text-muted)] leading-relaxed whitespace-pre-line text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--text-muted)] text-lg mb-6">¿Seguís con dudas? Hablemos y lo vemos juntos.</p>
          <MagneticButton>
            <Button href="/#contacto" size="lg">
              Quiero mi web profesional
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}

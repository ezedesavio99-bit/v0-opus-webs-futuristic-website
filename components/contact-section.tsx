"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MagneticButton } from "./magnetic-button"
import { Button } from "./ui-premium/button"
import { Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rubro: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/consulta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          rubro: formData.rubro,
          mensaje: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar la consulta")
      }

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        rubro: "",
        message: "",
      })

      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Error al enviar la consulta")

      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white border border-[var(--border-light-strong)] text-[var(--ink)] placeholder-[var(--gray-400)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/15 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"

  return (
    <section id="contacto" ref={ref} className="relative py-24 md:py-32 bg-[var(--surface)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[var(--ink)] mb-4">
            Contanos tu rubro y tu idea.
            <br />
            Nosotros la convertimos en presencia digital.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="rounded-2xl p-8 card-light">
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-700 text-sm font-medium">
                  Consulta enviada correctamente, te contactaremos a la brevedad
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
              </motion.div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className={inputClasses}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className={inputClasses}
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Rubro / Industria</label>
                <input
                  type="text"
                  value={formData.rubro}
                  onChange={(e) => setFormData({ ...formData, rubro: e.target.value })}
                  disabled={isSubmitting}
                  className={inputClasses}
                  placeholder="Ej: Inmobiliaria, Gimnasio, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">¿Qué tenés en mente?</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Contanos brevemente tu idea..."
                />
              </div>
              <MagneticButton>
                <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Enviando..." : "Enviar consulta"}
                </Button>
              </MagneticButton>
            </div>
          </form>
        </motion.div>
      </div>

      <a
        href="https://wa.me/TUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
        aria-label="Escribinos por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  )
}

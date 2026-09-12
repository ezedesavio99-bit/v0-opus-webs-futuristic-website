"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import type React from "react"
import { HolographicCard } from "./holographic-card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const filters = [
  "Todos",
  "Ecommerce",
  "Automotores",
  "Profesionales",
  "Negocios",
  "Fitness",
  "Inmobiliaria",
  "Artistas",
  "Construcción",
  "Náutica",
  "Turismo",
  "Gastronomía",
  "Servicios",
]

export const projects = [
  // Dominios propios (.com, .com.ar, etc) - Primero
  {
    title: "Grupo AG",
    rubro: "Construcción",
    url: "https://www.somosgrupoag.com/",
    tags: ["Acero", "Construcción"],
    image: "/images/grupo-ag.png",
  },
  {
    title: "DP Soluciones Gráficas",
    rubro: "Servicios",
    url: "https://www.dpsolucionesgraficas.com/",
    tags: ["Diseño", "Imprenta"],
    image: "/images/dp-soluciones.png",
  },
  {
    title: "Dellepiane Obras de Arte",
    rubro: "Artistas",
    url: "https://www.dellepianeobrasdearte.com/",
    tags: ["Arte", "Premium"],
    image: "/images/dellepiane.png",
  },
  {
    title: "Mito y Yamile",
    rubro: "Negocios",
    url: "https://www.distribuidoramitoyamile.com/",
    tags: ["Juguetería", "Mayorista"],
    image: "/images/mito-yamile.png",
  },
  {
    title: "El Cencerro Automotores",
    rubro: "Automotores",
    url: "https://elcencerroautomotores.com/",
    tags: ["Automotores", "Premium"],
    image: "/images/cencerro.png",
  },
  {
    title: "Abad Automotores",
    rubro: "Automotores",
    url: "https://www.abadautomotores.com/",
    tags: ["Automotores", "Premium"],
    image: "/images/abad-new.png",
  },
  {
    title: "Matías Ricardes",
    rubro: "Artistas",
    url: "https://www.matiasricardes.com/",
    tags: ["Artista", "Branding"],
    image: "/images/matias-20ricardes.png",
  },
  {
    title: "Teoruz",
    rubro: "Artistas",
    url: "https://teoruz.com/",
    tags: ["Artista", "Diseño"],
    image: "/images/teo-20ruz.png",
  },
  {
    title: "Cordaro Inmobiliaria",
    rubro: "Inmobiliaria",
    url: "https://cordaroinmobiliaria.com/",
    tags: ["Inmobiliaria", "Premium"],
    image: "/images/cordaro.png",
  },
  {
    title: "Distribuidora Maraio",
    rubro: "Ecommerce",
    url: "https://distribuidoramaraio.com.ar/",
    tags: ["Ecommerce", "Conversión"],
    image: "/images/maraio.png",
  },
  {
    title: "Oratoria - El Arte de Conectar",
    rubro: "Profesionales",
    url: "https://www.oratoriaelartedeconectar.com/",
    tags: ["Coaching", "Capacitaciones"],
    image: "/images/oratoria.png",
  },

  // Sitios en desarrollo (.vercel.app y otros)
  {
    title: "SIC Soluciones Integrales",
    rubro: "Construcción",
    url: "https://v0-construction-company-website-two-dun.vercel.app/",
    tags: ["Construcción", "Premium"],
    image: "/images/sic-soluciones.png",
  },
  {
    title: "VN iPhone's",
    rubro: "Ecommerce",
    url: "https://vniphone.vercel.app/",
    tags: ["Ecommerce", "Premium"],
    image: "/images/vn-iphone.png",
  },
  {
    title: "Totore Pizzas",
    rubro: "Gastronomía",
    url: "https://totorepizzas.vercel.app/",
    tags: ["Pizzería", "Delivery"],
    image: "/images/totore-pizzas.png",
  },
  {
    title: "Namaka",
    rubro: "Gastronomía",
    url: "https://namakabolws.vercel.app/",
    tags: ["Sushi", "Delivery"],
    image: "/images/namaka.png",
  },
  {
    title: "Crumbs",
    rubro: "Gastronomía",
    url: "https://crumbsres.vercel.app/",
    tags: ["Café", "Restaurante"],
    image: "/images/crumbs.png",
  },
  {
    title: "Malal Viajes y Turismo",
    rubro: "Turismo",
    url: "https://v0-malal-viajes-website.vercel.app/",
    tags: ["Turismo", "Premium"],
    image: "/images/malal-viajes.png",
  },

  {
    title: "Tatín Parrilla",
    rubro: "Gastronomía",
    url: "https://v0-tatin-parrilla-website.vercel.app/",
    tags: ["Restaurante", "Diseño"],
    image: "/images/tatin-parrilla.png",
  },

  {
    title: "Piscinas Díaz",
    rubro: "Servicios",
    url: "https://v0.app/chat/piscinas-diaz-website-vNGIYfohYxD",
    tags: ["Construcción", "Premium"],
    image: "/images/piscinas-diaz.png",
  },

  {
    title: "Rodolfo Villani Joyas",
    rubro: "Negocios",
    url: "https://v0-rodolfo-villani-joyas.vercel.app/",
    tags: ["Joyería", "Premium"],
    image: "/images/rodolfo-villani.png",
  },
  {
    title: "Hidrosiembra",
    rubro: "Negocios",
    url: "https://v0-hidrosiembra-website-design.vercel.app/",
    tags: ["Agro", "UX"],
    image: "/images/hidrosiembra.png",
  },

  {
    title: "Don Gregorio Automotores",
    rubro: "Automotores",
    url: "https://v0-don-gregorio-automotores-website.vercel.app/",
    tags: ["Automotores", "Conversión"],
    image: "/images/don-20gregorio.png",
  },
  {
    title: "Mis Buses SRL",
    rubro: "Automotores",
    url: "https://v0-mis-buses-srl-website.vercel.app/",
    tags: ["Automotores", "UX"],
    image: "/images/mis-buses.png",
  },
  {
    title: "Red Cars",
    rubro: "Automotores",
    url: "https://v0-red-cars-website.vercel.app/",
    tags: ["Automotores", "Diseño"],
    image: "/images/redcars.png",
  },
  {
    title: "RM Automotores",
    rubro: "Automotores",
    url: "https://v0-rmautomotores.vercel.app/",
    tags: ["Automotores", "Branding"],
    image: "/images/rm-automotores.png",
  },

  {
    title: "Dra. Nathercia Lima",
    rubro: "Profesionales",
    url: "https://v0-dranathercialima.vercel.app/",
    tags: ["Estética", "Premium"],
    image: "/images/dra-20nahercia.png",
  },

  {
    title: "Astiz Inmobiliaria",
    rubro: "Inmobiliaria",
    url: "https://astizinmobiliaria.vercel.app/",
    tags: ["Inmobiliaria", "UX"],
    image: "/images/astiz.png",
  },

  {
    title: "Nautiky Road",
    rubro: "Náutica",
    url: "https://v0-nautikyroad.vercel.app/",
    tags: ["Náutica", "Premium"],
    image: "/images/nautika.png",
  },

  {
    title: "Nico Mármoles",
    rubro: "Construcción",
    url: "https://v0-nico-marmoles-website.vercel.app/",
    tags: ["Construcción", "Diseño"],
    image: "/images/nico-marmoles.png",
  },

  {
    title: "Kosher Winery",
    rubro: "Gastronomía",
    url: "https://kosherr-winery.vercel.app/",
    tags: ["Bodega", "Premium"],
    image: "/images/kosher-winery.png",
  },
  {
    title: "Ruth Delgado",
    rubro: "Artistas",
    url: "https://ruth-liart.vercel.app/",
    tags: ["Artista", "Galería"],
    image: "/images/ruth-delgado.png",
  },
  {
    title: "Estás Para Más",
    rubro: "Profesionales",
    url: "https://estasparamass.vercel.app/",
    tags: ["Evento", "Landing"],
    image: "/images/estas-para-mas.png",
  },
  {
    title: "ACI Synergy",
    rubro: "Servicios",
    url: "https://acisynergy.vercel.app/",
    tags: ["Consultora", "Calidad"],
    image: "/images/aci-synergy.png",
  },
  {
    title: "Brunis Catering",
    rubro: "Gastronomía",
    url: "https://brunis-blond.vercel.app/",
    tags: ["Catering", "Eventos"],
    image: "/images/brunis-catering.png",
  },
  {
    title: "Nahuel Coach",
    rubro: "Fitness",
    url: "https://nahuelcoach-ten.vercel.app/",
    tags: ["Fitness", "Coaching"],
    image: "/images/nahuel-coach.png",
  },
  {
    title: "Tacchino Propiedades",
    rubro: "Inmobiliaria",
    url: "https://tacchino-propiedades.vercel.app/",
    tags: ["Inmobiliaria", "Premium"],
    image: "/images/tacchino-propiedades.png",
  },
  {
    title: "Magui Sanchez Tattoo Studio",
    rubro: "Artistas",
    url: "https://v0-tattoo-studio-website-dusky.vercel.app/",
    tags: ["Tatuajes", "Diseño"],
    image: "/images/magui-sanchez-tattoo.png",
  },
]

const software = [
  {
    title: "Opus Prospect",
    description: "CRM Argentina - Gestión de ventas y prospección",
    url: "https://opus-crm-seven.vercel.app/",
    tags: ["CRM", "Ventas"],
    image: "/images/opus-crm.png",
  },
  {
    title: "VortexControl Phone",
    description: "Gestión para tiendas de celulares",
    url: "https://vortexcontrolphone.com/",
    tags: ["Tiendas", "Inventario"],
    image: "/images/vortex-phone.png",
  },
  {
    title: "100mxley",
    description: "Sistema de gestión logística y ecommerce",
    url: "https://100mxley.com/dashboard",
    tags: ["Logística", "Ecommerce"],
    image: "/images/100mxley.png",
  },
  {
    title: "FlexControl",
    description: "Gestión inteligente de entregas Flex",
    url: "https://flexml.vercel.app/login",
    tags: ["Logística", "Entregas"],
    image: "/images/flexcontrol.png",
  },
]

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState("Todos")

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "Todos") return true
    return project.rubro === selectedFilter
  })

  return (
    <section className="relative py-24 px-4 md:px-8 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        {/* SOFTWARE & SISTEMAS - PRIMERO */}
        <FadeIn className="mb-20 pb-16 border-b border-[var(--border-light)]">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Software & Sistemas
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--ink)] mb-4">
            Soluciones Personalizadas
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mb-10">
            Desarrollamos software y sistemas a medida para automatizar y optimizar procesos complejos. Precio a
            consultar según complejidad.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {software.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.08}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <HolographicCard className="group cursor-pointer h-full">
                    <div className="relative aspect-video overflow-hidden bg-[var(--gray-100)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[var(--ink)]/40">
                        <div className="px-5 py-2 rounded-full bg-white/95 text-[var(--ink)] text-sm font-medium flex items-center gap-2">
                          Ver más <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-base font-semibold text-[var(--ink)] mb-1">{item.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-xs border"
                            style={{ background: "var(--accent-soft)", color: "var(--accent-hover)", borderColor: "transparent" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HolographicCard>
                </a>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* PORTFOLIO WEBS - SEGUNDO */}
        <FadeIn className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Portfolio
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[var(--ink)] mb-4">Sitios Web Realizados</h2>
          <p className="text-[var(--text-muted)] max-w-2xl">
            Webs premium, tiendas online y soluciones digitales que transforman negocios. Cada proyecto diseñado para
            convertir visitantes en clientes.
          </p>
        </FadeIn>

        {/* Filtros */}
        <FadeIn delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedFilter === filter
                    ? "text-white border-transparent"
                    : "bg-white text-[var(--text-muted)] border-[var(--border-light-strong)] hover:border-[var(--accent)]/40 hover:text-[var(--ink)]"
                }`}
                style={selectedFilter === filter ? { background: "var(--accent)" } : undefined}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid editorial: alternamos tiles grandes y medianos para dar ritmo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filteredProjects.map((project, index) => {
            const isLarge = index % 6 === 0
            return (
              <FadeIn key={project.title} delay={index * 0.03} className={isLarge ? "lg:col-span-2" : ""}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <HolographicCard className="group cursor-pointer h-full">
                    <div className={`relative overflow-hidden bg-[var(--gray-100)] ${isLarge ? "aspect-[21/10]" : "aspect-video"}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                        <p className="text-[11px] uppercase tracking-wider text-white/70 mb-1">{project.rubro}</p>
                        <div className="flex items-center gap-2 text-white font-medium">
                          Ver sitio <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-base font-semibold text-[var(--ink)] mb-3">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full text-xs"
                            style={{ background: "var(--accent-soft)", color: "var(--accent-hover)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HolographicCard>
                </a>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

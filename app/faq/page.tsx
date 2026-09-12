import { PremiumBackground } from "@/components/premium-background"
import { Header } from "@/components/header"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Preguntas Frecuentes | OpusWebs",
  description: "Resolvemos las dudas más comunes antes de dar el salto a una web profesional.",
}

export default function FAQPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      <Header />
      <div className="pt-32">
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}

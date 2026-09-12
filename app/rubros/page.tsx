import { PremiumBackground } from "@/components/premium-background"
import { Header } from "@/components/header"
import { RubrosSection } from "@/components/rubros-section"
import { LiveUISection } from "@/components/live-ui-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Rubros",
  description: "Diseñamos sitios web para concesionarias, inmobiliarias, gimnasios, profesionales y todo tipo de negocios.",
}

export default function RubrosPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      <Header />
      <div className="pt-32">
        <RubrosSection />
        <LiveUISection />
        <CTASection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

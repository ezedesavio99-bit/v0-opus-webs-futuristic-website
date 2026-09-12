import { PremiumBackground } from "@/components/premium-background"
import { Header } from "@/components/header"
import { ProcessSection } from "@/components/process-section"
import { Grid3DSection } from "@/components/grid-3d-section"
import { ProModeSection } from "@/components/pro-mode-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Proceso",
  description: "Cómo trabajamos: del análisis inicial al lanzamiento y soporte continuo de tu sitio web.",
}

export default function ProcesoPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      <Header />
      <div className="pt-32">
        <ProcessSection />
        <Grid3DSection />
        <ProModeSection />
        <CTASection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

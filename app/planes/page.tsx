import { PremiumBackground } from "@/components/premium-background"
import { Header } from "@/components/header"
import { PlansSection } from "@/components/plans-section"
import { StatementSection } from "@/components/statement-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Planes",
  description: "Planes Starter, Pro y Elite: elegí tu nivel de presencia digital y escalá cuando lo necesites.",
}

export default function PlanesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PremiumBackground />
      <Header />
      <div className="pt-32">
        <PlansSection />
        <StatementSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}

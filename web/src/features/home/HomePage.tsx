import { BestSellersSection } from "./components/BestSellersSection"
import { CategoriesSection } from "./components/CategoriesSection"
import { FeaturesStrip } from "./components/FeaturesStrip"
import { GiftCtaSection } from "./components/GiftCtaSection"
import { GrandmasSection } from "./components/GrandmasSection"
import { HeroSection } from "./components/HeroSection"
import { PromoBanners } from "./components/PromoBanners"
import { SeasonBoxesSection } from "./components/SeasonBoxesSection"

export function HomePage() {
  return (
    <div className="flex flex-col gap-10 py-10 md:gap-14 md:py-14">
      <HeroSection />
      <FeaturesStrip />
      <CategoriesSection />
      <BestSellersSection />
      <GiftCtaSection />
      <GrandmasSection />
      <SeasonBoxesSection />
      <PromoBanners />
    </div>
  )
}
import { Link } from "react-router-dom"
import { Rating } from "@/components/shared/Rating"
import { Button } from "@/components/ui/button"
import { ASSETS } from "@/lib/assets"
import { ROUTES } from "@/lib/routes"
import type { Grandma } from "../data"

type GrandmaCardProps = {
  grandma: Grandma
}

export function GrandmaCard({ grandma }: GrandmaCardProps) {
  const href = ROUTES.grandma(grandma.id)

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-brand-sand bg-white/60 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-brand-burgundy/30 hover:shadow-lg hover:shadow-brand-ink/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <img
        src={ASSETS.grandmaIcon}
        alt=""
        loading="lazy"
        className="mx-auto h-28 w-auto object-contain"
      />

      <h3 className="mt-4 text-lg font-bold text-brand-ink">
        <Link
          to={href}
          className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-brand-burgundy focus-visible:after:ring-inset"
        >
          {grandma.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-brand-ink/70">
        {grandma.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-brand-sand pt-3 text-sm">
        <Rating
          value={grandma.rating}
          starPosition="left"
          className="font-bold text-brand-burgundy"
        />
        <span className="text-brand-ink/70">{grandma.productsCount} منتج</span>
      </div>

      <Button
        asChild
        className="relative z-10 mt-4 h-10 w-full rounded-lg text-sm font-bold"
      >
        <Link to={href}>تعرف عليها</Link>
      </Button>
    </article>
  )
}
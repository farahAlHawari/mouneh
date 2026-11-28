import { Link } from "react-router-dom"
import { Rating } from "@/components/shared/Rating"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/lib/routes"
import { cn } from "@/lib/utils"
import type { Product, ProductAvailability } from "../data"

const AVAILABILITY: Record<
  ProductAvailability,
  { label: string; className: string }
> = {
  available: { label: "متوفر", className: "bg-brand-olive text-brand-cream" },
  preorder: { label: "طلب مسبق", className: "bg-brand-orange text-brand-cream" },
}

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const badge = AVAILABILITY[product.availability]

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-sand bg-white/60 transition-all duration-200 hover:-translate-y-1 hover:border-brand-burgundy/30 hover:shadow-lg hover:shadow-brand-ink/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-16/10 w-full object-cover"
        />
        <span
          className={cn(
            "absolute top-3 right-3 rounded-md px-2.5 py-1 text-xs font-bold",
            badge.className
          )}
        >
          {badge.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-brand-ink">
            <Link
              to={ROUTES.product(product.id)}
              className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-brand-burgundy focus-visible:after:ring-inset"
            >
              {product.name}
            </Link>
          </h3>
          <Rating
            value={product.rating}
            starPosition="right"
            className="text-sm text-brand-ink"
          />
        </div>

        <p className="text-sm text-brand-ink/70">
          من إيدين {product.grandmaName}
        </p>

        <div className="flex items-baseline justify-between border-t border-brand-sand pt-3">
          <span className="text-base font-bold text-brand-burgundy">
            {product.price}
          </span>
          <span className="text-xs text-brand-ink/60">{product.unit}</span>
        </div>

        <Button
          type="button"
          className="relative z-10 mt-auto h-10 w-full rounded-lg text-sm font-bold"
        >
          أضف إلى السلة
        </Button>
      </div>
    </article>
  )
}
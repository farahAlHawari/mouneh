import { Link } from "react-router-dom"
import { Rating } from "@/components/shared/Rating"
import { ASSETS } from "@/lib/assets"
import { ROUTES } from "@/lib/routes"
import type { SeasonBox } from "../data"

type BoxCardProps = {
  box: SeasonBox
}

export function BoxCard({ box }: BoxCardProps) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl bg-brand-sand/40 p-2 transition-all duration-200 hover:-translate-y-1 hover:bg-brand-sand/60 hover:shadow-lg hover:shadow-brand-ink/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <img
        src={ASSETS.boxes}
        alt={box.title}
        loading="lazy"
        className="aspect-3/2 w-full rounded-xl object-cover"
      />

      <div className="flex flex-1 flex-col gap-2 px-2 pt-3 pb-2">
        <div className="flex items-center justify-between gap-2">
          <ul className="flex flex-wrap items-center gap-1.5">
            {box.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-brand-sand px-3 py-1 text-xs text-brand-ink"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="text-sm font-bold text-brand-ink">{box.price}</span>
        </div>

        <h3 className="text-lg font-bold text-brand-burgundy">
          <Link
            to={ROUTES.box(box.id)}
            className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-brand-burgundy focus-visible:after:ring-inset"
          >
            {box.title}
          </Link>
        </h3>

        <div className="flex items-center gap-3 text-sm text-brand-ink">
          <span>{box.grandmaName}</span>
          <Rating value={box.rating} starPosition="right" />
        </div>

        <p className="text-xs leading-5 text-brand-ink/70">
          {box.description}
        </p>
      </div>
    </article>
  )
}
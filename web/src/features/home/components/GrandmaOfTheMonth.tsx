import { Link } from "react-router-dom"
import { Rating } from "@/components/shared/Rating"
import { Button } from "@/components/ui/button"
import { GRANDMA_OF_THE_MONTH } from "../data"

export function GrandmaOfTheMonth() {
    const grandma = GRANDMA_OF_THE_MONTH

    return (
        <article
        aria-labelledby="grandma-month-title"
        className="mt-8 flex flex-col items-center gap-8 rounded-3xl bg-brand-sand p-6 sm:flex-row sm:items-center sm:gap-10 sm:p-10"
        >
        <div className="flex shrink-0 flex-col items-center gap-3">
            <span className="rounded-md bg-brand-olive px-3 py-0.5 text-xs font-bold whitespace-nowrap text-brand-cream">
            جدة الشهر
            </span>
            <img
            src={grandma.image}
            alt="الجدة تقطّع الخضار في مطبخها"
            loading="lazy"
            className="size-40 rounded-full object-cover object-[50%_20%] md:size-44"
            />
        </div>

        <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4">
            <h3
                id="grandma-month-title"
                className="text-2xl font-bold text-brand-burgundy"
            >
                {grandma.name}
            </h3>
            <Rating
                value={grandma.rating}
                starPosition="left"
                className="font-bold text-brand-ink"
            />
            </div>

            <p className="mt-3 text-[15px] leading-8 text-brand-ink/85">
            {grandma.story}
            </p>

            <Button asChild className="mt-6 h-10 rounded-lg px-6 text-sm font-bold">
            <Link to={grandma.href}>تعرف عليها</Link>
            </Button>
        </div>
        </article>
    )
}
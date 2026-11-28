import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import type { CategoryItem } from "../data"

type CategoryCardProps = {
    category: CategoryItem
}

export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link
        to={category.href}
        className={cn(
            "group flex h-full items-center justify-between gap-4 rounded-3xl px-7 py-7 transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-brand-burgundy/30 focus-visible:outline-none",
            category.className
        )}
        >
        <div>
            <h3 className="text-3xl font-normal">{category.title}</h3>
            <p className="mt-2 max-w-xs text-base leading-7 font-light opacity-95">
            {category.description}
            </p>
        </div>

        <span
            aria-hidden="true"
            className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-sand transition-transform duration-200 group-hover:-translate-x-1",
            category.arrowClassName
            )}
        >
            <ArrowLeft className="size-5" />
        </span>
        </Link>
    )
}
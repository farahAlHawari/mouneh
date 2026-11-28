import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

type RatingProps = {
    value: number
    starPosition?: "left" | "right"
    className?: string
}

export function Rating({
    value,
    starPosition = "left",
    className,
    }: RatingProps) {
    const star = (
        <Star
        aria-hidden="true"
        className="size-3.5 fill-brand-orange text-brand-orange"
        />
    )

    return (
        <span
        role="img"
        aria-label={`التقييم ${value.toFixed(1)} من 5`}
        className={cn("inline-flex items-center gap-1", className)}
        >
        {/* في RTL: أول عنصر في الـ DOM يظهر على اليمين */}
        {starPosition === "right" && star}
        <span>{value.toFixed(1)}</span>
        {starPosition === "left" && star}
        </span>
    )
}
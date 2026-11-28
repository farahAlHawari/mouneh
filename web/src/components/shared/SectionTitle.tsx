import * as React from "react"
import { cn } from "@/lib/utils"

export function SectionTitle({
    className,
    ...props
    }: React.ComponentProps<"h2">) {
    return (
        <h2
        className={cn(
            "text-2xl font-normal text-brand-ink md:text-[28px]",
            className
        )}
        {...props}
        />
    )
}
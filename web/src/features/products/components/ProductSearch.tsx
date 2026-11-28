import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type ProductSearchProps = {
    value: string
    onChange: (value: string) => void
}

export function ProductSearch({ value, onChange }: ProductSearchProps) {
    return (
        <form
        role="search"
        onSubmit={(event) => event.preventDefault()}
        className="mx-auto flex w-full max-w-md items-center gap-2 rounded-xl border border-brand-sand bg-white p-1 focus-within:ring-2 focus-within:ring-brand-burgundy/30"
        >
        <Input
            type="search"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="دوّر عن منتج أو اسم تيتة..."
            aria-label="بحث عن منتج أو اسم تيتة"
            className="h-9 border-0 bg-transparent shadow-none focus-visible:border-transparent focus-visible:ring-0 dark:bg-transparent"
        />
        <Button
            type="submit"
            size="icon"
            aria-label="بحث"
            className="size-9 shrink-0 rounded-lg"
        >
            <Search className="size-4" />
        </Button>
        </form>
    )
}
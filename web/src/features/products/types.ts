import type {
    ProductAvailability,
    ProductCardData,
} from "@/components/shared/ProductCard"

export type { ProductAvailability }

export type ProductCategory = "cooked" | "mouneh" | "boxes"
export type CategoryFilter = ProductCategory | "all"

export type Option<T extends string = string> = {
    id: T
    label: string
}

export type CatalogProduct = ProductCardData & {
    category: ProductCategory
    grandmaId: string
    seasonId?: string
}

export type FiltersState = {
    category: CategoryFilter
    grandmaId: string
    seasonId: string
    availability: ProductAvailability[]
}
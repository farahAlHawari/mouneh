import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { CATEGORY_OPTIONS, PRODUCTS } from "./data"
import type { CatalogProduct, CategoryFilter, FiltersState } from "./types"

const DEFAULT_FILTERS: FiltersState = {
  category: "all",
  grandmaId: "all",
  seasonId: "all",
  availability: [],
}

function readCategory(value: string | null): CategoryFilter {
  return CATEGORY_OPTIONS.find((option) => option.id === value)?.id ?? "all"
}

function matches(
  product: CatalogProduct,
  filters: FiltersState,
  query: string
): boolean {
  const q = query.trim()
  if (q && !product.name.includes(q) && !product.grandmaName.includes(q)) {
    return false
  }
  if (filters.category !== "all" && product.category !== filters.category) {
    return false
  }
  if (filters.grandmaId !== "all" && product.grandmaId !== filters.grandmaId) {
    return false
  }
  if (filters.seasonId !== "all" && product.seasonId !== filters.seasonId) {
    return false
  }
  if (
    filters.availability.length > 0 &&
    !filters.availability.includes(product.availability)
  ) {
    return false
  }
  return true
}

export function useProductFilters() {
  const [searchParams] = useSearchParams()

  // التصنيف الأولي من الرابط: /products?category=cooked
  const [initial] = useState<FiltersState>(() => ({
    ...DEFAULT_FILTERS,
    category: readCategory(searchParams.get("category")),
  }))

  // draft = ما يختاره المستخدم في الشريط الجانبي، applied = ما طُبّق فعلياً
  const [draft, setDraft] = useState<FiltersState>(initial)
  const [applied, setApplied] = useState<FiltersState>(initial)
  const [query, setQuery] = useState("")

  const products = useMemo(
    () => PRODUCTS.filter((product) => matches(product, applied, query)),
    [applied, query]
  )

  const updateDraft = (patch: Partial<FiltersState>) =>
    setDraft((prev) => ({ ...prev, ...patch }))

  const apply = () => setApplied(draft)

  const reset = () => {
    setDraft(DEFAULT_FILTERS)
    setApplied(DEFAULT_FILTERS)
    setQuery("")
  }

  return { draft, query, setQuery, products, updateDraft, apply, reset }
}
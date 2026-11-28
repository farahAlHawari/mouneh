import { Container } from "@/components/shared/Container"
import { ProductCard } from "@/components/shared/ProductCard"
import { ProductFilters } from "./components/ProductFilters"
import { ProductSearch } from "./components/ProductSearch"
import { ProductsBanner } from "./components/ProductsBanner"
import { useProductFilters } from "./useProductFilters"

export function ProductsPage() {
    const { draft, query, setQuery, products, updateDraft, apply, reset } =
        useProductFilters()

    return (
        <Container className="flex flex-col gap-6 py-8 md:py-10">
        <ProductsBanner />
        <ProductSearch value={query} onChange={setQuery} />

        {/* في RTL: الفلاتر (أول عنصر) على اليمين والمنتجات على اليسار */}
        <div className="grid items-start gap-6 lg:grid-cols-[280px_1fr]">
            <ProductFilters
            value={draft}
            onChange={updateDraft}
            onApply={apply}
            onReset={reset}
            />

            <section aria-label="قائمة المنتجات">
            <p role="status" className="sr-only">
                {products.length} منتج
            </p>

            {products.length === 0 ? (
                <p className="rounded-2xl border border-brand-sand bg-white/60 p-10 text-center text-brand-ink/70">
                ما لقينا منتجات مطابقة. جرّب تغيّر البحث أو الفلاتر.
                </p>
            ) : (
                <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                    <li key={product.id}>
                    <ProductCard product={product} />
                    </li>
                ))}
                </ul>
            )}
            </section>
        </div>
        </Container>
    )
}
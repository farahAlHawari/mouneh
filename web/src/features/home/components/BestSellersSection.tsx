import { Container } from "@/components/shared/Container"
import { ProductCard } from "@/components/shared/ProductCard"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { BEST_SELLERS } from "../data"

export function BestSellersSection() {
    return (
        <section aria-labelledby="best-sellers-title">
        <Container>
            <SectionTitle id="best-sellers-title">
            الأكثر طلباً من عند التيتة
            </SectionTitle>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BEST_SELLERS.map((product) => (
                <li key={product.id}>
                <ProductCard product={product} />
                </li>
            ))}
            </ul>
        </Container>
        </section>
    )
}
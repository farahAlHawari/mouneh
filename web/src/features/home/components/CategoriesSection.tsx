import { Container } from "@/components/shared/Container"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { CATEGORIES } from "../data"
import { CategoryCard } from "./CategoryCard"

export function CategoriesSection() {
    return (
        <section aria-labelledby="categories-title">
        <Container>
            {/* text-left = يسار الشاشة فعلياً (حتى مع RTL) */}
            <SectionTitle id="categories-title" className="text-right">
            شو عبالك من إيدين التيتة
            </SectionTitle>

            <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((category) => (
                <li key={category.id}>
                <CategoryCard category={category} />
                </li>
            ))}
            </ul>
        </Container>
        </section>
    )
}
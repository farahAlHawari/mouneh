import { Container } from "@/components/shared/Container"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { GRANDMAS } from "../data"
import { GrandmaCard } from "./GrandmaCard"
import { GrandmaOfTheMonth } from "./GrandmaOfTheMonth"

export function GrandmasSection() {
    return (
        <section aria-labelledby="grandmas-title">
        <Container>
            <SectionTitle id="grandmas-title">جدّاتنا</SectionTitle>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GRANDMAS.map((grandma) => (
                <li key={grandma.id}>
                <GrandmaCard grandma={grandma} />
                </li>
            ))}
            </ul>

            <GrandmaOfTheMonth />
        </Container>
        </section>
    )
}
import { Container } from "@/components/shared/Container"
import { SectionTitle } from "@/components/shared/SectionTitle"
import { SEASON_BOXES } from "../data"
import { BoxCard } from "./BoxCard"

export function SeasonBoxesSection() {
    return (
        <section aria-labelledby="season-boxes-title">
        <Container>
            <SectionTitle
            id="season-boxes-title"
            className="text-brand-burgundy"
            >
            صناديق الموسم
            </SectionTitle>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEASON_BOXES.map((box) => (
                <li key={box.id}>
                <BoxCard box={box} />
                </li>
            ))}
            </ul>
        </Container>
        </section>
    )
}
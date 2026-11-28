import { Container } from "@/components/shared/Container"
import { ASSETS } from "@/lib/assets"
import { FEATURES } from "../data"

export function FeaturesStrip() {
    return (
        <section aria-label="مميزات مونة" className="bg-brand-sand py-8">
        <Container>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
                <li key={feature.id} className="flex items-center gap-3">
                <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                    <img
                    src={ASSETS.grandmaIcon}
                    alt=""
                    loading="lazy"
                    className="size-full object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-[15px] leading-6 font-bold text-brand-ink">
                    {feature.title}
                    </h3>
                    <p className="text-sm leading-6 text-brand-ink/75">
                    {feature.description}
                    </p>
                </div>
                </li>
            ))}
            </ul>
        </Container>
        </section>
    )
}
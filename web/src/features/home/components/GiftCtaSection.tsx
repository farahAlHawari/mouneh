import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { ASSETS } from "@/lib/assets"
import { GIFT_CTA } from "../data"

export function GiftCtaSection() {
    return (
        <section
        aria-labelledby="gift-cta-title"
        className="bg-brand-olive text-brand-cream"
        >
        {/* في RTL: النص يمين والرسمة يسار */}
        <Container className="flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between md:gap-16">
            <div className="md:max-w-xl">
            <h2
                id="gift-cta-title"
                className="text-2xl font-bold md:text-3xl"
            >
                {GIFT_CTA.title}
            </h2>
            <p className="mt-4 text-[15px] leading-7">{GIFT_CTA.description}</p>
            <Button
                asChild
                className="mt-6 h-11 rounded-full bg-white px-6 text-brand-ink hover:bg-white/90"
            >
                <Link to={GIFT_CTA.href}>{GIFT_CTA.buttonLabel}</Link>
            </Button>
            </div>

            <img
            src={ASSETS.grandmaIcon}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-40 w-auto object-contain md:h-52"
            />
        </Container>
        </section>
    )
}
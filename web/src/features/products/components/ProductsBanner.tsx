import { ASSETS } from "@/lib/assets"

export function ProductsBanner() {
    return (
        <section
        aria-labelledby="products-title"
        className="overflow-hidden rounded-2xl bg-brand-sand"
        >
        <div className="grid items-stretch md:min-h-44 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-2 p-6 md:p-10">
            <h1
                id="products-title"
                className="text-2xl font-bold text-brand-ink md:text-3xl"
            >
                من خيرات <span className="text-brand-olive">إيدين</span> التيتة
            </h1>
            <p className="text-sm leading-6 text-brand-ink/75">
                تصفح أطيب الطبخات والمونة البيتية، محضّرة بحب وعلى أصول الشام.
            </p>
            </div>

            <img
            src={ASSETS.bannerShamiMouneh}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="order-first h-40 w-full object-cover md:order-0 md:h-full"
            />
        </div>
        </section>
    )
}
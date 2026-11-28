import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { ASSETS } from "@/lib/assets"
import { EVENTS_BANNER, SHIPPING_BANNER } from "../data"

function ShippingBanner() {
  return (
    <article
      aria-labelledby="shipping-banner-title"
      className="flex flex-col items-center gap-6 rounded-2xl bg-brand-burgundy p-6 text-brand-cream sm:flex-row sm:justify-between sm:p-8"
    >
      <div>
        <span className="inline-block rounded-md bg-brand-orange px-2.5 py-1 text-[11px] font-bold text-brand-cream">
          {SHIPPING_BANNER.badge}
        </span>
        <h3
          id="shipping-banner-title"
          className="mt-3 text-2xl font-bold"
        >
          {SHIPPING_BANNER.title}
        </h3>
        <p className="mt-2 text-sm leading-6 opacity-90">
          {SHIPPING_BANNER.description}
        </p>
        <Button
          asChild
          className="mt-5 h-10 rounded-lg bg-white px-5 text-sm font-bold text-brand-ink hover:bg-white/90"
        >
          <Link to={SHIPPING_BANNER.href}>{SHIPPING_BANNER.buttonLabel}</Link>
        </Button>
      </div>

      {/* خريطة الشحن: النقاط داخل دائرة، والمسارات والمدن فوقها بدون قص */}
      <div
        aria-hidden="true"
        className="relative aspect-square w-40 shrink-0 sm:w-48"
      >
        <div className="absolute inset-0 overflow-hidden rounded-full bg-white/10">
          <img
            src={ASSETS.shippingDots}
            alt=""
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <img
          src={ASSETS.shippingRoutes}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-contain"
        />
      </div>
    </article>
  )
}

function EventsBanner() {
    return (
        <article
        aria-labelledby="events-banner-title"
        className="flex flex-col items-center gap-6 rounded-2xl border border-brand-burgundy bg-white/50 p-6 text-brand-ink sm:flex-row sm:justify-between sm:p-8"
        >
        <div>
            <span className="inline-block rounded-md bg-brand-orange px-2.5 py-1 text-[11px] font-bold text-brand-cream">
            {EVENTS_BANNER.badge}
            </span>
            <h3
            id="events-banner-title"
            className="mt-3 text-2xl font-bold text-brand-burgundy"
            >
            {EVENTS_BANNER.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-brand-ink/80">
            {EVENTS_BANNER.description}
            </p>
            <Button asChild className="mt-5 h-10 rounded-lg px-5 text-sm font-bold">
            <Link to={EVENTS_BANNER.href}>{EVENTS_BANNER.buttonLabel}</Link>
            </Button>
        </div>

        <img
            src={ASSETS.hospitalityTable}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-auto w-40 shrink-0 object-contain sm:w-44"
        />
        </article>
    )
}

export function PromoBanners() {
    return (
        <section aria-label="الشحن الخارجي والمناسبات">
        {/* في RTL: الشحن على اليمين والمناسبات على اليسار */}
        <Container className="grid gap-6 lg:grid-cols-2">
            <ShippingBanner />
            <EventsBanner />
        </Container>
        </section>
    )
}
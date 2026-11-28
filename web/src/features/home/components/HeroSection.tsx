import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { ASSETS } from "@/lib/assets"

export function HeroSection() {
    return (
        <section aria-labelledby="hero-title">
        <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-16">
            <div>
            <h1
                id="hero-title"
                className="text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.35] font-bold whitespace-nowrap text-brand-ink"
            >
                من إيد التيتة غير....
                <span className="block text-brand-olive">لسفرتك، وين ماكنت</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-8 font-normal text-brand-ink/80">
                لكل حدا اشتياق لريحة البيت، أو ما عاد عنده وقت يطبخ؛ جدّاتنا
                فتحولك مطابخهن. مونة موسمية وأكلات بيتية معمولة بإيدين بتعرف معنى
                البركة.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild className="h-11 rounded-lg px-5">
                <Link to="/products">
                    اطلب طبختك
                    <ArrowLeft />
                </Link>
                </Button>
                <Button
                asChild
                variant="outline"
                className="h-11 rounded-lg bg-white px-5 text-brand-ink"
                >
                <Link to="/grandmas">تعرف على جداتنا</Link>
                </Button>
            </div>
            </div>

            <img
            src={ASSETS.heroPantry}
            alt="خزانة مونة فيها برطمانات دبس ومكدوس ومخلل وزيت وزعتر ولبنة"
            width={547}
            height={456}
            fetchPriority="high"
            className="mx-auto h-auto w-full max-w-md rounded-2xl md:max-w-none"
            />
        </Container>
        </section>
    )
}
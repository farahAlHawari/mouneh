import { Link, NavLink } from "react-router-dom"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { ASSETS } from "@/lib/assets"
import { cn } from "@/lib/utils"
import { MobileNav } from "./MobileNav"
import { NAV_LINKS } from "./NavLinks"

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-brand-sand/70 bg-background/90 backdrop-blur">
        <Container className="flex h-18 items-center justify-between gap-4">
            <Link to="/" aria-label="مونة — الصفحة الرئيسية" className="shrink-0">
            <img src={ASSETS.logo} alt="مونة" className="h-11 w-auto" />
            </Link>

            <nav aria-label="التنقل الرئيسي" className="hidden md:block">
            <ul className="flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                <li key={link.to}>
                    <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                        cn(
                        "inline-block border-b-2 pb-1 text-[15px] font-medium transition-colors",
                        isActive
                            ? "border-brand-burgundy text-brand-burgundy"
                            : "border-transparent text-brand-ink hover:text-brand-burgundy"
                        )
                    }
                    >
                    {link.label}
                    </NavLink>
                </li>
                ))}
            </ul>
            </nav>

            <div className="flex items-center gap-3">
            <Button
                asChild
                className="hidden h-10 rounded-lg px-4 md:inline-flex"
            >
                <Link to="/products">
                اطلب طبختك
                <ArrowLeft />
                </Link>
            </Button>

            <Button
                asChild
                variant="secondary"
                size="icon"
                className="size-10 rounded-lg bg-brand-sand text-brand-ink hover:bg-brand-sand/70"
            >
                <Link to="/cart" aria-label="سلة التسوق">
                <ShoppingCart className="size-4.5" />
                </Link>
            </Button>

            <MobileNav />
            </div>
        </Container>
        </header>
    )
}
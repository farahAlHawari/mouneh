import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ArrowLeft, MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ASSETS } from "@/lib/assets"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "./NavLinks"

export function MobileNav() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-lg md:hidden"
            aria-label="فتح القائمة"
            >
            <MenuIcon className="size-5" />
            </Button>
        </SheetTrigger>

        <SheetContent
            side="right"
            showCloseButton={false}
            className="w-4/5 max-w-xs bg-background"
        >
            <SheetHeader className="flex-row items-center justify-between border-b p-4">
            <img src={ASSETS.logo} alt="مونة" className="h-9 w-auto" />
            <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
            <SheetDescription className="sr-only">
                روابط التنقل في الموقع
            </SheetDescription>
            <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="إغلاق القائمة">
                <XIcon className="size-5" />
                </Button>
            </SheetClose>
            </SheetHeader>

            <nav aria-label="قائمة الموبايل" className="px-4">
            <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                <li key={link.to}>
                    <NavLink
                    to={link.to}
                    end={link.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                        cn(
                        "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                        isActive
                            ? "bg-brand-sand text-brand-burgundy"
                            : "text-brand-ink hover:bg-brand-sand/60"
                        )
                    }
                    >
                    {link.label}
                    </NavLink>
                </li>
                ))}
            </ul>
            </nav>

            <div className="mt-auto p-4">
            <Button asChild className="h-11 w-full rounded-lg">
                <Link to="/products" onClick={() => setOpen(false)}>
                اطلب طبختك
                <ArrowLeft />
                </Link>
            </Button>
            </div>
        </SheetContent>
        </Sheet>
    )
}
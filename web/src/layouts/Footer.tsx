import { Link } from "react-router-dom"
import { BsInstagram } from "react-icons/bs"
import { CiFacebook } from "react-icons/ci"
import { Container } from "@/components/shared/Container"
import { ASSETS } from "@/lib/assets"
import { NAV_LINKS } from "./NavLinks"

const CONTACT_LINKS = [
    { to: "/contact", label: "اتصل بنا" },
    { to: "/contact", label: "البريد الالكتروني" },
    { to: "/faq", label: "الأسئلة الشائعة" },
] as const

const linkClass =
    "text-[15px] transition-opacity hover:underline hover:underline-offset-4"

    export function Footer() {
    return (
        <footer className="bg-brand-olive text-brand-cream">
        {/* في RTL: أول عمود (اللوجو) على اليمين */}
        <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
            {/* w-fit: عرض الغلاف = عرض اللوجو */}
            <div className="w-fit">
                <Link
                to="/"
                aria-label="مونة — الصفحة الرئيسية"
                className="block"
                >
                <img src={ASSETS.logoLight} alt="مونة" className="h-24 w-auto" />
                </Link>
                <p className="-mt-2 mr-auto flex w-[58%] justify-center text-sm font-bold whitespace-nowrap text-brand-sand">
                من إيد التيتة غير....
                </p>
            </div>
            </div>

            <nav aria-labelledby="footer-links-title">
            <h2 id="footer-links-title" className="text-xl font-bold">
                روابط سريعة
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                <li key={link.to}>
                    <Link to={link.to} className={linkClass}>
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
            </nav>

            <nav aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className="text-xl font-bold">
                تواصل معنا
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                    <Link to={link.to} className={linkClass}>
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
            </nav>

            <div>
            <h2 className="text-xl font-bold">خليك قريب منا</h2>
            <p className="mt-4 text-[15px] leading-7">
                تابع حكايات جداتنا وأطيب الوصفات الشامية
            </p>
            <ul className="mt-4 flex items-center gap-4">
                <li>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="انستغرام"
                    className="inline-flex transition-opacity hover:opacity-80"
                >
                    <BsInstagram aria-hidden="true" className="size-5" />
                </a>
                </li>
                <li>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="فيسبوك"
                    className="inline-flex transition-opacity hover:opacity-80"
                >
                    <CiFacebook aria-hidden="true" className="size-6" />
                </a>
                </li>
            </ul>
            </div>
        </Container>
        </footer>
    )
}
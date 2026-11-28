import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export function MainLayout() {
    return (
        <div className="flex min-h-svh flex-col">
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-50 focus:rounded-lg focus:bg-brand-burgundy focus:px-4 focus:py-2 focus:text-white"
        >
            تخطّي إلى المحتوى
        </a>
        <Navbar />
        <main id="main" className="flex-1">
            <Outlet />
        </main>
        <Footer />
        </div>
    )
}
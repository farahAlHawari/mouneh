import { createBrowserRouter, Navigate } from "react-router-dom"
import { PlaceholderPage } from "@/components/shared/PlaceholderPage"
import { HomePage } from "@/features/home/HomePage"
import { MainLayout } from "@/layouts/MainLayout"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
        { index: true, element: <HomePage /> },
        { path: "products", element: <PlaceholderPage title="المنتجات" /> },
        { path: "grandmas", element: <PlaceholderPage title="جداتنا" /> },
        {
            path: "subscriptions",
            element: <PlaceholderPage title="الاشتراكات" />,
        },
        { path: "boxes", element: <PlaceholderPage title="الصناديق" /> },
        { path: "cart", element: <PlaceholderPage title="السلة" /> },
        { path: "*", element: <Navigate to="/" replace /> },
        ],
    },
])
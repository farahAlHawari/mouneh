import { createBrowserRouter, Navigate } from "react-router-dom"
import { HomePage } from "@/features/home/HomePage"
import { ProductsPage } from "@/features/products/ProductsPage"
import { MainLayout } from "@/layouts/MainLayout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
])
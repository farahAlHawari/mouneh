import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "@/app/login/page"
import DashboardPage from "@/app/dashboard/page"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"

import HomePage from "../pages/Home/HomePage"
import AboutPage from "../pages/Company/AboutPage"
import WhyUsPage from "../pages/Company/WhyUsPage"
import ContactPage from "../pages/Company/ContactPage"
import AllProductsPage from "../pages/Shop/AllProductsPage"
import CategoryPage from "../pages/Shop/CategoryPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
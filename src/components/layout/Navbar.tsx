import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FiShoppingCart, FiMenu, FiX, FiUser, FiChevronDown } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Temporary cart count (replace with cartStore later)
  const cartCount = 2

  const navLinkClass =
    "text-gray-700 hover:text-orange-600 transition duration-200 font-medium"

  // Categories for dropdown
  const categories = [
    { name: 'Nuts & Dry Fruits', slug: 'dry-fruits' },
    { name: 'Dates', slug: 'dates' },
    { name: 'Snacks', slug: 'snacks' },
    { name: 'Seeds & More', slug: 'seeds' },
    { name: 'Gift Boxes', slug: 'gift-packs' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
<Link to="/" className="flex items-center">
  <img 
    src="/images/logo.png"   // adjust path if needed
    alt="Snackriti Logo"
    className="h-15 w-auto"
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            {/* Shop with Dropdown */}
            <div 
              className="relative group"
            >
              <NavLink 
                to="/products" 
                className="flex items-center gap-1 text-gray-700 hover:text-orange-600 transition duration-200 font-medium"
              >
                Shop
                <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/category/${category.slug}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 font-medium"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/why-us" className={navLinkClass}>
              Why Us
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-6">

            {/* Login */}
            <Link
              to="/login"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition"
            >
              <FiUser size={20} />
              Login
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-orange-600 transition"
            >
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">

            <NavLink
              to="/"
              className="block text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className="block text-gray-700 hover:text-orange-600 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </NavLink>

            {/* Categories submenu in mobile */}
            <div className="pl-4 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  className="block text-gray-600 hover:text-orange-600 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            <NavLink
              to="/about"
              className="block text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/why-us"
              className="block text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </NavLink>

            <NavLink
              to="/contact"
              className="block text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/login"
              className="block text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>

            <NavLink
              to="/cart"
              className="block text-gray-700 hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              Cart ({cartCount})
            </NavLink>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
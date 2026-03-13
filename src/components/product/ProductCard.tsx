import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="aspect-square bg-gray-100 flex items-center justify-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
            crossOrigin="anonymous"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              // Fallback to a solid color gradient
              target.style.display = 'none'
              if (target.parentElement) {
                target.parentElement.style.background = 'linear-gradient(135deg, #FED7AA 0%, #FB923C 100%)'
                const fallbackText = document.createElement('div')
                fallbackText.className = 'text-white text-center font-bold text-xl p-4'
                fallbackText.textContent = product.name
                target.parentElement.appendChild(fallbackText)
              }
            }}
          />
        </div>
        {/* Packaging Badge */}
        <div className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.packaging}
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-orange-600 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-orange-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Cart Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price}
            </span>
          </div>
          
          <button
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm"
            onClick={() => {
              // Add to cart functionality will be implemented later
              console.log('Add to cart:', product.id)
            }}
          >
            <FiShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

interface CategoryCardProps {
  name: string
  image: string
  count: number
  slug: string
}

const CategoryCard = ({ name, image, count, slug }: CategoryCardProps) => {
  return (
    <Link 
      to={`/category/${slug}`}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
    >
      {/* Category Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://via.placeholder.com/400x400?text=' + encodeURIComponent(name)
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Product Count Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-bold text-orange-600">{count} Products</span>
        </div>

        {/* Hover Arrow */}
        <div className="absolute bottom-4 right-4 bg-white rounded-full p-3 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <FiArrowRight className="text-orange-600 text-xl" />
        </div>
      </div>

      {/* Category Info */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
          {name}
        </h3>
        <p className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors duration-300">
          Explore our collection
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </Link>
  )
}

export default CategoryCard

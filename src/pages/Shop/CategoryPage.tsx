import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useProductStore } from '../../store/productStore'
import ProductCard from '../../components/product/ProductCard'
import Container from '../../components/layout/Container'

// Category images mapping - Better quality images
const categoryImages: Record<string, string> = {
  'dry-fruits': 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'snacks': 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'seeds': 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'dates': 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'gift-packs': 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=1600'
}

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { getProductsByCategory } = useProductStore()
  
  // Convert slug back to category name
  const categoryName = slug
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : ''
  
  const categoryProducts = categoryName ? getProductsByCategory(categoryName) : []
  const categoryImage = slug ? categoryImages[slug] : ''

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Category Hero Banner - Like First Screenshot */}
      <div className="relative h-80 overflow-hidden">
        {/* Background Pattern/Image */}
        <div className="absolute inset-0">
          <img
            src={categoryImage || 'https://via.placeholder.com/1600x300'}
            alt={categoryName}
            className="w-full h-full object-cover brightness-110"
          />
        </div>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/25"></div>
        
        {/* Content - Left aligned with proper spacing */}
        <div className="relative h-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="h-full flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/90 mb-4 text-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>—</span>
              <span className="text-white font-medium">{categoryName}</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              {categoryName}
            </h1>
          </div>
        </div>
      </div>

      {/* Back Button and Products Count */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Categories</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-orange-500"></div>
              <span className="text-gray-600 font-medium">[Premium Quality {categoryName}]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <Container>
        <div className="py-12">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                No Products Found
              </h3>
              <p className="text-gray-500 mb-8">
                We couldn't find any products in this category.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <FiArrowLeft />
                Browse All Categories
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage

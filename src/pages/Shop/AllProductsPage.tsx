import { useProductStore } from '../../store/productStore'
import ProductCard from '../../components/product/ProductCard'
import Container from '../../components/layout/Container'

const AllProductsPage = () => {
  const { products } = useProductStore()

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of dry fruits, snacks, and healthy treats. 
            All products are carefully selected for quality and taste.
          </p>
        </div>

        {/* All Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Message */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              No Products Available
            </h3>
            <p className="text-gray-500">
              We're currently updating our inventory. Please check back soon!
            </p>
          </div>
        )}
      </Container>
    </div>
  )
}

export default AllProductsPage

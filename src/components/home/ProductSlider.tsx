import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { useNavigate } from "react-router-dom"

import "swiper/css"

const products = [
  {
    id: 1,
    title: "Premium Almond Mix",
    caption: "Healthy & crunchy dry fruit",
    regularPrice: 299,
    discountedPrice: 199,
    image: "/images/beautyimg.jpg",
  },
  {
    id: 2,
    title: "Classic Namkeen Pack",
    caption: "Traditional spicy Indian snack",
    regularPrice: 199,
    discountedPrice: 149,
    image: "/images/dryfrutsimg.webp",
  },
  {
    id: 3,
    title: "Healthy Baked Chips",
    caption: "Low oil, high taste snack",
    regularPrice: 149,
    discountedPrice: 119,
    image: "/images/fashionimg.jpg",
  },
  {
    id: 4,
    title: "Festive Sweet Box",
    caption: "Perfect for celebrations",
    regularPrice: 599,
    discountedPrice: 449,
    image: "/images/healthysnackimg.png",
  },
  {
    id: 5,
    title: "Energy Nut Bar",
    caption: "Boost your daily energy",
    regularPrice: 99,
    discountedPrice: 79,
    image: "/images/pink-cosmetic-img.jpg",
  },
  
  {
    id: 6,
    title: "Premium Cashew Mix",
    caption: "Boost your daily energy",
    regularPrice: 99,
    discountedPrice: 79,
    image: "/images/pink-cosmetic-img.jpg",
  },
]

const ProductSlider = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Popular Products
          </h2>

          <button
            onClick={() => navigate("/products")}
            className="text-orange-600 font-semibold hover:underline"
          >
            View All →
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => {
            const discountPercent = Math.round(
              ((product.regularPrice - product.discountedPrice) /
                product.regularPrice) *
                100
            )

            return (
              <SwiperSlide key={product.id}>
                <div className="group bg-white rounded-xl overflow-hidden 
                                shadow-md hover:shadow-2xl 
                                transition duration-500">

                  {/* Image Section */}
                  <div className="relative aspect-square overflow-hidden">

                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover
                                 transition duration-700 ease-in-out
                                 group-hover:scale-110"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/10 
                                    group-hover:bg-black/20 
                                    transition duration-500" />

                    {/* Discount Badge */}
                    <span className="absolute top-3 left-3 
                                     bg-orange-600 text-white 
                                     text-xs px-3 py-1 rounded-full 
                                     shadow-md">
                      {discountPercent}% OFF
                    </span>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">

                    <h3 className="font-semibold text-sm sm:text-base">
                      {product.title}
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {product.caption}
                    </p>

                    {/* Pricing */}
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">
                        ₹{product.regularPrice}
                      </span>
                      <span className="text-orange-600 font-bold text-lg">
                        ₹{product.discountedPrice}
                      </span>
                    </div>

                    <button
                      onClick={() => navigate("/products")}
                      className="mt-4 w-full bg-orange-600 text-white 
                                 py-2 rounded-md hover:bg-orange-700 
                                 transition duration-300"
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

      </div>
    </section>
  )
}

export default ProductSlider
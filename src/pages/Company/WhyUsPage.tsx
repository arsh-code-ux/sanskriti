import { Link } from "react-router-dom"
import { FiShield, FiTruck, FiRefreshCw, FiHeadphones, FiAward, FiHeart, FiUsers, FiStar, FiCheckCircle, FiGift } from "react-icons/fi"

const WhyUsPage = () => {
  const features = [
    {
      icon: <FiShield className="text-4xl" />,
      title: "Premium Quality",
      description: "We source only the finest dry fruits, nuts, and snacks from trusted farms worldwide. Every product undergoes rigorous quality testing to ensure you receive fresh, authentic, and healthy products that meet international standards.",
      color: "orange"
    },
    {
      icon: <FiAward className="text-4xl" />,
      title: "Certified Excellence",
      description: "All our products are certified by food safety authorities. We maintain strict hygiene standards in storage and packaging. Trust Snackriti for authentic, safe, and nutritious dry fruits that your family deserves.",
      color: "blue"
    },
    {
      icon: <FiTruck className="text-4xl" />,
      title: "Fast & Safe Delivery",
      description: "Swift delivery across India with secure packaging to maintain freshness. We use food-grade materials and ensure proper handling so your order reaches you in perfect condition, ready to enjoy.",
      color: "green"
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: "Customer Satisfaction",
      description: "Your happiness is our success. We provide personalized recommendations, expert guidance on product selection, and dedicated customer support. Our team is always ready to assist you with any queries.",
      color: "red"
    },
    {
      icon: <FiStar className="text-4xl" />,
      title: "Value for Money",
      description: "Get premium quality at competitive prices. We believe everyone deserves access to healthy, nutritious dry fruits without breaking the bank. Regular discounts and combo offers make healthy eating affordable.",
      color: "purple"
    },
    {
      icon: <FiGift className="text-4xl" />,
      title: "Perfect for Gifting",
      description: "Beautiful gift boxes, premium hampers, and customized assortments for all occasions - festivals, corporate gifts, weddings, or celebrations. Make your loved ones feel special with our elegant gift packaging.",
      color: "pink"
    }
  ]

  const stats = [
    { number: "15000+", label: "Happy Customers", icon: <FiUsers /> },
    { number: "500+", label: "Premium Products", icon: <FiCheckCircle /> },
    { number: "8+", label: "Years of Excellence", icon: <FiAward /> },
    { number: "50+", label: "Cities Delivered", icon: <FiTruck /> }
  ]

  const benefits = [
    "100% authentic dry fruits sourced from premium farms",
    "Rigorous quality testing and food safety certification",
    "Hygienic packaging in food-grade materials",
    "Fresh stock rotated regularly for longer shelf life",
    "Expert nutritionists available for product guidance",
    "Customized gift hampers for all occasions",
    "Hassle-free returns and quick refund policy",
    "Multiple secure payment options available",
    "Regular offers, discounts, and loyalty rewards",
    "Complete nutritional information on every product",
    "No artificial colors, preservatives, or additives",
    "Traditional Indian and exotic international varieties"
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600",
      red: "bg-red-100 text-red-600 group-hover:bg-red-600",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600",
      pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600"
    }
    return colors[color] || colors.orange
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 text-white/90 mb-4 text-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>—</span>
              <span className="text-white font-medium">Why Choose Us</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Why Choose Snackriti?
            </h1>
            <p className="text-xl text-white/95 max-w-3xl leading-relaxed">
              Your trusted partner for premium quality dry fruits, healthy snacks, and delicious treats. 
              Experience the perfect blend of tradition, quality, and authenticity in every bite.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-black">
                <div className="flex justify-center mb-3">
                  <div className="text-4xl text-black">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-black font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider bg-orange-100 px-4 py-2 rounded-full">
                Our Strengths
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to providing you with the finest quality products and exceptional service. 
              Our dedication to excellence has earned us the trust of thousands of families across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-full ${getColorClasses(feature.color)} flex items-center justify-center mb-6 transition-all duration-300 group-hover:text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Grid Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium Dry Fruits"
                  className="w-full h-150 object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-xl shadow-2xl">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-lg font-medium">Quality Assured</div>
              </div>
            </div>

            {/* Benefits List */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-orange-600 font-semibold text-xs uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                  Our Promise
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to You
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Snackriti, we go above and beyond to ensure you receive nothing but the best. Since 2016, we've been serving thousands of happy customers across India with premium quality dry fruits, healthy snacks, and delicious treats.
              </p>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                From sourcing the finest ingredients to delivering them safely to your doorstep, every step of our process reflects our dedication to quality and customer satisfaction.
              </p>
              <p className="text-base text-gray-700 font-medium mb-8">
                Here's what makes us your trusted partner for healthy and delicious food choices:
              </p>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group"
                  >
                    <div className="shrink-0 mt-1">
                      <FiCheckCircle className="text-xl text-orange-600 group-hover:scale-125 transition-transform" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-black/70"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <FiAward className="text-6xl text-orange-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Thousands of Happy Customers
          </h2>
          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            Since 2016, we've been serving premium quality dry fruits and healthy snacks to families across India. 
            From our first outlet in HSR Layout, Bangalore, we've grown to serve customers in 50+ cities. 
          </p>
          <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-4xl mx-auto">
            Our commitment to quality, authenticity, and customer satisfaction has made us a trusted name in healthy snacking. 
            We carefully select each product, ensuring it meets our high standards before reaching your home. 
            Join thousands of satisfied customers who have made Snackriti their go-to destination for premium dry fruits and snacks.
          </p>
          <Link
            to="/products"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Explore Our Products
          </Link>
        </div>
      </div>

      {/* Bottom Features Bar - Enhanced */}
      <div className="py-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <FiShield className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Premium Quality</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">100% Quality Guarantee</p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <FiTruck className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Swift Shipping</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Delivering across India</p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <FiRefreshCw className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Easy Return</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Hassle-free returns</p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <FiHeadphones className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">24/7 Support</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUsPage

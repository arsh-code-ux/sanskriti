import { Link } from "react-router-dom"
import { FiPlay } from "react-icons/fi"
import { FiShield, FiTruck, FiRefreshCw, FiHeadphones } from "react-icons/fi"

const AboutPage = () => {
  const testimonials = [
    {
      name: "Roshan Prajwal",
      review: "Excellent quality dry fruits and delicious chocolates! The packaging is flavorful, and perfect for gifting.",
      rating: 5
    },
    {
      name: "Bilal Abdullah",
      review: "A delightful mix of premium dry fruits and irresistible chocolates. Great quality and taste!",
      rating: 5
    },
    {
      name: "Prashanth Kumar",
      review: "Top-notch quality with amazing flavor combinations. A must-visit for dry fruit and chocolate lovers!",
      rating: 5
    }
  ]

  const features = [
    {
      icon: <FiShield className="text-3xl" />,
      title: "PREMIUM QUALITY",
      description: "100% Quality Guarantee"
    },
    {
      icon: <FiTruck className="text-3xl" />,
      title: "SWIFT SHIPPING",
      description: "Delivering across India"
    },
    {
      icon: <FiRefreshCw className="text-3xl" />,
      title: "EASY RETURN",
      description: "Refer return policy"
    },
    {
      icon: <FiHeadphones className="text-3xl" />,
      title: "24/7 SUPPORT",
      description: "Support every time"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <div className="flex items-center gap-2 text-white text-sm">
              <Link to="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
              <span>—</span>
              <span>Company</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Images (top aligned) */}
            <div className="flex flex-col items-start space-y-6 bg-white p-2 rounded-lg">
              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dry Fruit House Store"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{ maxHeight: 340 }}
              />

              {/* second image below */}
              <img
                src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dry Fruit Store Interior"
                className="w-full rounded-lg shadow-lg object-cover"
                style={{ maxHeight: 220 }}
              />
            </div>

            {/* Right - Content (black bold text) */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Dry Fruit House brings you a collection of carefully selected foods from India and across the world.
              </h3>

              <div className="space-y-4 text-black font-semibold leading-relaxed">
                <p>
                  In our passionate search to offer food that is unique and full of health, we have ensured you get only the best products. Our products are well-loved for their quality and taste. We have gained expertise in fine Indian food products and food ingredients across categories - Dry Fruits, Chocolates, Gift Boxes and Spices. We are importing fine quality Nuts, dry fruits and drinks from the source from which they are available at their best. We are sure you will find our quality products appetizing.
                </p>

                <p>
                  We started our first outlet at HSR layout, Bangalore in 2016. We focus on stringent quality control and prompt service in order to ensure market standards. Our focus on quality is evident in our product range. We do not compromise on quality and there is very high level of customer appreciation resulting in long-lasting relations. The company's excellent performance is the result of persistent efforts to achieve high efficiency in the business. Dry Fruit House has established relationship with key leaders in the domestic as well as the International market.
                </p>

                <p>
                  Our goal is to nourish people's lives by offering a wide variety of convenient, delicious, and hygienic food choices that can help everyone enjoy a balanced, healthful diet. We provide gifting varieties such as chocolate bouquets, dryfruits packs, fancy dry fruit baskets and plenty of other varieties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vision</h3>
              <p className="text-gray-600 italic leading-relaxed">
                To be India's most customer centric company, where customers can buy high quality dry fruits at their convenience and enjoy a balanced, healthful diet.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mission</h3>
              <p className="text-gray-600 italic leading-relaxed">
                We strive to offer our customers the top quality dry fruits at reasonable rates and at the utmost convenience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section with Dark Background */}
      <div className="py-20 bg-gray-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-relaxed">
            Dry Fruit House brings you a collection of carefully selected foods from India and across the world.
          </h2>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Words From Our Delighted Customers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Store Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button 
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center transform hover:scale-110 transition-transform shadow-xl group"
              >
                <FiPlay className="text-gray-800 text-3xl ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="flex justify-center mb-4 text-gray-700">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-sm text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
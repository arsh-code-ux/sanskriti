import { Link } from "react-router-dom"
import { FiPhone, FiMail, FiMapPin, FiShield, FiTruck, FiRefreshCw, FiHeadphones } from "react-icons/fi"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"
import { useState } from "react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            backgroundImage: `url('https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/40 to-black/30"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <div className="flex items-center gap-2 text-white text-sm">
              <Link to="/" className="hover:text-orange-200 transition-colors">
                Home
              </Link>
              <span>—</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are here to help our customers at over world. We would be happy to assist you.<br />
              So let us know what are your queries or what you are looking for, we will get back to you shortly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-linear-to-br from-orange-900 to-orange-800 text-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-8">Contact Us</h3>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <FiPhone className="text-2xl mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-white/80 mb-1">REACH US ON CALL/WHATSAPP</p>
                    <p className="text-lg font-semibold">+91-7348000312</p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <h4 className="text-xl font-bold mb-3">Email Address</h4>
                  <div className="flex items-center gap-3">
                    <FiMail className="text-xl" />
                    <p>snacks@dryfruitshouse.com</p>
                  </div>
                </div>

                {/* Office Location */}
                <div>
                  <h4 className="text-xl font-bold mb-3">Office Location</h4>
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-2xl mt-1 shrink-0" />
                    <p className="leading-relaxed">
                      Soft Trader, 17th Cross, Sector 4, HSR,<br />
                      Main Road, HSR Layout, Bangalore,<br />
                      Karnataka 560102
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-xl" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-xl" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-10 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile No."
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Id <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Id"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Write Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write Your Message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-orange-900 to-orange-800 text-white py-4 rounded-lg font-semibold hover:from-orange-800 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Send Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 border-t border-gray-200">
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

export default ContactPage

import React, { useState, useEffect } from 'react'
import {
  ShoppingBag,
  MapPin,
  Clock,
  Gift,
  Zap,
  Users,
  Instagram,
  Facebook,
  Twitter,
  Star,
} from 'lucide-react'

const Komas500LaunchPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-07-23T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const products = [
    {
      name: 'Wireless Earbuds',
      regular: '₦18,000',
      komas: '₦8,900',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center',
    },
    {
      name: 'Designer T-Shirts',
      regular: '₦12,500',
      komas: '₦5,500',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&crop=center',
    },
    {
      name: 'Sneakers',
      regular: '₦29,000',
      komas: '₦13,000',
      image:
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center',
    },
    {
      name: 'Sunglasses',
      regular: '₦7,500',
      komas: '₦3,300',
      image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop&crop=center',
    },
  ]

  const bonusProducts = [
    {
      name: 'Premium Headphones',
      regular: '₦6,000',
      komas: '₦200',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&crop=center',
    },
    {
      name: 'Casual Sweatshirt',
      regular: '₦6,500',
      komas: '₦80',
      image:
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=200&fit=crop&crop=center',
    },
    {
      name: 'Makeup Palette',
      regular: '₦3,500',
      komas: '₦500',
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&crop=center',
    },
    {
      name: 'Snack Pack',
      regular: '₦1,200',
      komas: '₦300',
      image:
        'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=200&h=200&fit=crop&crop=center',
    },
  ]

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      {/* Header Section - Matching Original Design */}
      <div className='bg-gradient-to-b from-gray-800 to-gray-900 text-center py-12 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-white text-2xl md:text-3xl font-bold mb-4 tracking-wide'>
            THE AWAITING MEGA LAUNCH OF
          </h1>
          <h2 className='text-yellow-400 text-4xl md:text-7xl font-bold mb-6 tracking-wider'>
            Komas500 Global
          </h2>
          <p className='text-white text-xl md:text-2xl font-semibold mb-2'>
            AT THE CITY OF PORT HARCOURT
          </p>
          <p className='text-white text-lg md:text-xl mb-2'>
            STARTING FROM UNIPORT
          </p>
          <p className='text-white text-lg md:text-xl mb-8'>
            SHOP AND PICKUP ON CAMPUS
          </p>

          {/* Countdown Timer */}
          <div className='grid grid-cols-4 gap-4 max-w-lg mx-auto mb-8'>
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINUTES' },
              { value: timeLeft.seconds, label: 'SECONDS' },
            ].map((item, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl md:text-6xl font-bold text-white mb-2'>
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className='text-sm md:text-base font-semibold text-gray-300'>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Main CTA Button */}
          <button className='bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl md:text-2xl py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-6'>
            REGISTER NOW
          </button>

          <p className='text-white text-lg md:text-xl'>
            TO GET ACCESS TO SIMILAR ITEMS SHOWN BELOW
            <br />
            AT OVER 50% OFF
          </p>
        </div>
      </div>

      {/* Launch Details */}
      <div className='bg-gray-800 py-12 px-4'>
        <div className='max-w-6xl mx-auto text-center'>
          <h3 className='text-2xl md:text-3xl font-bold mb-6 text-yellow-400'>
            🛍 Komas500 Global is Launching in Port Harcourt!
          </h3>
          <p className='text-xl mb-4'>with Komas500 Black Sales Deals</p>
          <p className='text-lg mb-6 text-blue-200'>
            🛍 Shop & Pick Up on Campus | Over 50% Off for Registered Shoppers
          </p>
          <p className='text-lg mb-8'>
            Starting at Uniport – 23rd July 2025, the long awaited Komas500
            marketplace will be unveiled for shopping
          </p>

          {/* Urgent CTA */}
          <div className='bg-red-600 rounded-lg p-6 mb-8 border-2 border-red-400'>
            <h4 className='text-2xl font-bold mb-4 flex items-center justify-center gap-2'>
              <Zap className='w-6 h-6 text-yellow-400' />
              🚨 Shop & Pick Up on Campus
            </h4>
            <p className='text-lg mb-4'>
              Register now to unlock 50%+ OFF exclusive deals!
            </p>
            <button className='bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105'>
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section - Matching Original Layout */}
      <div className='bg-gray-900 py-12 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-2xl md:text-3xl font-bold mb-8 text-center text-yellow-400'>
            🔥 Sample Products for Komas500 Black Sales Deals
          </h3>

          {/* Product Grid - Matching Original Style */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
            {bonusProducts.map((product, index) => (
              <div
                key={index}
                className='bg-gray-800 rounded-lg p-4 text-center'
              >
                <div className='w-full h-32 bg-gray-700 rounded-lg mb-4 overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='text-sm text-gray-300 mb-1'>
                  Normal Price: {product.regular}
                </div>
                <div className='text-lg font-bold text-yellow-400'>
                  BM Price: {product.komas}
                </div>
              </div>
            ))}
          </div>

          {/* Product Table */}
          <div className='bg-gray-800 rounded-lg p-6 mb-8'>
            <div className='overflow-x-auto'>
              <table className='w-full text-left'>
                <thead>
                  <tr className='border-b border-gray-600'>
                    <th className='pb-4 text-yellow-400 font-bold text-lg'>
                      Item
                    </th>
                    <th className='pb-4 text-yellow-400 font-bold text-lg'>
                      Regular Price
                    </th>
                    <th className='pb-4 text-yellow-400 font-bold text-lg'>
                      Komas Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className='border-b border-gray-700'>
                      <td className='py-4'>
                        <div className='flex items-center gap-4'>
                          <img
                            src={product.image}
                            alt={product.name}
                            className='w-12 h-12 rounded-lg object-cover'
                          />
                          <span className='font-semibold text-lg'>
                            {product.name}
                          </span>
                        </div>
                      </td>
                      <td className='py-4 text-red-300 line-through text-lg'>
                        {product.regular}
                      </td>
                      <td className='py-4 text-green-400 font-bold text-xl'>
                        {product.komas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Section */}
      <div className='bg-gradient-to-r from-purple-600 to-pink-600 py-12 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='text-3xl font-bold mb-6'>🎁 Bonus</h3>
          <p className='text-xl mb-8'>
            Follow us on social media for secret promo codes and extra 10% OFF
            from top influencers.
          </p>
          <div className='flex justify-center gap-6 flex-wrap'>
            <div className='flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 hover:bg-white/30 transition-colors cursor-pointer'>
              <Instagram className='w-6 h-6' />
              <span className='font-semibold'>Instagram</span>
            </div>
            <div className='flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 hover:bg-white/30 transition-colors cursor-pointer'>
              <Facebook className='w-6 h-6' />
              <span className='font-semibold'>Facebook</span>
            </div>
            <div className='flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 hover:bg-white/30 transition-colors cursor-pointer'>
              <Twitter className='w-6 h-6' />
              <span className='font-semibold'>Twitter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Influencer Application Section */}
      <div className='bg-gradient-to-r from-green-600 to-teal-600 py-12 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <Users className='w-8 h-8' />
            <Star className='w-6 h-6 text-yellow-400' />
          </div>
          <h3 className='text-3xl font-bold mb-6'>
            Become a Komas500 Influencer Partner
          </h3>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Are you an influencer with engaged followers? Join our exclusive
            partnership program! Promote Komas500 products and earn attractive
            commissions while giving your audience amazing deals.
          </p>
          <div className='bg-white/20 rounded-lg p-6 mb-8 max-w-md mx-auto'>
            <h4 className='text-xl font-bold mb-4'>Influencer Benefits:</h4>
            <ul className='text-left space-y-2'>
              <li>• Exclusive discount codes for followers</li>
              <li>• Attractive commission structure</li>
              <li>• Free products for content creation</li>
              <li>• Priority access to new launches</li>
            </ul>
          </div>
          <button className='bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg'>
            Apply as Influencer Partner
          </button>
          <p className='text-sm mt-4 opacity-90'>
            Application will redirect to our partner form
          </p>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className='bg-gray-900 py-16 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h3 className='text-3xl font-bold mb-6 text-yellow-400'>
            🎯 Don't miss the hidden marketplace!
          </h3>
          <p className='text-xl mb-8'>👉 Countdown to 23rd July has begun...</p>
          <button className='bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold py-6 px-16 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse'>
            REGISTER NOW
          </button>
          <p className='text-gray-400 mt-6'>
            Limited time offer - Register before launch day!
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 py-8 px-4 border-t border-gray-700'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-gray-400 mb-4'>
            © 2025 Komas500 Global - The Ultimate Shopping Experience
          </p>
          <p className='text-sm text-gray-500'>
            Port Harcourt Launch | University of Port Harcourt Campus | July
            23rd, 2025
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Komas500LaunchPage

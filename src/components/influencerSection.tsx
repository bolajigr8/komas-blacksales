'use client'
import { Users, Star } from 'lucide-react'

export default function InfluencerSection() {
  return (
    <section className='bg-neutral-950 relative py-16 px-4 overflow-hidden'>
      {/* Gradient Background - Using your theme colors */}
      {/* <div
        className='absolute inset-0'
        style={{
          background: `
            linear-gradient(135deg, #2a7a5a 0%, #1f5d42 50%, #245c44 100%),
            radial-gradient(circle at 20% 50%, #2a7a5a 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, #1f5d42 0%, transparent 50%)
          `,
        }}
      /> */}

      {/* Subtle overlay pattern */}
      {/* <div
        className='absolute inset-0 opacity-5'
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      /> */}

      <div className='relative z-10 max-w-6xl mx-auto'>
        {/* Two-column layout on large screens */}
        <section>
          <div className='lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center'>
            {/* Left column - Main content */}
            <div className='text-center lg:text-left'>
              <div className='flex items-center justify-center lg:justify-start gap-3 mb-6'>
                <Users className='w-8 h-8 text-white' />
                <Star className='w-6 h-6 text-yellow-400' />
              </div>

              <h3 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white transition-all duration-300 ease-in-out'>
                Become a <span className='text-yellow-400'>Komas500</span>{' '}
                Fashion Influencer
              </h3>

              <p className='text-xl lg:text-xl xl:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 text-white/90 leading-relaxed transition-all duration-300 ease-in-out'>
                Join the first 300 influencers to enjoy exclusive accessto
                wholesale fashion deals, get custom promo codes, earn
                commissions, and have a chance to advance to our brand
                ambassador
              </p>
            </div>

            {/* Right column - Benefits and CTA */}
            <div className='flex flex-col items-center lg:items-start'>
              <div
                className='bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 w-full max-w-md border border-white/20'
                style={{
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                }}
              >
                <h4 className='text-xl lg:text-xl xl:text-2xl font-bold mb-4 text-white transition-all duration-300 ease-in-out'>
                  Influencer Benefits:
                </h4>
                <ul className='text-left space-y-3 text-white/90'>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
                    <span className='text-base lg:text-base xl:text-lg transition-all duration-300 ease-in-out'>
                      Get custom promo codes
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
                    <span className='text-base lg:text-base xl:text-lg transition-all duration-300 ease-in-out'>
                      Earn commisions on every purchase made with your code
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
                    <span className='text-base lg:text-base xl:text-lg transition-all duration-300 ease-in-out'>
                      Qualify for Komas500 brand ambassador opportunities
                    </span>
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
                    <span className='text-base lg:text-base xl:text-lg transition-all duration-300 ease-in-out'>
                      Access exclusive wholesale fashion deals
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <article className='text-center'>
            <button
              className='bg-white text-[#2a7a5a] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl lg:text-xl xl:text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ease-in-out'
              style={{
                boxShadow: '0 10px 25px rgba(255, 255, 255, 0.2)',
              }}
              onClick={() => (window.location.href = '/influencers')}
            >
              Become an Influencer
            </button>

            <p className='text-sm lg:text-sm xl:text-base mt-4 text-white/70 transition-all duration-300 ease-in-out'>
              Earn commisions on every purchase made with your code
            </p>
          </article>
        </section>
      </div>
    </section>
  )
}

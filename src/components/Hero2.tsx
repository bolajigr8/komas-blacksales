'use client'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import StaggeredText from './StaggeredText' // Import your StaggeredText component

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the fixed launch date: July 23, 2025 at 00:00:00
    const launchDate = new Date('2025-07-23T00:00:00')

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className='min-h-screen flex mt-[-2rem] flex-col relative justify-center pt-[8rem] pb-12 overflow-x-clip bg-neutral-950'>
      {/* Gradient Background */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          background: `
            radial-gradient(circle at 25% 25%, #2a7a5a 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #1f5d42 0%, transparent 50%),
            linear-gradient(135deg, #245c44 0%, transparent 70%)
          `,
        }}
      />

      {/* Subtle overlay pattern */}
      <div
        className='absolute inset-0 opacity-3'
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2a7a5a 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full'>
        {/* Split Layout for Large Screens */}
        <div className='h-full flex items-center'>
          {/* Content Section - Left side on large screens, full width on smaller */}
          <div className='w-full lg:w-1/2 lg:pr-12'>
            {/* Launch Badge */}
            <section className='  justify-center hidden lg:justify-start mb-6'>
              <div
                className='inline-flex items-center px-4 py-1 rounded-full text-white text-sm sm:text-base font-semibold shadow-lg transform hover:scale-105 transition-transform duration-200'
                style={{
                  backgroundColor: '#2a7a5a',
                  boxShadow: '0 0 20px rgba(42, 122, 90, 0.25)',
                }}
              >
                <span className='mr-2'>✨</span>
                <span className='hidden sm:inline'>
                  The awaiting mega launch of
                </span>
                <span className='sm:hidden'>Mega launch of</span>
              </div>
            </section>

            {/* Content Layout */}
            <div className='text-left'>
              {/* Location Info */}
              <div className='mb-6'>
                <div className='space-y-3 sm:space-y-4'>
                  <div className='text-lg sm:text-xl  text-white/80 font-medium transition-all duration-300 ease-in-out'>
                    <StaggeredText
                      // text='Port Harcourt  • Starting from UNIPORT'
                      text='Komas500 Black Sales & Mega Launch!
'
                      el='span'
                      duration={0.5}
                      stagger={0.06}
                      delay={0.1}
                      once={true}
                      className='text-white inline-block'
                    />
                    {/* <span> </span> */}
                    {/* <span style={{ color: '#2a7a5a' }}>UNIPORT</span> */}
                  </div>
                </div>
              </div>

              {/* Main Heading with StaggeredText */}
              <div className=' font-bold mb-4 leading-tight'>
                <StaggeredText
                  // text={['KOMAS500', 'GLOBAL']}
                  text={[
                    'Shop Fashion at 30% OFF + Campus Pickup in Uniport, Port Harcourt',
                  ]}
                  el='h1'
                  duration={0.6}
                  stagger={0.08}
                  delay={0.2}
                  once={true}
                  className='text-3xl md:text-4xl max-w-xl  font-bold leading-tight'
                />
              </div>

              {/* Custom styles for the staggered text */}
              <style jsx>{`
                h1 span:first-child {
                  background: linear-gradient(to right, white, white, #d1d5db);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-shadow: 0 0 40px rgba(42, 122, 90, 0.2);
                }
                h1 span:last-child {
                  color: rgba(255, 255, 255, 0.9);
                  font-size: 0.6em;
                  font-weight: 500;
                }
              `}</style>

              {/* Countdown Timer */}
              <div className='mb-8'>
                <StaggeredText
                  text="The countdown to Komas500's official launch is on! Enjoy exclusive Black Sales Deals from July 23rd – 26th."
                  el='h2'
                  duration={0.6}
                  stagger={0.07}
                  delay={0.4}
                  once={true}
                  className='text--lg md:text-xl  max-w-xl font-bold mb-4 text-white/90 transition-all duration-300 ease-in-out'
                />
                <div className='grid grid-cols-4 gap-4 lg:gap-6 max-w-2xl  mx-0'>
                  {[
                    { value: timeLeft.days, label: 'DAYS' },
                    { value: timeLeft.hours, label: 'HOURS' },
                    { value: timeLeft.minutes, label: 'MINUTES' },
                    { value: timeLeft.seconds, label: 'SECONDS' },
                  ].map((item, index) => (
                    <div key={index} className='text-left'>
                      <div
                        className='text-3xl sm:text-3xl  font-bold mb-1 sm:mb-2 text-white transition-all duration-300 ease-in-out'
                        style={{
                          textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                        }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className='text-xs sm:text-sm   font-semibold text-white/80 tracking-wider transition-all duration-300 ease-in-out'>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Register Button */}
              <div className='mb-2 flex flex-col max-w-md justify-center  lg:mx-0 '>
                <Button
                  size='lg'
                  className='font-bold px-8 py-8 text-lg hover:scale-105 transition-all mb-4 duration-300 shadow-xl'
                  style={{
                    background:
                      'linear-gradient(135deg, #2a7a5a 0%, #1f5d42 100%)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(42, 122, 90, 0.4)',
                  }}
                  onClick={() =>
                    (window.location.href =
                      '/https://komas-marketplace.vercel.app/sign-up?callbackUrl=%2F')
                  }
                >
                  Shop at 30% discount | Register
                </Button>
                <Button
                  size='lg'
                  className='font-bold px-8 py-8 text-lg hover:scale-105 transition-all duration-300 shadow-xl'
                  style={{
                    background:
                      'linear-gradient(135deg, #2a7a5a 0%, #1f5d42 100%)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(42, 122, 90, 0.4)',
                  }}
                  onClick={() => (window.location.href = '/influencers')}
                >
                  Become an Influencer
                </Button>
              </div>

              {/* Call to action hint */}
              <div>
                <p className='text-white/30 text-sm animate-pulse'>
                  Join the first 300 influencers to get exclusive access!
                </p>
              </div>
            </div>
          </div>

          {/* Image Section - Right side on large screens, hidden on smaller */}
          <div className='hidden lg:block lg:w-1/2' style={{ height: '75vh' }}>
            <div className='h-full flex items-center justify-center relative'>
              {/* Placeholder for background image */}
              <div
                className='w-full h-full rounded-2xl shadow-2xl relative overflow-hidden'
                style={{
                  background: `
                    linear-gradient(135deg, rgba(42, 122, 90, 0.1) 0%, rgba(31, 93, 66, 0.1) 100%),
                    radial-gradient(circle at center, rgba(42, 122, 90, 0.2) 0%, transparent 70%)
                  `,
                  border: '1px solid rgba(42, 122, 90, 0.2)',
                }}
              >
                {/* Image Container */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative z-[999] max-w-[60rem] max-h-[60rem]'>
                    <img
                      alt='A girl holding a PDA'
                      src='/new5.jpg'
                      className='max-w-[60rem] max-h-[60rem] object-cover object-center rounded-2xl'
                      style={{
                        filter: 'brightness(0.9) contrast(1.1)',
                      }}
                    />
                    {/* Optional overlay for better text contrast */}
                    <div
                      className='absolute inset-0 rounded-2xl'
                      style={{
                        background:
                          'linear-gradient(45deg, rgba(42, 122, 90, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)',
                      }}
                    />
                  </div>
                </div>

                {/* Subtle pattern overlay */}
                <div
                  className='absolute inset-0 opacity-3 rounded-2xl'
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #2a7a5a 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

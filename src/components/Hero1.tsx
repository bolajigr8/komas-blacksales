'use client'
import { useState, useEffect } from 'react'

import { Button } from './ui/button'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set launch date (example: 30 days from now)
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 30)

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
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className='h-screen flex mt-[-2rem] flex-col relative justify-center pt-[10rem] md:pt-[11rem] lg:pt-[12rem]  pb-12  overflow-x-clip bg-neutral-950'>
      {/* Gradient Background */}
      {/* <div
        className='absolute inset-0 top-[-20] opacity-12'
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #2a7a5a 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #1f5d42 0%, transparent 50%),
            linear-gradient(135deg, #245c44 0%, transparent 70%)
          `,
        }}
      /> */}

      {/* Subtle overlay pattern */}
      {/* <div
        className='absolute inset-0 top-[-20] opacity-3'
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1f5d42 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      /> */}

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

      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Launch Badge - centered on all screens */}
        <section className='flex justify-center mb-6 '>
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

        {/* Single Column Layout */}
        <div className='text-center'>
          {/* Main Heading */}
          <h1 className='text-5xl sm:text-6xl font-bold mb-2 text-white leading-tight transition-all duration-300 ease-in-out'>
            <span
              className='bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent transition-all duration-300 ease-in-out'
              style={{
                textShadow: '0 0 40px rgba(42, 122, 90, 0.2)',
              }}
            >
              KOMAS500
            </span>
            <br />
            <span className='text-white/90 text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium transition-all duration-300 ease-in-out'>
              GLOBAL
            </span>
          </h1>

          {/* Location Info */}
          <div className='mb-2 '>
            <div className='space-y-3 sm:space-y-4'>
              <p className='text-lg sm:text-xl lg:text-xl xl:text-2xl text-white/80 font-medium transition-all duration-300 ease-in-out'>
                <span className='text-white'>Port Harcourt</span> • Starting
                from <span style={{ color: '#2a7a5a' }}>UNIPORT</span>
              </p>
              <p className='text-base sm:text-lg lg:text-lg xl:text-xl text-white/60 transition-all duration-300 ease-in-out'>
                Shop and pickup directly on campus
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className='mb-2'>
            <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 text-white/90 transition-all duration-300 ease-in-out'>
              Launch Countdown
            </h2>
            <div className='grid grid-cols-4 gap-4 lg:gap-8 max-w-2xl mx-auto'>
              {[
                { value: timeLeft.days, label: 'DAYS' },
                { value: timeLeft.hours, label: 'HOURS' },
                { value: timeLeft.minutes, label: 'MINUTES' },
                { value: timeLeft.seconds, label: 'SECONDS' },
              ].map((item, index) => (
                <div key={index} className='text-center'>
                  <div
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-1 sm:mb-2 text-white transition-all duration-300 ease-in-out'
                    style={{
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className='text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-semibold text-white/80 tracking-wider transition-all duration-300 ease-in-out'>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className='mb-8 md:mb-3 lg:mb-2'>
            <Button
              size='lg'
              className='font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-xl'
              style={{
                background: 'linear-gradient(135deg, #2a7a5a 0%, #1f5d42 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(42, 122, 90, 0.4)',
              }}
            >
              Register Now
            </Button>
          </div>

          {/* Call to action hint */}
          <div>
            <p className='text-white/30 text-sm animate-pulse'>
              Shop and pickup on campus!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

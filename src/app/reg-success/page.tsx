'use client'

import React from 'react'
import {
  CheckCircle,
  ArrowLeft,
  Calendar,
  Gift,
  Sparkles,
  Shield,
  Zap,
  Star,
} from 'lucide-react'

// Desktop Two-Column Component
interface DesktopWelcomeLayoutProps {
  onBackToHome: () => void
}
function DesktopWelcomeLayout({ onBackToHome }: DesktopWelcomeLayoutProps) {
  return (
    <div className='hidden pt-[3rem] lg:block'>
      <div className='grid lg:grid-cols-1  lg:gap-20 lg:min-h-[calc(100vh-12rem)]'>
        {/* Left Column - All Content */}
        <div className='flex flex-col max-w-[50rem] space-y-8'>
          <div className='space-y-6'>
            <div className='inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full'>
              <CheckCircle className='w-4 h-4 text-green-400 mr-2' />
              <span className='text-sm font-medium text-green-400'>
                Registration Completed
              </span>
            </div>

            <h1 className='text-5xl xl:text-6xl font-bold text-white leading-tight'>
              Welcome
              <span className='text-green-400'> Aboard!</span>
            </h1>

            <div className='space-y-4'>
              <p className='text-xl xl:text-2xl text-neutral-200 leading-relaxed'>
                <span className='font-bold'>Congratulations!</span> You have
                successfully unlocked the{' '}
                <span className='font-bold text-green-400'>30% discount</span>{' '}
                for the Black Sales Launch!
              </p>

              <div className='bg-neutral-900/30 border border-neutral-700/30 rounded-xl p-6'>
                <div className='space-y-3'>
                  <div className='flex items-center'>
                    <Gift className='w-6 h-6 text-red-400 mr-3' />
                    <h3 className='text-2xl font-bold text-white'>
                      Black Sales Launch
                    </h3>
                  </div>
                  <div className='flex items-center text-neutral-300'>
                    <Calendar className='w-5 h-5 mr-3' />
                    <span className='text-xl font-bold'>
                      July 23rd - 26th, 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          {/* <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white mb-4'>
              What's included:
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center'>
                <Star className='w-5 h-5 text-yellow-400 mr-3 flex-shrink-0' />
                <span className='text-neutral-300'>
                  Priority access to all sales events
                </span>
              </div>
              <div className='flex items-center'>
                <Zap className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />
                <span className='text-neutral-300'>
                  Exclusive member-only discounts
                </span>
              </div>
              <div className='flex items-center'>
                <Shield className='w-5 h-5 text-blue-400 mr-3 flex-shrink-0' />
                <span className='text-neutral-300'>
                  Early product launch notifications
                </span>
              </div>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className='pt-4'>
            <button
              onClick={onBackToHome}
              className='group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-950'
            >
              <ArrowLeft className='w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
              Back to Homepage
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        {/* <div className='flex flex-col justify-center'>
          <div className='relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-400/20 to-green-600/20 backdrop-blur-sm border border-green-500/20'>
            <img
              src='/new5.jpg'
              alt='Celebration with confetti and sparkles'
              className='w-full h-[500px] xl:h-[600px] object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent'></div>
            <div className='absolute top-6 right-6'>
              <div className='bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full p-3'>
                <Sparkles className='w-6 h-6 text-green-400' />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

// Mobile Single-Column Component
interface MobileWelcomeLayoutProps {
  onBackToHome: () => void
}

function MobileWelcomeLayout({ onBackToHome }: MobileWelcomeLayoutProps) {
  return (
    <div className='lg:hidden space-y-8'>
      {/* Welcome Message */}
      <div className='text-center space-y-4'>
        <h1 className='text-4xl sm:text-5xl font-bold text-white leading-tight'>
          Welcome Aboard!
        </h1>
        <p className='text-xl sm:text-2xl text-neutral-300 max-w-2xl mx-auto'>
          Thank you for registering with us
        </p>
      </div>

      {/* Success Message Card */}
      <div className='bg-neutral-900/30 border border-neutral-700/30 rounded-2xl p-6 sm:p-8'>
        <div className='flex items-center justify-center mb-4'>
          <Sparkles className='w-6 h-6 text-yellow-400 mr-2' />
          <h2 className='text-2xl sm:text-3xl font-semibold text-white'>
            Congratulations!
          </h2>
          <Sparkles className='w-6 h-6 text-yellow-400 ml-2' />
        </div>

        <p className='text-lg sm:text-xl text-neutral-200 mb-6 leading-relaxed'>
          You have successfully unlocked the{' '}
          <span className='font-bold text-green-400'>30% discount</span> for the
          Black Sales Launch!
        </p>

        {/* Event Details */}
        <div className='bg-neutral-900/50 border border-neutral-700/50 rounded-xl p-4 sm:p-6 mb-6'>
          <div className='flex items-center justify-center mb-3'>
            <Gift className='w-5 h-5 text-red-400 mr-2' />
            <h3 className='text-lg sm:text-xl font-semibold text-white'>
              Black Sales Launch
            </h3>
          </div>

          <div className='flex items-center justify-center text-neutral-300 mb-2'>
            <Calendar className='w-4 h-4 mr-2' />
            <span className='text-sm sm:text-base'>July 23rd - 26th, 2025</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className='pt-4 text-center'>
          <button
            onClick={onBackToHome}
            className='group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-neutral-950'
          >
            <ArrowLeft className='w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  )
}

// Main Page Component
export default function WelcomePage() {
  const handleBackToHome = () => {
    // In a real app, this would navigate to the homepage
    window.location.href = '/'
  }

  return (
    <main className='min-h-screen flex flex-col relative justify-center mt-[-1.9rem] pt-[8rem] pb-12 overflow-x-clip bg-neutral-950 '>
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

      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <MobileWelcomeLayout onBackToHome={handleBackToHome} />
        <DesktopWelcomeLayout onBackToHome={handleBackToHome} />
      </div>

      {/* Decorative Elements */}
      <div className='absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60'></div>
      <div className='absolute top-40 right-20 w-1 h-1 bg-green-300 rounded-full animate-pulse opacity-40'></div>
      <div className='absolute bottom-32 left-16 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse opacity-50'></div>
      <div className='absolute bottom-20 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-30'></div>
    </main>
  )
}

'use client'

export default function FinalCTA() {
  return (
    <section className='relative bg-neutral-950 py-16 px-4 overflow-hidden'>
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

      <div className='relative z-10 max-w-4xl mx-auto text-center'>
        <h3 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
          Don't miss this opportunity{' '}
          <span style={{ color: '#2a7a5a', display: 'block' }}>
            to shop at 30% off from July 23-26
          </span>
        </h3>

        <p className='text-xl md:text-2xl mb-8 text-white/90'>
          Prices return back to normal immediately{' '}
          <span className='font-bold block text-white'>
            after the given date
          </span>{' '}
          {/* has begun... */}
        </p>

        <button
          className='font-bold py-6 px-8 rounded-lg text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl animate-pulse mb-2'
          style={{
            background: 'linear-gradient(135deg, #2a7a5a 0%, #1f5d42 100%)',
            color: 'white',
            boxShadow: '0 15px 35px rgba(42, 122, 90, 0.4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, #34956b 0%, #23694f 100%)'
            e.currentTarget.style.boxShadow =
              '0 20px 40px rgba(42, 122, 90, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background =
              'linear-gradient(135deg, #2a7a5a 0%, #1f5d42 100%)'
            e.currentTarget.style.boxShadow =
              '0 15px 35px rgba(42, 122, 90, 0.4)'
          }}
          onClick={() => {
            window.location.href =
              '/https://komas-marketplace.vercel.app/sign-up?callbackUrl=%2F'
          }}
        >
          REGISTER NOW TO ACCESS 30% Off 
        </button>

        <p className='text-white/60 max-w-[30rem] mx-auto mt-6 text-lg'>
          Join the first 300 now and Register before launch day!
        </p>
      </div>
    </section>
  )
}

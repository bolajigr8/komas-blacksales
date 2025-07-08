'use client'

import { Button } from './ui/button'

export default function Hero() {
  return (
    <main className='py-24 overflow-x-clip'>
      <div className='container relative'>
        <section className='flex justify-center'>
          <div
            className='inline-flex px-3 rounded-full text-white text-md font-semibold'
            style={{ backgroundColor: '#3BB77E' }}
          >
            ✨ the awaiting mega launch of
          </div>
        </section>
        <h1 className=' text-6xl md:text-7xl lg:text-8xl  font-medium text-center mt-6'>
          KOMAS500 GLOBAL
        </h1>

        <p className='text-left text-xl  text-white/50 mt-8  max-w-2xl px-4 '>
          at the city of PORT HARCOURT starting from UNIPORT
        </p>
        <p className='text-left text-xl  text-white/50 mt-8  max-w-2xl px-4 '>
          SHOP AND PICKUP ON CAMPUS
        </p>
        <form className='flex text-white/50 border rounded-full p-2 mt-8 max-w-lg mx-auto w-full '>
          <input
            className='bg-transparent flex-1  '
            type='email'
            placeholder='Enter your email'
          />

          <Button
            variant={'default'}
            type='submit'
            className='whitespace-nowrap'
            size='sm'
          >
            Sign Up
          </Button>
        </form>
      </div>
    </main>
  )
}

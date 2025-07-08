'use client'

import Image from 'next/image'
import logoImage from '../../public/komas pax green.svg'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Become an Influencer', href: '/influencers' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu when screen becomes md (768px) or larger
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  return (
    <>
      <main className='  z-50 fixed   w-full text-center top-0 py-4 lg:py-4'>
        <section className='container mx-auto  max-w-[58rem] px-4 sm:px-6'>
          <div className='border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur  '>
            <section className=' flex justify-between   py-2 items-center  px-2  '>
              <Link href={'/'}>
                <div className='w-[120px] h-[60px] cursor-pointer relative md:w-[150px]'>
                  <Image
                    src={logoImage}
                    alt='KOMAS Logo'
                    fill
                    priority
                    style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                  />
                </div>
              </Link>

              <div className=' hidden  md:flex justify-center items-center'>
                <nav className='flex gap-6 font-medium'>
                  {navLinks.map((link) => {
                    return (
                      <a href={link.href} key={link.label}>
                        {link.label}
                      </a>
                    )
                  })}
                </nav>
              </div>

              <div className='flex justify-end text-[#3BB77E] cursor-pointer gap-4 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather   feather-menu md:hidden    '
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    className={` transition origin-left ${
                      isOpen && 'rotate-45 -translate-y-1'
                    }`}
                    x1='3'
                    y1='6'
                    x2='21'
                    y2='6'
                  ></line>
                  <line
                    className={` transition ${isOpen && 'opacity-0'}`}
                    x1='3'
                    y1='12'
                    x2='21'
                    y2='12'
                  ></line>
                  <line
                    className={` origin-left transition ${
                      isOpen && '-rotate-45 translate-y-1'
                    }`}
                    x1='3'
                    y1='18'
                    x2='21'
                    y2='18'
                  ></line>
                </svg>

                <Button
                  className='hidden md:inline-flex items-center mr-6'
                  variant='secondary'
                  onClick={() => router.push('/influencers')}
                >
                  Learn More
                </Button>
              </div>
            </section>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className='overflow-hidden '
                >
                  <div className='flex  flex-col py-4   items-center gap-4'>
                    {navLinks.map((link) => {
                      return (
                        <a key={link.label} className='' href={link.href}>
                          {link.label}
                        </a>
                      )
                    })}

                    <Button
                      className='bg-[#3BB77E] hover:bg-[#2ea46c] text-gray-50 py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105'
                      variant='secondary'
                      onClick={() => router.push('/influencers')}
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <div className='pb-[30px]  md:pb-[30px]'></div>
    </>
  )
}

'use client'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Music } from 'lucide-react'
import { SiTiktok } from 'react-icons/si'

export default function Footer() {
  const logoImage = '/komas pax green.svg'

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/komas500/',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://web.facebook.com/profile.php?id=61574397261627',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/komas500global?igsh=OTZzN2IzbmFmeDM1',
    },
    {
      name: 'TikTok',
      icon: SiTiktok,
      url: 'https://www.tiktok.com/@komas500global',
    },
  ]

  return (
    <footer className='bg-neutral-950 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='w-full h-full'
          style={{
            background: `
              linear-gradient(135deg, #2a7a5a 0%, transparent 30%),
              radial-gradient(circle at 20% 50%, #2a7a5a 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, #2a7a5a 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className='relative z-10 max-w-6xl mx-auto px-4 py-12'>
        <div className='grid gap-8 md:gap-12'>
          {/* Top Section - Logo & Social Links */}
          <div className='flex flex-col md:flex-row items-center md:justify-between gap-8'>
            {/* Logo Section */}
            <div className='flex flex-col justify-center mb-6'>
              <div className='w-[120px] h-[60px] relative md:w-[150px]'>
                <Image
                  src={logoImage}
                  alt='KOMAS Logo'
                  fill
                  priority
                  style={{ objectFit: 'cover', borderRadius: '0.375rem' }}
                />
              </div>
              <p className='text-white/90 text-xl font-bold'>
                <span style={{ color: '#2a7a5a' }}>Komas500</span> Global
              </p>
            </div>

            {/* Social Media Links */}
            <div className='flex flex-col items-center md:items-end'>
              <p className='text-white/80 text-sm font-medium mb-4'>
                Connect With Us
              </p>
              <div className='flex gap-3'>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='group relative w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 transition-all duration-300 hover:border-[#2a7a5a] hover:bg-[#2a7a5a]/10 hover:scale-110'
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent
                        size={20}
                        className='text-white/60 group-hover:text-[#2a7a5a] transition-colors duration-300'
                      />

                      {/* Hover Effect Ring */}
                      <div className='absolute inset-0 rounded-full ring-2 ring-[#2a7a5a] ring-opacity-0 group-hover:ring-opacity-50 transition-all duration-300 scale-0 group-hover:scale-110' />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='h-px bg-gradient-to-r from-transparent via-white/20 to-transparent' />

          {/* Middle Section - Launch Info & Address */}
          <div className='grid md:grid-cols-2 gap-8 text-center md:text-left'>
            {/* Launch Information */}
            <div className='space-y-3'>
              <h3 className='text-white/90 font-semibold text-lg mb-4'>
                Launch Details
              </h3>
              <div className='space-y-2'>
                <p className='text-white/70'>
                  <span className='font-medium' style={{ color: '#2a7a5a' }}>
                    Date:
                  </span>{' '}
                  July 23rd, 2025
                </p>

                <p className='text-white/60 text-sm'>
                  Shop and pickup directly on campus
                </p>
              </div>
            </div>

            {/* Address & Contact */}
            <div className='space-y-3'>
              <h3 className='text-white/90 font-semibold text-lg mb-4'>
                Address
              </h3>
              <div className='space-y-2'>
                <p className='text-white/70'>
                  No 45 East West Rd Mercy Land Rumuigbo
                </p>
                <p className='text-white/70'>Port Harcourt, Rivers State</p>
                <p className='text-white/70'>Nigeria</p>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className='text-center pt-4 border-t border-white/10'>
            <p className='text-white/80 text-sm'>
              © 2025{' '}
              <span className='font-bold' style={{ color: '#2a7a5a' }}>
                Komas500
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

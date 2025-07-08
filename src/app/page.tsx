import CTA from '@/components/CTA'
import FeaturedProducts from '@/components/featuredProducts'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero2'
import InfluencerSection from '@/components/influencerSection'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      <Hero />
      <FeaturedProducts />
      <InfluencerSection />
      <CTA />

      {/* <Footer /> */}
    </>
  )
}

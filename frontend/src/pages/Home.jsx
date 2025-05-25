import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import CarouselSection from '../components/CarouselSection'
import CategorySection from '../components/CategorySection'
import MedicineSection from '../components/MedicineSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      paddingTop: '64px'
    }}>
      <Header />
      <HeroSection/>
      <CarouselSection />
      <CategorySection/>
      <MedicineSection />
      <Footer />
    </div>
  )
}

export default Home

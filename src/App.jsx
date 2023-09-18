import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CategoryCard from './components/CategoryCard'
import Category from './components/Category'
import FeatureSection from './components/FeatureSection'
import BreakFast from './components/BreakFast'
import Banner from './components/Banner'
import BlogSection from './components/BlogSection'
import NewsLetter from './components/NewsLetter'
import Service from './components/Service'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Category />
      <FeatureSection />
      <BreakFast />
      <Banner />
      <BlogSection />
      <NewsLetter />
      <Service />
      <Footer />
    </main>
  )
}

export default App

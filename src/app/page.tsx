import React from 'react'
import HeroSection from '../components/Components/HeroSection'
import ProductSlider from '@/components/Components/ProductSlider'
import Faqs from '@/components/Components/Faqs'
import Banner from '@/components/Components/Banner'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <ProductSlider/>
    <Faqs/>  
    <Banner/>
    </>
  )
}
export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import WestDigital from '../components/bots/westerndigital'
import Feature from "../components/Feature"

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <WestDigital />
      <Feature />
      <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Xray from '../components/bots/xray'
import Feature from "../components/Feature"

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Feature />
      <Xray />
      <Footer />
    </div>
  )
}

export default Home
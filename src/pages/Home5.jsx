import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Xray from '../components/bots/xray'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Xray />
      <Footer />
    </div>
  )
}

export default Home
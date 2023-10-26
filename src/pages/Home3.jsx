import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Tiaa from '../components/bots/tiaa'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Tiaa />
      <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Lpl from '../components/bots/lpl'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Lpl />
      <Footer />
    </div>
  )
}

export default Home
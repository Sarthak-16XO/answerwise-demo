import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Tiaa from '../components/bots/tiaa'
import Feature from "../components/Feature"

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Tiaa />
      <Feature />
      <Footer />
    </div>
  )
}

export default Home
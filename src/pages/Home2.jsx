import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Lpl from '../components/bots/lpl'
import Feature from "../components/Feature"

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Lpl />
      <Feature />
      <Footer />
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Float from '../components/float'
import Feature from "../components/Feature"

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Feature />
      <Float />
      <Footer />
    </div>
  )
}

export default Home
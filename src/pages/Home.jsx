import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Float from '../components/float'

const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Float />
      <Footer />
    </div>
  )
}

export default Home
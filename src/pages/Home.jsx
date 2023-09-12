import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ads from '../components/Ads'
import Footer from '../components/Footer'
import Castes from '../components/Castes'
import Float from '../components/float'


const Home = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Castes />
      <Ads />
      <Footer />
    </div>
  )
}

export default Home
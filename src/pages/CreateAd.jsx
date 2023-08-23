import React from 'react';
import Navbar from '../components/Navbar'
import Form from '../components/Form';
import Footer from '../components/Footer'

const FormPage = () => {
  return (
    <div className='h-max w-full'>
      <Navbar />
      <Form />
      <Footer />
    </div>
  )
}

export default FormPage
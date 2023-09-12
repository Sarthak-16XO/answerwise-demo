import React from 'react'
import { Link } from 'react-router-dom';
import Image from "../hero-image.png"

const Hero = () => {
    return (
        <>
            <section class="bg-red-400 w-full">
                <div className="flex flex-col md:flex-row justify-center text-center  md:text-left items-center align-center height: 100vh">
                    <div className='p-6 md:p-16'>
                        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight text-white leading-none md:text-5xl xl:text-6xl ">Find Your Perfect Match</h1>
                        <p class="max-w-2xl mb-6  text-white mt-10 lg:mb-8 md:text-lg lg:text-xl ">Discover True Love and Lasting Connections on Our Matrimonial Platform.</p>
                        <Link to="/createad" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                            <p className='text-white'>Post your Ad</p>
                        </Link>
                    </div>
                    <div className='p-0 mb-6 md:p-10'>
                        <img src={Image} alt="hero" height={200} width={400} />
                    </div>
                </div>
            </section>
        </>
    )  
}

export default Hero
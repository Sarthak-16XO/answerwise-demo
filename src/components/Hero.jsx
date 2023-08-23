import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <section class="bg-red-400 ">
                <div className="flex justify-center text-center align-center height: 100vh">
                    <div className='p-16'>
                        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight text-white leading-none md:text-5xl xl:text-6xl ">Find Your Perfect Match</h1>
                        <p class="max-w-2xl mb-6  text-gray-800 lg:mb-8 md:text-lg lg:text-xl ">Discover True Love and Lasting Connections on Our Matrimonial Platform.</p>
                        <Link to="/createad" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                            Post your Ad
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )  
}

export default Hero
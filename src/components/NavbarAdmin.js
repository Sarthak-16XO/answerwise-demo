import React from 'react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <>
            <nav class="bg-white border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Admin</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <Link to="/admin/castechanges">
                                <p href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Caste</p>
                            </Link>
                            <Link to="/admin/religionchanges">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Religion</p>
                            </Link>
                            <Link to="/admin/citychanges">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">City</p>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarAdmin
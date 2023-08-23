import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>

            <nav class="bg-white border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Admin</span>
                    </a>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <Link to="/createad">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">CreateAd</p>
                            </Link>
                            <Link to="/grooms">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Grooms</p>
                            </Link>
                            <Link to="/brides">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Brides</p>
                            </Link>
                            <Link to="/religion">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Religion</p>
                            </Link>
                            <Link to="/caste">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Castes</p>
                            </Link>
                            <Link to="/city">
                                <p href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">City</p>
                            </Link>
                            <Link to="/nri"
                            >
                                <p className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '> NRI</p>
                            </Link>

                            {/* Dropdown */}
                            <div className="relative group inline-block">
                                <button
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                >
                                    More
                                </button>
                                {showDropdown && (
                                    <ul className="absolute left-0 mt-2 w-40 py-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                                        <li>
                                            <Link
                                                to="/manglik"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Manglik
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/widow"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Widow
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/divorcee"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Divorcee
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/physically-challenged"
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                Physically Challenged
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>
                            {/* End of Dropdown */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { HiOutlineLogout } from "react-icons/hi";
import { TiAttachmentOutline } from "react-icons/ti";
import { TbApi } from "react-icons/tb";
import { TbMessageChatbot } from "react-icons/tb"
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai"

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>

            <nav class="bg-white border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Matrimonial</span>
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
                                    className="flex flex-row items-center gap-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                >
                                    <p>More</p>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
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
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-slate-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-3 sm:px-3">
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
                                        className="flex flex-row items-center gap-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                    >
                                        <p>More</p>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
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

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </header>

    )
}

export default Navbar
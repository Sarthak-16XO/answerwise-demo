import React from 'react'

const Footer = () => {
    return (

        <footer class="bg-white text-white   shadow-lg shadow-slate-300">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <div className="cursor-pointer bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-200 bg-clip-text font-display text-transparent mt-4 font-semibold text-xl md:text-3xl mb-2">
                            AnswerWise.ai
                        </div>
                        <p className="text-lg text-gray-800">Autonomous AI agents for growth</p>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className="md:mr-8 mb-8 md:mb-0">
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Product</h2>
                            <ul className="text-gray-800">
                                <li>Home</li>
                                <li>Pricing</li>
                                <li>Integrations</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                        <div className="md:mr-8 mb-8 md:mb-0">
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Developers</h2>
                            <ul className="text-gray-800">
                                <li>Documentation</li>
                                <li>Quick start</li>
                                <li>API Reference</li>
                                <li>API Status</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Resources</h2>
                            <ul className="text-gray-800">
                                <li>Blog</li>
                                <li>Support</li>
                                <li>Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">AnswerWise.ai</a> All Rights Reserved.
                    </span>
                    <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
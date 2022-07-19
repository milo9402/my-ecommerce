import React from 'react'
import type { NextPage } from 'next'

const About: NextPage = () => {
    return (
        <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-12">
                        <h5 className="text-base md:text-lg text-indigo-700 mb-1">See Our Recent News</h5>
                        <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold">Tailwind Css Responsive Cards</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src="https://picsum.photos/id/188/720/400" alt="blog"/>
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">October 29,
                                        2021</h2>
                                    <h1 className="text-2xl font-semibold mb-3">Cities are crowded</h1>
                                    <p className="leading-relaxed mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                                        fuga! Dolores quisquam eius cum accusamus?</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                     </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )
}

export default About;

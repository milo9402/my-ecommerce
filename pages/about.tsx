import React from 'react'
import type { NextPage } from 'next'

const About: NextPage = () => {
    return (
        <>

            <div 
                className="py-20 bg-cover bg-no-repeat bg-fixed"
                style={{backgroundImage: "url(https://plopdo.com/wp-content/uploads/2021/07/Screenshot-1-1210x642.png?crop=1)"}}
            >
                <div className="container m-auto text-center px-6 opacity-100">
                    <h2 className="text-4xl font-bold mb-2 text-white">Amor por el desarrollo Frontend</h2>
                    <h3 className="text-2xl font-semibold mb-8 text-gray-200">Soy Camilo Castrillon, ingeniero de sistemas y desarrollador Frontend y quiero que conozcas un poco de acerca de mi.</h3>
                </div>
            </div>
        
                <section className="container mx-auto px-6 p-10 bg-gray-100">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Mi trabajo</h2>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 pr-10">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Softseguros</h4>
                    <p className="text-gray-600 mb-8">Their primary target will be the power generators. Prepare to open the shield. Sir, Rebel ships are coming into our sector. Good. Our first catch of the day. Stand by, ion control....Fire! The first transport is away.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                    <img style={{height:'200px'}} className="rounded-lg" src="https://www.softwaredoit.es/logotipos/softseguros.jpg?t=2022-04-11_15_48_19" alt="Softseguros" />
                    </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 ">
                    <img style={{height:'200px'}} className="rounded-lg " src="https://ii.ct-stc.com/1/logos/empresas/2021/01/13/servitel-red-interactiva-0610F77FD48FAC31180715thumbnail.png" alt="Servitel" />
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Servitel</h4>
                    <p className="text-gray-600 mb-8">We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</p>
                    </div>
                </div>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2 pr-10">
                    <h4 className="text-3xl text-gray-800 font-bold mb-3">Merqueo</h4>
                    <p className="text-gray-600 mb-8">There is no try. I can't. It's too big. Size matters not. Look at me. Judge me by my size, do you? Hm? Mmmm. And well you should not. For my ally in the Force. And a powerful ally it is.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                    <img style={{height:'200px'}} className="rounded-lg" src="https://marketing4ecommerce.co/wp-content/uploads/2018/06/merqueo-logo-imagen-merqueo.png" alt="Merqueo" />
                    </div>
                </div>
                </section>
                
                <section className="bg-gray-100">
                    <div className="container mx-auto px-6 py-20">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contacto</h2>
                        <div className="flex flex-wrap">
                        
                        <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                            <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                            <p className="text-gray-800 text-base px-6 mb-5">How are you feeling, kid? You don't look so bad to me. In fact, you look strong enough to pull the ears off a Gundark. Thanks to you.</p>
                            <p className="text-gray-500 text-xs md:text-sm px-6">Github</p>
                            </div>
                        </div>
                        
                        <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                            <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                            <p className="text-gray-800 text-base px-6 mb-5">That's two you owe me, junior. Well your Worship, looks like you managed to keep me around for a little while longer. I had nothing to do with it.</p>
                            <p className="text-gray-500 text-xs md:text-sm px-6">Linkedin</p>
                            </div>
                        </div>
                        
                        <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                            <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                            <p className="text-gray-800 text-base px-6 mb-5">General Rieekan thinks it's dangerous for any ships to leave the system until we've activated the energy shield. That's a good story. I think you just can't bear to let a gorgeous guy like me out of your sight</p>
                            <p className="text-gray-500 text-xs md:text-sm px-6">Email</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                
        </>
    )
}

export default About;

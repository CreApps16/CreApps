import Banner2 from 'Components/Banner2';
import Navbar2 from 'Components/Navbar2';
import React from 'react';
import Nosotros1 from 'Media/nosotros.png'
import Infocard from 'Components/Infocard';
import Footer from 'Components/Footer';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';

const Nosotros = () => {
    return (
        <div className='font-["verdana"] w-full'>
            <Navbar2/>
            <Banner2
                title='About us' 
                text='we started in 2022, with the purpose of creating and developing any application for small businesses and startups'
                image={Nosotros1}
            />
             <div className='bg-blue-100 text-center p-4 sm:p-6 '>
                        <h1 className='font-bold sm:text-4xl text-3xl sm:w-fit m-auto p-2  text-gray-800 text-shadow-xl'>
                            Programming Apps
                        </h1>
                <h3 className='text-xl text-left sm:text-2xl mt-4 sm:mt-4 sm:px-40 '>
                    We are a software Development Companny and consulting on technological projects for all ours customers nedds to get agility in their process.
                </h3>
                    <div className='flex flex-col sm:flex sm:flex-row sm:justify-evenly w-full sm:w-full sm:space-x-11 mt-16 h-full sm:h-full '>

                            <Infocard
                            image={Movil}
                            text='Mobile Apps'
                            />
                            <Infocard
                            image={Web}
                            text='Web Aplications/Platforms'
                            />
                            <Infocard
                            image={Diu}
                            text='User Interfaces Dessign (UX/UI)'
                            />
                            <Infocard
                            image={Pdigitales}
                            text='Digital Products Development'
                            />
                    </div>
            </div>
                        


            
            <Footer/>
        </div>
    )
}

export default Nosotros

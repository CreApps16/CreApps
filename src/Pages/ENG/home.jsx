import React from 'react';
import Navbar2 from 'Components/Navbar2';
import Banner2 from 'Components/Banner2';
import Footer2 from 'Components/Footer2';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';
import Creapps from 'Media/1color.png'
import Infocard from 'Components/Infocard';


import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
            <Navbar2/>
            <Banner2
                title='Hire an Experienced Software Development Team'
                text='To build your web platform or ecommerce. Fast, easy, reliable.'
                image={Creapps}
            /> 
            {/* <div className='w-full h-full'>
                Hi this is the English page! 
            </div> */}
            <div className='bg-blue-100 text-center p-4 sm:p-6 '>
               
                    <div className='flex flex-col sm:flex sm:flex-row p-2 sm:w-fit m-auto sm:place-items-start'>
                        <h1 className='font-bold sm:text-4xl text-4xl sm:w-fit m-auto   text-gray-800 text-shadow-xl'>
                            Our Services
                        </h1>
                        <div className=' font-extrabold text-2xl sm:w-fit mx-auto sm:mx-4 mt-3 text-orange-500'>
                            <button><Link to='/plans'>Explore ></Link></button>
                        </div>

                    </div>

                    <h3 className='text-xl text-left sm:text-2xl sm:mt-4 sm:px-40'>
                    Small and medium sized businesses use software to reduce costs, optimize processes and drive growth. We provide on demand teams on a flexible contract to develop all your software needs.
                    </h3>
                    <div className='flex flex-col sm:flex sm:flex-row sm:justify-evenly w-full sm:w-full sm:space-x-11 mt-16 h-full sm:h-full '>

                                <Infocard
                                image={Movil}
                                text='Mobil Apps'
                                />
                                <Infocard
                                image={Web}
                                text='Web Aplications/Platforms'
                                />
                                <Infocard
                                image={Diu}
                                text='User Interfaces Dessign (UI)'
                                />
                                <Infocard
                                image={Pdigitales}
                                text='Digital Products Development'
                                />

                

                    </div>
                
            </div>

            <Footer2/>
        </div>
    )
}

export default Home;

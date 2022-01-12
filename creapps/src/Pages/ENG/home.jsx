import React from 'react';
import Navbar2 from 'Components/Navbar2';
import Banner2 from 'Components/Banner2';
import Footer2 from 'Components/Footer2';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar2/>
            <Banner2
                title='Hire an Experienced Software Development Team'
                text='To build your web platform or ecommerce. Fast, easy, reliable.'
            
            /> 
            {/* <div className='w-full h-full'>
                Hi this is the English page! 
            </div> */}
            <div className='bg-blue-100 text-center p-10 '>
                <div>
                    <div className='flex flex-row p-6 ml-24'>
                        <h1 className=' font-bold text-4xl p-2 m-3 text-gray-800'>
                            Our Services
                        </h1>
                        <div className=' font-extrabold text-2xl p-2 ml-0 m-6 text-orange-500'>
                            <Link to='/plans'><button>Explore ></button></Link>
                        </div>

                    </div>

                    <h3 className='text-2xl px-40'>
                    Small and medium sized businesses use software to reduce costs, optimize processes and drive growth. We provide on demand teams on a flexible contract to develop all your software needs.
                    </h3>
                    <div className='flex flex-row justify-center space-x-12 mt-16 h-full '>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Movil} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl '>
                                                <br />
                                                Mobil Apps
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Web} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl'>
                                                <br />
                                                Web Aplications/Platforms
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Diu} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl'>
                                                <br />
                                                User Interfaces Dessign (UI)
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Pdigitales} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl'>
                                                <br />
                                                Digital Products Development
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    </div>
                </div>
            </div>

            <Footer2/>
        </div>
    )
}

export default Home;

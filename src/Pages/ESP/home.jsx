import React from 'react';
import Navbar from 'Components/Navbar';
import Banner from 'Components/Banner';
import Footer from 'Components/Footer';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';
import business from 'Media/business.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='font-["verdana"] w-full'>
            <Navbar/>
            <Banner
                title='Contrata un Equipo de Desarrollo Manejado por CreApps'
                text='Para desarrollar tu plataforma web o ecommerce. Rápido y fácil.'
                image={business}
            /> 
            
            <div className='bg-blue-100 text-center p-10 '>
                <div>
                    <div className='flex flex-row p-6 ml-24'>
                        <h1 className=' font-bold text-4xl p-2 m-3 text-gray-800'>
                            Nuestros Servicios
                        </h1>
                        <div className=' font-extrabold text-2xl p-2 ml-0 m-6 text-orange-500'>
                            <Link to='/planes'><button>Explorar ></button></Link>
                        </div>

                    </div>

                    <h3 className='text-2xl px-40'>
                    Las pequeñas y medianas empresas utilizan software para reducir costos, optimizar procesos e impulsar el crecimiento. Proporcionamos equipos bajo demanda con un contrato flexible para desarrollar todas sus necesidades de software.
                    </h3>
                    <div className='flex flex-row justify-center space-x-12 mt-16 h-full '>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Movil} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                Aplicaciones Móviles
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Web} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                Aplicaciones Web/Plataformas
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Diu} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                Diseño de Interfaces de Usuario (UI)
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <img src={Pdigitales} alt='imagen de movil' className='p-7'></img>
                                            <div className='text-center mb-6 font-bold text-2xl p-5'>
                                                <br />
                                                Desarrollo de Productos Digitales
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;

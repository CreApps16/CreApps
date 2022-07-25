import React from 'react';
import Navbar from 'Components/Navbar';
import Banner from 'Components/Banner';
import Footer from 'Components/Footer';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';
import Creapps from 'Media/1color.png'
import { Link } from 'react-router-dom';
import Infocard from 'Components/Infocard';

const Home = () => {
    return (
        <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
            
            <Navbar/>
            <Banner
                title='Contrata un Equipo de Desarrollo Manejado por AndreyCan'
                text='Para desarrollar tu plataforma web o ecommerce. Rápido y fácil.'
                image={Creapps}
            /> 
            
            <div className='bg-blue-100 text-center p-4 sm:p-6 '>
                
                    <div className='flex flex-col sm:flex sm:flex-row p-2 sm:w-fit m-auto sm:place-items-start'>
                        <h1 className=' font-bold sm:text-4xl text-4xl sm:w-fit m-auto   text-gray-800 text-shadow-xl'>
                            Nuestros Servicios
                        </h1>
                        <div className=' font-extrabold text-2xl sm:w-fit mx-auto sm:mx-4 mt-3 text-orange-500'>
                            <button><Link to='/planes'>Explorar ></Link></button>
                        </div>

                    </div>

                    <h3 className='text-xl text-center sm:text-2xl sm:mt-4 sm:px-40'>
                    Las pequeñas y medianas empresas utilizan software para reducir costos, optimizar procesos e impulsar el crecimiento. 
                    Proporcionamos soluciones modernas y ágiles que ayudarán en los procesos de tu negocio.
                    </h3>
                    <div className='flex flex-col sm:flex sm:flex-row sm:justify-evenly w-full sm:w-full sm:space-x-11 mt-16 h-full sm:h-full '>

                                <Infocard
                                image={Movil}
                                text='Aplicaciones Móviles'
                                />
                                <Infocard
                                image={Web}
                                text='Aplicaciones Web/Plataformas'
                                />
                                <Infocard
                                image={Diu}
                                text='Diseño de Interfaces de Usuario (UX/UI)'
                                />
                                <Infocard
                                image={Pdigitales}
                                text='Desarrollo de Productos Digitales    '
                                />
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
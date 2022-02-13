import React from 'react'
import Banner from 'Components/Banner';
import Navbar from 'Components/Navbar';
import ContactButton from 'Components/ContactButton';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';
import Footer from 'Components/Footer';
import Puzzle from 'Media/puzzle.jpg'
import Infocard from 'Components/Infocard';


const Planes = () => {
    return (
        <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
            <Navbar/>
            <div className='bg-gray-200 font-["verdana"]'>
                <Banner 
                    title='Planes'
                    text='Cientos de empresas han transformado sus negocios con nuestros servicios.'
                    image={Puzzle}/>

                <div className='bg-gray-200 sm:h-full'>
                        <h1 className='text-center text-2xl sm:text-3xl mt-10 font-bold text-gray-800'>
                            Conoce nuestros planes sobre demanda
                        </h1>

                        <div className='flex flex-col p-3 sm:flex sm:flex-row sm:justify-evenly w-full sm:w-full sm:space-x-11 mt-16 h-full sm:h-full '>

                            <div className='bg-white rounded-xl w-full sm:w-80 hover:scale-110 transition-transform mb-10' >
                                <div className='flex flex-col col-span-3 '>
                                    <div>
                                        <div className='text-center font-bold text-2xl p-4'>
                                            Plan
                                            <br />
                                            Startup
                                        </div>
                                            <br />
                                        <h1 className='text-center font-bold text-3xl'>$ 3.000</h1>
                                        <p className='text-center'>USD por mes</p>
                                        <br />
                                        <p className='text-center'>Equipo conformado por:
                                            <br />
                                            1 Project manager*
                                            <br />
                                            1 Diseñador UI
                                            <br />
                                            1 Desarrollador FullStack Jr.
                                        </p>
                                        <br />
                                        <div  className='mx-auto my-3 mb-8 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                            <ContactButton text='Contratar este plan' />
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            <div className='bg-white rounded-xl w-full sm:w-80 hover:scale-110 transition-transform mb-10'>
                                <div className='flex flex-col col-span-3 '>
                                    <div>
                                        <div className='text-center font-bold text-2xl p-4'>
                                            Plan
                                            <br />
                                            Scaleup
                                        </div>
                                            <br />
                                        <h1 className='text-center font-bold text-3xl'>$ 5.000</h1>
                                        <p className='text-center'>USD por mes</p>
                                        <br />
                                        <p className='text-center'>Equipo conformado por:
                                            <br />
                                            1 Project manager
                                            <br />
                                            1 Diseñador UI
                                            <br />
                                            1 Desarrollador FullStack Jr.
                                        </p>
                                        <br />
                                        <div  className='mx-auto my-3 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                            <ContactButton text='Contratar este plan' />
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            <div className='bg-white rounded-xl w-full sm:w-80 hover:scale-110 transition-transform mb-10'>
                                <div className='flex flex-col col-span-3 '>
                                    <div>
                                        <div className='text-center font-bold text-2xl p-4'>
                                            Plan
                                            <br />
                                            CreApp
                                        </div>
                                            <br />
                                        <h1 className='text-center font-bold text-3xl'>Consulta</h1>
                                        <p className='text-center'></p>
                                        <br />
                                        <p className='text-center'>Equipo dedicado, conformado de acuerdo a las necesidades de la empresa o proyecto.
                                            
                                        </p>
                                        <br />
                                        <div  className='mx-auto my-3 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                            <ContactButton text='Solicitar información' />
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>

                        </div>

                        <h1 className='text-center text-3xl mt-20 font-bold text-gray-800'>
                            Desarrollo de Software
                        </h1>
                        <div className='flex flex-col p-2 sm:flex sm:flex-row sm:justify-evenly w-full sm:w-full sm:space-x-11 mt-8 h-full sm:h-full '>

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
            </div>
            <Footer/> 
        </div>

                        

                


            
        
    )
}

export default Planes

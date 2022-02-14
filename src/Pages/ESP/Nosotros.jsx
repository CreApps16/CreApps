import Banner from 'Components/Banner';
import Navbar from 'Components/Navbar';
import React from 'react';
import Nosotros1 from 'Media/nosotros.png'
import Footer from 'Components/Footer';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';
import Infocard from 'Components/Infocard';

const Nosotros = () => {
    return (
        <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
            <Navbar/>
            <Banner
                title='Nosotros' 
                text='Empezamos con la misión de llevarle tecnología a cualquier empresa grande o pequeña.'
                image={Nosotros1}
            />
            <div className='bg-blue-100 text-center p-4 sm:p-6 '>
                        <h1 className='font-bold sm:text-4xl text-3xl sm:w-fit m-auto p-2  text-gray-800 text-shadow-xl'>
                            Programming Apps
                        </h1>
                <h3 className='text-xl text-left sm:text-2xl mt-4 sm:mt-4 sm:px-40 '>
                    Somos una empresa de Desarrollo de Software y consultoría en proyectos técnlogicos aplicando la tecnologia del desarrollo
                    de software en soluciones que se adaptan a las necesidades de nuestros clientes, permitiendoles agilizar sus procesos.
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

export default Nosotros

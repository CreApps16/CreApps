import React from 'react'
import Banner from 'Components/Banner'
import Footer from 'Components/Footer'
import Navbar from 'Components/Navbar'
import Nosotros1 from 'Media/nosotros.png'


const Clientes = () => {
  return (
    <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
        <Navbar/>
            <Banner
                title='Nosotros' 
                text='Empezamos con la misión de llevarle tecnología a cualquier empresa grande o pequeña.'
                image={Nosotros1}
            />
            <div  className='bg-blue-100 text-center p-4 sm:p-6 '>
            <h1 className='font-bold sm:text-4xl text-3xl sm:w-fit m-auto p-2  text-gray-800 text-shadow-xl'>
                            Programming Apps
                        </h1>
            </div>
            <Footer/>
    </div>
  )
}

export default Clientes
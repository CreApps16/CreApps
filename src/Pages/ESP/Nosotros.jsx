import Banner from 'Components/Banner';
import Navbar from 'Components/Navbar';
import React from 'react';
import Nosotros1 from 'Media/nosotros.png'

const Nosotros = () => {
    return (
        <div className='font-["verdana"] w-full'>
            <Navbar/>
            <Banner
                title='Nosotros' 
                text='Empezamos con la misión de llevarle tecnología a cualquier empresa grande o pequeña.'
                image={Nosotros1}
            />
            <div >
                Hola soy la informacion de la pagina Nosotros
            </div>
        </div>
    )
}

export default Nosotros

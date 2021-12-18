import Banner from 'Components/Banner';
import Navbar from 'Components/Navbar';
import React from 'react';

const Nosotros = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar/>
            <Banner
                title='Nosotros' 
                text='Empezamos con la misión de llevarle tecnología a cualquier empresa grande o pequeña.'
            
            />
            <div >
                Hola soy la informacion de la pagina Nosotros
            </div>
        </div>
    )
}

export default Nosotros

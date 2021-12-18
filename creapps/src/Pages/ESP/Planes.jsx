import React from 'react'
import Banner from 'Components/Banner';
import Navbar from 'Components/Navbar';

const Planes = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar/>
            <Banner 
                title='Planes'
                text='Cientos de empresas han transformado sus negocios con nuestros servicios.'
            
            />
            <div className='font-["verdana"]'>
                Hola soy la informacion de la pagina Planes
            </div>

            
        </div>
    )
}

export default Planes

import Banner2 from 'Components/Banner2';
import Navbar2 from 'Components/Navbar2';
import React from 'react';

const Nosotros = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar2/>
            <Banner2
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

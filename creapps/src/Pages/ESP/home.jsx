import React from 'react';
import Navbar from 'Components/Navbar';
import Banner from 'Components/Banner';

const Home = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar/>
            <Banner
                text='Hola soy el texto en la pagina home'
            
            /> 
            <div>
                Hola soy la pagina de ahora voy a poner todo mi contenido en esta pagina 

            </div>
        </div>
    )
}

export default Home;

import React from 'react';
import Navbar from 'Components/Navbar';
import Banner from 'Components/Banner';

const Home = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar/>
            <Banner
                title='Contrata un Equipo de Desarrollo Manejado por CreApps'
                text='Para desarrollar tu plataforma web o ecommerce. Rápido y fácil.'
            
            /> 
            <div>
                Hola soy la pagina de ahora desplegada y con el nuevo nombre! 

            </div>
        </div>
    )
}

export default Home;

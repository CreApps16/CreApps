import Banner2 from 'Components/Banner2';
import Navbar2 from 'Components/Navbar2';
import React from 'react';

const Nosotros = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar2/>
            <Banner2
                title='About us' 
                text='we started in 2022, with the purpose of creating and developing any application for small businesses and startups'
            
            />
            <div >
                Hello i'm the about us information page
            </div>
        </div>
    )
}

export default Nosotros

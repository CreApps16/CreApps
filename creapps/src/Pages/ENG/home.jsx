import React from 'react';
import Navbar2 from 'Components/Navbar2';
import Banner2 from 'Components/Banner2';

const Home = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar2/>
            <Banner2
                text='Hello, Im the banner on the english page'
            
            /> 
            <div>
                Hi this is the English page! 

            </div>
        </div>
    )
}

export default Home;

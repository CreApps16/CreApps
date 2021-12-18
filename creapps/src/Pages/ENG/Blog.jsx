import React from 'react'
import Banner2 from 'Components/Banner2.jsx';
import Navbar2 from 'Components/Navbar2.jsx';

const Blog = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar2/>
            <Banner2 
                title='Blog'
                text='Contenido sobre tecnología, startups, negocios y mucho más.'
                />
            
            <div>
                Hola soy la informacion de la pagina Blog.
            </div>
        </div>
    )
}

export default Blog

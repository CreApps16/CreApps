import React from 'react'
import Banner from 'Components/Banner.jsx';
import Navbar from 'Components/Navbar.jsx';
import imagenblog from 'Media/imagenblog.png'

const Blog = () => {
    return (
        <div className='font-["verdana"]'>
            <Navbar/>
            <Banner 
                title='Blog'
                text='Contenido sobre tecnología, startups, negocios y mucho más.'
                image={imagenblog}
                />
            
            <div>
                Hola soy la informacion de la pagina Blog.
            </div>
        </div>
    )
}

export default Blog

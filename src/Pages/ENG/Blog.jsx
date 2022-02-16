import React from 'react'
import Banner2 from 'Components/Banner2.jsx';
import Navbar2 from 'Components/Navbar2.jsx';
import Blog1 from 'Media/blog.png'
import Slides from 'Components/Slides';
import Footer2 from 'Components/Footer2';


const Blog2 = () => {
    return (
        <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
        <Navbar2 />
        <Banner2
          title="Blog"
          text="Contenido sobre tecnología, startups, negocios y mucho más."
          image={Blog1}
        />
        <h1 className=" font-bold sm:text-4xl text-4xl sm:w-fit m-auto mt-6 sm:mt-6  text-gray-800 text-shadow-xl">
          Noticias
        </h1>

        <div className="mt-10">
          <Slides />
        </div>
        
        <Footer2 />
      </div>
    )
}

export default Blog2

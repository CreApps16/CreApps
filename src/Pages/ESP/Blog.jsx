import React from 'react'
import Banner from 'Components/Banner.jsx';
import Navbar from 'Components/Navbar.jsx';
import Blog1 from 'Media/blog.png'
import Slides from 'Components/Slides';
import Footer from 'Components/Footer';

const Blog = () => {
    return (
      <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
        <Navbar />
        <Banner
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
        
        <Footer />
      </div>
    );
}

export default Blog

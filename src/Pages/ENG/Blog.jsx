import React from 'react'
import Banner2 from 'Components/Banner2.jsx';
import Navbar2 from 'Components/Navbar2.jsx';
import Blog1 from 'Media/blog.png'


const Blog2 = () => {
    return (
        <div className='font-["verdana"] w-full'>
            <Navbar2/>
            <Banner2 
                title='Blog'
                text='Content on technology, startups, business, and much more.'
                image={Blog1}
                />
            
            <div>
            Hello i'm the Blog information page
            </div>
        </div>
    )
}

export default Blog2

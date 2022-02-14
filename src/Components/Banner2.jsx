import React from 'react'
import ContactButton from 'Components/ContactButton';



const Banner = ( { title, text, image } ) => {
    return (
        <div className='flex flex-col sm:flex sm:flex-row items-center m-0 h-70 rounded-t-md bg-gradient-to-r from-cyan-500 to-blue-600 font-["verdana"] w-full '>
            <div className=' flex flex-col w-full p-2 ' >
                <h1 className=' sm:text-4xl text-2xl text-center sm:text-left sm:my-4 my-4 sm:mx-20  font-bold text-white font-["Rubik, sans-serif"]'>{title}</h1>
                <h3 className='text-xl sm:text-2xl  sm:my-5 sm:mx-20 text-center sm:text-left  sm:font-bold text-white font-["Rubik, sans-serif"] '>
                    {text}
                </h3>
                <div className='place-items-center sm:place-items-center mt-4 sm:mt-4 m-auto sm:m-auto'>
                    <ContactButton text='Contact us' />
                </div>
            </div>
            <div className='w-full h-full sm:w-200 sm:h-200 m-auto  text-center justify-center p-4 sm:p-2'>
                <img className='w-full h-full sm:w-3/4 sm:h-3/4 sm:p-3 rounded-lg text-center sm:m-auto drop-shadow-xl ' src={image} alt="imagen en el banner" /> 
            </div>
        </div>
    )
}

export default Banner

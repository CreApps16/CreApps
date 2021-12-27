import React from 'react'
import ContactButton from 'Components/ContactButton';



const Banner = ( { title, text, image } ) => {
    return (
        <div>
            <div className='w-row'>
                <div className='flex items-stretch my-0 h-75 bg-gradient-to-r from-cyan-500 to-blue-600 font-["verdana"] m-auto'>
                    <div className='mr-30 flex flex-col my-8  ' >
                        <h1 className='text-4xl  my-4 mx-40  font-bold text-white font-["Rubik, sans-serif"] '>{title}</h1>
                        <h3 className='text-2xl my-5 mx-40  font-bold text-white font-["Rubik, sans-serif"] '>
                            {text}
                        </h3>
                        <div  className='ml-40 my-10 bg-gray-800 w-40 h-12 rounded hover:scale-110 transition-transform  text-center   text-white'>
                            <ContactButton text='Contáctanos' />
                        </div>

                    </div>
                    <div className='my-14 mx-20 w-120 h-60 mr-40 rounded'>
                        <img className='bg-blue-600 w-120 h-60 rounded-xl m-2 mr-8' src={image} alt="imagen en el banner" /> 
                    </div>

                </div>
            </div>

                

        </div>
                    

    )
}

export default Banner

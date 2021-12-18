import React from 'react'
import ContactButton from '../Components/ContactButton'



const Footer = () => {
    return (
        <div>
            <div  className='flex-col justify-center space-x-24 mt-500 w-full h-40 text-10xl bg-gray-600'>
                <div className='flex flex-row'> 
                    <div  className='ml-14 my-3 bg-gray-800 w-40 h-12 rounded hover:scale-110 transition-transform  text-center   text-white'>
                        <ContactButton text='Contáctanos' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer

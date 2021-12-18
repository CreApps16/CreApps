import React from 'react'
import ContactButton2 from '../Components/ContactButton2'


const Footer2 = () => {
    return (
        <div>
            <div  className='flex-col justify-center space-x-24 mt-500 w-full h-40 text-10xl bg-gray-600'>
                <div className='flex flex-row'> 
                    <div  className='ml-14 my-3 bg-gray-800 w-40 h-12 rounded hover:scale-110 transition-transform  text-center   text-white'>
                        <ContactButton2 text='Contact us' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer2

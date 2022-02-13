import React from 'react'

const ContactButton = ({ text }) => {
    return (
        
            <button  className='p-2 font-bold m-3 BotonNegro bg-gray-800 w-fit  sm:w-fit h-12 rounded hover:scale-110 transition-transform text-center   text-white' >
                {text}
            </button>
        
    )
}

export default ContactButton

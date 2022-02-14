import React from 'react'
import { PopupButton } from '@typeform/embed-react'

const ContactButton = ({ text }) => {
    return (
        <div className='p-2 font-bold m-3 BotonNegro bg-gray-800 w-fit  sm:w-40 h-fit sm:h-fit rounded hover:scale-110 transition-transform text-center   text-white' >
            <PopupButton id="wyY20RJv" style={{ fontSize: 20 }} className="my-button">
            {text}
            </PopupButton>
        </div>
        
        
            
        
    )
}

export default ContactButton

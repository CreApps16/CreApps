import React from 'react'
import Logo from 'Media/creappscolor.png'
import { Link } from 'react-router-dom'


const Logo1 = () => {
  return (
    <div >
      <Link to='/'>
        <img className='sm:w-96 sm:h-auto sm:ml-8' src={Logo} alt="Logo CreApps" />
      </Link>
        
    </div>
  )
}

export default Logo1
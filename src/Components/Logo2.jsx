import React from 'react'
import Logo from 'Media/creappsblanco.png'
import { Link } from 'react-router-dom'

const Logo2 = () => {
  return (
    <div>
        <Link to='/'>
        <img className='sm:w-3/4 sm:h-3/4 sm:m-auto' src={Logo} alt="Logo CreApps" />
      </Link>
    </div>
  )
}

export default Logo2
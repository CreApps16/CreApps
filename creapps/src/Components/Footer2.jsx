import React from 'react'
import ContactButton2 from '../Components/ContactButton2'
import { NavLink } from 'react-router-dom'



const Footer2 = () => {
    return (
        <div className=' bg-gray-600 '>
            <div className='flex flex-nowrap justify-center h-40 space-x-24 my-0 text-10xl'>
                <div className=' self-auto m-2 mt-5'>
                    Aqui va el logo
                </div>
                <div className='mt-5'>
                    <NavbarLinks/>
                </div>

                <div className='flex flex-row justify-items-center mt-5'>
                    
                    <div  className='ml-14 my-3 bg-gray-800 w-40 h-12 rounded hover:scale-110 transition-transform  text-center   text-white'>
                        <ContactButton2 text='Contáctanos' />
                    </div>
                </div>            
            </div>
        </div>

        
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-nowrap auto-rows-auto justify-items-center content-between p-5 self-auto text-10xl  '>
            <NavbarRoute to='/plans' title='Plans' />
            <NavbarRoute to='/about-us' title='About us' />
            <NavbarRoute to='/blog' title='Blog' />
            <NavbarRoute to='' title='' />
            

        </ul>

    );
};

const NavbarRoute = ({to, title, icon})=>{
    return(
        <li>
            <NavLink
                to={to}
                className={({ isActive }) =>
                isActive
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-sky-700'
                    : ' navbar-route font-bold  text-white hover:text-black hover:bg-green-700'
                }
            >
                <div className='flex items-center'>
                    <i className={icon} />
                    <span className='text-2xl self-auto mx-10 font-["verdana"] '>{title}</span>
                </div>
            </NavLink>
        </li>
    )

}

export default Footer2

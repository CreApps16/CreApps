import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ContactButton from '../Components/ContactButton'
import Logo1 from './Logo1';

const Navbar = () => {
    return (
        <div className='Navbar w-full m-auto flex flex-col sm:flex sm:flex-row sm:m-auto sm:h-fit sm:place-items-center'>
            
                <Logo1/>
                <div className='Links1 sm:w-full h-fit'>
                    <NavbarLinks/>
                </div>

                <div className='flex flex-row place-items-center m-auto sm:w-fit sm:place-items-center sm:justify-end  '>
                    <button className='justify-items-center h-12 text-center border-gray-800 rounded-lg  sm:m-auto sm:ml-4 border-2 font-bold'><i className='fas fa-globe-americas'/><Link to='/ENG'>ENG</Link></button> 
                    <ContactButton text='Contáctanos'/>
                </div>

            
        </div>
    )
}
        

const NavbarLinks = () =>{
    return(
        <div className="flex flex-col justify-around h-36 sm:h-fit sm:flex-row sm:flex  sm:justify-evenly ">
            <NavbarRoute to='/planes' title='Planes' />
            <NavbarRoute to='/nosotros' title='Nosotros' />
            <NavbarRoute to='/blog' title='Blog' />
        </div>

    );
};

const NavbarRoute = ({to, title, icon})=>{
    return(
        <li className='text-center flex flex-col'>
            <NavLink
                to={to}
                className={({ isActive }) =>
                isActive
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-blue-400 text-blue-500'
                    : ' navbar-route font-bold  text-gray-800 hover:text-blue-500 '
                }
            >
            <span className='text-center sm:text-center font-["verdana"] text-xl sm:text-3xl text-shadow-xl'>{title}</span>
            </NavLink>
        </li>
                
            
                
    )

}

export default Navbar;


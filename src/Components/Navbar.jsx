import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ContactButton from '../Components/ContactButton'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-center space-x-24 my-0 text-10xl w-full '>
            <div className=' self-auto m-2 '>
                Aqui va el logito
            </div>
            <div>
                <NavbarLinks/>
            </div>

            <div className='flex flex-row justify-end w-full'>
                <Link to='/ENG'><button className='justify-items-center h-12 text-center border-gray-800 rounded-lg m-3 p-2 border-2 font-bold'><i className='fas fa-globe-americas'/>ENG</button></Link> 
                <div  className='ml-6 my-3 mr-8 bg-gray-800 w-30 h-12 rounded hover:scale-110 transition-transform justify-items-center text-center   text-white'>
                    <ContactButton text='Contáctanos' />
                </div>
            </div>
                
        </div>
            

            
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-nowrap auto-rows-auto justify-items-center content-between self-auto text-10xl m-5 '>
            <NavbarRoute to='/planes' title='Planes' />
            <NavbarRoute to='/nosotros' title='Nosotros' />
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
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-blue-400'
                    : ' navbar-route font-bold  text-gray-700 hover:text-black hover:bg-green-700'
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

export default Navbar;


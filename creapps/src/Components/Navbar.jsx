import React from 'react'
import { NavLink } from 'react-router-dom';
import ContactButton from '../Components/ContactButton'

const Navbar = () => {
    return (
        <div className='flex flex-nowrap justify-center space-x-24 my-0 text-10xl '>
            <div className=' self-auto m-2'>
                Aqui va el logo
            </div>
            <div>
                <NavbarLinks/>
            </div>
            <div >
                <button >ESP</button>
                <ContactButton />
            </div>
        </div>
            

            
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-nowrap auto-rows-auto justify-items-center content-between p-5 self-auto text-10xl  '>
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
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-sky-700'
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


import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ContactButton2 from './ContactButton2'
import Logo1 from './Logo1';

const Navbar = () => {
  return (
    <div className="Navbar w-full m-auto sm: flex flex-col sm:flex sm:flex-row sm:m-auto sm:h-fit sm:place-items-center  bg-white">
      <Logo1 to="/ENG" />
      <div className="Links1 sm:w-full h-fit">
        <NavbarLinks />
      </div>

      <div className="flex flex-row place-items-center m-auto sm:w-fit sm:place-items-center sm:justify-end   ">
        <Link to="/">
          <button className="justify-items-center h-12  text-center border-gray-800 rounded-lg sm:p-0.4 text-sm  sm:m-auto sm:ml-4 border-2 font-semibold">
            <i className="fas fa-globe-americas" />
            ESP
          </button>
        </Link>
        <ContactButton2 text="Contact us" />
      </div>
    </div>
  );
};

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col justify-around h-36 sm:h-fit sm:flex-row sm:flex  sm:justify-evenly  ">
      <NavbarRoute to="/ENG/Plans" title="Plans" />
      <NavbarRoute to="/ENG/About-us" title="About us" />
      <NavbarRoute to="/ENG/Customers" title="Customers" />
      <NavbarRoute to="/ENG/Blog" title="Blog" />
    </ul>
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
                    : ' navbar-route font-semibold  text-gray-800 hover:text-blue-500 hover:scale-110 transition-transform'
                }
            >
                <span className='text-center sm:text-center font-["verdana"] text-xl sm:text-2xl text-shadow-xl'>{title}</span>
            </NavLink>
        </li>
    )

}

export default Navbar;


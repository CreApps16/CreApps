import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo2 from 'Components/Logo2'


const whatsapp = 'https://wa.me/573028473311/?text=Hola!,%20me%20interesa%20recibir%20informacion%20de%20analisis%20agronomico';


const Footer2 = () => {
    return (
        <div className='sm:flex sm:flex-col rounded-md'>
            <div className=' bg-gray-600 w-full text-center h-auto  sm:flex sm:flex-row sm:justify-evenly'>
            

            <div className='Logo w-auto h-fit justify-center  sm:justify-start'> 
                    <img className='w-30 h-20 mt-2 m-auto p-1 text-center sm:w-39 sm:h-28 ' src={Logo2} alt="Logo ProgrammingApps" />
                </div>

                <div className='Links text-center sm:text-3xl sm:text-center mt-2 sm:mt-5 sm:h-24 sm:w-130 sm:justify-evenly'>
                    <NavbarLinks/>
                </div>

                <br />

                <div className='Info text-white sm:flex sm:flex-col sm:my-2 sm:justify-start sm:text-left '>            
                    <p className='font-semibold'><i class="fa-brands fa-whatsapp"></i> WhatsApp:</p>
                    <a href={whatsapp}><p>(+57) 302 847 3311</p></a>
                    <br />
                    
                    <p  className='font-semibold'><i class="fa-solid fa-square-envelope"></i> Email: </p>
                    <p>carlosandressuarez16@gmail.com</p> 
                    <br /> 
                </div>
                <div className='Info text-white sm:flex sm:flex-col sm:my-2 sm:justify-start sm:text-left '>            
                    <p  className='font-semibold'><i class="fa-solid fa-phone"></i> Phone:</p>
                    <p>(601) - 2497314</p>
                    <br />
                    
                    <p  className='font-semibold'><i class="fa-solid fa-map-location-dot"></i> Address: </p>
                    <p>Carrera 102 # 69 - 22</p>
                    <p> Bogotá, Colombia</p>
                    <br /> 
                </div>
                
            
            
            </div>
            <div className=' bg-gray-600 w-full text-center h-full sm:flex sm:flex-row sm:justify-center space-x-5 sm:space-x-10 text-4xl p-2 text-white'>
            <i class="fa-brands fa-facebook"></i> {/* poner etiqueta a de link a Facebook, lo mismo a los demas */}
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
        </div>

        
    )
}

const NavbarLinks = () =>{
    return(
        <ul className='flex flex-col  sm:flex-row  sm:space-x-6 sm:tex-center text-md  '>
            <NavbarRoute to='/ENG/plans' title='Plans' />
            <NavbarRoute to='/ENG/about-us' title='About us' />
            <NavbarRoute to='/ENG/blog' title='Blog' />
            
            

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
                    ? ' navbar-route border-t-2  border-b-2 font-extrabold border-green text-sky-700'
                    : ' navbar-route font-bold  text-white hover:text-black hover:bg-green-700'
                }
            >
                <span className='text-lg sm:text-2xl text-center font-["Arial"] '>
            {title}
          </span>
            </NavLink>
        </li>
    )

}

export default Footer2

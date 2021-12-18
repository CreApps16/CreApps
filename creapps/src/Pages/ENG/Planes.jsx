import React from 'react'
import Banner2 from 'Components/Banner2';
import Navbar2 from 'Components/Navbar2';
import ContactButton2 from 'Components/ContactButton2';

const Planes = () => {
    return (
        <div>
            <Navbar2/>
           <div className='bg-gray-200 font-["verdana"]'>
            <Banner2 
                title='Plans & Pricing'
                text='Your success is our success. Our teams work hard to deliver on the most demanding projects.'
            
            />
            <div className='bg-gray-200 h-full'>
                    <h1 className='text-center text-3xl mt-10 font-bold text-gray-800'>
                    Our plans provide flexibility and value from day one
                    </h1>
                    <div className='flex flex-nowrap justify-center space-x-24 mt-16 h-full '>

                        <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10' >
                            <div className='flex flex-col col-span-3 '>
                                <div>
                                    <div className='text-center font-bold text-2xl'>
                                        Plan
                                        <br />
                                        Startup
                                    </div>
                                        <br />
                                    <h1 className='text-center font-bold text-3xl'>$ 3.000</h1>
                                    <p className='text-center'>USD per month</p>
                                    <br />
                                    <p className='text-center'>Equipo conformado por:
                                        <br />
                                        1 Project manager*
                                        <br />
                                        1 Diseñador UI
                                        <br />
                                        1 Desarrollador FullStack Jr.
                                    </p>
                                    <br />
                                    <div  className='mx-auto my-3 mb-8 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                        <ContactButton2 text='Hire Team' />
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                        <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10'>
                            <div className='flex flex-col col-span-3 '>
                                <div>
                                    <div className='text-center font-bold text-2xl'>
                                        Plan
                                        <br />
                                        Scaleup
                                    </div>
                                        <br />
                                    <h1 className='text-center font-bold text-3xl'>$ 5.000</h1>
                                    <p className='text-center'>USD per month</p>
                                    <br />
                                    <p className='text-center'>Equipo conformado por:
                                        <br />
                                        1 Project manager
                                        <br />
                                        1 Diseñador UI
                                        <br />
                                        1 Desarrollador FullStack Jr.
                                    </p>
                                    <br />
                                    <div  className='mx-auto my-3 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                        <ContactButton2 text='Hire Team' />
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                        <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10'>
                            <div className='flex flex-col col-span-3 '>
                                <div>
                                    <div className='text-center font-bold text-2xl'>
                                        Plan
                                        <br />
                                        CreApp
                                    </div>
                                        <br />
                                    <h1 className='text-center font-bold text-3xl'>Consulta</h1>
                                    <p className='text-center'></p>
                                    <br />
                                    <p className='text-center'>Dedicated team formed according to the needs of the project.
                                        
                                    </p>
                                    <br />
                                    <div  className='mx-auto my-3 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                        <ContactButton2 text='More info' />
                                    </div>

                                </div>
                                
                            </div>
                        </div>

                    </div>
                    

                        

                
            </div>


            
        </div> 
        </div>
        
    )
}

export default Planes

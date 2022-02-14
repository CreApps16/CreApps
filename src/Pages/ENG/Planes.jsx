import React from 'react'
import Banner2 from 'Components/Banner2';
import Navbar2 from 'Components/Navbar2';
import ContactButton2 from 'Components/ContactButton2';
import Movil from 'Media/movil.png';
import Web from 'Media/web.png';
import Diu from 'Media/diseno_iu.png';
import Pdigitales from 'Media/productos-digitales.png';
import Footer2 from 'Components/Footer2';
import Billing from 'Media/billing.png'
import Infocard from 'Components/Infocard';

const Planes = () => {
    return (
        <div className='font-["verdana"] flex flex-col w-full overflow-x-hidden overflow-y-hidden rounded-lg'>
            <Navbar2/>
           <div className='bg-gray-200 font-["verdana"]'>
                <Banner2 
                    title='Plans & Pricing'
                    text='Your success is our success. Our teams work hard to deliver on the most demanding projects.'
                    image={Billing}/>
                <div className='bg-blue-100 h-full'>
                            <h1 className='text-center text-2xl sm:text-3xl mt-10 font-bold text-gray-800'>
                            Our plans provide flexibility and value
                            </h1>
                            <div className='flex flex-col p-3 sm:flex sm:flex-row sm:justify-evenly w-full sm:w-full sm:space-x-11 mt-16 h-full sm:h-full '>

                                <div className='bg-white rounded-xl w-full sm:w-80 hover:scale-110 transition-transform mb-10' >
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <div className='text-center font-bold text-2xl p-4'>
                                                Startup
                                                <br />
                                                Plan
                                            </div>
                                                <br />
                                            <h1 className='text-center font-bold text-3xl'>$ 3.000</h1>
                                            <p className='text-center'>USD per Month</p>
                                            <br />
                                            <p className='text-center'>Shared team consisting of:
                                                <br />
                                                1 Project manager*
                                                <br />
                                                1 UI Dessigner
                                                <br />
                                                1 FullStack Jr Developer.
                                            </p>
                                            <br />
                                            <div  className='mx-auto my-3 mb-8 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                                <ContactButton2 text='Hire this plan' />
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='bg-white rounded-xl w-80 hover:scale-110 transition-transform mb-10'>
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <div className='text-center font-bold text-2xl p-4'>
                                                Scaleup
                                                <br />
                                                Plan
                                            </div>
                                                <br />
                                            <h1 className='text-center font-bold text-3xl'>$ 5.000</h1>
                                            <p className='text-center'>USD per month</p>
                                            <br />
                                            <p className='text-center'>Shared team consisting of:
                                                <br />
                                                1 Project manager
                                                <br />
                                                1 UI Dessigner
                                                <br />
                                                1 FullStack Jr Developer.
                                            </p>
                                            <br />
                                            <div  className='mx-auto my-3 bg-gray-800 w-40 h-18 rounded-lg hover:scale-110 transition-transform  text-center   text-white'>
                                                <ContactButton2 text='Hire this plan' />
                                            </div>

                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='bg-white rounded-xl w-full sm:w-80 hover:scale-110 transition-transform mb-10'>
                                    <div className='flex flex-col col-span-3 '>
                                        <div>
                                            <div className='text-center font-bold text-2xl p-4'>
                                                CreApp
                                                <br />
                                                Plan
                                            </div>
                                                <br />
                                            <h1 className='text-center font-bold text-3xl'>Consult</h1>
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

                            <h1 className='text-center text-3xl mt-20 font-bold text-gray-800'>
                                Software Develpment
                            </h1>
                            <div className='flex flex-col p-2 sm:flex sm:flex-row sm:justify-evenly w-full sm:w-full sm:space-x-11 mt-8 h-full sm:h-full '>

                            <Infocard
                                image={Movil}
                                text='Mobil Apps'
                                />
                                <Infocard
                                image={Web}
                                text='Web Aplications/Platforms'
                                />
                                <Infocard
                                image={Diu}
                                text='User Interfaces Dessign (UI)'
                                />
                                <Infocard
                                image={Pdigitales}
                                text='Digital Products Development'
                                />
                            </div>
                                     
                                                    

                            
                </div>
            </div> 
            <Footer2/>
        </div>

                
        
    )
}

export default Planes

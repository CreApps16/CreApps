import React from 'react'

const Infocard = ({ image, text }) => {
  return (
    <div className="bg-white rounded-xl w-full sm:h-[33rem] sm:w-full sm:m-auto  hover:scale-110 transition-transform mb-10">
      <div className="flex flex-col sm:h-90">
          <img src={image} alt="imagen de movil" className="m-7"></img>
          <div className="text-center align-middle mb-6 font-bold text-2xl sm:p-4 text-shadow-xl">
            <br />
            {text}
            <br />
          </div>
      </div>
    </div>
  );
}
        
          

export default Infocard
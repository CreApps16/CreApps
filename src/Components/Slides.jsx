import 'react-slideshow-image/dist/styles.css'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import image1 from 'Media/Slides/image1.jpg'
import image2 from 'Media/Slides/image2.jpg'
import image3 from 'Media/Slides/image3.jpg'






const Slides = () => {
  return (
    <Slide easing="ease">
      <div className="flex items-center text-center m-auto justify-center h-full sm:h-3/4 sm:w-2/4">
        <img src={image1} alt="" />
      </div>

      <div className="flex items-center text-center m-auto justify-center h-full sm:h-3/4 sm:w-2/4">
        <img src={image2} alt="" />
      </div>

      <div className="flex items-center text-center m-auto justify-center h-full sm:h-3/4 sm:w-2/4">
        <img src={image3} alt="" />
      </div>

      
        


    </Slide>
  );
}

export default Slides
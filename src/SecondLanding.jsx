import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
const SecondLanding = () => {
    //We are sure that some of these sports persons are going to be the torch bearers of our country in the future.
    useEffect(() => {
    
      Aos.init({duration:2000}) //global animations
      
    }, [])
    //Abhivarta marks the importance of sports and celebrates various forms of sports itself. Participation from various colleges from all over the country is noted.
  return (
    <div className='h-screen  text-white pt-20 md:pl-10 md:pr-10'>
        {/* <h1 data-aos = "zoom-in-up"className='text-white text-center md:text-3xl text-2xl font-bold'>Each year, the Extravaganza is held for three days for the complete showcase of budding talent of the students from all around
            and the efforts put it in the months before the fest by our University's students. 
        </h1> */}
        {/* <h1 data-aos = "zoom-in-down" data-aos-duration = "5000"className='text-white font-bold text-center md:text-3xl text-2xl pt-5'>Abhivarta marks the importance of sports and celebrates various forms of sports itself. Participation from various colleges from all over the country is noted.
        </h1>
        <h1  data-aos = "fade-up" className='text-white font-bold text-center md:text-3xl text-2xl pt-5 '>We are sure that some of these sports persons are going to be the torch bearers of our country in the future.
        </h1> */}
    </div>
  )
}

export default SecondLanding
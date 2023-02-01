import React from 'react'
import NavBar from './NavBar'
import SecondLanding from './SecondLanding'
// md:top-1/2 md:bottom-1/2 md:left-1/4 md:right-1/4
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from './Footer';
// import "./fonts/Squartiqa4F.ttf"
const LandingPage = () => {
  //bg-[url('./Dome.png')]
  useEffect(() => {
    
    Aos.init({duration:2000}) //global animations
    
  }, [])
  return (
    <div className='felx justify-center items-center'>
        <NavBar></NavBar>
        {/* <img src = "/banner1.png"></img> */}
        <div  className=' md:h-screen text-center felx pt-20 mt-10  pl-10 pr-10 justify-center items-center'>
        
        <h1 data-aos = "zoom-in"className='text-white text-center text-4xl pt-10 pb-10 md:text-6xl font-bold tracking-wider'
          style={{fontFamily: 'Poppins' , letterSpacing:"4px"}}
        >
            Abhivarta'23
        </h1>
        <h1 data-aos = "zoom-in-up" data-aos-duration = "3000"className='text-white font-bold text-center md:text-3xl text-2xl tracking-wide'
        style={{fontFamily: 'Poppins' , letterSpacing:"5px"}}>ABHIVARTA is a celebration of all forms of sports and talent. </h1>
        <h1 data-aos = "zoom-out-down" className='text-white text-center font-bold  md:text-3xl text-2xl tracking-wide'
        style={{fontFamily: 'Poppins' , letterSpacing:"5px"}}>Each year, the Extravaganza is held for three days for the
            complete showcase of budding talent of the students from all around and the efforts put it in the months before
            the fest by our University's students.</h1>
          
          <h1 data-aos = "zoom-in-down" data-aos-duration = "5000"className='text-white font-bold text-center md:text-3xl text-2xl pt-5'
          style={{fontFamily: 'Poppins' , letterSpacing:"5px"}}>Abhivarta marks the importance of sports and celebrates various forms of sports itself. Participation from various colleges from all over the country is noted.
        </h1>
        <h1  data-aos = "fade-up" className='text-white font-bold text-center md:text-3xl text-2xl pt-5 pb-20'
        style={{fontFamily: 'Poppins' , letterSpacing:"5px"}}>We are sure that some of these sports persons are going to be the torch bearers of our country in the future.
        </h1>
        </div>
        
        {/* <SecondLanding></SecondLanding> */}
        <Footer></Footer>
        
    </div>
  )
}

export default LandingPage
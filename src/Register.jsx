import React from 'react'
import NavBar from './NavBar'
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from './Footer';
const Register = () => {
    useEffect(() => {
    
        Aos.init({duration:2000}) //global animations
        
      }, [])
  return (
    <div className='felx justify-center items-center'>
        <NavBar></NavBar>
        <div  className=' text-center felx pt-20 mt-10 pl-10 pr-10 justify-center md:h-screen items-center pb-10'>
        <h1 data-aos = "zoom-in" className='text-white text-center text-4xl pb-10 md:text-6xl font-bold tracking-wider'
          style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}
        >
            Register Now!
        </h1>
        <p data-aos = "zoom-in-up"className='text-white text-center md:text-3xl text-2xl tracking-wide'
        style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}>Step 1: Fill out the google form in the link tree below with your team’s information:<br></br>
        <a href = "https://linktr.ee/mujabhivarta23"className = "text-white text-center md:text-3xl text-2xl tracking-wider underline"
        style={{color:"#FFF",textShadow:"0 0 2px #fff000,0 0 2px #fff000,0 0 1px #fff", fontWeight:"bold", letterSpacing:"3px"}}
        > 
         Linktree</a></p>
         <br></br>
         <p data-aos = "zoom-in"className='text-white text-center md:text-3xl text-2xl tracking-wide'
         style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}>Step 2: Once the team details are completely filled, add your documents to the next link below for documents verification.</p>
         <br></br>
         <h1 data-aos = "zoom-out-down"className='text-white text-center md:text-3xl text-2xl tracking-wide'
         style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}>Step 3: Please provide the attached screenshot on the same email once you have finished making your payments.(mandatory)</h1>
         <br></br>
         <h1 data-aos = "zoom-out-down"className='text-white text-center md:text-3xl text-2xl tracking-wide'
         style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}>Step 4: Wait for the confirmation email. You are now all set for ABHIVARTA'23!</h1>

        
        </div>
        {/* <SecondLanding></SecondLanding> */}
        <Footer></Footer>
        
    </div>
  )
}

export default Register
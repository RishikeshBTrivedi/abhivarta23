import React from 'react'
import NavBar from './NavBar'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Footer from './Footer'
const Team = () => {
    useEffect(() => {
    
        Aos.init({duration:2000}) //global animations
        
      }, [])
  return (
    <div>
        <NavBar></NavBar>
        <div className='pl-10 pr-10 items-center justify-center origin-center mx-auto'>
            <h1 data-aos = "flip-up"className='text-6xl text-white text-center mt-20 pb-10 pt-10'
            style={{fontFamily: "'Bebas Neue',cursive" , letterSpacing:"8px"}}
            >Team</h1>
            <hr></hr>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Team
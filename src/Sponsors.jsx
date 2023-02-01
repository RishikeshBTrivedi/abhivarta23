import React from 'react'
import NavBar from './NavBar';
import { useEffect } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from './Footer';
const Sponsors = () => {
    //bg-[#00000026]
    useEffect(() => {
    
        Aos.init({duration:2000}) //global animations
        
      }, [])
    const rbt = [
        {
            image:'/gallery/gal (1).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (2).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (3).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (4).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (5).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (6).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (7).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (8).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (9).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (10).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (12).png',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery/gal (13).png',
            link: 'https://www.youtube.com'
        },

    ];
  return (
    <div>
        <NavBar></NavBar>
        <div className='pl-10 pr-10 items-center justify-center origin-center mx-auto '>
            <h1 data-aos = "flip-up" className='text-6xl text-white text-center mt-20 pb-10 pt-10'
            style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}
            >Sponsors</h1>
            <hr></hr>
            {/* <img src = "/gallery/gal(13).png"></img> */}
            {/* <img src = {gallery[0].image}></img> */}
            <div className='md:grid md:grid-cols-3'>
                {
                rbt.map((rishi , _i) => {
                    return(
                    <div className='justify-center items-center mx-auto p-10'>
                        <img data-aos = "fade-up" className = " w-40 m-5 mx-auto" src = {rishi.image}></img>
                        {console.log(rishi.image)}
                    </div>)
                })
                }
            </div>
            

        </div>
        <Footer></Footer>
    </div>
   
  )
}

export default Sponsors
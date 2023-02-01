import React from 'react'
import NavBar from './NavBar'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import Footer from './Footer'
const Gallery_1 = () => {
    useEffect(() => {
    
        Aos.init({duration:2000}) //global animations
        
      }, [])
    const rbt = [
        {
            image:'/gallery_1/gal (1).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (2).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (3).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (4).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (5).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (6).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (7).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (8).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (9).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (10).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (12).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (13).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (14).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (15).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (16).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (17).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (18).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (19).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (20).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (21).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (22).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (23).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (24).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (25).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (26).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (27).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (28).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (29).jpg',
            link: 'https://www.youtube.com'
        },
        {
            image:'/gallery_1/gal (30).jpg',
            link: 'https://www.youtube.com'
        },

    ];
  return (
    <div>
        <NavBar></NavBar>
        <div className='md:pl-10 md:pr-10 items-center justify-center origin-center mx-auto'>
            <h1 data-aos = "flip-up"className='text-6xl text-white text-center mt-20 pb-10 pt-10'
            style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}
            >Gallery</h1>
            <hr></hr>
            {/* <img src = "/gallery_1/gal(13).jpg"></img> */}
            {/* <img src = {gallery_1[0].image}></img> */}
            <div className='md:grid md:grid-cols-2'>
                {
                rbt.map((rishi , _i) => {
                    return(
                    <div className='justify-center items-center mx-auto p-10'>
                        <img data-aos = "fade-up"className = "w-1000 m-5 mx-auto" src = {rishi.image}></img>
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

export default Gallery_1
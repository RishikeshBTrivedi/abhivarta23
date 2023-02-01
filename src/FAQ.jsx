import React from 'react'
import NavBar from './NavBar'
import { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from './Footer';
// import { useEffect } from 'react'
const FAQ = () => {
  useEffect(() => {
    
    Aos.init({duration:2000}) //global animations
    
  }, [])
    const data = {
        // title: 'Frequently Asked Questions',
        rows: [
          {
            title: 'What is Abhivarta?',
            content:
              'Abhivarta is the annual sports fest conducted by MUJ.',
          },
          {
            title: 'How will the experience of Abhivarta be?',
            content:
              'The experience will be enthusiastic and the air will be filled with excitement and spirited cheers.',
          },
          {
            title: 'Who all are allowed to apply? ',
            content: `Sports enthusiasts from colleges all over India are allowed to apply.`,
          },
          {
            title: 'Can I register for multiple sports?',
            content: `Yes! Although, the timing of some sports might overlap.`,
          },
          {
            title: 'What will be the location of the events?',
            content: `All events will be conducted inside MUJ campus.`,
          },
          {
            title: 'What options are available for having a meal at Abhivarta?',
            content: `There will be abundant food vendours available throughout campus during the fest.`,
          },
          {
            title: 'Is there a registration fee for participating in the events?',
            content: `Refer events tab for more information.`,
          },
          {
            title: 'Is there any sort of transport facility available?',
            content: `No, make sure to acquire tranport before attending the fest.`,
          },
          {
            title: 'Will medical facilities be provided for the participants?',
            content: `A.	All medical facilities will be provided along with a 24/7 ambulance service at the campus.`,
          },
        ],
      };
      const styles = {
        bgColor: 'rgb(4,7,19)',
        titleTextColor: 'white',
        rowTitleColor: 'white',
        rowTitleTextSize: '20px',
        rowContentTextSize:'19px',
        rowContentPaddingTop: '10px',
        rowContentColor: '#c3c8c9',
        arrowColor: 'white',
      };
      const stylesMobile = {
        bgColor: 'rgba(0,0,0,0.15)',
        titleTextColor: 'white',
        rowTitleColor: 'white',
        rowTitleTextSize: '17px',
        rowContentTextSize:'15px',
        rowContentPaddingTop: '13px',
        rowContentColor: 'white',
        arrowColor: 'white',
      };
      const config = {
        animate: true,
        // arrowIcon: "V",
        tabFocus: true
      };
  return (

    <div>
        <NavBar></NavBar>
        <div data-aos = "fade-up" className='md:pl-20 md:pr-20 pb-20 md:h-screen'>
            <h1 className='text-6xl text-white text-center mt-20 p-10'
            style={{fontFamily: 'Poppins' , letterSpacing:"1px"}}
            >FAQs</h1>
            {/* {console.log("hi")} */}
            <Faq className='p-20' data={data} styles={stylesMobile} config={config}/>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default FAQ
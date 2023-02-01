import React from 'react'
import { FaInstagram } from "react-icons/fa";
// FaFacebook
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='flex items-center justify-center origin-center mx-auto bottom-0' style={{
        background: `rgba(20, 10, 0,0.6)`,
        padding: `$10px 0px`,
        boxShadow: `rgb(0 0 0}) 0px 0px 20px 6px`,
      }}>
        
        <a href = "https://www.instagram.com/muj_abhivarta/?igshid=Zjc2ZTc4Nzk%3D" ><h1 className='text-white text-center md:text-3xl text-2xl tracking-wide pl-10 pr-10 pb-2 pt-2'><FaInstagram className='text-white flex' size = {45}></FaInstagram></h1></a>
        <a href = "https://www.facebook.com/abhivartaofficial" ><h1 className='text-white text-center md:text-3xl text-2xl tracking-wide pl-10 pr-10 pb-2 pt-2'><FaFacebook className='text-white flex' size = {45}></FaFacebook></h1></a>  
    </div>
  )
}

export default Footer
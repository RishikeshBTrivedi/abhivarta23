import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
import { useRef } from "react";
// import tlogo from "../public/abhiLogo.png"

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const ref = useRef(null);
    const handleClick = () => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        })
    }
    
    const links = [
      {
        id: 1,
        link: "Sponsors",
        href:"/sponsors"
      },
      {
        id: 2,
        link: "Gallery",
        href:"/gallery"
      },
      {
        id: 3,
        link: "Events",
        href:"/events"
      },
      {
        id: 4,
        link: "FAQs",
        href:"/faqs"
      },
      {
        id: 5,
        link: "Team",
        href:"/team"
      },
      {
        id: 6,
        link: "Register",
        href:"/register",
        styleRbt:{color:"#FFF",textShadow:"0 0 7px #fff000,0 0 10px #fff000,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa"}
      },
    ];
  
    return (
      <div className="fixed top-0 flex sm:px-4 min-w-full text-white z-1 justify-around items-center h-14 z-50 pt-4 px-4" style={{
        background: `rgba(20, 10, 0,0.6)`,
        padding: `$10px 0px`,
        boxShadow: `rgb(0 0 0}) 0px 0px 20px 6px`,
        padding: "2%",
      }}>
        <div>
          <a href="/">
          <img src = "/fg.png" style={{width: "300px",height:"170px",paddingBottom:"20px", paddingTop:"2px"}}>
          </img>
          </a>
        </div>
  
        <ul className="hidden md:flex">
          {links.map(({ id, link ,href,styleRbt}) => (
            <li
              key={id}
              style = {styleRbt}
              className="px-4 cursor-pointer capitalize font-medium text-white text-xl hover:scale-105 duration-200"
            >
              <a href={href}>
                {link}
              </a>
            </li>
          ))}
        </ul>
  
        <div
          onClick={() => {
            setNav(!nav)
          }}
          className="cursor-pointer pr-4 z-10 text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
  
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#000000] to-[#6e1409] text-white">
            {links.map(({ id, link,href}) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <a
                  onClick={() => setNav(!nav)}
                  href = {href}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default NavBar
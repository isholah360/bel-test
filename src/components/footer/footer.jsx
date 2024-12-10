import React, { useState } from "react";
import "./footer.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const [menu, setMenu] = useState('Home')

    const handleMenu = ()=>{
        setMenu("Home")
    }
    const handleAbout = ()=>{
        setMenu("About Us")
    }
    const handleGallery = ()=>{
        setMenu("Gallery")
    }
    const handleContact = ()=>{
        setMenu("Contact Us")
    }
  return (
    <div>
      <div className="f-footer">
        <div className="footer-logo h-[3rem] w-[10rem]">
          <img src="/asset/bel-@.png" alt="" />
        </div>
        <div className=" h-[40lvh] flex justify-center items-center">
          <div className="partof-abj px-[10%] sm: px-[10%] md:px-[15%] lg:px-[20%]">
            <div className="abj-content text-center font-bold text-xl sm:text-xl md: text-2xl lg:text-3xl">
              Want To Be A Part Of Abuja’s Biggest Tech Community?
            </div>
            <div className="flex justify-center mt-3">
              <button className="border-solid px-12 py-2 mt-3 flex items-center justify-center rounded-3xl border-solid border-[1px] border-[#A649FF] text-[#A649FF]  text-[.55rem] sm:text-[.55rem] md:text-[1rem] lg:text-[1rem]">
              Register For Our Next Event
                <span className=" px-1 text-2xl text-[#000]">
                <MdOutlineDoubleArrow />
                </span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <div className="main-footer-layout block  sm:block py-2 md:flex py-0 lg:flex justify-between items-center">
           <div className="footer-socials flex gap-2 sm: my-5 md: my-2 lg:my-0">
              <div className="fb h-7 w-7 bg-[#A649FF] rounded-[50%] text-[#fff] flex items-center justify-center">
              <FaFacebook />
              </div>
              <div className="fb h-7 w-7 bg-[#A649FF] rounded-[50%] text-[#fff] flex items-center justify-center">
              <AiFillInstagram />
              </div>
              <div className="fb h-7 w-7 bg-[#A649FF] rounded-[50%] text-[#fff] flex items-center justify-center">
              <FaXTwitter />
              </div>
           </div>
            <div className="footer-list">
                <ul className="block list-none sm:block ml-[-2rem] my-2 md:flex my-0 lg:flex my-0">
                    <li onClick={handleMenu} style={{ color: menu === "Home" ? "#A649FF" : "" }}>Home</li>
                    <li onClick={handleAbout} style={{ color: menu === "About Us" ? "#A649FF" : "" }}>About Us</li>
                    <li onClick={handleGallery} style={{ color: menu === "Gallery" ? "#A649FF" : "" }}>Gallery</li>
                    <li onClick={handleContact} style={{ color: menu === "Contact" ? "#A649FF" : "" }}>Contact</li>
                </ul>
            </div>
      </div>
    </div>
  );
}

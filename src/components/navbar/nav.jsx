import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./nav.css";

export default function Nav() {
  const ref = useRef(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [menu, setMenu] = useState("Home");

  const handleMenus = () => {
    setMenu("Home");
  };
  const handleAbout = () => {
    setMenu("About Us");
  };
  const handleGallery = () => {
    setMenu("Gallery");
  };
  const handleContact = () => {
    setMenu("Contact");
  };

  const handleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  useEffect(() => {
    if (mobileMenu) {
      gsap.fromTo(
        ref.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 }
      );
    } else {
      gsap.fromTo(
        ref.current,
        { x: 0, opacity: 0 },
        { x: 100, opacity: 1, duration: 0.8 }
      );
    }
  }, [mobileMenu]);
  return (
    <div className="nav-bar">
      <div className="p-2 px-[5%] w-100% flex items-center justify-between bg-[#fff] relative">
        <div className="flex items-center">
          <div className="navlogo h-[3.5rem] w-[3.5rem]">
            <img className="h-[100%] w-[100%]" src="/asset/bel-@a.png" alt="" />
          </div>
          <div className="founder-name font-bold text-2xl sm:text-2xl md:text-3xl ">
            Founder's Friday
          </div>
        </div>
        <ul className=" sm: flex items-center hidden md:flex hidden lg:flex gap-2 list-none items-center">
          <li
            onClick={handleMenus}
            style={{ color: menu === "Home" ? "#A649FF" : "" }}
            className="text-6 md: text-8 lg:text-10 "
          >
            Home
          </li>
          <li
            onClick={handleAbout}
            style={{ color: menu === "About Us" ? "#A649FF" : "" }}
            className="text-6 md: text-8 lg:text-10 ml-2"
          >
            About Us
          </li>
          <li
            onClick={handleGallery}
            style={{ color: menu === "Gallery" ? "#A649FF" : "" }}
            className="text-6 md: text-8 lg:text-10 ml-2"
          >
            Gallery
          </li>
          <li
            onClick={handleContact}
            style={{ color: menu === "Contact" ? "#A649FF" : "" }}
            className="text-6 md: text-8 lg:text-10 ml-2"
          >
            Contact
          </li>
          <li className="text-6 md: text-8 lg:text-10 mx-7">
            <button className="border-solid px-6 py-1 flex items-center justify-center rounded-3xl border-solid border-[1px] border-[#A649FF] text-[#A649FF]">
              Register
            </button>
          </li>
        </ul>
        {mobileMenu && (
          <div
            ref={ref}
            className="nav-like absolute w-[100%] z-index-30 mt-[18rem] left-0 sm:flex block gap-2 md:flex block gap-2 lg:hidden"
          >
            <ul className="flex flex-col text-[#fff] items-center list-none justify-center w-full py-4 bg-[#000] gap-2 opacity-[.8]">
              <li className="text-6 md: text-8 lg:text-10 ">Home</li>
              <li className="text-6 md: text-8 lg:text-10 ml-2">About Us</li>
              <li className="text-6 md: text-8 lg:text-10 ml-2">Gallery</li>
              <li className="text-6 md: text-8 lg:text-10 ml-2">Contact</li>
              <li className="text-6 md: text-8 lg:text-10 mx-7">
                <button className="border-solid px-6 py-1 flex items-center justify-center rounded-3xl border-solid border-[1px] border-[#A649FF] text-[#A649FF]">
                  Register
                </button>
              </li>
            </ul>
          </div>
        )}
        <div className="md:hidden" onClick={handleMenu}>
          <div className="w-8 h-1.2 bg-[#000] border border-[#000]"></div>
          <div className="w-8 h-1.2 bg-[#000] border border-[#000] my-1"></div>
          <div className="w-8 h-1.2 bg-[#000] border border-[#000]"></div>
        </div>
      </div>
    </div>
  );
}

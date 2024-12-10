import React from "react";
import "./who.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbMoneybag } from "react-icons/tb";

export default function Who() {
  return (
    <div className="px-[5%] relative">
      <div className="who-section grid grid-cols-1 gap-5 sm:grid-cols-1 mt-[4em] md:grid-cols-2">
        
        <div className="who-img w-full md:h-full">
          <img
            className="h-auto h-[55vh] w-[100%] rounded-lg object-cover"
            src="/asset/bel-1.jfif"
            alt=""
          />
        </div>

    
        <div className="who-content flex flex-row sm:py-5 ml-[-2rem] mt-[2rem] md: mt-[-5rem] flex-row items-center md:items-start md:h-full lg:mt-[0rem]">
         
          <div className="the-line-h w-[5rem] h-[50lvh] ml-1 flex-none">
            <img
              className="w-[100%] h-[100%] object-contain flex-shrink-0"
              src="/asset/Line1.svg"
              alt=""
            />
          </div>

          <div className="the-who-cont md:w-[80%] relative flex-grow  sm:mt-7 md:mt-0 ml-0 sm:ml-0 md:ml-2 ">
            <div className="who-we-ar font-bold absolute top-[-4rem] text-3xl  sm:text-2xl mt-12 md:text-2xl lg: top-0 ">
              Who Are We?
            </div>
            <div className="who-we-content mt-7">
              Born from the vibrant startup ecosystem of Abuja, we recognized
              the need for a consistent, high-quality networking platform where
              founders, innovators, and tech enthusiasts could connect, share
              ideas, and foster collaboration.
            </div>
            <div className="who-we-buttons flex gap-2 my-10">
              <button className="border-solid bg-[#B86DFF] px-8 py-2 flex items-center justify-center rounded-3xl text-[#fff]">
                Register
                <span className="text-2xl px-1">
                  <IoIosArrowRoundForward />
                </span>
              </button>
              <button className="border-solid border-[#B86DFF] border-[1px] px-8 py-2 flex items-center justify-center rounded-3xl text-[#B86DFF]">
                Donate
                <span className="text-2xl px-1">
                  <TbMoneybag />
                </span>
              </button>
            </div>
            <div className="who-we-are font-bold absolute sm:bottom-[-4rem] mb-[0rem] lg: mb-[-4.2rem]">
              Founder’s Friday is more than just a meetup — it's a movement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

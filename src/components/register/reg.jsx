import React from "react";
import "./reg.css";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Reg() {
  return (
    <div>
      <div className="reg-section text-center py-5">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Register And Be Part of Our Community
        </h1>
        <div className="reg-sbu px-[25%] py-4  sm: px-[5%] md:px-[20%] lg:px-[25%] ">
          Join our community of over 1000+ founders, developers, and tech q
          junkies in general.Be inspired by people who live to inspire!
        </div>
        <div className="reg-imgs relative pt-10 z-10">
          <div className="reg-img-cover absolute w-[100%]">
            <img src="asset/Vector2.png" alt="" />
          </div>
          <div className="auth-images absolute z-10 flex justify-between items-center w-full px-[5%] py-12">
            <div className="first-imgs flex hidden sm:hidden md:hidden lg:flex block ">
              <div className="sec-img-img rounded-[50%] border-solid border-[1px] border-[gray]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="sec-img-img rounded-[50%] border-solid border-[1px] border-[gray] mt-[-5rem]">
                <img src="asset/bel-6.png" alt="" />
              </div>
            </div>
            <div className="sec-imgs flex justify-center gap-3 sm: w-full flex-wrap mt-[-2rem] md:mt-[0rem] lg:mt-[2rem]  ">
              <div className="sec-img-img rounded-[50%] border-solid border-[1px] border-[gray]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="sec-img-img rounded-[50%] border-solid border-[1px] border-[gray]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="sec-img-img rounded-[50%] border-solid border-[1px] border-[gray]">
                <img src="asset/bel-6.png" alt="" />
              </div>
            </div>
            <div className="third-imgs hidden sm:hidden md:hidden lg:flex block">
              <div className="sec-img-img rounded-[50%] border-solid border-[1px] border-[gray] mt-[-5rem]">
                <img src="asset/bel-6.png" alt="" />
              </div>
              <div className="sec-img-img rounded-[50%] border-solid border-[1px] border-[gray]">
                <img src="asset/bel-6.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[15rem] bottom-0">
            <button className="border-solid px-12 py-2 mt-3 flex items-center justify-center rounded-3xl border-solid border-[1px] border-[#A649FF] text-[#A649FF]">
              Register
              <span className="text-2xl px-1">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import './gather.css'

export default function Gather() {
  return (
    <div>
      <div className="g-section px-[5%] py-[5rem] grid grid-cols-1 gap-[2rem] items-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        <div className="g-img">
          <div className="rounded-img-g relative flex items-center justify-center w-full md:w-[100%] lg:w-[100%]">
            <img
              className="w-[100%] h-[100%] rounded-md"
              src="asset/bel-10.jfif"
              alt=""
            />
            <div className="play-round absolute h-9 w-9 rounded-[50%] bg-[#D9D9D9] flex items-center justify-center">
              <span className="text-center text-[#B86DFF]">
                <FaPlay />
              </span>
            </div>
          </div>
        </div>
        <div className="g-content">
          <div className="g-title font-bold">
            At Founder’s Friday, Every Friday Is a Learning Experience!
          </div>
          <div className="g-subtitle text-[.90rem] w-[80%] py-5  lg:w-[100%] ">
            Join us in our mission to transform ideas into impact and shape the
            future of Nigeria’s startup landscape.
          </div>
          <button className="border-solid px-8 py-2 mt-3 flex items-center justify-center rounded-3xl border-solid border-[1px] border-[#A649FF] bg-[#A649FF] text-[#fff]">
            Register
            <span className="text-2xl px-1">
              <IoIosArrowRoundForward />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

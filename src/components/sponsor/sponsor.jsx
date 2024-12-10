import React from "react";
import "./sponsor.css";
import Sponse from "./sponse";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Sponsor() {
  return (
    <div>
      <div className="s-title font-bold text-xl text-[#6F00D9]">
        Sponsor The Next Friday
      </div>
      <div className="s-sub-title font-bold text-3xl text-center">
        Why Sponsor Founders Friday?
      </div>
      <div className="s-main-content mt-[3rem] grid lg:grid-cols-2 md:grid-cols-1  relative">
        <div className="s-left flex justify-center ">
          <div className=" ml-[0%] bg-[#fff] p-[2rem] sm: ml-[-1%] border-solid border-[gray] rounded-md border-[#6F00D9] border-[1px]">
            <div className="first-spon gap-5 flex">
            <Sponse
              thecolor="#DCB6FF"
              sbold="Network Opportunity"
              ssmall="Connect with industry leaders, founders, and potential partners."
            />
            <Sponse
              thecolor="#EDDBFF"
              sbold="Community Impact"
              ssmall="Support the growth and development of the startup ecosystem."
            />
            </div>
            <br />
            <div className="first-spon gap-5 flex">
            <Sponse
              thecolor="#DCB6FF"
              sbold="Network Opportunity"
              ssmall="Connect with industry leaders, founders, and potential partners."
            />
            <Sponse
              thecolor="#EDDBFF"
              sbold="Community Impact"
              ssmall="Support the growth and development of the startup ecosystem."
            />
            </div>
          </div>
        </div>
        <div className="s-right w-full mt:0 md:mt-[1rem] lg:mt-0 ">
          <h2></h2>
          <div className="subtitle-form-tit  font-bold">How To Sponsor</div>
          <div className="subtitle-form font-italic py-1">
            Ready to make impact?
          </div>
          <div className="flll-form text-[.75rem] w-[80%] text-[gray]">
            Fill out the form below or contact us at [contact email/phone
            number] to learn more about how you can sponsor the next Founders
            Friday
          </div>

          <form className="pt-5">
            <div className="the-inputs w-full lg:flex gap-x-3 gap-y-3 flex-wrap">
              <div className="each-input">
                <label className="font-bold text-[.85rem]">Name</label>
                <br />
                <input
                  className="w-full md:w-[60%] lg:w-full px-[.75rem] py-[.35rem] border-solid border-[gray] rounded-md rounded-[#6F00D9] border-[1px]"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="each-input ">
                <label className="font-bold text-[.85rem]">
                  Company <span className="font-light">(optional)</span>
                </label>
                <br />
                <input
                  className="w-full md:w-[60%] lg:w-full px-[.75rem] py-[.35rem] border-solid border-[gray] rounded-md rounded-[#6F00D9] border-[1px]"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="each-input">
                <label className="font-bold text-[.85rem]">Email </label>
                <br />
                <input
                  className="w-full md:w-[60%] lg:w-full px-[.75rem] py-[.35rem] border-solid border-[gray] rounded-md rounded-[#6F00D9] border-[1px]"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="each-input">
                <label className="font-bold text-[.85rem]">Phone </label>
                <br />
                <input
                  className="w-full md:w-[60%] lg:w-full px-[.75rem] py-[.35rem] border-solid border-[gray] rounded-md rounded-[#6F00D9] border-[1px]"
                  type="text"
                  placeholder="Full name"
                />
              </div>
            </div>
            <button className="border-solid bg-[#8300FF] px-6 py-2 mt-3 flex items-center justify-center rounded-md text-[#fff]">
              Sponsor
              <span className="text-2xl px-1">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

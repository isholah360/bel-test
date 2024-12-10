import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";
import "./hero.css";
import Who from "../whowe/who";

export default function Hero() {
  const refone = useRef();
  useEffect(() => {
    gsap.fromTo(
      ".bel-10",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      refone.current,
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".bel-12",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      ".bel-3",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div>
      <div className="hero-frame flex items-center justify-center">
        <div className="vec-one right-0 sm: right-[-14rem] md:right-[14rem] lg: right-[14rem]">
          <img src="./asset/Vector1.png" alt="" />
        </div>
        <div className="content-one w-full relative sm:w-full lg:w-full">
          <div className="join-our">
            <div className="join font-bold text-sm">
              Join our premier monthly meetup for startup founders and tech
              visionaries
            </div>
            <div className="hero-connectc text-[#5C00B3] text-2xl font-bold sm:text-2xl md:text-2xl lg:text-4xl">
              Connect, Collaborate, Innovate!
            </div>
          </div>
          <div className="join-our-main w-[90%] my-5 text-[.85rem] sm:w-[90%] text-[.85rem] md:w-[90%] text-[.9rem] lg:w-[90%] text-[1rem]">
            Every last Friday of the month, we bring together the brightest
            minds in our local tech ecosystem. Whether you're a seasoned
            entrepreneur or just starting your journey, Founder's Friday is your
            launchpad for new ideas, valuable connections, and game-changing
            opportunities.
          </div>
          <button className="reg-button ">Register For Our Next Event</button>
          <div className="text-[.55rem] font-semibold py-2">
            Join Us for our next meetup on the 26th of July 2024
          </div>
          <div className="collabs flex gap-3 my-3">
            <div className="col-img h-[3.5rem] w-[3.5rem]">
              <img
                className="h-[100%] w-[100%] rounded-[50%]"
                src="/asset/bel-13.png"
                alt=""
              />
            </div>
            <div className="col-img col-whitz h-[3.5rem] w-[3.5rem] rounded-[#000]">
              <img
                className="h-[100%] w-[100%] rounded-[50%]"
                src="/asset/bel-14.png"
                alt=""
              />
            </div>
            <div className="col-img h-[3.5rem] w-[3.5rem]">
              <img
                className="h-[100%] w-[100%] rounded-[50%]"
                src="/asset/bel-16.png"
                alt=""
              />
            </div>
            <div className="col-img col-whitz h-[3.5rem] w-[3.5rem] border-solid">
              <img
                className="h-[100%] w-[100%] rounded-[50%]"
                src="/asset/bel-17.png"
                alt=""
              />
            </div>
            <div className="col-img h-[3.5rem] w-[3.5rem] border-solid">
              <img
                className="h-[100%] w-[100%] rounded-[50%]"
                src="/asset/bel-18.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hero-imgs mr-[-5rem] mt-[-1rem] hidden sm:block md:max-w-[50%] w-full lg:w-full">
          <div className="play-img rots-1 bg-[#B86DFF] md:h-[12rem] w-[10rem] lg:h-[15rem] w-[14rem] px-[.25rem] pt-[.25rem] pb-[1.35rem] bel-10">
            <div className="ronded-img relative w-[100%] h-[100%] flex items-center justify-center">
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
            <span> Founder's friday</span>
          </div>
          <div
            ref={refone}
            className="play-img rots-2 bg-[#6F00D9] sm:hidden md:hidden lg:block h-[15rem] w-[14rem] px-[.25rem] pt-[.25rem] pb-[1.35rem]"
          >
            <div className="ronded-img-img rounded-md relative w-[100%] h-[100%] flex items-center justify-center">
              <img
                className="w-[100%] h-[100%] rounded-md"
                src="/asset/bel-5.png"
                alt=""
              />
            </div>
            <span> Founder's friday</span>
          </div>
          <div className="play-img rots-3 bg-[#EBE9ED] h-[7.5rem] w-[7rem] px-[.22rem] pb-[.6rem] bel-12">
            <div className="ronded-img-third rounded-md relative w-[100%] h-[95%] flex items-center justify-center">
              <img
                className="zoom-img h-[85%] w-[100%]"
                src="./asset/bel-12.jfif"
                alt="./asset/bel-12.jfif"
              />
            </div>
            <span className="text-[#000] text-[.6rem] left-[1.1rem] absolute bottom-[0rem]">
              Founder's friday
            </span>
          </div>
          <div className="play-img rots-4 bg-[#EBE9ED] h-[5rem] w-[5rem] px-[.22rem] pb-[.6rem] relative bel-3">
            <div className="ronded-img-third rounded-md relative w-[100%] h-[95%] flex items-center justify-center">
              <img
                className="zoom-img h-[85%] w-[100%]"
                src="./asset/bel-3.png"
                alt="./asset/bel-3.png"
              />
            </div>
            <span className="text-[#000] text-[.4rem] left-[.90rem] absolute bottom-[.15rem]">
              Founder's friday
            </span>
          </div>
        </div>
      </div>
      <div className="intercept mt-[-7.5rem]">
        <Who />
      </div>
    </div>
  );
}

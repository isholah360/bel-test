import React, { useEffect, useRef } from "react";
import "./coming.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Fade from "./fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Coming() {
  const parallaxRef = useRef(null);
  const parallaxa = useRef(null);
  const parallaxy = useRef(null);

  useEffect(() => {
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top center", 
        end: "bottom center",
        once: true, 
      },
    });

  
    tl.fromTo(
      parallaxa.current,
      { opacity: 0, x: -200 }, // Initial state
      { opacity: 1, x: 0, duration: 1 } // Final state
    );
    tl.fromTo(
      parallaxy.current,
      { opacity: 0, y: 180 },
      { opacity: 1, y: 0, duration: .5 }
    );
  }, []);
  return (
    <div className="py-[3rem]" ref={parallaxRef}>
      <div className="c-sectoin " >
        <div className="cimage h-[32rem] w-full relative">
          <img className="h-[100%] w-[100%]" src="/asset/bel9.jfif" alt="" />
          <div ref={parallaxy} className=" c-contents absolute top-0 px-[5%] h-[100%] w-[100%] flex justify-between items-center ">
            <div className="c-main-content w-full ">
              <div className="c-to text-[#fff] text-3xl font-bold font-[Montserrat]">Founder Friday Coming To</div>
              <div className="c-place text-[#A649FF] text-7xl font-bold font-[Montserrat] w-[20rem]"><Fade/></div>
              <div className="c-desc text-[#fff] font-[Montserrat] pt-5 text-sm w-full md:w-4/5 lg:w-3/5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
                rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
                dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan
                leo suscipit id. Maecenas ut ante quis quam lobortis consequat
                eu id turpis. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. 
              </div>
              <button className="border-solid px-8 py-2 mt-3 flex items-center justify-center rounded-3xl border-solid border-[1px] border-[#A649FF] text-[#A649FF]">
              Register
              <span className="text-2xl px-1">
                <IoIosArrowRoundForward />
              </span>
            </button>
            </div>
            <div className="c-main-img py-[10%] hidden w-full sm:block md:h-[26.5rem] w-[26.5rem]">
                <img className="bel-one-log" src="/asset/bel-@a.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

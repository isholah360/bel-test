import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./founder.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Founder() {
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
      { opacity: 0, x: -200 }, 
      { opacity: 1, x: 0, duration: .5 } 
    );
    tl.fromTo(
      parallaxy.current,
      { opacity: 0, x: 180 }, 
      { opacity: 1, x: 0, duration: .5 } 
    );
  }, []);

  return (
    <div className="flex justify-center" ref={parallaxRef}>
      <div ref={parallaxa} className="grid grid-cols-1 justify-center items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="founder-content sm: w-full md: w-1/2 lg:w/12">
          <h2 className="text-[#8300FF] font-bold text-xl ">Founder Friday</h2>
          <h1 className="font-bold text-4xl w-[60%] py-6">
            What Happen At Founders Friday
          </h1>
          <div className="f-title-main sm:w-full md:w-[85%] lg: w-[100%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. 
          </div>
          <button className="border-solid bg-[#8300FF] px-6 py-2 mt-7 flex items-center justify-center rounded-md text-[#fff]">
            Learn More{" "}
            <span className="text-2xl px-1">
              <IoIosArrowRoundForward />
            </span>
          </button>
        </div>
        <div ref={parallaxy} className="mobile-found flex justify-center mr-[15%] pt-[3rem] sm:mr-[15%] pt-[3rem] md:mr-[15%] pt-[0rem] lg:mr-[0%] pt-[0rem]">
          <div className="founder-img relative">
            <div className="bottom-img  rounded-2xl">
              <img
                className="h-[100%] w-[100%] rounded-2xl"
                src="asset/bel-12.jfif"
                alt=""
              />
            </div>
            <div className="top-img rounded-2xl">
              <img
                className="h-[100%] w-[100%] rounded-2xl"
                src="asset/bel-19.jfif"
                alt=""
              />
            </div>
          </div>

          {/* <div className="bottom-img mt-10">
            <img src="asset/bel-12.jfif" alt="" />
         </div> */}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./offer.css";
import { FaPlus } from "react-icons/fa6";

export default function Offer({titles, subtitle}) {
  const [monthly, setMonthly] = useState(false);

  const handleDisplay = () => {
    setMonthly(!monthly);
  };
  console.log(monthly);
  return (
    <>
      <div className="whole-offer py-[2rem]">
       
        <div className="monthlymeet flex items-center justify-between border-bt-solid">
          <div className="meetup text-2xl font-bold flex items-center gap-2 sm: text-[3.5vw] lg:text-2xl">
            <div className="h-3 w-3 bg-[#8300FF] rounded-md border-solid border-[#8300FF] border-[1px]"></div>{" "}
            <div className="w-[15rem] sm:-[10vw] lg:w-[15rem]">{titles}</div>
          </div>
          <div className="meet-content text-[.65rem] w-1/3">
           {subtitle}
          </div>
          <div
            className="meetclick text-[#75687E] text-2xl"
            onClick={handleDisplay}
          >
            <FaPlus />
          </div>
        </div>
        <div
          className="meet-main-content"
          style={{ display: monthly === true ? "block" : "none" }}
        >
          hello the content of life
        </div>
      
      </div>
     
    </>
  );
}

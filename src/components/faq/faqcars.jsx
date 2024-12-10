import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import './faq.css'

export default function Faqcars({titles, list1, list2, list3}) {
    const [faq, setFaq] = useState(false);

  const handleDisplay = () => {
    setFaq(!faq);
  };
  console.log(faq);
  return (
    <div className="whole-offers py-[1.2rem] px-[1.8rem]">
       
    <div className="monthlymeet flex items-center ">
      <div className="meetup text-2 font-bold flex items-center gap-2">
        <div className="">{titles}</div>
      </div>
      <div
        className="meetclick text-[#75687E] text-2"
        onClick={handleDisplay}
      >
        <FaPlus />
      </div>
    </div>
    <div
      className="meet-main-content"
      style={{ display: faq === true ? "block" : "none" }}
    >
      <ul className='list-disc text-[.9rem] '>
        <li>{list1}</li>
        <li>{list2 ? list2 : ""}</li>
        <li>{list3 ? list3 : ""}</li>
      </ul>
    </div>
  
  </div>
  )
}

import React from "react";
import './sponsor.css'

export default function Sponse({ssmall, sbold, thecolor}) {
  return (
    <div>
      <div className="s-left-circ relative flex items-center justify-center  border-solid border-[#6F00D9] rounded-[50%] rounded-[#6F00D9] h-[] w-[10rem] border-[1px]">
        <div className="main-circ flex items-center justify-center opacity-[.5] w-[100%] h-[100%] rounded-[50%]" style={{background:`${thecolor}`}}></div>
        <div className="circ-all absolute z-10 text-center">
        <div className="s-circ-content  font-bold ">{sbold}</div>
        <div className="s-circ-contents text-center  text-[.6rem] px-3 py-1">{ssmall}</div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Offer from "./offer";
import Founder from "../founder/founder";
import Sponsor from "../sponsor/sponsor";
import './offer.css'

export default function MainOffer() {
  return (
    <div className="what-we-offers px-[5%] pt-[5rem] relative z-10">
        <div></div>
      <h1 className="text-center text-3xl font-bold py-6">What We Offer</h1>
      <Offer
        titles="Monthly-meetups"
        subtitle="Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities."
      />
      <Offer
        titles="Diverse Network"
        subtitle="Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities."
      />
      <Offer
        titles="Knowledge Shearing"
        subtitle="Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities."
      />
      <div className="vect-two absolute  left-0"> <img src="/asset/Vector 3.png" alt="" /></div>
        <Offer
        titles="Collaboration Opportuniy"
        subtitle="Our cornerstone event, held on the last Friday of every month,
            featuring keynote speakers, panel discussions, and ample networking
            opportunities."
      />
      <div className="mt-[10rem]">
        <Founder />
      </div>
      <div className="oursponsor mt-[12rem] py-[8rem]">
         <Sponsor/>
      </div>
    </div>
  );
}

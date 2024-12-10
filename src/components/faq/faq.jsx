import React from "react";
import Faqcars from "./faqcars";

export default function Faq() {
  return (
    <div className="px-[5%] w-full py-[5rem]">
      <h1 className="faqs-gat text-2xl font-bold font-[Montserrat]">FAQs</h1>
      <div className="flex mt-[2rem] justify-center">
        <div className="faq-cards  grid  sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="">
            <Faqcars
              titles="Lorem ipsum dolor sit amet, consectetur adi elit."
              list1="About Founder'd Friday"
              list2="More About the Team"
              list3="The Intersting Thing About The Idea"
            />
          </div>
          <div className="">
            <Faqcars
              titles="Lorem ipsum dolor sit amet, consectetur adi elit."
              list1="About Founder'd Friday"
              list2="More About the Team"
              list3="The Intersting Thing About The Idea"
            />
          </div>
          <div className="">
            <Faqcars
              titles="Lorem ipsum dolor sit amet, consectetur adi elit."
              list1="About Founder'd Friday"
              list2="More About the Team"
              list3="The Intersting Thing About The Idea"
            />
          </div>
          <div className="">
            <Faqcars
              titles="Lorem ipsum dolor sit amet, consectetur adi elit."
              list1="About Founder'd Friday"
              list2="More About the Team"
              list3="The Intersting Thing About The Idea"
            />
          </div>
          <div>
            <Faqcars
              titles="Lorem ipsum dolor sit amet, consectetur adi elit."
              list1="About Founder'd Friday"
              list2="More About the Team"
              list3="The Intersting Thing About The Idea"
            />
          </div>
          <div>
            <Faqcars
              titles="Lorem ipsum dolor sit amet, consectetur adi elit."
              list1="About Founder'd Friday"
              list2="More About the Team"
              list3="The Intersting Thing About The Idea"
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}

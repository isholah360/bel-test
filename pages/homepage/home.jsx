import React from "react";
import Hero from "../../src/components/hero/hero";
import Who from "../../src/components/whowe/who";
import MainOffer from "../../src/components/offer/mnOffer";
import Coming from "../../src/components/coming/coming";
import Reg from "../../src/components/register/reg";
import Gather from "../../src/components/gather/gather";
import Testify from "../../src/components/testify/testify";
import Faq from "../../src/components/faq/faq";

export default function Homepage() {
  return (
    <div>
      <Hero />
      <MainOffer/>
      <Coming />
      <Reg/>
      <Gather/>
      <Testify/>
      <Faq/>
    </div>
  );
}

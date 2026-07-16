import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Divisi from "./Divisi";
import About from "./About";
import Partners from "./Partners";
import Achievements from "./Achievement";
import CallToAction from "./CallToAction";

const Wrapper = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <About />
      <Achievements />
      <Divisi />
      <Partners />
      <CallToAction />
    </div>
  );
};

export default Wrapper;

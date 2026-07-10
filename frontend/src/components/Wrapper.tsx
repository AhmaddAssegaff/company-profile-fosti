import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Divisi from "./Divisi";
import About from "./About";
import Partners from "./Partners";

const Wrapper = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <About />
      <Divisi />
      <Partners />
    </div>
  );
};

export default Wrapper;

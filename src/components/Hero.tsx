import React from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div className="h-[90vh] bg-black text-white flex flex-col justify-center w-full ">
      {/* <Navbar /> */}
      <div className=" h-[90vh] flex flex-col justify-center">
        <div className="  mx-auto w-fit text-center">
          <h1
            className="text-[6em] font-normal tracking-tighter  
          leading-[7.2rem] text-clip
          bg-red-600"
          >
            Ankit Vishwakarma
          </h1>
          <p className="text-[2em] tracking-wider leading-[2rem]">
            Full stack developer | Frontend developer | Unit Tester |
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

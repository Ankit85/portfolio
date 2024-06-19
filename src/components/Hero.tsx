import React from "react";
import Navbar from "@/components/Navbar";

const Hero = () => {
  return (
    <div className="h-[90vh] bg-black text-white flex flex-col justify-center">
      {/* <Navbar /> */}
      <div className=" flex flex-col justify-center">
        <div className="mx-auto w-fit text-center p-2">
          <h1
            className="text-[3em] sm:text-[4em] md:text-[5em] lg:text-[6em] tracking-tighter 
              leading-tight sm:leading-tight md:leading-tight lg:leading-tight 
              text-center w-full  bg-red-600"
          >
            Ankit Vishwakarma
          </h1>

          <p
            className="text-[2em] tracking-wide  
          leading-8 "
          >
            Full stack developer | Frontend developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

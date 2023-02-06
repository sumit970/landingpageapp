import React from "react";
import Getstarted from "./Getstarted";

const Hero = () => {
  return (
     
    <section className=" bg-blue-900 w-full py-4 pb-4">
      <div className="flex flex-row items-center  text-xl bg-slate-400 rounded-[5px] px-5 py-1   ">
        <img src="Discount.svg" alt="" />
        <p className=" flex flex-row justify-between items-center ml-1 ">
          <span className="text-white">20% </span> Discount For
          <span className="text-white"> 1 Month </span> Account
        </p>
      </div>

      <div className="flex flex-col md:flex-row py-[6px] px-4 mt-7 justify-between ">
        <div className="flex  flex-col py-[6px] px-4 ">
          {/* the next line and ggradient circle */}
          <div className="flex justify-between items-center ">
            <div className=" text-7xl text-white">

              <h1>The Next</h1>
              <span>Generation</span>
              <h1>Payment Method.</h1>

            </div>
          
          </div>
          

          <div className=" py-4 text-xl text-white max-w-[470px] mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rem odit illo excepturi deserunt neque, cum exercitationem
            voluptatum dolore vel quae repellat itaque odio maiores quaerat
            perspiciatis placeat. Non amet vel culpa.
          </div>
        </div>

        <div className="">
          <img src="robot.png" alt="" className="w-[500px] h-[500px] relative z-index-[5] " />
        </div>
      </div>

      <div className="sm:hidden flex py-[6px] px-6">
        <Getstarted />

      </div>
    </section>
  );
};

export default Hero;

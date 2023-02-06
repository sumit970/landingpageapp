import React from "react";
import Stats from "../constant/contentstats";
import { features } from "../constant/sidecontent";

const stats = () => (
  <section className="bg-blue-900  ">
    <div className="flex  space-x-3 items-center   font-serif text-3xl text-white justify-around  flex-wrap">
      {Stats.map((elem) => (
        <div className="flex flex-row space-x-4  m-3">
          <span className=" "> {elem.value} </span>
          <h1 className="">{elem.title}</h1>
        </div>
      ))}
    </div>

    {/* //next topic of this section */}

    <div className="flex flex-col md:flex-row  justify-between  py-[6px] pt-[100px]">
      <div className="flex flex-col px-8 min-w-[350px]">
        <div className=" min-w-[360px]">
          <h1 className="text-white font-semibold text-6xl">
            You do the business,
          </h1>
          <h1 className="text-white font-semibold text-6xl">
            we'll handle the money.
   
          </h1>
        </div>
        <span className="max-w-[350px] text-2xl text-white py-7">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </span>
        <div className="">
          <button className="bg-violet-300 rounded-[6px] hover:bg-green-300 p-3 text-white hover:text-blue-600">
            Get Started
          </button>
          
        </div>
      </div>

      <div className=" flex flex-col m-4">
        {features.map((elem) => (
          <div className=" flex  max-w-[600px] min-w-[350px]   text-white text-2xl font-semibold p-4 rounded-[8px] hover:bg-slate-400 space-x-3">
            <img src={elem.icon} alt="" className=" w-[50px] h-[40px]  " />
            <div className="flex flex-col">
              <p className="text-3xl text-gray-500">{elem.title}</p>
              <h1>{elem.content}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default stats;

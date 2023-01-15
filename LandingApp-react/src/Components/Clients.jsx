import React from "react";
import Card from "../constant/Businescard";
import socialMedia from "../constant/Imagesection";

const Clients = () => (
  <section className="bg-blue-900 p-6">
    <div className="flex flex-col ">
      {/* 1st div of this section */}




      <div className="flex flex-wrap  justify-evenly p-6 ">
        {/* map function to be used  */}


        {Card.map((elem) => (
          <div className="flex flex-col justify-around  text-white px-[10px] hover:bg-slate-400 hover:rounded-[7px] m-3 p-[10px]">
            <img src="quotes.svg" alt="" className="w-[48px] h-[45px] pb-2" />
            <p className="max-w-[300px]">{elem.content}</p>
            <div className="flex flex-row py-[15px] justify-around items-center">
              <img src={elem.img} alt="" className="" />
              <div className="flex flex-col ">
                <h1 className="">{elem.name}</h1>
                <p className="">{elem.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2nd div of this section */}


      <div className="flex flex-wrap justify-evenly space-x-5">
        {/* using image map function  to display the images */}

        {socialMedia.map((elem) => (
          <img
          
            src={elem.logo}
            alt=" "
            className="h-[50px] w-[200px] sm:h-[80px] sm:w-[200px] m-[15px]"
          />
        ))}
      </div>

      {/* 3rd div of  this section */}

      <div className="flex flex-col  sm:justify-between sm:flex-row bg-blue-800 px-7 rounded-[10px] items-center space-y-8 mt-4 text-white">
        <div className="p-6 ">
        
          <h1 className=" text-6xl ">Let’s try our service now!</h1>

          <p className="text-xl max-w-[350px] py-6">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.

          </p>
        </div>
        <div className="">
          <button className="bg-green-600 p-4 rounded-[10px] min-w-[120px] hover:bg-white hover:text-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;

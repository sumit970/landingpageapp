import React from "react";
import footerLinks from "../constant/Footercontent.JS";
import imgsection from "../constant/Lastimage";


const Footer = () => (
  <footer className="bg-blue-900">
    <div className="flex flex-col md:flex-row  p-7 text-white justify-between">
      {/* 1st column */}
      <div className="text-white">
        <img src="llogo.svg" alt="" className="pb-4" />
        <p className="max-w-[312px] text-xl font-sans pb-[25px]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>



      {/*  2nd column*/}
      {/* div of the second content  */}
      
      <div className="flex flex-row justify-between md:space-x-9 ">

        {footerLinks.map((elem) => (

          <div className="flex flex-col  ">
          <h4 className="text-2xl py-4 font-medium ">  {elem.title} </h4>
             <ul className="list-none  ">
              {elem.links.map((ele, index) => (
                <li className={`text-white ${index!=elem.links.length-1 ? "mb-4":"mb-0"}`}>{ele.name}</li>
              ))}
            </ul>
          </div>
        ))}

      </div>
      
    </div>

    <div className="flex md:flex-row flex-col text-white justify-between p-4" >
      <div className="text-white">
      Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </div>
      <div className="">
        {imgsection.map((last)=>(

          <img src="last.icon" alt="" className="" />
        ))}
        
      </div>
    </div>
  </footer>
);

export default Footer;

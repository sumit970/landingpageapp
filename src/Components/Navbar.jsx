import React from "react";
import { useState } from "react";
import Menu from "../constant/Menu";

const Navbar = () => {

  //stateHooks for sort navbar.

  const [toggle, settoggle] = useState(false);
  return (
    <nav className="py-3 bg-blue-900">
      <div className=" flex justify-between items-center ">
        <div className="">
          
          <img src="logo.png" alt="" className="w-[40px]" />

        </div>
 

        <ul className="flex space-x-4 px-4 items-center">

          {Menu.map((element, index) => (
            <li
              key={element.id}
              className="sm:flex cursor-pointer text-white hover:text-yellow-600 hidden"
            >
              
              {element.name}
            </li>

          ))}

        </ul>

        <img
          src={toggle ? "close.svg" : "menu.svg"}
          alt="menu"
          onClick={() => settoggle((prev) => !prev)}
          className={`flex justify-end align-middle sm:hidden  px-4 py-1 h-[30px]`}


          

/>
        {/* <div className="flex justify-end align-middle sm:hidden px-4">hello</div> */}
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } bg-red-800 absolute top-20 right-1 mx-4 my-2 justify-center min-w-[140px] rounded-xl `}
      >
        
        <ul className="flex-col space-x-2 justify-">
          {Menu.map((element, index) => (
            <li
              key={element.id}
              className="flex justify-center  py-2 cursor-pointer text-white hover:text-yellow-600 sm:hidden"
            >
              {element.name}

            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

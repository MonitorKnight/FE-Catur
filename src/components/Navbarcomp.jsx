import React from "react";
import { NavLink } from "react-router-dom";
import "animate.css";

function Navbarcomp() {
  return (
    <div>
      <div className=" bg-[#fbd875] top-0 w-full flex text-black-500 shadow-md fixed z-50">
        <div className="flex flex-row  w-1/2 justify-around">
          <NavLink
            className="p-4 hover:bg-[#feffc7] font-primary hover:rounded-md text-[#04023c]"
            to=""
          >
            Home
          </NavLink>
          <NavLink
            className="p-4 hover:bg-[#feffc7] hover:rounded-md font-primary text-[#04023c]"
            to="info"
          >
            Informasi
          </NavLink>
        </div>
        <div className=" w-1/2 justify-end flex h-full ">
          <div className=" font-primary bg-black w-fit flex h-full  p-4 rounded-l-full hover:cursor-pointer shadow-md text-white hover:bg-slate-900">
            <a href="http://localhost:8080/">Mulai Permainan</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarcomp;

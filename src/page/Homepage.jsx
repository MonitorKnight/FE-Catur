import React from "react";
import Hero from "./../assets/Heroimg.png";
import Infopage from "./Infopage";
import "animate.css";
function Homepage() {
  return (
    <div className=" mx-auto w-full ">
      <div className=" min-h-screen w-full bg-[#d88e30] flex">
        <div className=" w-1/2 flex p-5 flex-col justify-center ">
          <div
            className=" font-primary text-8xl font-bold max-h-screen p-4 text-[#04023c]"
            data-aos="fade-right"
          >
            Catur Jawa
          </div>
          <p
            className="text-[#04023c] p-5 font-primary text-2xl"
            data-aos="fade-right"
          >
            Caturnya Orang Jawa ,catur dengan bidak tokoh terkenal jawa
          </p>
          <p className="text-[#04023c]  font-primary text-2xl"></p>
          <div
            data-aos="fade-right"
            className="ml-4 font-primary text-[#04023c] outline outline-[#04023c] p-4 w-60 hover:cursor-pointer hover:text-white hover:outline-none hover:bg-[#04023c] rounded-md text-center"
          >
            Sumber
          </div>
        </div>
        <div className="w-1/2 mt-16" data-aos="fade-left">
          <img src={Hero} alt="" />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bg-[#fbd875]"
      >
        <path
          data-aos="fade-down"
          fill="#d88e30"
          fill-opacity="1"
          d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,128C672,149,768,235,864,250.7C960,267,1056,213,1152,176C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Infopage />
    </div>
  );
}

export default Homepage;

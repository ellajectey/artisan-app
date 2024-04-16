import React from "react";

function Hero() {
  return (
    <div>
      <div className="bg-cover min-h-screen w-full bg-[url('./assets/basket-pattern.jpg')]">
        <div className="pt-60 min-h-screen bg-purple-900 bg-opacity-40">
          <h1 className="text-center font-bold text-white text-5xl">
            Artisan Scheduler
          </h1>
          <br />
          <h2 className="text-center font-semibold text-white text-3xl">
            Artisans On-Demand: Book, Create, Achieve
          </h2>
          <br/>
          <div className=" flex justify-between mx-80 bg-purple-300 text-gray-300 rounded-lg px-4 py-2 ">
            <div>
            <i className="fa-solid fa-magnifying-glass text-purple-900 px-2 py-2 text-center"></i>
            <input
              className=" w-80 text-gray-800 bg-purple-300 focus:outline-none placeholder:text-white"
              placeholder="Search Artisan By"
            />
            </div>
            <select className=" bg-purple-300 text-purple-800 focus:outline-none">
              <option>Location</option>
              <option>Category</option>
              <option>Job Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

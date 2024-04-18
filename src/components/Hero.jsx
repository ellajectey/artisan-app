import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="bg-cover min-h-screen w-full bg-[url('./assets/newbg.jpg')]">
        <div className="py-80 min-h-screen">
          <h1 className="text-center font-bold text-black text-5xl">
            Artisan Scheduler
          </h1>
          <br />
          <h2 className="text-center font-semibold text-black text-3xl">
            Artisans On-Demand: Book, Create, Achieve
          </h2>
          <div className="flex justify-center ">
            <button className="bg-orange-700 px-8 py-4 rounded-lg text-white my-4"><Link to="/search"> Find Artisan <i class="fa-solid fa-arrow-right"></i></Link> </button>
          </div>
          
          <br/>
        
        </div>
      </div>
    </div>
  );
}

export default Hero;

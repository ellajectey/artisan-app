import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="bg-cover min-h-screen w-full bg-[url('./assets/basket-pattern.jpg')]">
        <div className="pt-80 min-h-screen">
          <h1 className="text-center font-bold text-white text-5xl">
            Artisan Scheduler
          </h1>
          <br />
          <h2 className="text-center font-semibold text-white text-3xl">
            Artisans On-Demand: Book, Create, Achieve
          </h2>
          <div className="flex justify-center ">
            <button className="bg-purple-800 px-8 py-4 rounded-lg text-white my-4"><Link to="/search"> Find Artisan <i class="fa-solid fa-arrow-right"></i></Link> </button>
          </div>
          
          <br/>
        
        </div>
      </div>
    </div>
  );
}

export default Hero;

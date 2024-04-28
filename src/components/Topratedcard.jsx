import React, { useEffect, useState } from "react";
import axios from "axios";

function Topratedcard() {
  
  const [topratedList, settopratedList] = useState([]);

  useEffect(()=>{
    const getTopRated = async () => {
      try{
        const response = await axios.get(
          `${process.env.REACT_APP_ARTISCHED_API}/get-toprated`
        );
        settopratedList(response.data);
      }catch(error){

      }
    };
    getTopRated();
  },[]);

  return (
    <>

      <h2 className="py-8 mt-4 text-center text-orange-600 font-bold text-2xl">
      <i className ="fa-solid fa-award text-orange-600 text-2xl"></i>  Top Rated Artisans
      </h2>

      <div className=" flex flex-wrap items-center justify-center grid grid-cols-4 grid-rows-1 gap-4 mb-20">
      {topratedList.map((toprated,key)=>( 
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-600 rounded-lg max-w-xs shadow-yellow-500 shadow-lg">
         
         <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative pt-10 px-10 flex items-center justify-center">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 60%)",
                transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
                opacity: "0.2",
              }}
            ></div>
            <img
              className="relative w-40 h-40"
              src={toprated.image}
              alt=""
            />
          </div>
          <div className="relative text-black px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{toprated.firstName} {toprated.lastName}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-sm">{toprated.job}<br/> -{toprated.category}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              <i className="fa-solid fa-star text-orange-500 px-2"></i>{toprated.rating}/5
              </span>
            </div>
        
          </div>
          
        </div>
      ))}
        {/* mapping of card components here */}
      </div>
    </>
  );
}

export default Topratedcard;

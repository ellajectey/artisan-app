import React from 'react';
import Searchbar from '../components/searchbar';
import Navbar from '../components/Navbar';
import { useState, useEffect } from "react";



  
function Search(props)
{
    const [artisanList, setArtisanList] = useState([]);

  const getArtisans = () => {
    fetch(
      `${process.env.REACT_APP_ARTISCHED_API}/artisans`
    )
      .then((res) => res.json())
      .then((json) => setArtisanList(json.results));
  };

  useEffect(() => {
    getArtisans();
  }, []);

  console.log(artisanList);


    return (
        <div>
        <div className=" h-40 bg-cover bg-[url('./assets/basket-pattern.jpg')]">
            <Navbar/>
            
        </div>
        <Searchbar/>
        <div className="p-1 flex flex-wrap items-center justify-center">
            {/* mapping of card components here */}
            {artisanList.map((artisans) => (
        <div  key={artisans.email} className="flex-shrink-0 m-6 relative overflow-hidden bg-fuchsia-800 rounded-lg max-w-xs shadow-lg">
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
              className="relative w-40"
              src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
              alt=""
            />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{artisans.firstName}</span>
            <span className="block opacity-75 -mb-1">{artisans.job}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{artisans.category}</span>
              <span className="block font-medium text-xl">{artisans.location}</span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                ₵10/hr
              </span>
            </div>
          </div>
        </div>
         ))}
        </div>
        </div>
    );
}

export default Search;
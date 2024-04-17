import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";

function Artisancard() 
 {
  const [artisanList, setArtisanList] = useState([]);

  useEffect(() => {
    const getArtisans = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_ARTISCHED_API}/get-artisans`, {
          params: {
            limit: 5 // Limit the number of results to 5
          }
        });
        setArtisanList(response.data);
      } catch (error) {
        console.error('Error fetching artisan:', error);
      }
    };
    getArtisans();
  }, []);

  console.log("artisanList:", artisanList); // Log artisanList here

  return (
    <div>
      <div className="p-1 flex flex-wrap items-center justify-center">
        {/* Mapping of card components here */}
        {artisanList.map((artisan) => (
          <div key={artisan.id} className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-900 rounded-lg max-w-xs shadow-lg" style={{ flexBasis: '20%' }}>
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
                src={artisan.images.image1}
                alt=""
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">{artisan.firstName}</span>
              <span className="block opacity-75 -mb-1">{artisan.job}</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">{artisan.job}</span>
                <span className="block font-medium text-xl">{artisan.location}</span>
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

export default Artisancard;

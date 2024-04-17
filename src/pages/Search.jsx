import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from '../components/searchbar';
import Navbar from '../components/Navbar';

function Search(props) {
  const [artisanList, setArtisanList] = useState([]);
  const [artisanListCopy, setArtisanListCopy] = useState([]);

  useEffect(() => {

  const getArtisans = async () => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_ARTISCHED_API}/get-artisans`);
      setArtisanList(response.data);
      setArtisanListCopy(response.data);
      
    } catch(error) {
        console.error('Error fetching artisan:', error);
      }
  };
    getArtisans();
  }, []);

  console.log("artisanList:", artisanList); // Log artisanList here

  function updateSearchInput(newInput){
    let fullList = [...artisanListCopy];
    let newList = [];
    fullList.forEach(artisan => {
      let fname = artisan.firstName.toLowerCase();
      let lname = artisan.lastName.toLowerCase();
      let location = artisan.location ? artisan.location.toLowerCase() : '-';
      let job = artisan.job ? artisan.job.toLowerCase() : '-';
      let category = artisan.category ? artisan.category.toLowerCase() : '-';

      if (
        fname.includes(newInput.toLowerCase()) ||
        lname.includes(newInput.toLowerCase()) ||
        location.includes(newInput.toLowerCase()) ||
        category.includes(newInput.toLowerCase()) ||
        job.includes(newInput.toLowerCase()) 

      ) {
        newList.push(artisan);
      }
      
    });

    newInput.length ? setArtisanList(newList) : setArtisanList([...fullList]);
  }

  return (
    <div>
      <div className="h-40 bg-cover bg-[url('./assets/basket-pattern.jpg')]">           
        <Navbar />
        <br/><br/>
        <br/><br/>
        <Searchbar updateSearchInput={updateSearchInput}/>
      </div>
    
      <div className="p-1 flex flex-wrap items-center justify-center">
        {/* Mapping of card components here */}
        {artisanList.map((artisan) => (
          <div key={artisan.id} className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-900 rounded-lg max-w-xs shadow-lg">
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
                src={artisan.images.image1}
                alt="artisan's work"
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">{artisan.firstName} {artisan.lastName}</span>
              <span className="block opacity-75 -mb-1">{artisan.job}.{artisan.category}</span>
              <div className="flex justify-between">
                <span className="block font-medium text-xl">{artisan.location}</span>
                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center mt-2">
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

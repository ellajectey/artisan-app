import React from "react";

function Searchbar({updateSearchInput}) {
  return (
    <div>
      <div className=" flex justify-between mx-80 bg-purple-300 text-gray-300 rounded-lg px-4 py-2 ">
        <div>
          <i className="fa-solid fa-magnifying-glass text-purple-900 px-2 py-2 text-center"></i>
          <input
            onChange={(e) => updateSearchInput(e.target.value)}
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
  );
}

export default Searchbar;

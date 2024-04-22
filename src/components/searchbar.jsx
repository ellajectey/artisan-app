import React from "react";

function Searchbar({updateSearchInput}) {
  return (
    <div>
      <div className="flex justify-between mx-80 bg-orange-300 text-gray-300 rounded-lg px-4 py-2 mt-6">
        <div className="flex">
          <i className="fa-solid fa-magnifying-glass text-orange-900 px-2 py-2 text-center"></i>
          <input
            onChange={(e) => updateSearchInput(e.target.value)}
            className=" w-80 text-gray-800 bg-orange-300 focus:outline-none placeholder:text-white"
            placeholder="Search Artisan By Name, Category, Job Or Location"
          />
        </div>
        {/* <select className=" bg-orange-300 text-orange-800 focus:outline-none">
          <option>Location</option>
          <option>Category</option>
          <option>Job Title</option>
        </select> */}
      </div>
    </div>
  );
}

export default Searchbar;

import React from "react";

function BookingCard(props) {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-orange-700">
        Today's Appointments
      </h1>
      <div className="w-full px-4 ">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
          <div className="bg-gray-100 px-5 py-2   grid items-end justify-center __col h-full">
            {/* <a href="#" className="text-green-600 font-medium hover:text-green-800">Completed</a> */}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              10:00am to 11:00am
            </h2>
            <p className="text-gray-600">
              Location:Adenta,
              <br /> Client: Ama Serwaa, <br />
              Description: Door Hinges are broken and there's a hole in the
              ceiling.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 ">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
          <div className="bg-gray-100 px-5 py-2   grid items-end justify-center __col h-full">
            {/* <a href="#" className="text-orange-600 font-medium hover:text-orange-800">In Progress</a> */}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              10:00am to 11:00am
            </h2>
            <p className="text-gray-600">
              Location:Adenta,
              <br /> Client: Ama Serwaa, <br />
              Description: Door Hinges are broken and there's a hole in the
              ceiling.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 ">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
          <div className="bg-gray-100 px-5 py-2   grid items-end justify-center __col h-full">
            {/* <a href="#" className="text-yellow-600 font-medium hover:text-green-800">Up next</a> */}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              10:00am to 11:00am
            </h2>
            <p className="text-gray-600">
              Location:Adenta,
              <br /> Client: Ama Serwaa, <br />
              Description: Door Hinges are broken and there's a hole in the
              ceiling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;

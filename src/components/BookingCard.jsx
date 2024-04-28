import React from "react";

function BookingCard(props) {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-white py-4">
        Today's Appointments
      </h1>
      <div className="w-full px-4 mx-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
          <div className="bg-orange-100 px-5  grid items-end justify-center __col h-full">
            {/* <a href="#" className="text-green-600 font-medium hover:text-green-800">Completed</a> */}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              10:00am to 11:00am
            </h2>
            <p className="text-gray-600">
              Location: Adenta SDA,
              <br /> Client: Ama Serwaa, <br />
              Description: Door Hinges are broken and there's a hole in the
              ceiling.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 mx-10 ">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
          <div className="bg-orange-100 px-5  grid items-end justify-center __col h-full">
            {/* <a href="#" className="text-orange-600 font-medium hover:text-orange-800">In Progress</a> */}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              1:00pm to 2:00pm
            </h2>
            <p className="text-gray-600">
              Location:Adenta,
              <br /> Client: Henrietta Larbi, <br />
              Description: I need help putting together a deconstructed wooden shelf I bought
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 mx-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
          <div className="bg-orange-100 px-5 grid items-end justify-center __col h-full">
            {/* <a href="#" className="text-yellow-600 font-medium hover:text-green-800">Up next</a> */}
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              3:00pm to 4:00pm
            </h2>
            <p className="text-gray-600">
              Location: Adenta,
              <br /> Client: Boris Tenortey, <br />
              Description: Trap door Hinges are broken and there's a key stuck in the keyhole of my front door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;

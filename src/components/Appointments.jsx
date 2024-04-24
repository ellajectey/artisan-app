import React from "react";
import Calendar from "./Calendar";
import BookingCard from "./BookingCard";

function Appointments(props) {
  return (
    
      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-auto mx-auto">
        <div className="w-full">
          
          <BookingCard />
        </div>
        <div> <Calendar/></div>
      </div>
    
  );
}

export default Appointments;

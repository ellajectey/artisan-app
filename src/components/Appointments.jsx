import React from "react";
import BookingCard from "./BookingCard";
import AppCard from "./AppCard";

function Appointments(props) {
  return (
    
      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-auto mx-auto">
        <div className="w-full">
          
          <BookingCard />
        </div>
        <div> 
        <AppCard/>
        
        </div>
      </div>
    
  );
}

export default Appointments;

import React from "react";
import Calendar from "./Calendar";
import BookingCard from "../components/BookingCard";

function Sidebar(props) {
  return (
    
      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-auto mx-auto">
        <div className="w-full">
          
          <BookingCard />
        </div>
        <div> <Calendar/></div>
      </div>
    
  );
}

export default Sidebar;

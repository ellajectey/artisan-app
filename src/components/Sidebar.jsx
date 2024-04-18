import React from 'react';
import Calendar from './Calendar';
import BookingCard from '../components/BookingCard';


function Sidebar(props) {
    return (
        <div>
         <div className="grid grid-cols-2 grid-rows-1 gap-4">
    <div> <BookingCard/></div>
    <div> <Calendar/></div>
</div>   
        </div>
    );
}

export default Sidebar;
import React, { useState } from "react";
import Receipt from "./Receipt";
import AppCard from "./AppCard";
import RatingForm from "./RatingForm";
import { format } from "date-fns";

function UserAppointments() {

  const [appointments, setAppointments] = useState(sessionStorage.getItem('appointments') ? JSON.parse(sessionStorage.getItem('appointments')) : []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8 text-white">
        Appointments
      </h1>

      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-auto mx-auto">
        <div className="w-full">
          <h1 className="text-center font-bold text-2xl text-orange-500">
            Your Appointments
          </h1>

          {
            appointments.map(appointment => {
              return (
                  <div className="w-full px-4 ">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
                    <div className="bg-gray-100 px-5 py-2   grid items-end justify-left __col h-full">
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-orange-400 mb-4">
                        {format(appointment.selectedDate, 'MMMM dd, yyyy')} {appointment.selectedTime}
                      </h2>
                      <p className="text-gray-600">
                        Service: {appointment.serviceType},
                        <br /> 
                        <br />
                        Description: {appointment.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }

          <RatingForm />
          <Receipt />
        </div>

        <div>
          <AppCard />
        </div>
      </div>
    </div>
  );
}

export default UserAppointments;

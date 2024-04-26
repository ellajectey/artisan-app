import React from "react";
import PaymentForm from "./PaymentForm";
import Calendar from "./Calendar";
import DatePic from "./DatePic";
import Receipt from "./Receipt";
import AppCard from "./AppCard";
import RatingForm from "./RatingForm";

function UserAppointments(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-8 text-white">Appointments</h1>

      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-auto mx-auto">
        <div className="w-full">
          <h1 className="text-center font-bold text-2xl text-orange-500">
            Your Appointment
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
            <Receipt />
            <RatingForm/>
          </div>
        </div>

        <div>
          <PaymentForm />
          <AppCard/>
        </div>
      </div>
    </div>
  );
}

export default UserAppointments;

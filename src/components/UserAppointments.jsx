import React, { useState } from "react";
import Receipt from "./Receipt";
import AppCard from "./AppCard";
import RatingForm from "./RatingForm";
import { format } from "date-fns";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserAppointments() {
  const [appointments, setAppointments] = useState(
    sessionStorage.getItem("appointments")
      ? JSON.parse(sessionStorage.getItem("appointments"))
      : []
  );

  function refreshAppointments(){
    setAppointments(sessionStorage.getItem("appointments") ? JSON.parse(sessionStorage.getItem("appointments")): [])
  }

  function cancelApp(index) {
    console.log(index);
    let apps = [...appointments];
    apps = apps.length == 1 ? [] : apps.splice(index, 1);

    console.log(apps);
    toast.warn("Your deposit fee has been deducted from your account");

    sessionStorage.setItem("appointments", JSON.stringify(apps));
    setAppointments(apps);
  }

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

          {appointments.map((appointment, index) => {
            return (
              <div key={index} className="w-full px-4 ">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
                  <div className="bg-gray-100 px-5 py-2   grid items-end justify-left __col h-full"></div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-orange-400 mb-4">
                      {format(appointment.selectedDate, "MMMM dd, yyyy")}{" "}
                      {appointment.selectedTime}
                    </h2>
                    <p className="text-gray-600">
                      Artisan: {appointment.artisanName}
                      <br />
                      <br />
                      Service: {appointment.serviceType}
                      <br />
                      <br />
                      Description: {appointment.description}
                    </p>
                    <br />
                    <button
                      className="bg-red-500 text-white py-2 px-4 my-4 rounded hover:bg-red-800 focus:outline-none focus:shadow-outline"
                      onClick={() => cancelApp(index)}
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {!appointments.length && (
            <div className="w-full px-4 ">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden my-6 grid grid-cols-[auto,1fr]">
                <div className="bg-gray-100 px-5 py-2   grid items-end justify-left __col h-full"></div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-orange-400 mb-4">
                    No Appointments
                  </h2>
                  <p className="text-gray-600">
                    You have no appointments requested
                  </p>
                  <br />
                </div>
              </div>
            </div>
          )}

          <RatingForm />
          {/* <Receipt /> */}
        </div>

        <div>
          <AppCard refreshAppointments={refreshAppointments} />
        </div>
      </div>
    </div>
  );
}

export default UserAppointments;

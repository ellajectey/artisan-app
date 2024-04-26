import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AppCard() {

    const [artisanEmail, setArtisanEmail] = useState('');
    const [description, setDescription] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [serviceDate, setServiceDate] = useState(null);
    const [serviceTime, setServiceTime] = useState(null);

    function submitAppointment(){
        let artisans = sessionStorage.getItem('artisans') ? JSON.parse(sessionStorage.getItem('artisans')) : [];
        let theArtisan = artisans.find(art => art.email == artisanEmail);

        if (!theArtisan){
            toast.error('Artisan is not registered on this app');
            return;
        }

        if (!sessionStorage.getItem('user_email')) {
            return;
        }

        let body = {
            artisanId: theArtisan._id,
            email: sessionStorage.getItem('user_email'),
            selectedDate: serviceDate,
            selectedTime: serviceTime,
            description: description,
            serviceType: serviceType,
            depositAmount: '50 GHS'
        }

        console.log('appointment form body: ', body);

        // you can delete this when you start saving in the db
        let appointments = sessionStorage.getItem('appointments') ? JSON.parse(sessionStorage.getItem('appointments')) : [];
        appointments.push(body);
        sessionStorage.setItem('appointments', JSON.stringify(appointments));
        // 

    }
    
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 border  border-orange-500 bg-white text-orange-400 text-center font-semibold ">
          Book an Appointment
        </div>
        <div className="py-4 px-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              for="name"
            >
              Artisan
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              onChange={(e) => setArtisanEmail(e.target.value)}
              placeholder="Enter Artisan's email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              for="date"
            >
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              onChange={(e) => setServiceDate(e.target.value)}
              placeholder="Select a date"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              for="time"
            >
              Select Available Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              type="time"
              onChange={(e) => setServiceTime(e.target.value)}
              placeholder="Select a time"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              for="service"
            >
              Service
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              onChange={(e) => setServiceType(e.target.value)}
              placeholder="Service Needed"
            />

            {/* <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              name="service"
            >
              <option value="">Select a service</option>
              <option value="haircut">Haircut</option>
              <option value="coloring">Coloring</option>
              <option value="styling">Styling</option>
              <option value="facial">Facial</option>
            </select> */}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter any additional information"
            ></textarea>
          </div>
          <h2 className="text-lg font-medium mb-6">Pay Deposit Fee (50 GHS)</h2>
          <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  placeholder="0000 0000 0000 0000"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  name="expiration-date"
                  id="expiration-date"
                  placeholder="MM / YY"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="000"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Card Holder
                </label>
                <input
                  type="text"
                  name="card-holder"
                  id="card-holder"
                  placeholder="Full Name"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-orange-500 text-white py-2 px-4 my-4 rounded hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={() => submitAppointment()}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCard;

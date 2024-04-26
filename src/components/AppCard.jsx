import React from 'react';

function AppCard(props) {
    return (
        <div>

        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="text-2xl py-4 px-6 border  border-orange-500 bg-white text-orange-400 text-center font-semibold uppercase">
        Book an Appointment
    </div>
            <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" for="name">
                Artisan Info
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter Artisan's name, email or phone number"/>
        </div>
        
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" for="date">
                Date
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" for="time">
                Select Available Time
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Select a time"/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" for="service">
                Service
            </label>
            <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Select a service</option>
                <option value="haircut">Haircut</option>
                <option value="coloring">Coloring</option>
                <option value="styling">Styling</option>
                <option value="facial">Facial</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" for="message">
                Message
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter any additional information"></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Book Appointment
            </button>
        </div>

    </form>
        </div>
        </div>
    );
}

export default AppCard;
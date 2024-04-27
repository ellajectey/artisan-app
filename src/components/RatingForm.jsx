import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RatingForm() {

    const [artisanEmail, setArtisanEmail] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(null);

    function submitRating(){
        if (!sessionStorage.getItem('user_email')) {
            return;
        }
        else if (!rating){
            toast.error('Select a rating');
            return;
        }

        let body = {
            email: sessionStorage.getItem('user_email'),
            artisanEmail: artisanEmail,
            description: description,
            rating: rating,
        }

        console.log('rating form body: ', body);
        
        setArtisanEmail('');
        setDescription('');
        setRating(null);
        document.getElementById('rating'+body.rating).checked = false;
    }
    
  return (
    <div>
      <div className="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Artisan Email</label>
          <input onChange={(e) => setArtisanEmail(e.target.value)} value={artisanEmail} type="text" id="name" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Rating</label>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              id="rating1"
              onClick={() => setRating(1)}
              value="1"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="rating1">1</label>
            <input
              type="radio"
              name="rating"
              id="rating2"
              onClick={() => setRating(2)}
              value="2"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="rating2">2</label>
            <input
              type="radio"
              name="rating"
              id="rating3"
              onClick={() => setRating(3)}
              value="3"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="rating3">3</label>
            <input
              type="radio"
              name="rating"
              id="rating4"
              onClick={() => setRating(4)}
              value="4"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="rating4">4</label>
            <input
              type="radio"
              name="rating"
              id="rating5"
              onClick={() => setRating(5)}
              value="5"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="rating5">5</label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={() => submitRating()}
          className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-900"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RatingForm;

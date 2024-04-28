import React, { useState, useEffect } from "react";
import axios from "axios";

function RatingCard(props) {
  const [ratingList, setRatingList] = useState([]);

  useEffect(() => {
    const getRatings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_ARTISCHED_API}/get-ratings`
        );
        setRatingList(response.data);
      } catch (error) {
        console.error("Error fetching ratings:", error);
      }
    };
    getRatings();
  }, []);

  return (
    <div id="reviews">
      <p className="text-orange-600 font-bold text-2xl text-center">
        Client Testimonials About Artisched
      </p>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {ratingList.map((ratings, key) => (
          <div key={key}>
            <div
              key={ratings.id}
              className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-4 shadow-sm max-w-sm mx-auto my-8 "
            >
              {/* <!-- stars --> */}
              <div className="text-orange-500 flex gap-2">
                <p>{ratings.rating}/5</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-orange-500"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                </svg>
              </div>

              <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400 line-clamp-3">
                {ratings.description}
              </p>

              <div className="mt-6 flex items-center gap-6 ">
                <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                  <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                    <img
                      alt=""
                      src={ratings.image}
                      width="50"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      className="inline-block color: transparent "
                      loading="lazy"
                      // style="color: transparent;"
                    />
                  </div>
                </div>
                <div>
                  <p className="leading-relaxed tracking-wide text-gray-200">
                    {ratings.email}
                  </p>
                  <p className="text-xs leading-relaxed tracking-wide text-gray-400">
                    Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingCard;

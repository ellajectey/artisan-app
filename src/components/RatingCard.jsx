import React from "react";

function RatingCard(props) {
  return (
    <div>
<h2 id="review" className="py-4 text-center text-purple-400 font-bold text-2xl">Client Reviews</h2>

      <div className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-4 shadow-sm max-w-sm mx-auto my-8">
        {/* <!-- stars --> */}
        <div className="text-violet-500 flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-violet-500"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-violet-500"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-violet-500"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-violet-500"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-violet-500"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
          </svg>
        </div>

        <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
          I've been using XYZ for over a year now and their customer service is
          excellent! Whenever I have a question, the team is always available
          and willing to help. Highly recommend!
        </p>

        <div className="mt-6 flex items-center gap-6 ">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
            <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
              <img
                alt=""
                src="https://randomuser.me/api/portraits/women/2.jpg"
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
              Melissa Smith
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-400">
              Marketing Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingCard;

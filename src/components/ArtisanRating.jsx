import React, { useState, useEffect } from "react";
import axios from "axios";

function ArtisanRating(props) {
//   const [ratingList, setRatingList] = useState([]);

//   useEffect(() => {
//     const getRatings = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_ARTISCHED_API}/get-ratings`
//         );
//         setRatingList(response.data);
//       } catch (error) {
//         console.error("Error fetching ratings:", error);
//       }
//     };
//     getRatings();
//   }, []);

  return (
    <div id="reviews">
      <p className="text-orange-600 font-bold text-2xl text-center">
        Client Reviews About Artisan
      </p>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
      <div >
        {/* {ratingList.map((ratings, key) => ( */}
          <div >
            <div
              
              className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-4 shadow-sm max-w-sm mx-auto my-8 "
            >
              {/* <!-- stars --> */}
              <div className="text-orange-500 flex gap-2">
                <p>4/5</p>
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
              Joshua's Woodworks delivered an exquisite custom coffee table that perfectly complements my space. Joshua's attention to detail and craftsmanship exceeded my expectations, and his professionalism made the entire process a breeze.
              </p>

              <div className="mt-6 flex items-center gap-6 ">
                <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                  <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                    <img
                      alt=""
                      src="https://img.freepik.com/free-photo/portrait-upset-american-black-person_23-2148749581.jpg?t=st=1714265705~exp=1714269305~hmac=c536eb66788718a0982573894202edafd7e647507300f2aaf3c0b7ddd8c57e8a&w=360"
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
                    goa@gmail.com
                  </p>
                  <p className="text-xs leading-relaxed tracking-wide text-gray-400">
                    Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>

      <div>
        {/* {ratingList.map((ratings, key) => ( */}
          <div >
            <div
              
              className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-4 shadow-sm max-w-sm mx-auto my-8 "
            >
              {/* <!-- stars --> */}
              <div className="text-orange-500 flex gap-2">
                <p>3.8/5</p>
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
              Thrilled with Joshua's Woodworks, I commissioned unique bookshelves that added character to my home. Joshua's dedication to capturing my vision and his skill in woodworking made for a seamless and satisfying experience
              </p>

              <div className="mt-6 flex items-center gap-6 ">
                <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                  <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                    <img
                      alt=""
                      src="https://img.freepik.com/free-photo/portrait-young-female-jumping_23-2148925650.jpg?t=st=1714266419~exp=1714270019~hmac=1bcd138f931e31d0659379949fab624782b847d28d4191701fa65407fb5bce4e&w=360"
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
                    osas@gmail.com
                  </p>
                  <p className="text-xs leading-relaxed tracking-wide text-gray-400">
                    Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>

      <div >
        {/* {ratingList.map((ratings, key) => ( */}
          <div >
            <div
              
              className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-4 shadow-sm max-w-sm mx-auto my-8 "
            >
              {/* <!-- stars --> */}
              <div className="text-orange-500 flex gap-2">
                <p>4.5/5</p>
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
              Joshua's Woodworks transformed my living area with a stunning handcrafted dining table. Joshua's expertise and commitment to quality craftsmanship were evident throughout the project, making him a top choice for anyone seeking artisanal woodwork.
              </p>

              <div className="mt-6 flex items-center gap-6 ">
                <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                  <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                    <img
                      alt=""
                      src="https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?t=st=1714266236~exp=1714269836~hmac=d5ccc38d7d0bcb872119fe86fe19cff53715f170f6c2f89fd45fa8d62e235cb4&w=900"
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
                    per@gmail.com
                  </p>
                  <p className="text-xs leading-relaxed tracking-wide text-gray-400">
                    Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* ))} */}
      </div>
      </div>
    </div>
  );
}

export default ArtisanRating;

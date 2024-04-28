import React from "react";
import RatingCard from "./RatingCard";

function UserProfile(props) {
  return (
    <div className="bg-white rounded-lg mx-20 my-20">
      <div className="flex inline-block my-20 ">
        <div className="rounded-full bg-orange-300 w-20 px-4 py-4 mx-4 ml-20 text-center">
          <span className="font-bold">RA</span>
        </div>
        <h1 className="w-full text-left my-2 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
          Regina Amankwah
        </h1>
    
      </div>

      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex  w-full  justify-end mr-50">
      <button className=" bg-orange-400 rounded-lg px-2 py-2  w-24 text-white text-center mr-20">Edit Profile </button>

        </div>
        <div className="flex flex-col">
          {/* <!-- Profile Image --> */}

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Details --> */}
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        First Name
                      </dt>
                      <dd className="text-lg font-semibold">Regina</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Last Name
                      </dt>
                      <dd className="text-lg font-semibold">Amankwah</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="text-lg font-semibold">ra@gmail.com</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Location
                      </dt>
                      <dd className="text-lg font-semibold">Adenta, Accra</dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">+233 1913****30</dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Other Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">+233 4567****30</dd>
                    </div>
                    
                  </dl>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;

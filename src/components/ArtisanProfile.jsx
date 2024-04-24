import React from "react";
import ImageGallery from '../components/ImageGallery.jsx'

function ArtisanProfile(props) {
  return (
    <div>
      <section className="w-full overflow-hidden mt-10 dark:bg-gray-900">
        <div className="flex flex-col">
    
          {/* <!-- Profile Image --> */}
          <div className="w-[50%] w-[90%] mx-auto flex py-24 ">
            <img
              src="https://media.licdn.com/dms/image/C4E35AQHzFh4OzuHCVA/profile-framedphoto-shrink_200_200/0/1618420506345?e=1712390400&amp;v=beta&amp;t=ztXWyiqiK0v7aJvE9RhOd4H0MZ2cOt4mdNzAvFezpJo"
              alt="User Profile"
              className="rounded-full outline outline-2 outline-offset-2 outline-orange-500 relative "
            />

            {/* <!-- FullName --> */}
            <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
              Samuel Antwi
            </h1>
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              debitis labore consectetur voluptatibus mollitia dolorem veniam
              omnis ut quibusdam minima sapiente repellendus asperiores
             
            </p>

            {/* <!-- Detail --> */}
            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        First Name
                      </dt>
                      <dd className="text-lg font-semibold">Samuel</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Last Name
                      </dt>
                      <dd className="text-lg font-semibold">Antwi</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Job title
                      </dt>
                      <dd className="text-lg font-semibold">Carpenter</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Category
                      </dt>
                      <dd className="text-lg font-semibold">Furniture</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Location
                      </dt>
                      <dd className="text-lg font-semibold">
                        Adenta, Accra
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">+233 425 6789</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="text-lg font-semibold">
                        san87@gmail.com
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Link
                      </dt>
                      <dd className="text-lg font-semibold">
                        https://www.teclick.com
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </section>
      <ImageGallery/>
    </div>
  );
}

export default ArtisanProfile;

import React from "react";
import ImageGallery from '../components/ImageGallery.jsx'

function ArtisanProfile(props) {
  return (
    <div className="my-20 mx-20 bg-white rounded-lg">
<div className="flex inline-block my-20">
<div className=" rounded-full bg-orange-100 w-20 px-4 py-4 ml-20 text-center font-bold"><span>JA</span></div>
         <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
              Joshua Akrong
            </h1>
            </div>
            <div className="flex  w-full  justify-end mr-50">
      <button className=" bg-orange-400 rounded-lg px-2 py-2  w-24 text-white text-center mr-20">Edit Profile </button>

        </div>
      <section className="w-full overflow-hidden ">
        <div className="flex inline-block my-10">
    
          {/* <!-- Profile Image --> */}
         {/* <!-- FullName --> */}
         

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            {/* <!-- Description --> */}
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
            I'm a seasoned carpenter with over a decade of experience crafting bespoke furniture and intricate woodwork. With a keen eye for detail and a passion for perfection, I specialize in bringing unique visions to life, delivering timeless pieces that stand as both functional and artistic expressions of craftsmanship.
             
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
                      <dd className="text-lg font-semibold">Joshua</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Last Name
                      </dt>
                      <dd className="text-lg font-semibold">Akrong</dd>
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
                      <dd className="text-lg font-semibold">+233 20425 6789</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Other Number
                      </dt>
                      <dd className="text-lg font-semibold">
                        +233 24457 8964
                      </dd>
                    </div>

                    <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="text-lg font-semibold">
                        jan87@gmail.com
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>    
          </div>
        </div>
        <ImageGallery/>
      </section>
      
    </div>
  );
}

export default ArtisanProfile;

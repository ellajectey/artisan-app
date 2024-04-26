import React, { useEffect, useState } from "react";
// import ImageGallery from '../components/ImageGallery.jsx'
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import RatingCard from "../components/RatingCard.jsx";
import { useLocation, useParams } from "react-router-dom";
import header from "../assets/artisan-header.png";

function ArtisanDetails() {
  const location = useLocation();

  let artisanID = null;
  if (location.pathname.split("/")[2]) {
    artisanID = location.pathname.split("/")[2];
  }
  console.log(artisanID);

  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    const getArtisan = async () => {
      let artisanList = [];
      if (sessionStorage.getItem("artisans") !== null) {
        artisanList = JSON.parse(sessionStorage.getItem("artisans"));
      }

      let art = artisanList.find((artist) => artist._id === artisanID);
      console.log("found art", art);
      if (art !== null) {
        setArtisan(art);
      }
    };
    getArtisan();
  }, []);

  // if(!artisan){
  //     console.log(artisan);
  //     return<div>Artisan not found</div>;
  // }

  return (
    <>
      {!artisan ? (
        <div>
          <span>Loading Artisan...</span>
        </div>
      ) : (
        <div>
          <div className="">
            <img src={header} alt="" className="w-full h-40"></img>

            <Navbar />
          </div>
          {/*  */}
          <div className=" flex inline-block ">
            <h2 className="mt-36 ml-10 font-bold text-3xl">
              {artisan.firstName} {artisan.lastName}
            </h2>

            <h2 class="  font-semi-bold text-orange-700 text-3xl ml-10 mt-36">
              ⩥{artisan.location}
            </h2>
          </div>
          <main class=" mx-20 px-4 py-8">
            <div class="flex flex-wrap -mx-4">
              <div class="w-full lg:w-2/3 px-4">
                <h2 class="text-xl font-bold mb-4">
                  {artisan.job} -- {artisan.category}
                </h2>

                {artisan.summary ? (
                  <p class="text-gray-700">{artisan.summary}</p>
                ) : (
                  <p class="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris rhoncus ultrices nunc, in sagittis nulla dapibus non.
                    Sed convallis fermentum ante quis gravida. Morbi finibus
                    lorem eu eros consequat venenatis. Vestibulum at tristique
                    neque. Fusce non sem auctor, sagittis arcu eget, euismod
                    nisl. Curabitur et bibendum sapien. Cras luctus suscipit
                    magna ac bibendum. Vivamus eu semper urna. Sed ullamcorper
                    nisl vel dolor rhoncus facilisis. Donec vehicula nibh vitae
                    est facilisis varius.
                  </p>
                )}

                {/* {artisan.images.image1 ? (
        <img
          className="relative w-40 h-40"
          src={artisan.images.image1}
          alt="artisan's work"
          
        
        />
      ) : (
        <img
          className="relative w-40 h-40"
          src={placeholderImage}
          alt="Placeholder"
        />
      )} */}
              </div>
              <div class="w-full lg:w-1/3 px-4">
                <h3 class="text-lg font-bold mb-4">Schedule</h3>
                <ul class="list-disc pl-4">
                  <li>Monday - Tuesday 12:00pm to 5:00pm</li>
                  <li>Wednesday - Friday 9:00am to 5:00pm</li>
                  <li>Saturday - Sunday 10:00am to 4:00pm</li>
                </ul>
              </div>
            </div>
          </main>
          {/* <ImageGallery/> */}
          <div className="bg-white dark:bg-gray-800  h-full py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    My Work
                  </h2>

                  <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                    {/* This is a section of some simple filler text,
                            also known as placeholder text. It shares some characteristics of a real written text. */}
                  </p>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-lg border border-orange-400 bg-white  px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                >
                  View More
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                {/* <!-- image - start --> */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={artisan.images.image1}
                    loading="lazy"
                    alt="default by Minh Pham"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </a>
                {/* <!-- image - end -->
        
                    <!-- image - start --> */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src={artisan.images.image2}
                    loading="lazy"
                    alt="default"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </a>
                {/* <!-- image - end -->
        
                    <!-- image - start --> */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src={artisan.images.image3}
                    loading="lazy"
                    alt="default"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  {/* <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                        Dev
                        </span> */}
                </a>
                {/* <!-- image - end -->
        
                    <!-- image - start --> */}
                <a
                  href="#"
                  className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src={artisan.images.image4}
                    loading="lazy"
                    alt="default"
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                </a>
                {/* <!-- image - end --> */}
              </div>
            </div>
          </div>
          <RatingCard />
          <Footer />
        </div>
      )}
    </>
  );
}

export default ArtisanDetails;

import React from "react";

function ImageGallery(props) {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Your Work
            </h2>

            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block"></p>
          </div>
          <div>
            <a
              href="#"
              className="inline-block rounded-lg border border-orange-600 bg-orange-300 dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-white dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-orange-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Upload Images
            </a>
            <a
              href="#"
              className="ml-4 inline-block rounded-lg border border-orange-600 bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-orange-400 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-orange-200 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              Social Media Url
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src=""
              loading="lazy"
              alt="default"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </a>
          {/* <!-- image - end -->
    
                <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src=""
              loading="lazy"
              alt="default"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </a>
          {/* <!-- image - end -->
    
                // <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src=""
              loading="lazy"
              alt="default"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </a>
          {/* <!-- image - end -->
    
                <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src=""
              loading="lazy"
              alt="default"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
          </a>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;

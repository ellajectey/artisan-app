import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-black bg-opacity-50 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
               {/* <img
                  className="h-9 w-auto rounded-sm"
                  src="https://www.kindpng.com/picc/m/76-762651_roof-hd-png-download.png" alt="Artisched horizontal logo"
                />  */}
                <span className="font-['Metropolis'] text-fuchsia-100 font-medium text-xl">ArtiSched</span>
                <p className="sr-only">Artisan Scheduler</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <Link
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-300 transition-all duration-200  hover:text-orange-500"
                to="/"
              >
                Home
              </Link>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-300 transition-all duration-200  hover:text-orange-500"
                href="#process"
              >
                Our Process
              </a>
              
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-300 transition-all duration-200 hover:text-orange-500"
                href="#review"
              >
                Reviews
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-300 transition-all duration-200  hover:text-orange-500"
                href="#footer"
              >
                Contact Us
              </a>
              
              
            </div>
            <div className="flex items-center justify-end gap-3">
            <Link to="/search"><i className="fa-solid fa-magnifying-glass text-white"></i></Link>
              <Link
                className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                to="/register"
              >
                Sign up
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                to="/login"
              >
                Login
              </Link>
              
            </div>
          </div>
        </div>
      </header> 
    </div>
  );
}

export default Navbar;

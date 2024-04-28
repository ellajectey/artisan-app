import React from "react";

function Process() {
  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8">
      {/* <section className="relative overflow-hidden bg-white">
        <div className="mt-2 md:mt-0 py-4 pb-4 sm:py-16 lg:pb-24 overflow-hidden">
        <h2 id="process" className="text-center text-orange-600 font-bold text-2xl">Our Process</h2>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            
            <div className="relative mt-8 lg:mt-8">
                
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  width="875"
                  height="48"
                  viewBox="0 0 875 48"
                  fill="none"
                >
                  <path
                    d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                    stroke="yellow"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1 12"
                  />
                </svg>
              </div>
              <div className="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-orange-600  rounded-full shadow">
                    <span className="text-xl font-semibold text-orange-400 dark:text-orange-200">
                      1
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-orange-400  md:mt-10">
                    Register & Login
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 ">
                    Create an account with your Email & Name
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-orange-600 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-orange-500 ">
                      2
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-orange-400 md:mt-10">
                    Select Artisan
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                    Pick Artisan By Location, Category & Expertise.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-orange-600 dark:border-gray-700 rounded-full shadow">
                    <span className="text-xl font-semibold text-orange-500 ">
                      3
                    </span>
                  </div>
                  <h3 className="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-orange-400  md:mt-10">
                    Book An Appointment
                  </h3>
                  <p className="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                    Book an Appointment & Communicate with your Artisan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Step 1 --> */}
    <div
        className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-orange-600 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                <span className="font-bold text-xl text-orange-600">1</span>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition">Data Collection</h3>
                <p className="text-gray-600">Upload diverse datasets containing various types of information for analysis.
                </p>
            </div>
        </div>
    </div>

    {/* <!-- Step 2 --> */}
    <div
        className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-orange-600 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                <span className="font-bold text-xl text-orange-600">2</span>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition">Model Training</h3>
                <p className="text-gray-600">Allow the AI model to learn patterns and insights from the provided data. This
                    may take some time.</p>
            </div>
        </div>
    </div>

    {/* <!-- Step 3 --> */}
    <div
        className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-orange-600 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                <span className="font-bold text-xl text-orange-600">3</span>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition">Insights Delivery</h3>
                <p className="text-gray-600">Receive comprehensive insights and analysis results based on the trained AI
                    model.</p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Process;

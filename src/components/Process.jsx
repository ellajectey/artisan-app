import React from "react";

function Process() {
  return (
    <div>
    <h2 id="process" className="text-center text-orange-600 font-bold text-2xl my-4">Our Process</h2>

    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8">

      

      {/* <!-- Step 1 --> */}
    <div
        className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-orange-600 bg-opacity-50 shadow-2xl shadow-gray-600/10">
        <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                <span className="font-bold text-xl text-orange-600">1</span>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 transition">Register & Login</h3>
                <p className="text-gray-600">
                Create an account with your Email & Name

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
                <h3 className="text-2xl font-semibold text-gray-800 transition">Select Artisan</h3>
                <p className="text-gray-600">Pick Artisan By Location, Category & Expertise.</p>
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
                <h3 className="text-2xl font-semibold text-gray-800 transition"> Book An Appointment </h3>
                    Book an Appointment & Communicate with your Artisan
                <p className="text-gray-600"></p>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Process;

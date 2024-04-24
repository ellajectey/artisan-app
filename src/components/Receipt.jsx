import React from "react";

function Receipt() {
  return (
    <div>
      <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-24">
        <div className="bg-gray-100 px-4 py-2">
          <h2 className="text-lg font-medium text-gray-800">Credit Card</h2>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col items-start justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
              Cardholder Name
            </span>
            <span className="text-lg font-medium text-gray-800">John Doe</span>
          </div>
          <div className="flex flex-col items-start justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
              Card Number
            </span>
            <span className="text-lg font-medium text-gray-800">
              **** **** **** 1234
            </span>
          </div>
          <div className="flex flex-row items-center justify-between mb-6">
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-gray-600">
                Expiration Date
              </span>
              <span className="text-lg font-medium text-gray-800">12/24</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-gray-600">CVV</span>
              <span className="text-lg font-medium text-gray-800">***</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-gray-600">
                Credit Limit
              </span>
              <span className="text-lg font-medium text-gray-800">$10,000</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-gray-600">
                Available Balance
              </span>
              <span className="text-lg font-medium text-gray-800">$7,500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt;

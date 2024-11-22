import React from "react";

const HomePage = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://hsquareadvisors.com/wp-content/uploads/2024/02/Finance.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        <div className="flex justify-between ">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 ">
            <h2 className="text-lg font-semibold mb-2">24 Dec at Royal Hall</h2>
            <h1 className="text-4xl font-bold mb-4">
              Find Your Path to a Brighter Financial Future
            </h1>
            <div className="flex space-x-4">
              <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                View Details
              </button>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">
                Buy Ticket
              </button>
            </div>
          </div>
          <div>aasdasndjoahfuiagfiuaiuyf</div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

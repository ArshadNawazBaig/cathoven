import React from "react";

function Home() {
  return (
    <div className="sm:ml-64">
      <div className="flex flex-col w-full relative">
        <div className="m-1 flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 h-screen flex-col ">
          {/* <p className="text-2xl text-gray-400 dark:text-gray-500">COmponent</p> */}
          <div className="bg-[#F2F2F2] h-12 w-full rounded-xl border-b flex items-center justify-between">
            <p className="text-base font-semibold">Tool Name</p>
          </div>
          <div className="flex h-full w-full">
            <div className="bg-secondary w-full flex items-center justify-center">
              Home
            </div>
            <div className="bg-[#F2F2F2] w-64 ml-[-10px] shadow-xl flex justify-center text-xxs">
              History
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

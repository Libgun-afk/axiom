/** @format */

import React from "react";

const Home2 = () => {
  return (
    <div className="flex justify-between px-80">
      <div className="w-[320px] h-[250px] cursor-pointer border rounded-lg bg-slate-200 hover:bg-slate-800 flex flex-col justify-start pl-5">
        <div className="text-amber-500 font-extrabold text-[120px]">12</div>
        <div className="text-[20px]">Years of Experience</div>
      </div>
      <div className="w-[930px] h-[250px] flex justify-around cursor-pointer border rounded-lg items-center bg-amber-500">
        <div className="gap-4">
          <div>Do you need</div>
          <div>Business Strategy?</div>
        </div>
        <div>
          <div>Call us for free </div>
          <div>+(976)99999999</div>
        </div>
      </div>
    </div>
  );
};

export default Home2;

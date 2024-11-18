import React from "react";
import langauge from "../assets/language1.png";

const Page2 = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-40 text-white">
      <div className="mt-16">
        <div className="inline-flex items-center gap-3">
          <img src={langauge} />
          <p className="font-semibold">Languages</p>
        </div>
        <div>
          <p>Hindi - Navite</p>
          <div className="w-full bg-green-500 rounded-full h-2 mt-4"></div>
        </div>
        <div className="mt-5">
          <p>Urdu - Navite</p>
          <div className="w-full bg-blue-500 rounded-full h-2 mt-4"></div>
        </div>
        <div className="mt-5">
          <p>English-Intermediate</p>
          <div className="bg-yellow-500 h-2 rounded-full w-3/4  mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Page2;

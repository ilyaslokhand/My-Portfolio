import React from "react";
import GraduationCap from "../assets/GraduationCap.png";

const educationData = [
  {
    year: "2008-2020",
    degree: "Completed 12th In PCM",
    school: "Saifiyah Senior Secondary School",
  },
  {
    year: "2020-2023",
    degree: "Bachelor Of Computer Application",
    school: "Geetanjali College Of Science And Commerce",
  },
];

const Page1 = () => {
  return (
    <div id="Education" className="px-4 sm:px-8 lg:px-40 text-white">
      <div className="mt-28 inline-flex gap-4 items-center">
        <img src={GraduationCap} alt="Graduation Cap" />
        <p className="font-semibold">Education</p>
      </div>

      <div className="relative mt-8">
        {/* Vertical Line */}
        <div className="absolute left-3 top-1 w-1 bg-red-400 h-full"></div>

        {educationData.map((item, index) => (
          <div key={index} className="flex items-start mb-10 relative">
            {/* Bullet Point */}
            <div className="absolute left-1 bg-white rounded-full h-6 w-6 border border-red-400 flex items-center justify-center">
              <div className="bg-red-400 rounded-full h-3 w-3"></div>
            </div>
            {/* Content */}
            <div className="ml-12">
              <h3 className="text-lg font-semibold text-yellow-600">
                {item.year}
              </h3>
              <p className="text-base">{item.degree}</p>
              <p className="text-pink-500 text-sm">{item.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;

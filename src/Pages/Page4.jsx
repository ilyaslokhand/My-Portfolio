import React from "react";
import bussiness from "../assets/Business.png";
import arrow from "../assets/RightArrow.png";

const ExperienceData = [
  {
    year: "Apr 2024 - Sep 2024",
    Company: "Joy Info Solution ",
    Exp: "I interned at Joy Info Solution, where I learned web development, including HTML, CSS, JavaScript, React, and Redux. I worked on small projects to gain experience and contributed to live projects, such as a hotel management system, which helped me build production-grade applications.",
  },
];

const Page4 = () => {
  return (
    <div id="Experience" className="px-4 sm:px-8 lg:px-40 text-white">
      <div className="mt-28 inline-flex gap-4 items-center">
        <img src={bussiness} alt="Graduation Cap" />
        <p className="font-semibold">Experience</p>
      </div>
      <div className="relative mt-8">
        {/* Vertical Line */}
        <div className="absolute left-3 top-1 w-1 bg-red-400 h-full"></div>

        {ExperienceData.map((item, index) => (
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
              <p className="text-base text-red-200">{item.Company}</p>
              <p className="text-white text-sm">{item.Exp}</p>
              <div
                className="inline-flex gap-3 items-center mt-4 p-2 rounded-md text-sm sm:text-base "
                style={{ background: "#693DE1" }}
              >
                <a href="https://drive.google.com/file/d/1wZqr4cLBZ5sbCVuR4WQYyEtWQY4uVQWb/view?usp=drive_link">
                  <button>Reference Letter </button>
                </a>
                <img src={arrow} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;

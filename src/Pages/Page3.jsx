import React from "react";

const Page3 = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-40 text-white">
      <div className="mt-16">
        <div className="inline-flex gap-3 items-center ">
          <p className="font-bold text-3xl">#</p>
          <p className="font-semibold text-2xl">Skills</p>
        </div>
        <div className="mt-4">
          <span className="font-medium  ">Web Development:</span>
        </div>
        <div className="inline-flex gap-4 mt-4 flex-wrap">
          <p
            className="p-2 rounded-md text-sm sm:text-base"
            style={{ background: "#693DE1" }}
          >
            HTML
          </p>
          <p
            className="p-2 rounded-md text-sm sm:text-base"
            style={{ background: "#693DE1" }}
          >
            CSS
          </p>
          <p
            className="p-2 rounded-md text-sm sm:text-base"
            style={{ background: "#693DE1" }}
          >
            Javascript
          </p>
          <p
            className="p-2 rounded-md text-sm sm:text-base"
            style={{ background: "#693DE1" }}
          >
            Redux
          </p>
          <p
            className="p-2 rounded-md text-sm sm:text-base"
            style={{ background: "#693DE1" }}
          >
            Tailwind
          </p>
        </div>

        <div className="mt-4">
          <span className="font-medium  ">Frameworks:</span>
        </div>
        <div className=" inline-flex mt-4">
          <p className="p-2 rounded-md" style={{ background: "#693DE1" }}>
            React Js
          </p>
        </div>
        <div className="mt-4">
          <span className="font-medium  ">Version Control:</span>
        </div>
        <div className=" inline-flex mt-4 gap-4">
          <p className="p-2 rounded-md" style={{ background: "#693DE1" }}>
            Git
          </p>
          <p className="p-2 rounded-md" style={{ background: "#693DE1" }}>
            Git Hub
          </p>
        </div>
        <div className="mt-4">
          <span className="font-medium  ">Package Managers:</span>
        </div>
        <div className=" inline-flex mt-4">
          <p className="p-2 rounded-md" style={{ background: "#693DE1" }}>
            NPM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page3;

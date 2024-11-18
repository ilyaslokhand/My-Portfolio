import React from "react";
import Sourcecode from "../assets/SourceCode.png";
import github from "../assets/GitHub.png";
import Portfolio from "../assets/Portfolio.jpg";
import Deshboad from "../assets/Deshboad.jpg";
import Landing from "../assets/Landing.jpg";

const Page5 = () => {
  return (
    <div id="Projects" className="px-4 sm:px-8 lg:px-40 text-white">
      <div className="mt-16">
        <div className="inline-flex gap-4 items-center">
          <img src={Sourcecode} />
          <p className="font-semibold">Projects</p>
        </div>
        {/* card1 */}
        <p style={{ color: "#FFEA9F" }} className="mt-3">
          Personal Portfolio
        </p>
        <p className="mt-3">
          Developed an interactive web application using React and Tailwind.{" "}
          <br></br>Designed to be a reflective space for personal and
          professional growth, with a focus on simplicity and minimalism.
        </p>
        <div
          className="inline-flex items-center mt-5 p-2 rounded-md text-sm sm:text-base gap-3"
          style={{ background: "#693DE1" }}
        >
          <img src={github} />
          <a href="">
            <button>GitHub</button>
          </a>
        </div>
        <img
          src={Portfolio}
          className="shadow-2xl mt-4 "
          style={{
            width: "70%", // Scales down proportionally; adjust this percentage if needed
            maxWidth: "250px", // Smaller max width to reduce size
            height: "auto", // Keeps aspect ratio
            borderRadius: "15px", // Rounds the edges; increase for more rounding
            boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.2)", // Soft white shadow
          }}
        />
        {/* card2 */}
        <p style={{ color: "#FFEA9F" }} className="mt-8">
          Employee Deshboard
        </p>
        <div>
          <p className="mt-3">
            Developed an admin-employee dashboard where admins assign tasks, and
            employees can accept or reject them.<br></br> Built with React.js,
            Tailwind CSS, and local storage.
          </p>
          <p className="mt-3" style={{ color: "#FFEA9F" }}>
            To check you can login through below credential:
          </p>
          <p>Admin: </p>
          <p>Email: 1@gmail.com</p>
          <p>Password: 123</p>
          <div className="mt-4">
            <p>Employee:</p>
            <p>Email: employee1@example.com</p>
            <p>Password: 123</p>
          </div>
        </div>

        <div
          className="inline-flex items-center mt-5 p-2 rounded-md text-sm sm:text-base gap-3"
          style={{ background: "#693DE1" }}
        >
          <img src={github} />
          <a href="https://github.com/ilyaslokhand/employmangementsystem">
            <button>GitHub</button>
          </a>
        </div>
        <a href="https://672daa21d62e5cfe61c7daa5--peppy-naiad-50127b.netlify.app/">
          <img
            src={Deshboad}
            className="shadow-2xl mt-4 "
            style={{
              width: "70%", // Scales down proportionally; adjust this percentage if needed
              maxWidth: "250px", // Smaller max width to reduce size
              height: "auto", // Keeps aspect ratio
              borderRadius: "15px", // Rounds the edges; increase for more rounding
              boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.2)", // Soft white shadow
            }}
          />
        </a>
        {/* card3 */}
        <p style={{ color: "#FFEA9F" }} className="mt-8">
          Landing Page
        </p>
        <p className="mt-3">
          Developed an interactive web Landing Page using React and Tailwind.{" "}
          <br></br>Designed to be a reflective space for personal and
          professional growth, with a focus on simplicity and minimalism.
        </p>
        <div
          className="inline-flex items-center mt-5 p-2 rounded-md text-sm sm:text-base gap-3"
          style={{ background: "#693DE1" }}
        >
          <img src={github} />
          <a href="https://github.com/ilyaslokhand/LandingPage">
            <button>GitHub</button>
          </a>
        </div>
        <a href="https://67332f98aceed6171ff444e0--taupe-torte-cca7c9.netlify.app/">
          <img
            src={Landing}
            className="shadow-2xl mt-4 "
            style={{
              width: "70%", // Scales down proportionally; adjust this percentage if needed
              maxWidth: "250px", // Smaller max width to reduce size
              height: "auto", // Keeps aspect ratio
              borderRadius: "15px", // Rounds the edges; increase for more rounding
              boxShadow: "0px 15px 30px rgba(255, 255, 255, 0.2)", // Soft white shadow
            }}
          />
        </a>
      </div>
      <p className="text-center mt-8" style={{ marginBottom: "60px" }}>
        Created by Ilyas Lokhandwala
      </p>
    </div>
  );
};

export default Page5;

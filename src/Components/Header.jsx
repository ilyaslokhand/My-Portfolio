import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Both LinkedIn and GitHub are from the brands package
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Solid
import ilyas from "../assets/ilyas.png";

const Header = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-40 text-white">
      <div className="flex justify-center mt-5 font-medium list-none cursor-pointer">
        <ul className="flex gap-8 ">
          <a href="#About">
            <li>About</li>
          </a>
          <a href="#Education">
            {" "}
            <li>Education</li>
          </a>
          <a href="#Experience">
            {" "}
            <li>Experience</li>
          </a>
          <a href="#Projects">
            {" "}
            <li>Projects</li>
          </a>
        </ul>
      </div>
      <div className="mt-20">
        <img
          src={ilyas}
          alt="Profile"
          style={{ width: "89px", height: "89px" }}
        />
        <div className=" gap-5 items-center mt-4 inline-flex ">
          <p id="About" className="font-bold text-2xl">
            Hey, I am Ilyas
          </p>
          <p
            className="text-center rounded-2xl font-medium px-4 py-2"
            style={{
              background: "#BEDBFE",
              color: "#1F3A8A",
            }}
          >
            Open to work
          </p>
        </div>
        <p className="mt-5 p-4 rounded-md w-fit ">
          Motivated and adaptable Frontend Web Developer with a passion for
          building engaging, user-friendly web experiences.
          <br />
          <span style={{ color: "#B6FBFF" }}>
            Eager to contribute, learn, and grow in a collaborative environment.
          </span>
        </p>
        {/* card1 */}
        <div className="p-4 ">
          <div
            className="inline-flex mt-5 gap-3 items-center w-fit px-3 py-2 rounded-lg"
            style={{ background: "#693DE1", marginRight: "5px" }}
          >
            <a
              href="https://www.linkedin.com/in/ilyas-lokhand?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ilyas-lokhand?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="flex items-center text-lg"
            >
              LinkedIn
            </a>
          </div>
          {/* card2 */}
          <div
            className="inline-flex mt-5 gap-3 items-center w-fit px-3 py-2 rounded-lg"
            style={{ background: "#693DE1", marginRight: "5px" }}
          >
            <a
              href="https://github.com/ilyaslokhand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://github.com/ilyaslokhand"
              className="flex items-center text-lg"
            >
              Github
            </a>
          </div>
          {/* card3 */}
          <div
            className="inline-flex mt-5 gap-3 items-center w-fit px-3 py-2 rounded-lg"
            style={{ background: "#693DE1", marginRight: "5px" }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <a
              href="mailto:ilokhandwala98@gmail.com"
              className="flex items-center text-lg"
            >
              ilokhandwala98@gmail.com
            </a>
          </div>

          {/* card4 */}
          <div
            className="inline-flex mt-5 gap-3 items-center w-fit px-3 py-2 rounded-lg"
            style={{ background: "#693DE1" }}
          >
            <a
              href="https://drive.google.com/file/d/1OB5Hz84Usfvo2KC6Nl5vC1ICy4Syt71v/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
            </a>
            <a
              href="https://drive.google.com/file/d/1OB5Hz84Usfvo2KC6Nl5vC1ICy4Syt71v/view?usp=drive_link"
              className="flex items-center text-lg"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

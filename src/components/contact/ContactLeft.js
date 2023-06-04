import React from "react";
import { contactImg } from "../../assets";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Santosh Yeshwanth</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          A passionate web developer currently looking for frontend developer
          role or software engineer role expert in writing structured javascript
          code and also gained knowledge on REACT
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9939313009</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">santosh25.yeshwanth@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/sant0143"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/santoshyeshwanth/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

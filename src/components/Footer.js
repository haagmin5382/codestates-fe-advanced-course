import React from "react";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="relative  w-full  bottom-0 bg-gray-300 rounded-lg shadow md:flex md:justify-between md:p-6 ">
      <span className="text-sm text-gray-700 sm:text-center dark:text-gray-400"></span>
      <div className="flex flex-wrap items-center mt-3 sm:mt-0">
        <div className="mr-4 text-gray-500 text-lg md:mr-6 dark:text-gray-400 flex">
          <span>made by haagmin5382</span>
          <a
            href="https://github.com/haagmin5382"
            className="leading-4 m-1 flex"
          >
            <ImGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

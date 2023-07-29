import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Leetcode from "../../assets/leetcode.png";

function Footer() {
  return (
    <div className="bg-black text-gray-400 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="font-bold text-lg mb-2"> Contact Me </h2>{" "}
            <a
              href="mailto:jatinramchandani15@gmail.com"
              className="inline-block mr-4"
            >
              <FaEnvelope className="inline-block mr-2" />
              Email{" "}
            </a>{" "}
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="font-bold text-lg mb-2"> Social Media </h2>{" "}
            <a
              href="https://www.linkedin.com/in/jatinramchandani/"
              className="inline-block mr-4"
              target="_blank"
            >
              {/* <FaLinkedin className="inline-block mr-2" /> */}
              <img src={Leetcode} className="inline-block mr-2 h-5" />
              LeetCode{" "}
            </a>{" "}
            <a
              href="https://leetcode.com/jatinramchandani15/"
              className="inline-block mr-4"
              target="_blank"
            >
              <FaLinkedin className="inline-block mr-2" />
              LinkedIn{" "}
            </a>{" "}
            <a
              href="https://github.com/Jatin-11022002"
              className="inline-block"
              target="_blank"
            >
              <FaGithub className="inline-block mr-2" />
              GitHub{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Footer;

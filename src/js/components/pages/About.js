import React from "react";
import AboutImg from "../../../assets/mostafaaa.png";

const About = () => {
  //console.log(data);
  return (
    <div
      id="about"
      className="w-full min-h-screen p-2 flex flex-col md:flex-row justify-center items-center md:py-16 bg-black"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-4 my-5">
            About <span className="text-red-500"> Me </span>{" "}
          </h2>{" "}
          <h2 className="py-4 text-gray-300 text-2xl">
            {" "}
            Hi there, my name is Jatin Ramchandani{" "}
          </h2>{" "}
          <div className="border border-white p-4">
            <p className="text-lg md:text-xl text-white mb-8">
              <p className="text-2xl font-serif"> </p>I aspire to learn, acquire
              new skills, and enhance my existing ones by working on real-world
              projects. I am confident that the hands-on experience and exposure
              to real-world challenges will provide me with invaluable insights
              and knowledge that can shape me into a highly valued professional.
              <br />
              <br />I am constantly seeking opportunities to grow as an
              individual in this dynamic and ever-evolving industry.
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-72 h-72 md:w-auto md:h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mx-auto my-4">
          <img
            src={AboutImg}
            className="rounded-xl w-full h-full object-cover"
            alt="/"
          />
        </div>
      </div>{" "}
      <br />
    </div>
  );
};

export default About;

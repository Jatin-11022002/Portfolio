import React from "react";
import HTML from "../../../assets/html.png";
import CSS from "../../../assets/css.png";
import JavaScript from "../../../assets/javascript.png";
import ReactImg from "../../../assets/react.png";
import Node from "../../../assets/node.png";
import GitHub from "../../../assets/github.png";
import Java from "../../../assets/java.png";
import Mongo from "../../../assets/mongo.png";
import Mysql from "../../../assets/mysql.png";
import Express from "../../../assets/express.png";
import { skills } from "../../../data";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full text-gray-300 bg-gradient-to-b from-black to-blue-900"
    >
      <br />
      <div className="max-w-5xl mx-auto p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 inline-block my-16 text-yellow-300">
            {" "}
            My <span className="text-red-500"> Skills </span>
          </h1>
        </div>{" "}
        {/* <p className="mt-4 text-lg text-center my-10 text-white mb-8">
          {" "}
          Writing code using languages: Java, HTML, CSS, JS, Dart, PHP,
          MYSQL, and Python.{" "}
        </p>{" "} */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8">
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={Java}
              alt="HTML icon"
            />
            <p className="text-lg"> Java </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="text-lg"> JAVASCRIPT </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={ReactImg}
              alt="HTML icon"
            />
            <p className="text-lg"> REACT JS </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={Node}
              alt="HTML icon"
            />
            <p className="text-lg"> NODE JS </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={Express}
              alt="HTML icon"
            />
            <p className="text-lg"> Express JS </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={GitHub}
              alt="HTML icon"
            />
            <p className="text-lg"> GITHUB </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={Mysql}
              alt="HTML icon"
            />
            <p className="text-lg"> MySQL </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={HTML}
              alt="HTML icon"
            />
            <p className="text-lg"> HTML </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img className="w-20 mx-auto mt-4 mb-2" src={CSS} alt="HTML icon" />
            <p className="text-lg"> CSS </p>{" "}
          </div>{" "}
          <div
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            style={{ background: "#3272c33b" }}
          >
            <img
              className="w-20 mx-auto mt-4 mb-2"
              src={Mongo}
              alt="HTML icon"
            />
            <p className="text-lg"> MONGO DB </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Skills;

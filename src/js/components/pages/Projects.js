import React from "react";
import Bookit from "../../../assets/bookit.png";
import Movies from "../../../assets/movies.png";
import Lyriks from "../../../assets/lyriks.png";
import File_share from "../../../assets/fileshare.png";
import "../../../css/index.css";
import { FiArrowRight } from "react-icons/fi";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen text-gray-300 bg-gradient-to-b from-blue-900 to-black"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-yellow-300 mb-6 my-10 text-center">
          {" "}
          My <span className="text-red-500"> Projects </span>
        </h2>
        <p className="text-white mb-8 text-lg text-center">
          Here are some of my projects, the rest of the projects are available
          on GitHub{" "}
        </p>{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Movies}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {" "}
                  Movies Recommendation System{" "}
                </h3>{" "}
                <p className="mt-2 text-gray-500 text-sm">
                  It is a web-based app for recommending movies based on user
                  preference, search history and other activities.
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    id
                    href="https://github.com/Jatin-11022002/MSMovieApp.git"
                    target="_blank"
                  >
                    more info on GitHub{" "}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Bookit}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900"> BookIT </h3>{" "}
                <p className="mt-2 text-gray-500 text-sm">
                  It is a web app that allows users to read, buy-sell, and
                  publish their content. It has features like preview, chat,
                  payment and book-it coins.
                </p>{" "}
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    id
                    href="https://github.com/Jatin-11022002/BookIT/tree/master "
                    target="_blank"
                  >
                    more info on GitHub{" "}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={Lyriks}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">Lyriks</h3>{" "}
                <p className="mt-2 text-gray-500 text-sm">
                  Lyriks is a music service platform that gives you access to
                  variety of songs.
                </p>{" "}
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a
                    id
                    href="https://github.com/Jatin-11022002/Lyriks"
                    target="_blank"
                  >
                    more info on GitHub{" "}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="bg-white rounded-lg shadow-lg">
              <img
                src={File_share}
                alt="Property"
                className="w-full max-h-66 object-cover rounded-t-lg h-1/3 md:h-66"
              />
              <div className="py-4 px-2 md:py-6 md:px-4 text-center justify-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {" "}
                  File Sharing App{" "}
                </h3>{" "}
                <p className="mt-2 text-gray-500 text-sm">
                  File share is a web application which allows users to save
                  files online, access them from anywhere and share them with
                  other users as well.
                </p>{" "}
                <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-500">
                  <a id href="/" target="_blank">
                    more info on GitHub{" "}
                    <FiArrowRight className="mr-2 inline-block" />
                  </a>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Projects;

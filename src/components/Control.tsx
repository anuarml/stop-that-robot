import React from "react";
import { Header, Footer } from ".";
import robotImage from "../assets/robot.gif";
import { Robot, Pen } from "../types/appTypes";

export const Control = ({ robot }: any) => {
  console.log(robot);
  return (
    <div className="relative bg-white overflow-hidden">
      <Header />
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <main className="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-10 xl:mt-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <button
                  onClick={robot.start}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Start
                </button>
                <button
                  onClick={robot.stop}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Stop
                </button>
              </div>
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                <button
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Up
                </button>
              </div>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <button
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Left
                </button>
                <button
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Right
                </button>
              </div>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <button
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Down
                </button>
              </div>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <button
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Reset Robot
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img src={robotImage} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

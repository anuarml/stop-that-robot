import React, { useContext } from "react";
import { Header, Footer } from ".";
import robotImage from "../assets/robotRunning.gif";
import { Robot, Pen, AppState } from "../types/appTypes";
import { RobotStateContext } from "../lib";

export const Control = ({ robot, pen }: any) => {
  const robotState: AppState = useContext(RobotStateContext);

  return (
    <div className="relative bg-white overflow-hidden">
      <Header />
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <main className="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-10 xl:mt-10">
          {pen.width > 0 && pen.height > 0 && (
            <div style={pen} className="border">
              <img
                src={robotImage}
                className="relative lg:max-w-xs w-px"
                style={{
                  left: robotState.robotData.xPosition,
                  top: robotState.robotData.yPosition,
                }}
              />
            </div>
          )}
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="bg-gray-800 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <button
                  onClick={robot.turnOn}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Turn On
                </button>
                <button
                  onClick={robot.turnOff}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Turn Off
                </button>
              </div>
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                <button
                  onClick={robot.moveUp}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Up
                </button>
              </div>
              <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <button
                  onClick={robot.moveLeft}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Left
                </button>
                <button
                  onClick={robot.moveRight}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Right
                </button>
              </div>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <button
                  onClick={robot.moveDown}
                  type="submit"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Down
                </button>
              </div>
              <div className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <button
                  onClick={robot.reset}
                  type="reset"
                  className="mt-5 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Reset Robot
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

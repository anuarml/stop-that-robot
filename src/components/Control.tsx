import React, { useContext } from "react";
import { Header, Footer } from ".";
import robotImage from "../assets/robotRunning.gif";
import { ControlProps, RobotState } from "../types/appTypes";
import { RobotStateContext } from "../lib";

export const Control = ({ robot, pen, keysListener }: ControlProps) => {
  const robotState: RobotState = useContext(RobotStateContext);

  return (
    <div className="relative bg-white overflow-hidden">
      <Header />
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32 grid">
        {pen.width > 0 && pen.height > 0 && (
          <div
            style={pen}
            className="border place-self-center sm:mt-10 bg-gray-800"
          >
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
        <main
          className="mx-auto sm:mt-12 sm:px-6 md:mt-10 xl:mt-10"
          onKeyDown={keysListener}
        >
          <div className="lg:grid">
            <div
              className="bg-blue-200 sm:text-center md:mx-auto place-self-center"
              style={{ width: pen.width > 0 ? pen.width : 200 }}
            >
              <div className="mt-3 text-base text-gray-500 sm:max-w-lg sm:mx-auto sm:text-center">
                <button
                  onClick={robot.turnOn}
                  type="submit"
                  className="m-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Turn On
                </button>
                <button
                  onClick={robot.turnOff}
                  type="submit"
                  className="m-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Turn Off
                </button>
              </div>
              <div className="mt-1 text-base text-gray-500 sm:max-w-lg sm:mx-auto sm:text-center">
                <button
                  onClick={robot.moveUp}
                  type="submit"
                  className="m-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Up
                </button>
              </div>
              <div className="mt-1 text-base text-gray-500 sm:max-w-lg sm:mx-auto sm:text-center">
                <button
                  onClick={robot.moveLeft}
                  type="submit"
                  className="m-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Left
                </button>
                <button
                  onClick={robot.moveRight}
                  type="submit"
                  className="m-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Right
                </button>
              </div>
              <div className="mt-1 text-base text-gray-500 sm:max-w-lg sm:mx-auto sm:text-center">
                <button
                  onClick={robot.moveDown}
                  type="submit"
                  className="m-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Down
                </button>
              </div>
              <div className="mt-1 mb-3 text-base text-gray-500 sm:max-w-lg sm:mx-auto sm:text-center">
                <button
                  onClick={robot.reset}
                  type="reset"
                  className="m-2 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-5 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
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

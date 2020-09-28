import React, { useContext } from "react";
import { Header, Footer } from ".";
import { RobotState } from "../types/appTypes";
import { RobotStateContext } from "../lib";
import robotImage from "../assets/robotRunning.gif";

export const Stats = () => {
  const robotState: RobotState = useContext(RobotStateContext);

  return (
    <div
      className="relative bg-white overflow-hidden"
      data-function="StatsPage"
    >
      <Header />
      <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
        <main className="relative mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-15">
          <div className="text-center">
            <h3 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Welcome to your Robot Stats
            </h3>
            <div className="relative mt-5 mx-auto w-full lg:max-w-md">
              <img src={robotImage} />
            </div>
            <p
              className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              data-function="x-coordinate"
            >
              X Coordinate: {robotState.robotData.xCoordinate}
            </p>
            <p
              className="max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl"
              data-function="y-coordinate"
            >
              Y Coordinate: {robotState.robotData.yCoordinate}
            </p>
            <p
              className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              data-function="x-position"
            >
              X Position: {robotState.robotData.xPosition}
            </p>
            <p
              className="max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl"
              data-function="y-position"
            >
              Y Position: {robotState.robotData.yPosition}
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

import React, { useState, useContext, useRef } from "react";
import { Control } from "../components";
import * as RobotApi from "../api/RobotApi.js";
import { Pen, RobotState, RobotData } from "../types/appTypes";
import { RobotStateContext, HeaderContext } from "../lib";

export const ControlContainer = () => {
  /*
    Given that the pen area will always be a rectangle then I can
    calculate the value of each direction that the robot will be moving 
    by converting the degrees of each of the angles to radians.
  */
  const rightDirection: number = 0;
  const leftDirection: number = 3.14159;
  const upDirection: number = 4.71239;
  const downDirection: number = 1.5708;
  const penStartingSize: Pen = { width: 0, height: 0 };
  const robotState: RobotState = useContext(RobotStateContext);
  let robotStartingXPosition: number = 0;
  let robotStartingYPosition: number = 0;
  let robotMaxXPosition: number = 0;
  let robotMaxYPosition: number = 0;
  let robotMinXPosition: number = 0;
  let robotMinYPosition: number = 0;
  let isRobotOn: boolean = false;
  let isRobotCrashed: boolean = robotState.robotData.crashed;

  const [pen, setPen] = useState(penStartingSize);

  const updatePen = (updatedPen: Pen) => {
    setPen((prevState: any) => ({
      ...prevState,
      ...updatedPen,
    }));
  };

  /* 
    Calculate the Robot's staring, maximum and minimum positions 
    by taking in count the Pen's size, the Robot's size and 
    the size of the walls of the Pen
  */

  const calculateRobotPositionValue = (penSize: Pen): void => {
    robotMaxXPosition = penSize.width - robot.size - 2;
    robotMaxYPosition = penSize.height - robot.size - 2;
    robotMinXPosition = penSize.width + robot.size + 2;
    robotMinYPosition = penSize.height + robot.size + 2;
    robotStartingXPosition = penSize.width / 2;
    robotStartingYPosition = penSize.height / 2;
    const robotStartingPosition: RobotData = {
      xPosition: robotStartingXPosition,
      yPosition: robotStartingYPosition,
      crashed: false,
    };
    robotState.updateRobotData(robotStartingPosition);
  };

  /* 
    Calculate the Robot's current position and updating 
    the Robot's data to move it around the Pen
  */

  const robotListener = (x: number, y: number, crashed: boolean): void => {
    if (isRobotOn) {
      const robotXPosition: number = x + robotStartingXPosition;
      const robotYPosition: number = y + robotStartingYPosition;
      const robotPosition: RobotData = {
        xPosition: Math.round(robotXPosition),
        yPosition: Math.round(robotYPosition),
        xCoordinate: Math.round(x),
        yCoordinate: Math.round(y),
        crashed: crashed,
      };
      if (crashed) {
        turnOffRobot();
        isRobotCrashed = true;
        window.alert("Your robot has crashed please reset it");
      }
      /* Validation needed so that when the Robot
        is crashed with the call, it stop repainting
        so that it can be observed that the Robot is
        against the wall
      */
      if (
        robotMaxXPosition > robotXPosition &&
        robotXPosition <= robotMinXPosition &&
        robotMaxYPosition > robotYPosition &&
        robotYPosition <= robotMinYPosition
      ) {
        robotState.updateRobotData(robotPosition);
      }
    }
  };

  const turnOnRobot = (): void => {
    if (!isRobotOn) {
      if (!isRobotCrashed) {
        const penSize = RobotApi.on(robotListener);
        updatePen(penSize);
        isRobotOn = true;
        calculateRobotPositionValue(penSize);
      } else {
        window.alert("Your robot has crashed please reset it");
      }
    } else {
      window.alert("Your robot is already turned on");
    }
  };

  const turnOffRobot = (): void => {
    if (isRobotOn) {
      stopRobot();
      RobotApi.off(robotListener);
      isRobotOn = false;
    } else {
      window.alert("Your robot is already turned off");
    }
  };

  const moveRobot = (speed: number, direction: number): void => {
    if (isRobotOn) {
      RobotApi.command(speed, direction);
    } else {
      window.alert("You need to turn on the robot");
    }
  };

  const moveRobotRight = (): void => {
    moveRobot(robot.speed, rightDirection);
  };

  const moveRobotLeft = (): void => {
    moveRobot(robot.speed, leftDirection);
  };

  const moveRobotUp = (): void => {
    moveRobot(robot.speed, upDirection);
  };

  const moveRobotDown = (): void => {
    moveRobot(robot.speed, downDirection);
  };

  const stopRobot = (): void => {
    RobotApi.command(0, 0);
  };

  const resetRobot = (): void => {
    const penSize = RobotApi.reset();
    updatePen(penSize);
    calculateRobotPositionValue(penSize);
    stopRobot();
    RobotApi.off(robotListener);
    isRobotCrashed = false;
    isRobotOn = false;
  };

  /* 
    Stop the robot and power it off after changing
    pages so that the stats page can show the current
    robot data without changing
  */
  const handlePageChange = (): void => {
    stopRobot();
    RobotApi.off(robotListener);
    isRobotOn = false;
  };

  const [robot, setRobot] = useState({
    turnOn: turnOnRobot,
    turnOff: turnOffRobot,
    reset: resetRobot,
    moveRight: moveRobotRight,
    moveLeft: moveRobotLeft,
    moveUp: moveRobotUp,
    moveDown: moveRobotDown,
    speed: 10,
    size: 1,
  });

  const headerContext: any = {
    handlePageChange,
  };

  /* 
    Listener function so that the user can 
    move the Robot with the keyboard
  */
  const keysListener = (event: any) => {
    if (event.keyCode == "38") {
      robot.moveUp();
    } else if (event.keyCode == "40") {
      robot.moveDown();
    } else if (event.keyCode == "37") {
      robot.moveLeft();
    } else if (event.keyCode == "39") {
      robot.moveRight();
    }
  };

  return (
    <HeaderContext.Provider value={headerContext}>
      <Control robot={robot} pen={pen} keysListener={keysListener} />;
    </HeaderContext.Provider>
  );
};

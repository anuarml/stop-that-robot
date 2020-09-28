import React, { useState, useContext, useEffect } from "react";
import { Control } from "../components";
import * as RobotApi from "../api/RobotApi.js";
import {
  ControlContainerState,
  Pen,
  Robot,
  AppState,
  RobotData,
} from "../types/appTypes";
import { RobotStateContext } from "../lib";

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
  const robotState: AppState = useContext(RobotStateContext);
  let robotStartingXPosition: number = 0;
  let robotStartingYPosition: number = 0;
  let robotMaxXPosition: number = 0;
  let robotMaxYPosition: number = 0;
  let isRobotOn: boolean = false;
  let isRobotCrashed: boolean = false;
  let hasRobotMoved: boolean = false;

  const [pen, setPen] = useState(penStartingSize);

  const updatePen = (updatedPen: Pen) => {
    setPen((prevState: any) => ({
      ...prevState,
      ...updatedPen,
    }));
  };

  /* 
    Calculate the Robots starting position by taking in count the Pen's size 
  
  */
  // TODO: Add useEffect to avoid using many of the constants from above
  /*useEffect(() => {
    calculateRobotStartingPosition(penStartingSize);
  }, [pen]);*/

  const calculateRobotStartingPosition = (penSize: Pen): void => {
    robotMaxXPosition = penSize.width - robot.size;
    robotMaxYPosition = penSize.height - robot.size;
    robotStartingXPosition = penSize.width / 2;
    robotStartingYPosition = penSize.height / 2;
    const robotStartingPosition: RobotData = {
      xPosition: robotStartingXPosition,
      yPosition: robotStartingYPosition,
      maxXPosition: robotMaxXPosition,
      maxYPosition: robotMaxYPosition,
      crashed: false,
    };
    robotState.updateRobotData(robotStartingPosition);
  };

  const robotListener = (x: number, y: number, crashed: Boolean): void => {
    if (isRobotOn) {
      const robotXPosition: number = x + robotStartingXPosition;
      const robotYPosition: number = y + robotStartingYPosition;
      const robotPosition: RobotData = {
        xPosition: robotXPosition,
        yPosition: robotYPosition,
        crashed: crashed,
      };
      if (robotXPosition < robotMaxXPosition) {
        robotState.updateRobotData(robotPosition);
      }
      if (crashed) {
        turnOffRobot();
        isRobotCrashed = true;
        window.alert("Your robot has crashed please reset it");
      }
    }
  };

  const turnOnRobot = (): void => {
    if (!isRobotOn) {
      if (!isRobotCrashed) {
        const penSize = RobotApi.on(robotListener);
        updatePen(penSize);
        isRobotOn = true;
        calculateRobotStartingPosition(penSize);
      } else {
        window.alert("Your robot has crashed please reset it");
      }
    } else {
      window.alert("Your robot is already turned on");
    }
  };

  const turnOffRobot = (): void => {
    if (isRobotOn) {
      RobotApi.command(0, 0);
      RobotApi.off(robotListener);
      isRobotOn = false;
    } else {
      window.alert("Your robot is already turned off");
    }
  };

  const moveRobot = (speed: number, direction: number): void => {
    if (isRobotOn) {
      RobotApi.command(speed, direction);
      //hasRobotMoved = true;
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

  const resetRobot = (): void => {
    if (isRobotCrashed) {
      const penSize = RobotApi.reset();
      updatePen(penSize);
      calculateRobotStartingPosition(penSize);
      isRobotCrashed = false;
    } else {
      window.alert("Your robot hasn't crashed, there is no need to reset it");
    }
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

  const updateRobot = (updatedRobot: any) => {
    setRobot((prevState: any) => ({
      ...prevState,
      ...updatedRobot,
    }));
  };

  return <Control robot={robot} pen={pen} />;
};

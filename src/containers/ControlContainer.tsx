import React, { useState } from "react";
import { Control } from "../components";
import * as RobotApi from "../api/RobotApi.js";
import { ControlContainerState, Pen } from "../types/appTypes";

export const ControlContainer = () => {
  const robotData = { x: 0, y: 0, crashed: false };
  const robotListener = (x: Number, y: Number, crashed: Boolean) => {
    console.log(x);
    console.log(y);
    console.log(crashed);
  };

  const startRobot = (): Pen => {
    const penSize = RobotApi.on(robotListener);
    return penSize;
  };

  const stopRobot = (): void => {
    RobotApi.off(robotListener);
  };

  const moveRobot = (speed: Number, direction: Number): void => {
    RobotApi.command(speed, direction);
  };

  const resetRobot = (): Pen => {
    const penSize = RobotApi.reset();
    return penSize;
  };

  const [robot, setRobot] = useState({
    start: startRobot,
    stop: stopRobot,
    move: moveRobot,
    reset: resetRobot,
  });

  const updateRobot = (updatedRobot: Object) => {
    setRobot((prevState: any) => ({
      ...prevState,
      ...updatedRobot,
    }));
  };

  const state: any = {
    robot,
    updateRobot,
  };

  return <Control robot={robot} />;
};

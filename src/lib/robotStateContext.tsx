import React, { createContext } from "react";

export const RobotStateContext = createContext({
  robotData: {},
  updateRobotData: () => {},
});

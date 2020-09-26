import React, { createContext } from "react";

export const Context = createContext({
  robotData: {},
  updateRobotData: (updatedRobotData: any) => {},
});

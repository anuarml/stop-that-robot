export interface AppState {
  robotData: RobotData;
  updateRobotData: (updatedRobotData: RobotData) => void;
}

export interface ControlContainerState {
  robot: Robot;
  updateRobot: (updatedRobot: Robot) => void;
}

export interface Robot {
  start: () => Pen;
  stop: () => void;
  move: (speed: Number, direction: Number) => void;
  reset: () => Pen;
}

export interface RobotData {
  x: Number;
  y: Number;
  crashed: Boolean;
}

export interface Pen {
  width: Number;
  height: Number;
}

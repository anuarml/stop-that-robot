export interface AppState {
  robotData: RobotData;
  updateRobotData: (updatedRobotData: RobotData) => void;
}

export interface ControlContainerState {
  robot: Robot;
}

export interface Robot {
  turnOn: () => void;
  turnOff: () => void;
  reset: () => void;
  moveRight: () => void;
  moveLeft: () => void;
  moveUp: () => void;
  moveDown: () => void;
}

export interface RobotData {
  xPosition: number;
  yPosition: number;
  maxXPosition?: number;
  maxYPosition?: number;
  crashed: Boolean;
}

export interface Pen {
  width: number;
  height: number;
}

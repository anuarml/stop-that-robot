export interface RobotState {
  robotData: RobotData;
  updateRobotData: (updatedRobotData: RobotData) => void;
}

export interface HeaderContext {
  robotData: RobotData;
  updateRobotData: (updatedRobotData: RobotData) => void;
}

export interface ControlProps {
  robot: Robot;
  pen: Pen;
  keysListener: () => void;
}

export interface Robot {
  turnOn: () => void;
  turnOff: () => void;
  reset: () => void;
  moveRight: () => void;
  moveLeft: () => void;
  moveUp: () => void;
  moveDown: () => void;
  speed: number;
  size: number;
}

export interface RobotData {
  xPosition?: number;
  yPosition?: number;
  xCoordinate?: number;
  yCoordinate?: number;
  crashed: boolean;
}

export interface Pen {
  width: number;
  height: number;
}

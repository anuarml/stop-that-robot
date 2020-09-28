import React, { useState } from "react";
import { RobotStateContext } from "./lib";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { RobotState, RobotData } from "./types/appTypes";
import { ControlContainer, StatsContainer } from "./containers";

const App = () => {
  /*
    Initial Robot data which will always be with 
    coordinates 0,0 and crashed on false (since it needs to hit a wall for it to crash).
    Since I need to calculate the robot's position based on the size of the pen
    I'm adding variables to track this position.
    Adding this data to the state and using a context so it can be accessed through
    the whole application.
  */
  let robotStartingXCoordinate: number = 0;
  let robotStartingYCoordinate: number = 0;
  const data: RobotData = {
    xPosition: 0,
    yPosition: 0,
    xCoordinate: robotStartingXCoordinate,
    yCoordinate: robotStartingYCoordinate,
    crashed: false,
  };

  const [robotData, setRobotData] = useState(data);

  const updateRobotData = (updatedRobotData: Object) => {
    setRobotData((prevState) => ({
      ...prevState,
      ...updatedRobotData,
    }));
  };

  const robotStateContext: RobotState = {
    robotData,
    updateRobotData,
  };

  return (
    <RobotStateContext.Provider value={robotStateContext}>
      <Router>
        <Switch>
          <Route exact path="/" component={ControlContainer} />
          <Route exact path="/stats" component={StatsContainer} />
        </Switch>
      </Router>
    </RobotStateContext.Provider>
  );
};

export default App;

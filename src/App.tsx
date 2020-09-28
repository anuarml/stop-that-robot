import React, { useState } from "react";
import { RobotStateContext } from "./lib";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { AppState, RobotData } from "./types/appTypes";
import { ControlContainer, StatsContainer } from "./containers";

const App = () => {
  /*
    Initial Robot data which will always be with 
    coordinates 0,0 and crashed on false (since it needs to hit a wall for it to crash)
    Adding this data to the state and using a context so it can be accessed through
    the whole application.
  */
  const data: RobotData = {
    xPosition: 0,
    yPosition: 0,
    maxXPosition: 0,
    maxYPosition: 0,
    crashed: false,
  };

  const [robotData, setRobotData] = useState(data);

  const updateRobotData = (updatedRobotData: Object) => {
    setRobotData((prevState) => ({
      ...prevState,
      ...updatedRobotData,
    }));
  };

  const state: AppState = {
    robotData,
    updateRobotData,
  };

  return (
    <RobotStateContext.Provider value={state}>
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

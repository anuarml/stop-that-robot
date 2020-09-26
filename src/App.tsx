import React, { useState } from "react";
import { Context } from "./lib";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { AppState } from "./types/appTypes";
import { ControlContainer, StatsContainer } from "./containers";

const App = () => {
  const data = { x: 0, y: 0, crashed: false };

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
    <Context.Provider value={state}>
      <Router>
        <Switch>
          <Route exact path="/" component={ControlContainer} />
          <Route exact path="/stats" component={StatsContainer} />
        </Switch>
      </Router>
    </Context.Provider>
  );
};

export default App;

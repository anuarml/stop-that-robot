import React from "react";
import { shallow } from "enzyme";
import Control from "./_mocks/Control";
import Stats from "./_mocks/Stats";
import "./config/setupTests";

describe("App tests", () => {
  it("renders Control page without crashing", () => {
    shallow(<Control />);
  });

  it("renders Stats page without crashing", () => {
    shallow(<Stats />);
  });
});

import React from "react";
import { shallow } from "enzyme";

import Routes from "../../../client/components/Routes";

test("Routes has a Router or does it?", () => {
  const expected = 0;
  const wrapper = shallow(<Routes />);
  const actual = wrapper.find("Router").length;
  expect(actual).toEqual(expected);
});

test("Routes has five routes", () => {
  const expected = 5;
  const wrapper = shallow(<Routes />);
  const actual = wrapper.find("Route").length;
  expect(actual).toEqual(expected);
});

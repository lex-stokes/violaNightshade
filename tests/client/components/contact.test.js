import React from "react";
import { mount, shallow } from "enzyme";

import Contact from "../../../client/components/Contact";

test("Contact has one div", () => {
  const expected = 1;
  const wrapper = shallow(<Contact />);
  const actual = wrapper.find("div").length;
  expect(actual).toEqual(expected);
});

test("Contact has 2 a tags", () => {
  const expected = 2;
  const wrapper = shallow(<Contact />);
  const actual = wrapper.find("a").length;
  expect(actual).toEqual(expected);
});

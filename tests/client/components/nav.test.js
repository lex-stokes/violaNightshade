import React from "react";
import { shallow } from "enzyme";

import Nav from "../../../client/components/Nav";
import mount from "enzyme/build/mount";

//Nav exists!
test("<Nav />", () => {
  expect(<Nav />).toBeDefined();
});

test("Nav has four divs", () => {
  const expected = 4;
  const wrapper = shallow(<Nav />);
  const actual = wrapper.find("Link").length;
  expect(actual).toEqual(expected);
});

test("Nav has three a tags", () => {
    const expected = 3;
    const wrapper = shallow(<Nav />);
    const actual = wrapper.find("a").length;
    expect(actual).toEqual(expected);
});
import React from "react";
import { shallow } from "enzyme";

import GalleryHome from "../../../client/components/GalleryHome";

test("GalleryHome has four divs", () => {
  const expected = 5;
  const wrapper = shallow(<GalleryHome />);
  const actual = wrapper.find("div").length;
  expect(actual).toEqual(expected);
});
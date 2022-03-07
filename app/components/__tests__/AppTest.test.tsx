import React from "react";
import renderer from "react-test-renderer";
import AppText from "../AppText";

test("renders correctly", () => {
  const tree = renderer.create(<AppText />).toJSON();
  expect(tree).toMatchSnapshot();
});

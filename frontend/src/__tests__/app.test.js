import React from "react";
import renderer from "react-test-renderer";

import App from "../../src/App";

it("Hello Jest", () => {
  renderer.create(<App></App>);
});

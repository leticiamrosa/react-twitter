import React from "react";
import Widget from "./index";
import renderer from "react-test-renderer";

test("Teste de componente Widget", () => {
  const widget = renderer.create(
    <Widget>
      <h1>Hello World</h1>
    </Widget>
  );

  let arvoreDom = widget.toJSON();
  expect(arvoreDom).toMatchSnapshot();
});

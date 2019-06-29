import React from "react";
import Dashboard from "./index";
import renderer from "react-test-renderer";

test("Teste de componente Dashboard", () => {
  const dashboard = renderer.create(
    <Dashboard>
      <h1>Hello World</h1>
    </Dashboard>
  );

  let arvoreDOM = dashboard.toJSON();
  expect(arvoreDOM).toMatchSnapshot();
});

import React from "react";
import Dashboard from "./index";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Teste de componente Dashboard", () => {
  it("Deve renderizar filhos", () => {
    const dashboard = renderer.create(
      <Dashboard>
        <h1>Hello World</h1>
      </Dashboard>
    );

    let arvoreDOM = dashboard.toJSON();
    expect(arvoreDOM).toMatchSnapshot();
  });

  it("Deve adicionar classe de posicionamento", () => {
    const dashboard = shallow(
      <Dashboard posicao="centro">
        <h1>Hello World</h1>
      </Dashboard>
    );
    const dashboardCentro = dashboard.find(".dashboard__centro");
    expect(dashboardCentro.length).toBe(1);
  });
});

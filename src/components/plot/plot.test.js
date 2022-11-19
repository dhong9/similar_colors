import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ScatterPlot from './plot.component';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
    const fakeCSV = `x,y,Color
    0,2,Blue
    0.5,1,Blue
    -2,1,Orange
    1,1.5,Blue
    -1,0.5,Orange
    -2,0,Orange`;
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        text: () => Promise.resolve(fakeCSV)
      })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(
            <ScatterPlot 
                data="../../data/points.csv"
                inputs={{}}
                knnPoints={[]}
                onLoad={_ => {}}
                onSubmit={_ => {}}
            />
        , container);
    });
  
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });
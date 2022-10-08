import React from "react";
import ReactDOM from "react-dom/client";
import PresentationsGraphLayouts from "./presentations-graph-layouts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

enum Layouts {
  Grid = "grid",
  Circle = "circle",
  Cose = "cose",
  CoseBilkent = "coseBilkent",
  Cola = "cola",
  Avsdf = "avsdf",
  Dagre = "dagre",
  Klay = "klay",
  Fcose = "fcose",
  Euler = "euler",
  Random = "random",
  Breadthfirst = "breadthfirst",
}

root.render(
  <React.StrictMode>
    <PresentationsGraphLayouts
      availableLayouts={[
        Layouts.Random,
        Layouts.Grid,
        Layouts.Circle,
        Layouts.Avsdf,
        Layouts.Cose,
        Layouts.Cola,
        Layouts.Fcose,
        Layouts.CoseBilkent,
        Layouts.Euler,
        Layouts.Dagre,
        Layouts.Klay,
        Layouts.Breadthfirst,
      ]}
    />
  </React.StrictMode>
);

import React from "react";
import ReactDom from "react-dom";
// import { createRoot } from "react-dom/client";

import Button from "./src/Button";

const App = () => {
  return (
    <div>
      <h1>Module Federation</h1>
      <hr />
      Button component: <Button>Click me</Button>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("app"));

// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);

import React from "react";
import { createRoot } from "react-dom/client";
import Test from "../test/test";

const test = (
  <div>
    <h1>Options1111111111</h1>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);

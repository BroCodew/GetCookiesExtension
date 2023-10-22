import React from "react";
import { createRoot } from "react-dom/client";
import Test from "../test/test";

const test = (
  <div>
    <h1>Hello 1</h1>
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Test />);
// root.render(test);
// import React from "react";

// const popup = () => {
//   return <div>Hello world</div>;
// };

// export default popup;

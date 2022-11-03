import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import EffectFunction from "./EffectFunction";
import EffectClass from "./EffectClass";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <EffectFunction /> */}
    <EffectClass />
  </StrictMode>
);

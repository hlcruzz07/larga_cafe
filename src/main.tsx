import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="larga_cafe">
    <App />
  </BrowserRouter>
);

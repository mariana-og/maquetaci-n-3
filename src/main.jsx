import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PrimerComponente from "./PrimerComponente";
import SegundoComponente from "./SegundoComponente";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container">
      <PrimerComponente className="header" />
      <div className="content">
        <SegundoComponente className="sidebar" />
        <div className="main-container">
          <SegundoComponente className="main" />
          <div className="middle">
            <SegundoComponente className="box" />
            <SegundoComponente className="box" />
          </div>
          <div className="bottom">
            <SegundoComponente className="box" />
            <SegundoComponente className="box" />
            <SegundoComponente className="box" />
          </div>
        </div>
      </div>
    </div>
  </StrictMode>
);
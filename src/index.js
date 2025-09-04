import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

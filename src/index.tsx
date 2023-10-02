import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import WagmiProvider from "./components/WagmiProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  // <React.StrictMode>
    <WagmiProvider>
      <App />
    </WagmiProvider>
  // </React.StrictMode>
);

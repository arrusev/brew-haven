import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";
import ConnectedWallet from "../ConnectedWallet";

const PageLayout: React.FunctionComponent = () => {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="my-4">
        <ConnectedWallet>
          <Outlet />
        </ConnectedWallet>
      </div>
    </div>
  );
};

export default PageLayout;

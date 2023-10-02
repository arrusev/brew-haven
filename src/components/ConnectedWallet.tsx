import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import useStore from "../store";
import { PendingSection } from "./Layout";

const ConnectedWallet = ({ children }: { children: React.ReactNode }) => {
  const { isConnected, isConnecting, address } = useAccount();
  const { loadFavoritesFromLocalStorage } = useStore();

  useEffect(() => {
    if (isConnected) loadFavoritesFromLocalStorage(address!);
  }, [isConnected, address]);

  return (
    <>
      <PendingSection
        loading={isConnecting}
        error={
          isConnecting === false && isConnected === false
            ? "You must connect your MetaMask wallet in order to unlock the web app functionality"
            : ""
        }
      >
        {children}
      </PendingSection>
    </>
  );
};

export default ConnectedWallet;

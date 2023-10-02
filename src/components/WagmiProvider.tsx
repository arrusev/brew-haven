import React from "react";
import { WagmiConfig, createConfig, mainnet, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { publicClient } = configureChains([mainnet], [publicProvider()]);
const config = createConfig({
  publicClient,
});

const WagmiProvider = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default WagmiProvider;

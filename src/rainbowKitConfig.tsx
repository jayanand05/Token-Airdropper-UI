"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync, sepolia } from "wagmi/chains";

export default getDefaultConfig({
  appName: "TSender",
  projectId: "9e7907b68755c24a5e84e0f90e2531ba",
  chains: [anvil, zksync, sepolia],
  ssr: false,
});

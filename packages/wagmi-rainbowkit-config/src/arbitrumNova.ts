import { Chain } from "wagmi";

export const arbitrumNova: Chain = {
  id: 42170,
  name: "Arbitrum Nova",
  network: "arbitrum-nova",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://nova.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://nova.arbitrum.io/rpc"],
    },
  },
  blockExplorers: {
    etherscan: { name: "Arbiscan", url: "https://nova.arbiscan.io" },
    default: { name: "Arbiscan", url: "https://nova.arbiscan.io" },
  },
};

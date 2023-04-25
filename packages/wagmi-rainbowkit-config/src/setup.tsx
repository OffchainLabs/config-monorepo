import { ReactNode } from "react";
import {
  createClient,
  configureChains,
  mainnet,
  goerli,
  WagmiConfig,
  Chain,
  ChainProviderFn,
} from "wagmi";
import { arbitrum, arbitrumGoerli } from "@wagmi/core/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  RainbowKitProvider,
  Theme,
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { trustWallet, ledgerWallet } from "@rainbow-me/rainbowkit/wallets";
import merge from "lodash.merge";
import {
  StaticJsonRpcProvider,
  WebSocketProvider,
} from "@ethersproject/providers";

import { arbitrumNova } from "./arbitrumNova";

/**
 * Create WagmiConfig and RainbowKit Provider based on app name, chains to be used on dApp,
 * and your desired custom RainbowKit theme config
 *
 * @param appName - the name you want to show on wallets
 * @param allowedChains - `Chain[]` from wagmi; default: [mainnet, arbitrum, arbitrumNova, goerli, arbitrumGoerli]
 * @param customProviders - add providers you'd like to use in addition to `publicProvider()`
 * @param customTheme - Override the dark theme from RainbowKit; default font family: 'Space Grotesk'
 *    https://www.rainbowkit.com/docs/custom-theme
 * @returns a RainbowKit Provider wrapped by `<WagmiConfig/>` which accepts `ReactNode` as children
 */
export function createWagmiRainbowKitProvider({
  appName,
  allowedChains = [mainnet, arbitrum, arbitrumNova, goerli, arbitrumGoerli],
  customProviders,
  customTheme,
}: {
  appName: string;
  allowedChains?: Chain[];
  customProviders?: ChainProviderFn<
    Chain,
    StaticJsonRpcProvider,
    WebSocketProvider
  >[];
  customTheme?: Theme;
}) {
  const { chains, provider, webSocketProvider } = configureChains(
    allowedChains,
    [merge(publicProvider(), customProviders)]
  );

  const theme = merge(
    darkTheme(),
    {
      colors: {
        accentColor: "#1366C1",
      },
      fonts: {
        body: "'Space Grotesk', sans-serif",
      },
    } as Theme,
    customTheme
  );

  const appInfo = {
    appName,
  };

  const { wallets } = getDefaultWallets({
    ...appInfo,
    chains,
  });

  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: "More",
      wallets: [trustWallet({ chains }), ledgerWallet({ chains })],
    },
  ]);

  const client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });

  const WagmiRainbowKitProviders = ({ children }: { children: ReactNode }) => (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} theme={theme} appInfo={appInfo}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );

  return WagmiRainbowKitProviders;
}

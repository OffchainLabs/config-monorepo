# Wagmi and RainbowKit Config

Provides reusable wagmi & rainbowkit config

1. Install the peerDependencies of wagmi rainbowkit config:

```sh
npx install-peerdeps -Y --dev @offchainlabs/wagmi-rainbowkit-config
```

2. Usage
   Create WagmiConfig and RainbowKit Provider based on app name, chains to be used on dApp, and your desired custom RainbowKit theme config. Custom theme config can be seen on RainbowKit's [documentation](https://www.rainbowkit.com/docs/custom-theme).

```typescript
const Providers = createWagmiRainbowKitProvider({
  appName: 'my awesome app', // required
  allowedChains: [mainnet, arbitrum, arbitrumNova], // optional
  customTheme: { // optional
    colors: {
      accentColor: "#1366C1",
    },
  }
})

<Providers>
  <AppContent />
</Providers>
```

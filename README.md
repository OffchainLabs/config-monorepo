# Eslint

Provide reusable typescript and react eslint configs

1. Install the peerDependencies of eslint configs:

```sh
npx install-peerdeps --dev @offchainlabs/eslint-config-typescript/base
npx install-peerdeps --dev @offchainlabs/eslint-config-typescript/react
```

2. Usage

```ts
module.exports = {
  extends: [
    "@offchainlabs/eslint-config-typescript/base",
    "@offchainlabs/eslint-config-typescript/react",
  ],
  // If needed, you can override with:
  overrides: [
    {
      files: [...],
      extends: [...],
      plugins: [...],
      rules: {...}
    }
  ]
};
```

This repo can be linted with itself by running `yarn run lint`

```sh
yarn run lint
```

# Prettier

Provide reusable prettier config

1. Install the peerDependencies of prettier config:

```sh
npx install-peerdeps --dev @offchainlabs/prettier-config
```

2. Usage

```ts
module.exports = {
  extends: ["@offchainlabs/prettier-config"],
};
```

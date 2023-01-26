# Eslint

Provide reusable typescript and react eslint configs

1. Install the peerDependencies of eslint configs:

```sh
npx install-peerdeps -Y --dev @offchainlabs/eslint-config-typescript/base
npx install-peerdeps -Y --dev @offchainlabs/eslint-config-typescript/react
```

2. Usage

[Eslint docs](https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package)

`eslintrc.js`

```ts
require('@offchainlabs/eslint-config-typescript/base');
require('@offchainlabs/eslint-config-typescript/react');

module.exports = {
  extends: [
    '@offchainlabs/eslint-config-typescript/base',
    '@offchainlabs/eslint-config-typescript/react',
  ],
  // Override here
};
```

`.eslintrc.yaml`, `.eslintrc.yml`

```yaml
extends:
  - '@offchainlabs/eslint-config-typescript/base'
  - '@offchainlabs/eslint-config-typescript/react'

rules:
  # Override here
```

`.eslintrc.json`

```JSON
{
  extends: [
    '@offchainlabs/eslint-config-typescript/base',
    '@offchainlabs/eslint-config-typescript/react'
  ],
  overrides: [...]
}
```

`package.json`

```JSON
"eslintConfig": {
  "extends": [
    "@offchainlabs/eslint-config-typescript/base",
    "@offchainlabs/eslint-config-typescript/react",
  ],
  "overrides": [...]
}
```

This repo can be linted with itself by running `yarn run lint`

# Prettier

Provide reusable prettier config

1. Install the peerDependencies of prettier config:

```sh
npx install-peerdeps -Y --dev @offchainlabs/prettier-config
```

2. Usage

You can extend the configuration in your project:

`package.json:`

```JSON
package.json
"prettier": "@offchainlabs/prettier-config"
```

`.prettierrc`, `.prettierrc.yaml` , `.prettierrc.yml` or `.prettierrc.json`

```
"@offchainlabs/prettier-config"
```

`prettier.config.js`, `.prettierrc.js`

```ts
module.exports = {
  ...require('@offchainlabs/prettier-config'),
  // override here
};
```

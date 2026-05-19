# Eslint

Provide reusable typescript and react eslint configs

This package ships flat ESLint configs for ESLint 9+.

## Install

Install `@offchainlabs/eslint-config-typescript` and its peer dependencies.

## Usage (Flat Config / ESM)

`eslint.config.mjs`

```js
import base from '@offchainlabs/eslint-config-typescript/base';
import react from '@offchainlabs/eslint-config-typescript/react';

export default [...base, ...react];
```

For Next.js projects, use `next` instead of `react`.

```js
import base from '@offchainlabs/eslint-config-typescript/base';
import next from '@offchainlabs/eslint-config-typescript/next';

export default [
  ...base,
  ...next,
  {
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
  },
];
```

`rootDir` can be a path (relative or absolute), a glob (i.e. `packages/*`), or an array of paths and/or globs.

For legacy `.eslintrc` extends support, use the previous major release.

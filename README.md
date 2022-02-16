# boilerlate: design system for react

features

- react
- vanilla-extract
- vitebook

## Getting started

1. fork or download this repository
2. update `package.json` for your design system.
3. `yarn install`
4. `yarn dev`

## start vitebook

```sh
yarn run dev
```

## build vitebook

```sh
yarn run build:vitebook
```

## build and publish design component for npm package

At first, build your design componenets by this command.

```sh
yarn run build
```

Then, Set `name` and `version` in `package.json` to suit your enviroment before deploying design components.
Now, you can publish your design components to npm!

```sh
yarn publish
```

and, your design components library's usage will be like below

```ts
// import style
import '@you/designsystem/dist/style.css';
// import component
import { Button } from '@you/designsystem';
import ReactDom from 'react-dom';

ReactDom.render(document.getElementById('app'), <Button />);
```

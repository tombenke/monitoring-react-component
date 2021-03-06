monitoring-react-component
==========================

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)
[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coveralls][BadgeCoveralls]][Coveralls]
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This repository holds the monitoring react components.
See the [storybook](https://tombenke.github.io/monitoring-react-component/storybook/) to see the components,
and read the [docs](https://tombenke.github.io/monitoring-react-component/) for further information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test-single <test-file>`
Executes the test with a single test file.

### `npm run coverage`

Executes the tests and shows the coverage report.

### `npm run prettier`

Runs the prettier utility manually.<br>
See [prettier.io](https://prettier.io/) for more information.

### `npm run storybook`

Start Storybook.<br>
Storybook shouldbe available in the browser with a link provided in the console.<br>
See [storybook.org](https://storybook.js.org) for more information.

### `npm run analyze`

Analyze and debug JavaScript (or Sass or LESS) code bloat through source maps.<br>
See [source-map-explorer](source-map-explorer) for more information.

### `npm run build-dist`

Builds the module for production to the `dist` folder.<br>
It prepares the module for `npm publish`.
Only the `dist/` folder, and the `README.md` will be published.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

__Note: This feature is kept only for the sake of compatibility.
The app itself holds a minimal implementation, and made for testing purposes only.__

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Create a new react-component project

Use the [kickoff](https://www.npmjs.com/package/kickoff) utility to create a new react frontend project based on this repository.

1. Install the kickoff utility:

```bash
    npm install -g kickoff
```

2. Create the new project:
```bash
    kickoff 
    kickoff -s tombenke/monitoring-react-component -d new-react-component
    cd new-react-component
    sh .kickoff.sh
```

3. Install modules, and start it:
```bash
    npm install
    npm run start
```

See [kickoff](https://www.npmjs.com/package/kickoff) for further information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

[npm-url]: https://badge.fury.io/js/monitoring-react-component
[npm-badge]: https://badge.fury.io/js/monitoring-react-component.svg
[travis-badge]: https://api.travis-ci.org/tombenke/monitoring-react-component.svg
[travis-url]: https://travis-ci.org/tombenke/monitoring-react-component
[Coveralls]: https://coveralls.io/github/tombenke/monitoring-react-component?branch=master
[BadgeCoveralls]: https://coveralls.io/repos/github/tombenke/monitoring-react-component/badge.svg?branch=master

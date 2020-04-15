# Using Geolocation API with React Hooks example

This project contains 2 different approach to provide user's location through the browsers built in Geolocation API

1. Using the current location with `useCurrentLocation` hook
2. Watching for the user's location changes with `useWatchLocation` hook

The app just calls these hooks when it mounts into the DOM and if the users provide the permissions then it will find their location. It will pass the results into the `Location` component to show the coords or the a message in case of errors.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

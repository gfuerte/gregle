# Gregle

## What is it?

[Gregle](https://gfuerte.github.io/gregle/home) is a social media website... sort of. It's Greg-themed. You can create an account, post Greg-Its, find other "Gregs" (users) to add, and all that knick-knacks. Gregle is built on Node.js and provides rendering of React components using the [MaterialUI](https://mui.com/material-ui/all-components/) component library. Gregle is powered by GregleService, a Java-based AWS Lambda service. Communications between these two packages are facilitated by AWS API Gateway REST APIs, with data stored in AWS DynamoDB.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run style`

Runs prettier against all files in /src. See examples here: https://prettier.io/

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run deploy`

Builds and deploys changes to GitHub pages. Page can be found here: https://gfuerte.github.io/gregle/home


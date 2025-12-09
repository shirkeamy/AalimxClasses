# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to install packages

Below are common ways to add or remove packages for this project using npm (the examples assume a package named `package-name`).

- Install and save to dependencies (for runtime):

	`npm install package-name`

	This adds `package-name` to the `dependencies` section in `package.json` and installs it into `node_modules`.

- Install a specific version:

	`npm install package-name@1.2.3`

- Install packages listed in `package.json` (fresh install / after cloning):

	`npm install`

- Uninstall a package:

	`npm uninstall package-name`

Tips
- After editing `package.json` manually, run `npm install` to sync `node_modules` and update `package-lock.json`.
- Check https://www.npmjs.com/ for package details and the package's README for usage notes.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Components in react

### What is a component in React?

A component is a reusable, self-contained piece of UI that defines how a part of the app should look and behave. Components:
- Accept inputs called props to customize output.
- Encapsulate markup (JSX), styles and behavior.
- Can manage their own local state and lifecycle (directly or via hooks).
- Are composed together to build complex UIs from small building blocks.

### Class Components

Class components are ES6 classes that extend `React.Component`. They have access to lifecycle methods and state management through `this.state`.

```jsx
class Welcome extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}
```

### Function Components

Function components are JavaScript functions that return JSX. With React Hooks, they can manage state and side effects without needing a class.

### Why function components are preferred

Function components are recommended for most use cases because they are:
- Concise: less boilerplate than class components.
- Hook-enabled: Hooks (useState, useEffect, etc.) provide state and side-effects with simpler, composable APIs.
- Easier to read and test: plain functions are predictable and smaller.
- More performant in practice: lighter instances and easier for React to optimize.
- Future-proof: React’s ecosystem and new features emphasize Hooks and function components.
- TypeScript-friendly: functional types and inferred return types integrate cleanly.

For these reasons, prefer function components unless you have a specific need that requires a class (rare with modern React).

```jsx
function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}
```
### More component syntax examples

```jsx
// 1) Arrow function (JS)
const ComponentName = () => {
	return (
		<div>
			<p>Hello from ComponentName</p>
		</div>
	);
};

export default ComponentName;
```

```tsx
// 2) Arrow function with TypeScript using React.FC
import React from "react";

interface Props {
	title: string;
	count?: number;
	onClick?: () => void;
}

const ComponentName: React.FC<Props> = ({ title, count = 0, onClick, children }) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>Count: {count}</p>
			<button onClick={onClick}>Action</button>
			{children}
		</section>
	);
};

export default ComponentName;
```

These show common patterns: plain functions, arrow functions, TypeScript typing with and without React.FC, named vs default exports, and advanced helpers like forwardRef and memo.
Function components are now the preferred approach in modern React development.
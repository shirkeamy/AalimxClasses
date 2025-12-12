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

### What is Props in React? (point-to-point)
1. Props (short for "properties") are inputs passed from a parent component to a child component to configure its behavior and appearance.  
2. Props are read-only inside the child; a component should not mutate its props.  
3. Props enable component reuse and composition—different parents can render the same child with different data.  
4. Props commonly include primitives, objects, functions (callbacks), and children (JSX).  
5. In TypeScript, props are described with interfaces (or types) so the compiler enforces correct usage.  
6. You can access props via the function parameter (props) or destructure them directly in the parameter list.  
7. Default values for optional props can be provided via default parameters or by assigning defaults during destructuring.

### Syntax examples (full components)

1) Example using React.FC with props parameter + destructuring inside the function
```tsx
import React from "react";

interface IButtonProps {
	id?: string;
	value: string;
	className?: string;
	index?: number;
	onClick?: () => void;
}

const MyButton: React.FC<IButtonProps> = (props: IButtonProps) => {
	const { value, id, className, index, onClick } = props;

	return (
		<button id={id} className={className} data-index={index} onClick={onClick}>
			{value}
		</button>
	);
};

export default MyButton;

/* Usage:
<MyButton value="Save" id="save-btn" className="primary" index={1} onClick={() => console.log('clicked')} />
*/
```

2) Example using React.FC with destructured props in the parameter list
```tsx
import React from "react";

interface IWelcomeProps {
	userName: string;
	subtitle?: string;
}

const WelcomeMessage: React.FC<IWelcomeProps> = ({ userName, subtitle = "Welcome!" }) => {
	return (
		<header>
			<h1>Hello, {userName}</h1>
			<p>{subtitle}</p>
		</header>
	);
};

export default WelcomeMessage;

/* Usage:
<WelcomeMessage userName="Alice" subtitle="Glad to see you" />
*/
```

### What is Routing in React?

Routing is the process of navigating between different views or pages in a single-page application (SPA) without full page reloads. React Router is the most popular library for implementing routing.

**Key concepts:**
- Routes map URL paths to components.
- Users can bookmark and share URLs.
- Navigation is fast since only component state changes, not the entire page.

### How to Implement Routing in React

#### Step 1: Install React Router

```bash
npm install react-router-dom
```

#### Step 2: Set Up BrowserRouter in Your App

Wrap your app with `BrowserRouter` at the top level (usually in `index.tsx` or `App.tsx`):

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
```

#### Step 3: Define Routes in Your App Component

```tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
```

#### Step 4: Create Page Components

```tsx
// pages/Home.tsx
const Home: React.FC = () => {
	return <h1>Welcome to Home</h1>;
};

export default Home;
```

#### Step 5: Add Navigation Links

Use `Link` or `NavLink` to navigate without page reloads:

```tsx
import { Link, NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">React TS Application</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	);
};

export default Navigation;
```

### What is state in React?

State is component-specific data that can change over time and drives what the UI renders. When state updates, React re-renders the component (and its children) to reflect the new state. In function components you manage state with the useState hook; in class components you use this.state and this.setState.

Key points:
- State is local to a component (or shared via props/context).
- Updater returned by useState hook.
- Treat state as immutable — replace values rather than mutate them.
- Use "lifting state up" to share state between sibling components.

Example (Function component with TypeScript):

```tsx
import React, { useState } from "react";

const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	const increment = () => setCount(prev => prev + 1);
	const decrement = () => setCount(prev => prev - 1);
	const reset = () => setCount(0);

	return (
		<div>
			<h3>Count: {count}</h3>
			<button onClick={decrement} aria-label="decrement">-</button>
			<button onClick={increment} aria-label="increment">+</button>
			<button onClick={reset} aria-label="reset">Reset</button>
		</div>
	);
};

export default Counter;
```
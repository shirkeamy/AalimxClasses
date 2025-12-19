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
### What is Prop drilling in React?

Prop drilling is when you pass props through multiple intermediate components that do not need them, solely so a deeply nested component can use the data. This creates verbose, hard-to-maintain code and couples components unnecessarily.

Example (shows prop drilling):

```tsx
// App.tsx
import React from "react";
import Parent from "./Parent";

const App: React.FC = () => {
	const user = { name: "Alice", role: "admin" };
	return <Parent user={user} />;
};

export default App;

// Parent.tsx (doesn't use `user`, only forwards it)
import React from "react";
import Child from "./Child";

interface Props { user: { name: string; role: string } }

const Parent: React.FC<Props> = ({ user }) => {
	return <Child user={user} />;
};

export default Parent;

// Child.tsx (still doesn't use `user`, only forwards it)
import React from "react";
import GrandChild from "./GrandChild";

interface Props { user: { name: string; role: string } }

const Child: React.FC<Props> = ({ user }) => {
	return <GrandChild user={user} />;
};

export default Child;

// GrandChild.tsx (actually consumes `user`)
import React from "react";

interface Props { user: { name: string; role: string } }

const GrandChild: React.FC<Props> = ({ user }) => {
	return <div>Logged in as: {user.name} ({user.role})</div>;
};

export default GrandChild;
```

Why it's a problem:
- Many components get extra props they don't use.
- Refactors become error-prone (every intermediate must keep forwarding).
- Harder to reuse components in different trees.

### Context API

#file:Home.tsx
```tsx
import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const data = createContext<string>("");   // 1. Create context
export const data1 = createContext<string>("");  // 1. Create context

const Home: React.FC = () => {
	const [useName] = useState("Peter Parker"); // example shared value
	const [count] = useState(10); // kept in Home but not drilled

	return (
		// 2. Provider
		<data.Provider value={useName}>
			<data1.Provider value="Pune">
				{/* ComponentA no longer needs props */}
				<ComponentA />
			</data1.Provider>
		</data.Provider>
	);
};

export default Home;
```

#file:ComponentA.tsx
```tsx
import React from "react";
import ComponentB from "./ComponentB";

// No props passed into ComponentA anymore
const ComponentA: React.FC = () => {
	return <ComponentB />;
};

export default ComponentA;
```

#file:ComponentB.tsx
```tsx
import React from "react";
import ComponentC from "./ComponentC";

// Still no props forwarded
const ComponentB: React.FC = () => {
	return <ComponentC />;
};

export default ComponentB;
```

#file:ComponentC.tsx
```tsx
import React from "react";
import { data, data1 } from "../Home";

// Consuming with nested Consumers (as requested)
const ComponentC: React.FC = () => {
	return (
		<data.Consumer>
			{(user) => {
				return (
					<data1.Consumer>
						{(address) => {
							return (
								<>
									<h3>User name in C component - {user}</h3>
									<h3>Address name in C component - {address}</h3>
								</>
							);
						}}
					</data1.Consumer>
				);
			}}
		</data.Consumer>
	);
};

export default ComponentC;
```

### useContext Hook:
Optional, cleaner alternative for ComponentC using hooks
```tsx

// Alternative using useContext (preferred for readability)
import React, { useContext } from "react";
import { data, data1 } from "../Home";

const ComponentCHook: React.FC = () => {
	const user = useContext(data);
	const address = useContext(data1);
	return (
		<>
			<h3>User name in C component - {user}</h3>
			<h3>Address name in C component - {address}</h3>
		</>
	);
};
```
### What are Hooks in React?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. Introduced to enable stateful logic and side-effect management without using class components, Hooks promote clearer, more reusable, and more testable code.

Key points (theory only)
- Purpose: provide state, lifecycle, context and other React features to function components, avoiding class-based APIs.
- Composition: encourage extracting and reusing stateful logic via custom hooks (plain functions that call built-in hooks).
- Determinism: Hooks follow predictable execution order across renders so React can associate hook calls with component instances.
- Rules of Hooks:
	- Only call hooks at the top level of a React function component or a custom hook (never inside loops, conditions, or nested functions).
	- Only call hooks from React function components or custom hooks (not from regular JavaScript functions).
- Built-in hook categories (conceptual overview):
	- State management: useState and useReducer let components hold and update local state.
	- Effects and lifecycle: useEffect and useLayoutEffect run side effects after render (with different timing guarantees).
	- Context and refs: useContext accesses context values; useRef stores mutable values that persist across renders and can reference DOM nodes.
	- Performance helpers: useMemo and useCallback memoize values or functions to avoid unnecessary recalculations or re-renders.
	- Advanced integration: useImperativeHandle customizes the instance value exposed to parent refs; useDebugValue helps debugging custom hooks.
- Custom hooks: simple functions that compose built-in hooks to encapsulate and share behavior (they follow the same rules and naming convention, typically starting with "use").
- Benefits:
	- Less boilerplate and clearer component code compared to classes.
	- Better separation of concerns through composable logic.
	- Easier testing and reuse of stateful logic across components.
- Considerations:
	- Hooks are not a replacement for all patterns; choose the right hook or architecture for complex scenarios.
	- Proper dependency management in effect-like hooks is essential to avoid stale closures or infinite loops.

In summary: Hooks provide a concise, composable API to use React features in function components while enforcing predictable usage patterns and enabling reusable stateful logic via custom hooks.

## useState

useState lets a function component hold local state. It returns a state value and a setter.

Example (TypeScript):
```tsx
import React, { useState } from "react";

const Counter: React.FC = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(c => c - 1)}>-</button>
			<button onClick={() => setCount(c => c + 1)}>+</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
};

export default Counter;
```

## useContext

useContext reads the current value of a React Context inside a function component. Use a Provider at a higher level to supply the value.

Example:
```tsx
import React, { createContext, useContext } from "react";

const ThemeContext = createContext<"light" | "dark">("light");

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
};

const ThemedLabel: React.FC = () => {
	const theme = useContext(ThemeContext);
	return <div>Current theme: {theme}</div>;
};

// Usage:
// <ThemeProvider>
//   <ThemedLabel />
// </ThemeProvider>
```

## useEffect

useEffect performs side effects in function components — things like fetching data, timers, subscriptions, or manually updating the DOM.

Signature
```ts
useEffect(effect: () => void | (() => void | undefined), deps?: React.DependencyList)
```
- effect: a function run after render. It can optionally return a cleanup function that runs before the next effect and on unmount.
- deps: an optional array of dependencies that control when the effect runs.

Behavior
- No deps provided: effect runs after every render.
- Empty array []: effect runs once after the first render (mount).
- [a, b]: effect runs when any dependency value changes.
- Cleanup function (returned by effect) runs before the next invocation and when the component unmounts.

Important rules and notes
- Don’t make the effect function itself async. Use an inner async function or IIFE.
- Always include dependencies used inside the effect; follow the exhaustive-deps lint rule or justify omissions.
- Use cleanup to avoid memory leaks (clear timers, cancel subscriptions, abort fetches).
- Prefer functional updates (setState(prev => ...)) when state in effect depends on previous state to avoid stale closures.

Examples

1) Runs on every render (not usually recommended — demonstrates behavior)
```tsx
const [count, setCount] = useState(0);

useEffect(() => {
	// This schedules a timeout on every render — can create many timers
	setTimeout(() => {
		setCount(c => c + 1);
	}, 1000);
});

return <h1>I've rendered {count} times!</h1>;
```

2) Run only once at first render (with cleanup)
```tsx
import { useState, useEffect } from "react";

const Timer: React.FC = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const id = setInterval(() => setSeconds(s => s + 1), 1000);
		return () => clearInterval(id); // cleanup on unmount
	}, []); // runs once

	return <h1>Seconds: {seconds}</h1>;
};
```

3) Runs when a dependency changes
```tsx
const [count, setCount] = useState(0);
const [calculation, setCalculation] = useState(0);

useEffect(() => {
	setCalculation(() => count * 2);
}, [count]); // runs only when `count` changes

return (
	<>
		<p>Count: {count}</p>
		<button onClick={() => setCount(c => c + 1)}>+</button>
		<p>Calculation: {calculation}</p>
	</>
);
```

4) Fetching data with AbortController and proper cleanup
```tsx
import { useEffect, useState } from "react";

const UsersList: React.FC = () => {
	const [users, setUsers] = useState<any[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				const res = await fetch("/api/users", { signal: controller.signal });
				if (!res.ok) throw new Error("Network error");
				const data = await res.json();
				setUsers(data);
			} catch (err: any) {
				if (err.name !== "AbortError") setError(err.message);
			}
		})();

		return () => controller.abort(); // cancel fetch on unmount or re-run
	}, []); // or include dependencies as needed

	if (error) return <div>Error: {error}</div>;
	return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
};
```

Common pitfalls
- Forgetting cleanup (memory leaks, duplicated timers, open subscriptions).
- Missing dependencies (stale values or unexpected behavior) — use useCallback/useMemo to stabilize dependencies.
- Making the effect async directly (causes the hook to return a promise instead of cleanup).

In short: useEffect is the place for side effects; control when it runs with the dependency array and always clean up after subscriptions or timers.

### Custom Hooks in React

Custom hooks let you extract and reuse stateful logic. Rules: name must start with "use", can call other hooks, and should be pure in return values (no side effects during render). They improve readability and testability by encapsulating behavior.

Example 1 — Basic custom hook (useToggle)
```tsx
// hooks/useToggle.ts
import { useState } from "react";

const useToggle = (initial = false) => {
	const [value, setValue] = useState<boolean>(initial);
	
	return [value, (next?: boolean) => {
		setValue(v => (typeof next === "boolean" ? next : !v));
	}] as const;
};

export default useToggle;
```

Usage:
```tsx
import React from "react";
import useToggle from "./hooks/useToggle";

const ToggleExample: React.FC = () => {
	const [on, toggle] = useToggle(false);
	return (
		<div>
			<p>{on ? "ON" : "OFF"}</p>
			<button onClick={() => toggle()}>Flip</button>
			<button onClick={() => toggle(true)}>Set ON</button>
			<button onClick={() => toggle(false)}>Set OFF</button>
		</div>
	);
};
```

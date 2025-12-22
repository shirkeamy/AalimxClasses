
### API Integration in React

APIs are used to manipulate data from a server—retrieve, add, update, or delete data from a database. In React with TypeScript, the `fetch` function is commonly used to integrate APIs.

#### Steps to Integrate an API

**Step 1 – Analyze the API**
Review the API documentation (e.g., Swagger/OpenAPI) to understand endpoints, request/response formats, authentication, and error codes.

**Step 2 – Define TypeScript Interfaces**
Create interfaces matching the API response structure to enforce type safety.

```tsx
interface User {
	id: number;
	name: string;
	email: string;
}

```

**Step 3 – Create an API Service Function**
Write a function in a `.ts` file to handle the API call:

```ts
// services/userService.ts
export const fetchUsers = async (): Promise<User[]> => {
	try {
		const response = await fetch("https://api.example.com/users");
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		const data: User[] = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching users:", error);
		throw error;
	}
};
```

**Step 4 – Call the Function in useEffect**
Invoke the API function inside `useEffect` on component mount or when dependencies change:

```tsx
import { useEffect, useState } from "react";
import { fetchUsers } from "./services/userService";

const UsersList: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const data = await fetchUsers();
				setUsers(data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
};

export default UsersList;
```

**Step 5 – Handle API Response and Update UI**
Based on the response, display data, show alerts, or handle errors as needed.

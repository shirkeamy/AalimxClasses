import { useState } from "react";

const useToggle = (initial = false) => {
	const [value, setValue] = useState<boolean>(initial);
	
	return [value, (next?: boolean) => {
		setValue(v => (typeof next === "boolean" ? next : !v));
	}] as const;
};

export default useToggle;
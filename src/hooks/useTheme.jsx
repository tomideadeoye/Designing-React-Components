import { useState } from "react";
function useTheme(statingTheme = "light") {
	const [theme, setTheme] = useState(statingTheme);

	function validateTheme(themeValue) {
		if (themeValue === "dark") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}

	return { theme, setTheme: validateTheme };
}

export default useTheme;

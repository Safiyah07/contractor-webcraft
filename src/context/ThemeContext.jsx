import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "dark";
	});

	useEffect(() => {
		// const storedTheme = localStorage.getItem("theme");
		// if (storedTheme) {
		// 	setTheme(storedTheme);
		// }
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.any,
};

export default ThemeContext;

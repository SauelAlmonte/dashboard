// Import CssBaseline and ThemeProvider components from MUI for theming
import { CssBaseline, ThemeProvider } from "@mui/material";
// Import createTheme function from MUI to create a custom theme
import { createTheme } from "@mui/material/styles";
// Import useMemo hook from React for memoizing values
import { useMemo } from "react";
// Import useSelector hook from React Redux to access the Redux store state
import { useSelector } from "react-redux";
// Import BrowserRouter, Navigate, Route, and Routes components from react-router-dom for routing
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Import theme settings configuration
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";

function App() {
	// Get the current mode (light or dark) from the Redux store
	const mode = useSelector(state => state.global.mode);

	// Create a memoized theme object based on the current mode
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

	return (
		<div className="app">
			<BrowserRouter>
				{/* Provide the theme to the application using ThemeProvider */}
				<ThemeProvider theme={theme}>
					{/* Apply CssBaseline to normalize CSS and apply baseline styles */}
					<CssBaseline />
					<Routes>
						{/* Render the Layout component as the root route */}
						<Route element={<Layout />}>
							{/* Redirect from root path to /dashboard */}
							<Route
								path="/"
								element={<Navigate to="/dashboard" />}
							/>
							{/* Render the Dashboard component at /dashboard path */}
							<Route
								path="/dashboard"
								element={<Dashboard />}
							/>
							<Route
								path="/products"
								element={<Products />}
							/>
							<Route
								path="/customers"
								element={<Customers />}
							/>
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;

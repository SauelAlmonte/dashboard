// Import React library for building user interfaces
import React from "react";
// Import ReactDOM for rendering React components to the DOM
import ReactDOM from "react-dom/client";
// Import the main CSS file for styling
import "./index.css";
// Import the main App component
import App from "./App";
// Import configureStore function from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit";
// Import the globalReducer from the state management file
import globalReducer from "state";
// Import Provider component to make the Redux store available to the app
import { Provider } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./state/api";

// Configure the Redux store
const store = configureStore({
	reducer: {
		// Add the globalReducer to the store under the key 'global'
		global: globalReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefault => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

// Get the root element from the DOM where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the React component tree to the root element
root.render(
	<React.StrictMode>
		{/* Provide the Redux store to the entire app */}
		<Provider store={store}>
			{/* Render the main App component */}
			<App />
		</Provider>
	</React.StrictMode>
);

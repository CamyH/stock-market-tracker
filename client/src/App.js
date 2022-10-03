import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./components/main-page/MainPage";
import AccountPage from "./components/account-page/AccountPage";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/my-account" element={<AccountPage />} />
			</Routes>
		</Router>
	);
}

export default App;

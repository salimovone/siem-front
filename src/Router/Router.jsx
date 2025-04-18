import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { routes } from "./routes";
import { Login, SignUp } from "../views";
import MiniDrawer from "./Layout/MiniDrawer";
import { useAuth } from "../context/AuthProvider";

const Router = () => {
	const { token } = useAuth();
	if (!token) {
		return (
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route index path="/" element={<Navigate to={"/login"} />} />
			</Routes>
		);
	}
	return (
		<Routes>
			<Route path="/" element={<MiniDrawer />}>
				{routes.map(item => (
					<Route
					key={item.id}
					index={item.id === 0}
					path={item.path}
					element={<item.element />}
					/>
				))}
				<Route index path="/login" element={<Navigate to={"/"} />} />
			</Route>
		</Routes>
	);
};

export default Router;

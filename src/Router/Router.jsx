import React from "react";
import { Route, Routes } from "react-router";
import ResponsiveDrawer from "./Layout/ResponsiveDrawer";
import { routes } from "./routes";
import { Login } from "../views";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<ResponsiveDrawer />}>
                {routes.map(item => (
                    <Route
                        key={item.id}
                        index={item.id === 0}
                        path={item.path}
                        element={<item.element />}
                    />
                ))}
            </Route>
            {/* Login page, keyinchalik alohida outlet bn */}
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Router;

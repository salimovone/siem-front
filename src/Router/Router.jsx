import React from "react";
import { Route, Routes } from "react-router";
import { routes } from "./routes";
import { Login, SignUp } from "../views";
import MiniDrawer from "./Layout/MiniDrawer";

const Router = () => {
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
            </Route>
            {/* Login page, keyinchalik alohida outlet bn */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default Router;

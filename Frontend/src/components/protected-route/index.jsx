import React from "react";
import { Route, redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ isLoggedIn, path, children }) => {
    return (
        <Route path={path}>
            {isLoggedIn ? children : redirect("/")}
        </Route>
    );
};

export default ProtectedRoute;
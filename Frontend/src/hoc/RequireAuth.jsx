import { useLocation, Navigate } from "react-router-dom";

function RequireAuth({children}) {
    const location = useLocation();
    const auth = true;

    if (!auth) {
        return <Navigate to='/' state={{from: location}}/>
    }

    return children;
}

export default RequireAuth;

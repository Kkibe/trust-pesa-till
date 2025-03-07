import { useContext, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ProtectedAuthRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (currentUser) {
            const previousPath = location.state?.from || '/apply';
            currentUser && setTimeout(() => {
                navigate(previousPath, { replace: true });
            }, 2500);
        }
    }, [currentUser, navigate, location]);

    //if (currentUser) return null;
    return children;
};


export const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    return currentUser ? children : <Navigate to="/login" />
};
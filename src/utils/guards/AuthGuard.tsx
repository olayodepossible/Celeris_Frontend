import React from "react";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: JSX.Element;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthGuard;

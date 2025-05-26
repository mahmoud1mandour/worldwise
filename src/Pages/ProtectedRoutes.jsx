import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default ProtectedRoutes;

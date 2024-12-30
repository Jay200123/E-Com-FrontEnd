import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthenticationStore } from "../../state/store";
import { toast } from 'react-toastify'

interface ProtectedRouteProps {
  userRole: string[];
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  userRole,
  children,
}) => {
  const { user, isAuthorized } = useAuthenticationStore();

  if (!user && !isAuthorized) {
    toast.error("You need to login first"); 
    return <Navigate to="/" replace />;
  }

  if (user && !userRole.includes(user.role)) {
    toast.error("You are not authorized to access this page");  
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

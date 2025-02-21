import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

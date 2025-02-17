import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function NonPrivateRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }

  return <>{children}</>;
}

import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn && (
      <nav className="fixed mx-auto bottom-0 w-full max-w-[430px] bg-gray border-t border-gray-300 h-16">
        <div className="flex justify-around items-center h-full">
          <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-blue-500">
            <span className="text-xl">🏠</span>
          </Link>
          <Link
            to="/create/auction"
            className="flex flex-col items-center text-gray-700 hover:text-blue-500"
          >
            <span className="text-xl">🔨</span>
          </Link>
          <Link
            to="/setting/location"
            className="flex flex-col items-center text-gray-700 hover:text-blue-500"
          >
            <span className="text-xl">🧭</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-col items-center text-gray-700 hover:text-blue-500"
          >
            <span className="text-xl">👤</span>
          </Link>
        </div>
      </nav>
    )
  );
}

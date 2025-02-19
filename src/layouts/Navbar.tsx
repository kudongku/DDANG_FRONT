import useAuth from '../hooks/useAuth';
import NavTile from '../components/molecule/NavTile';

export default function Navbar() {
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn && (
      <nav className="fixed mx-auto bottom-0 w-full max-w-[430px] bg-white border-t border-gray-300 h-16 shadow-md">
        <div className="flex justify-around items-center h-full">
          <NavTile to="/" icon="🏠" />
          <NavTile to="/create/auction" icon="🔨" />
          <NavTile to="/setting/location" icon="🧭" />
          <NavTile to="/profile" icon="👤" />
        </div>
      </nav>
    )
  );
}

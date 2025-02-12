import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed mx-auto bottom-0 w-full max-w-[430px] bg-gray border-t border-gray-300 h-16">
      <div className="flex justify-around items-center h-full">
        <Link
          to="/"
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
          to="/login"
          className="flex flex-col items-center text-gray-700 hover:text-blue-500"
        >
          <span className="text-xl">👤</span>
        </Link>
      </div>
    </nav>
  );
}

import { Link } from 'react-router-dom';

interface NavTileProps {
  to: string;
  icon: string;
}

export default function NavTile({ to, icon }: NavTileProps) {
  return (
    <Link to={to} className="flex flex-col items-center text-gray-700 hover:text-blue-500">
      <span className="text-xl">{icon}</span>
    </Link>
  );
}

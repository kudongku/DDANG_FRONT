export default function Header({ title }: { title: string }) {
  return <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">{title}</h1>;
}

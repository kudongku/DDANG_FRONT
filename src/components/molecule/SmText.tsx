interface SmTextProps {
  string: string;
}

export default function SmText({ string }: SmTextProps) {
  return <p className="text-sm text-gray-600">{string}</p>;
}

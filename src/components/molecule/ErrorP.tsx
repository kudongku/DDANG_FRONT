interface ErrorPProps {
  error: string | null;
}

export default function ErrorP({ error }: ErrorPProps) {
  return error ? <p className="text-red-500 text-sm">{error}</p> : null;
}

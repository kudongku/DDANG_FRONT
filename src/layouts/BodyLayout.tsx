import { ReactNode } from "react";

interface BodyLayoutProps {
  children: ReactNode;
}

export default function BodyLayout({ children }: BodyLayoutProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg m-2">
        {children}
      </div>
    </div>
  );
}

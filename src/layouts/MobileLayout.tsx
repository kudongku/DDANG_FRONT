import { ReactNode } from "react";

interface MobileLayoutProps {
  children: ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="antialiased max-w-[430px] mx-auto h-screen overflow-y-auto">
      {children}
    </div>
  );
}

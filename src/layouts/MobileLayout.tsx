import { ReactNode } from "react";
import Navbar from "./Navbar";

interface MobileLayoutProps {
  children: ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="antialiased max-w-[430px] mx-auto h-screen overflow-y-auto">
      <div className="p-8">{children}</div>
      <Navbar />
    </div>
  );
}

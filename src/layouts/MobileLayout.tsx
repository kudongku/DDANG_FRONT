import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="antialiased max-w-[430px] mx-auto h-screen overflow-y-auto">
      <div className="p-8">{children}</div>
      <Navbar />
    </div>
  );
}

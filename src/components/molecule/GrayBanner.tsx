import { ReactNode } from 'react';

interface GrayBannerProps {
  children: ReactNode;
}

export default function GrayBanner({ children }: GrayBannerProps) {
  return <div className="bg-gray-200 my-4 p-4 rounded-lg text-sm">{children}</div>;
}

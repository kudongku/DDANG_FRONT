import { useEffect } from 'react';

import { useRef } from 'react';
import GrayBanner from '../molecule/GrayBanner';

interface InfiniteScrollProps {
  isLast: boolean;
  more: () => unknown;
  loading: boolean;
  children: React.ReactNode;
}

export default function InfiniteScroll({ isLast, more, loading, children }: InfiniteScrollProps) {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLast) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          more();
        }
      },
      { threshold: 0.3 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [isLast, more, loading]);

  return (
    <>
      {children}
      {loading && <div>Loading...</div>}
      {isLast ? <GrayBanner>더 이상 데이터가 없습니다.</GrayBanner> : <div ref={loaderRef}></div>}
    </>
  );
}

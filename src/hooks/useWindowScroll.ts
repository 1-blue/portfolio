import { useCallback, useLayoutEffect, useState } from "react";

interface Position {
  x: number | null;
  y: number | null;
}

/** 2023/08/16 - 브라우저 가로/세로 사이즈 구하는 훅 ( [참고](https://github.com/uidotdev/usehooks/blob/e98bfa23a696738534a24146c9718b250c73f6d5/index.js#L1229) ) - by 1-blue */
const useWindowScroll = () => {
  const [position, setPosition] = useState<Position>({
    x: null,
    y: null,
  });

  const scrollTo = useCallback((options: ScrollToOptions) => {
    window.scrollTo(options);
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setPosition({ x: window.scrollX, y: window.scrollY });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [position, scrollTo] as const;
};

export default useWindowScroll;

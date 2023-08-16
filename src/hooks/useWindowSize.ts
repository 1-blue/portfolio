import { useState, useLayoutEffect } from "react";

interface Size {
  width: null | number;
  height: null | number;
}

/** 2023/08/14 - 브라우저 가로/세로 사이즈 구하는 훅 ( [참고](https://github.com/uidotdev/usehooks/blob/e98bfa23a696738534a24146c9718b250c73f6d5/index.js#L1263) ) - by 1-blue */
const useWindowSize = () => {
  const [size, setSize] = useState<Size>({ width: null, height: null });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;

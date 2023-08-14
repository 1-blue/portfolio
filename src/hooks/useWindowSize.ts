import { useState, useLayoutEffect } from "react";

interface Size {
  width: null | number;
  height: null | number;
}

/** 2023/08/14 - 브라우저 가로/세로 사이즈 구하는 훅 - by 1-blue */
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

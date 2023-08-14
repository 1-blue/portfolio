import { useState } from "react";
import Link from "next/link";
import { type Variants, motion, useScroll, useTransform } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/24/outline";

import useWindowSize from "@src/hooks/useWindowSize";

const variants: Variants = {
  initial: {
    transformOrigin: "top",
    scaleY: 0,
    height: 0,
    transition: { type: "just" },
  },
  animate: {
    transformOrigin: "top",
    scaleY: 1,
    transition: { type: "spring" },
  },
};

/** 2023/08/13 - <nav>을 감싸는 컴포넌트 - by 1-blue */
const Nav: React.FC = () => {
  const { width } = useWindowSize();
  const widthMoreThen768 = (width || 0) > 768;

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, widthMoreThen768 ? 200 : 0],
    ["rgba(32,34,36,0)", "rgba(32,34,36, 0.8)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, widthMoreThen768 ? 200 : 0],
    ["blur(0px)", "blur(3px)"]
  );

  const [isShow, setIsShow] = useState(false);

  return (
    <nav className="relative mt-2 w-full h-full flex flex-col text-white font-sub">
      <motion.div
        className="flex justify-between items-center px-8 md:px-24"
        style={{ backgroundColor, backdropFilter }}
      >
        <Link
          href="/"
          className="text-3xl font-bold px-2 py-8 transition-colors hover:text-main-400"
        >
          Portfolio
        </Link>

        {widthMoreThen768 ? (
          <div className="space-x-8 text-xl">
            <Link
              href="#about-me"
              className="px-2 py-9 transition-colors hover:text-main-400"
            >
              About Me
            </Link>
            <Link
              href="#skills"
              className="px-2 py-9 transition-colors hover:text-main-400"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="px-2 py-9 transition-colors hover:text-main-400"
            >
              Projects
            </Link>
            <Link
              href="#study"
              className="px-2 py-9 transition-colors hover:text-main-400"
            >
              Study
            </Link>
          </div>
        ) : (
          <Bars3Icon
            role="button"
            className="h-12 w-12 text-white transition-colors hover:text-main-400"
            onClick={() => setIsShow((prev) => !prev)}
          />
        )}
      </motion.div>

      <motion.div
        variants={variants}
        initial="initial"
        animate={!widthMoreThen768 && isShow ? "animate" : "initial"}
        className="w-full flex flex-col text-xl"
      >
        <Link
          href="#about-me"
          className="px-8 py-4 transition-colors hover:text-main-400 bg-[#202224]/80"
        >
          About Me
        </Link>
        <Link
          href="#skills"
          className="px-8 py-4 transition-colors hover:text-main-400 bg-[#202224]/80"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          className="px-8 py-4 transition-colors hover:text-main-400 bg-[#202224]/80"
        >
          Projects
        </Link>
        <Link
          href="#study"
          className="px-8 py-4 transition-colors hover:text-main-400 bg-[#202224]/80"
        >
          Study
        </Link>
      </motion.div>
    </nav>
  );
};

export default Nav;

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

/** 2023/08/13 - <nav>을 감싸는 컴포넌트 - by 1-blue */
const Nav: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 200],
    ["rgba(32,34,36,0)", "rgba(32,34,36, 0.8)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 200],
    ["blur(0px)", "blur(3px)"]
  );

  return (
    <motion.nav
      className="py-6 px-24 mt-2 w-full h-full flex justify-between items-center text-white font-sub"
      style={{ backgroundColor, backdropFilter }}
    >
      <Link href="" className="text-3xl font-bold">
        Portfolio
      </Link>

      <div className="space-x-4">
        <Link href="" className="text-xl">
          About Me
        </Link>
        <Link href="" className="text-xl">
          Skills
        </Link>
        <Link href="" className="text-xl">
          Projects
        </Link>
      </div>
    </motion.nav>
  );
};

export default Nav;

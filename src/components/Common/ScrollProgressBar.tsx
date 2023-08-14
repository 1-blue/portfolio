import { motion, useScroll, useSpring } from "framer-motion";

/** 2023/08/13 - 스크롤 상태 바 - by 1-blue */
const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed inset-0 h-2 bg-sub-400 shadow-md z-[11]">
      <motion.div
        className="origin-left h-full bg-gradient-to-r from-cyan-500 to-main-400"
        style={{ scaleX }}
      />
    </div>
  );
};

export default ScrollProgressBar;

import { motion, AnimatePresence } from "framer-motion";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

import useWindowScroll from "@src/hooks/useWindowScroll";

/** 2023/08/13 - <aside>을 감싸는 컴포넌트 - by 1-blue */
const Aside: React.FC = () => {
  const [{ y }, scrollTo] = useWindowScroll();

  return (
    <aside className="fixed bottom-8 right-8">
      <AnimatePresence>
        {y && y > 0 && (
          <motion.button
            type="button"
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full bg-main-500/80 p-3 shadow-xl transition-colors hover:bg-main-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ArrowSmallUpIcon className="w-8 h-8 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Aside;

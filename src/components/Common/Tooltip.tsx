import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  /** 툴팁을 보여줄지 여부 ( 실제로는 마우스 이벤트에 의해 결정됨 ) */
  show: boolean;
  /** 이름 */
  title: string;
  /** 설명 */
  description: string;
  /** 보여줄 가로 방향 */
  horizon?: "left" | "center" | "right";
  /** 보여줄 세로 방향 */
  vertical?: "top" | "center" | "bottom";
  /** 배경색 */
  backgroundColor?: string;
  /** 참고 링크 */
  link?: string;
}

/** 2023/08/14 - [툴팁 컴포넌트](https://github.com/1-blue/blegg/blob/master/frontend/src/components/Common/Tooltip/Tooltip.tsx) - by 1-blue */
const Tooltip: React.FC<Props> = ({
  show,
  title,
  description,
  link,
  horizon = "center",
  vertical = "top",
  backgroundColor,
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          style={{ backgroundColor }}
          className={twMerge(
            "absolute w-[240px] px-4 py-3 space-y-2 bg-blue-400 text-white rounded-md z-[1] shadow-md",
            horizon === "left" && "left-0",
            horizon === "center" && "left-1/2", // -translate-x-1/2
            horizon === "right" && "right-0",
            vertical === "top" && "bottom-[110%]",
            vertical === "center" && "bottom-1/2", // translate-y-1/2
            vertical === "bottom" && "top-[110%]"
          )}
          initial={{
            x: horizon === "center" ? "-50%" : 0,
            y: vertical === "center" ? "70%" : 20,
            opacity: 0,
          }}
          animate={{
            x: horizon === "center" ? "-50%" : "0",
            y: vertical === "center" ? "50%" : "0",
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          exit={{
            x: horizon === "center" ? "-50%" : 0,
            y: vertical === "center" ? "70%" : 20,
            opacity: 0,
            transition: { duration: 0.4 },
          }}
        >
          <h4 className="text-main-text font-bold">{title}</h4>
          <p className="text-sm whitespace-pre-line">{description}</p>
          {link && (
            <Link
              href={link}
              target="_blank"
              className="inline-block text-xs underline underline-offset-4"
              onClick={(e) => e.stopPropagation()}
            >
              ** 작성한 관련된 게시글 **
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Tooltip;

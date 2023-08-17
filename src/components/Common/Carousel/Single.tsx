import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";

import Arrow from "@src/components/Common/Carousel/Arrow";

const variants: Variants = {
  initial: (dir: boolean) => ({
    position: "relative",
    x: dir ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: (dir: boolean) => ({
    position: "absolute",
    x: dir ? "-100%" : "100%",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface Props {
  /** Carousel에서 사용할 이미지 경로 */
  src?: string;
  /** Carousel의 요소를 구분할 key ( key가 달라야 새로운 컴포넌트로 인식해서 animation이 발생함 ) */
  uniqueKey: string;
  /** 다음 이미지 이동 함수 */
  next: () => void;
  /** 이전 이미지 이동 함수 */
  prev: () => void;
  /** className */
  className?: string;
}

/** 2023/06/23 - 단일 Carousel - by 1-blue */
const Single: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  src,
  uniqueKey,
  next,
  prev,
  className,
}) => {
  /** 2023/06/23 - carousel 이동 방향 - by 1-blue */
  const [dir, setDir] = useState(true);

  /** 2023/06/23 - prev || next click event handler - by 1-blue */
  const onClick: React.MouseEventHandler<HTMLElement> = (e) => {
    if (!(e.target instanceof SVGElement)) return;
    if (!e.target.dataset.type) return;

    e.stopPropagation();

    const { type } = e.target.dataset;

    // 이전
    if (type === "prev") {
      setDir(false);
      prev();
    }
    // 다음
    if (type === "next") {
      setDir(true);
      next();
    }
  };

  return (
    <article
      className={twMerge("relative overflow-hidden", className && className)}
    >
      <AnimatePresence initial={false} custom={dir}>
        <motion.figure
          key={uniqueKey}
          className="relative w-full max-w-[1024px] mx-auto h-[50vh] bg-sub-400 rounded-md"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={dir}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            // 이전
            if (swipe > swipeConfidenceThreshold) {
              setDir(false);
              prev();
            }
            // 다음
            if (swipe < -swipeConfidenceThreshold) {
              setDir(true);
              next();
            }
          }}
        >
          {src && (
            <motion.div>
              <Image
                src={src}
                alt="썸네일"
                className="pointer-events-none object-contain"
                fill
              />
            </motion.div>
          )}

          {children}
        </motion.figure>
      </AnimatePresence>

      <section onClick={onClick}>
        <Arrow />
      </section>
    </article>
  );
};

export default Single;

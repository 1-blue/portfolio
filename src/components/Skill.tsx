import { useState } from "react";
import Image from "next/image";
import { type Variants, motion } from "framer-motion";

import Tooltip from "@src/components/Common/Tooltip";

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

import type { Skill as SkillType } from "@src/assets/skill";
interface Props extends SkillType {}

/** 2023/08/14 - 하나의 스킬 컴포넌트 - by 1-blue */
const Skill: React.FC<Props> = ({
  name,
  color,
  displayName,
  description,
  link,
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  return (
    <motion.figure
      className="relative w-20 h-20"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => setIsClick((prev) => !prev)}
      variants={variants}
      role="button"
    >
      <Image
        src={`https://cdn.simpleicons.org/${name}/${color}`}
        alt={`${name} 아이콘`}
        width="80"
        height="80"
        className="p-2 rounded-md border-2"
        style={{ borderColor: color }}
      />

      <Tooltip
        show={isHover || isClick}
        title={displayName}
        description={description}
        link={link}
        horizon="center"
        vertical="top"
        backgroundColor={color}
      />
    </motion.figure>
  );
};

export default Skill;

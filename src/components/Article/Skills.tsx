import {
  backendSkills,
  etcSkills,
  frontendSkills,
  languageList,
  toolList,
} from "@src/assets/skill";

import Accordion from "@src/components/Common/Accordion";
import Skill from "@src/components/Skill";

/** 2023/08/14 - (third) 내 스킬들 컴포넌트 - by 1-blue */
const Skills = () => {
  return (
    <article
      id="skills"
      className="pt-12 pb-20 px-[4vw] lg:px-[16vw] bg-violet-400"
    >
      <section className="max-w-[1080px] mx-auto space-y-8">
        <h3 className="text-4xl font-bold text-center text-white drop-shadow-lg">{`<Skills />`}</h3>

        {/* Tool */}
        <Accordion title="🪛 도구 🪛">
          {toolList.map((tool) => (
            <Skill key={tool.name} {...tool} />
          ))}
        </Accordion>

        {/* Language */}
        <Accordion title="📖 언어 📖">
          {languageList.map((language) => (
            <Skill key={language.name} {...language} />
          ))}
        </Accordion>

        {/* FE */}
        <Accordion title="📤 프론트엔드 📤" defaultOpen>
          {frontendSkills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </Accordion>

        {/* BE */}
        <Accordion title="📥 백엔드 📥" defaultOpen>
          {backendSkills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </Accordion>

        {/* ETC */}
        <Accordion title="🎲 사용 경험만 있는 🎲">
          {etcSkills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}
        </Accordion>
      </section>
    </article>
  );
};

export default Skills;

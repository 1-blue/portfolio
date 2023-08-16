import { studyList } from "@src/assets/studyList";

import Study from "@src/components/Study";

/** 2023/08/15 - (Fifth) 내 스터디 컴포넌트 - by 1-blue */
const StudyList = () => {
  return (
    <article
      id="study"
      className="pt-12 pb-20 px-[4vw] lg:px-[16vw] bg-violet-400"
    >
      <section className="max-w-[1080px] mx-auto space-y-8">
        <h3 className="text-4xl font-bold text-center text-white drop-shadow-lg">{`<Study />`}</h3>

        <ul className="space-y-16">
          {studyList.map((study) => (
            <Study key={study.title} {...study} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default StudyList;

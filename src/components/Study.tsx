import Information from "@src/components/Information";

import type { Study as StudyType } from "@src/assets/studyList";
interface Props extends StudyType {}

/** 2023/08/16 - 하나의 스터디 컴포넌트 - by 1-blue */
const Study: React.FC<Props> = ({ title, summary, ...rest }) => {
  return (
    <li className="bg-white px-12 py-8 rounded-md shadow-xl space-y-6">
      <section className="space-y-2">
        <h4 className="text-3xl font-bold text-center">{title}</h4>
        <span className="inline-block w-full text-sub-700 text-sm text-center">
          ( {summary} )
        </span>
      </section>

      <Information {...rest} />
    </li>
  );
};

export default Study;

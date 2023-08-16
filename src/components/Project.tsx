import { useState } from "react";

import Carousel from "@src/components/Common/Carousel";
import Information from "@src/components/Information";

import type { Project as ProjectType } from "@src/assets/project";
interface Props extends ProjectType {}

/** 2023/08/15 - 하나의 프로젝트 컴포넌트 - by 1-blue */
const Project: React.FC<Props> = ({ title, summary, images, ...props }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1 < images.length ? prev + 1 : 0));
  };
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : images.length - 1));
  };

  return (
    <li className="bg-main-900 text-white px-12 py-8 rounded-md shadow-xl space-y-6">
      <section className="space-y-2">
        <h4 className="text-3xl font-bold text-center">{title}</h4>
        <span className="inline-block w-full text-sub-400 text-sm text-center">
          ( {summary} )
        </span>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col">
          <Carousel.Single
            next={next}
            prev={prev}
            uniqueKey={images[currentIndex]}
            src={images[currentIndex]}
            className="border-[4px] border-main-100 p-2 rounded-lg"
          />
          <span className="text-center text-sm mt-2 mb-4">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <Information {...props} />
      </section>
    </li>
  );
};

export default Project;

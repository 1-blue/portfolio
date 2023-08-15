import { useState } from "react";
import Link from "next/link";

import { dateFormat } from "@src/utils/time";

import Carousel from "@src/components/Common/Carousel";

import type { Project as ProjectType } from "@src/assets/project";
interface Props extends ProjectType {}

/** 2023/08/15 - 하나의 프로젝트 컴포넌트 - by 1-blue */
const Project: React.FC<Props> = ({
  date,
  role,
  title,
  summary,
  description,
  images,
  skills,
  links,
}) => {
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

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          {/* 프로젝트 요약 */}
          <ul className="px-4 py-3 bg-main-50 text-sub-950 rounded-md space-y-4">
            <li className="flex">
              <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
                📅 Period
              </span>
              <time className="text-sm">
                {dateFormat(date.start, "YYYY.MM.DD")} ~{" "}
                {dateFormat(date.end, "YYYY.MM.DD")}
              </time>
            </li>
            <li className="flex">
              <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
                🤝 Role
              </span>
              <span className="text-sm">{role}</span>
            </li>
            <li className="flex">
              <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
                📤 Front
              </span>
              <span className="text-sm break-words">
                {skills.frontend.join(", ")}
              </span>
            </li>
            <li className="flex">
              <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
                📥 Back
              </span>
              <span className="text-sm">{skills.backend.join(", ")}</span>
            </li>
            <li className="flex">
              <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
                ⛓️ Link
              </span>
              <div className="flex flex-col text-sm space-y-1">
                <Link
                  href={links.deploy}
                  target="_blank"
                  className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
                >
                  Deploy
                </Link>
                <Link
                  href={links.github}
                  target="_blank"
                  className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
                >
                  GitHub
                </Link>
                {links.api && (
                  <Link
                    href={links.api}
                    target="_blank"
                    className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
                  >
                    API Docs
                  </Link>
                )}
                {links.storybook && (
                  <Link
                    href={links.storybook}
                    target="_blank"
                    className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
                  >
                    Storybook
                  </Link>
                )}
              </div>
            </li>
          </ul>
          {/* 프로젝트 설명 */}
          <div className="px-4 py-3 bg-main-50 text-sub-950 rounded-md space-y-2">
            <span className="text-xl font-bold">👇 프로젝트 설명 👇</span>
            <p className="whitespace-pre-wrap text-sm">{description}</p>
          </div>
        </div>
      </section>
    </li>
  );
};

export default Project;

import Link from "next/link";

import { dateFormat } from "@src/utils/time";

interface Props {
  date: {
    start: Date;
    end: Date;
  };
  role: string;
  description: string[];
  skills?: {
    frontend: string[];
    backend: string[];
  };
  links: {
    github?: string;
    deploy?: string;
    api?: string;
    storybook?: string;
    blog?: string;
  };
}

/** 2023/08/16 - (프로젝트 || 스터디) 정보 컴포넌트 - by 1-blue */
const Information: React.FC<Props> = ({
  date,
  description,
  links,
  role,
  skills,
}) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
      {/* 기간 & 역할 & 스킬 & 링크 */}
      <ul className="px-4 py-3 bg-main-200 text-sub-950 rounded-md space-y-4">
        {/* 기간 */}
        <li className="flex">
          <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
            📅 Period
          </span>
          <time className="text-sm">
            {dateFormat(date.start, "YYYY.MM.DD")} ~{" "}
            {dateFormat(date.end, "YYYY.MM.DD")}
          </time>
        </li>
        {/* 역할 */}
        <li className="flex">
          <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
            🤝 Role
          </span>
          <span className="text-sm">{role}</span>
        </li>
        {/* 스킬 */}
        {skills && (
          <>
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
          </>
        )}
        {/* 링크 */}
        <li className="flex">
          <span className="inline-block whitespace-nowrap font-bold w-28 shrink-0">
            ⛓️ Link
          </span>
          <div className="flex flex-col text-sm space-y-1">
            {links.deploy && (
              <Link
                href={links.deploy}
                target="_blank"
                className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
              >
                Deploy
              </Link>
            )}
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
              >
                GitHub
              </Link>
            )}
            {links.api && (
              <Link
                href={links.api}
                target="_blank"
                className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
              >
                API 문서
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
            {links.blog && (
              <Link
                href={links.blog}
                target="_blank"
                className="text-main-500 hover:underline underline-offset-8 hover:text-main-700 transition-colors"
              >
                Blog
              </Link>
            )}
          </div>
        </li>
      </ul>
      {/* 설명 */}
      <div className="px-4 py-3 bg-main-200 text-sub-950 rounded-md space-y-2">
        <span className="text-xl font-bold">👇 상세 설명 👇</span>
        {description.map((v, i) => (
          <div key={i} className="text-sm flex space-x-2">
            <span>✅</span>
            <span>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;

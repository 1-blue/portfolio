import Link from "next/link";

import { aboutMeDatas } from "@src/assets/aboutMe";

/** 2023/08/14 - (second) 내 정보 컴포넌트 - by 1-blue */
const AboutMe = () => {
  return (
    <article id="about-me" className="pt-12 pb-20 mx-[16vw]">
      <section className="max-w-[1080px] mx-auto space-y-8">
        <h3 className="text-4xl font-bold text-center whitespace-nowrap drop-shadow-md">{`<About Me />`}</h3>

        <ul className="grid place-items-start gap-y-16 grid-cols-fluidity">
          {aboutMeDatas.map(({ displayName, displayText, Icon, link }) => (
            <li key={displayName} className="flex space-x-4 ml-0 sm:ml-16">
              {<Icon className="w-16 h-16" />}
              <div className="relative top-3 flex flex-col whitespace-nowrap space-y-1.5">
                <span className="font-bold text-xl">{displayName}</span>
                {link ? (
                  <Link
                    href={link}
                    target="_blank"
                    className="text-sm transition-colors hover:underline underline-offset-4 hover:text-main-500 focus:text-main-600 active:text-main-600"
                  >
                    {displayText}
                  </Link>
                ) : (
                  <span className="text-sm">{displayText}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default AboutMe;

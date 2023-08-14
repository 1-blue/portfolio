import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

/** 2023/08/14 - (first) 자기소개 컴포넌트 - by 1-blue */
const Introduction: React.FC = () => {
  return (
    <article>
      <figure className="relative h-[60vh] flex justify-center items-center">
        <Image
          src="/images/thumbnail.jpg"
          alt="썸네일"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent z-[1]" />

        <div className="relative top-12 max-w-[1080px] mx-auto text-white z-[1] space-y-5">
          <h1 className="font-bold text-6xl text-center drop-shadow-lg">{`<박상은 />`}</h1>
          <h2 className="font-bold text-4xl text-center drop-shadow-lg">
            - 프론트엔드 개발자 -
          </h2>
          <p className="text-xl text-center drop-shadow-lg leading-relaxed">
            TypeScript를 좋아하는 프론트엔드 개발자입니다.
            <br />
            느리더라도 원리를 이해하고 그것을 검증하는 공부를 선호합니다
            <br />
            이해하는 것에 대한 욕심이 있어서 웹 개발의 전반적인 흐름에 대해
            배우고 싶습니다
          </p>
          <ChevronDownIcon className="relative top-4 w-12 h-12 stroke-[4px] mx-auto animate-bounce" />
        </div>
      </figure>
    </article>
  );
};

export default Introduction;

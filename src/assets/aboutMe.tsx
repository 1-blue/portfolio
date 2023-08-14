import {
  IdentificationIcon,
  CalendarDaysIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  FlagIcon,
  CodeBracketIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

interface AboutMe {
  displayName: string;
  displayText: string;
  icon: JSX.Element;
  link?: string;
}

/** 2023/08/14 - 내 정보 데이터 - by 1-blue */
export const aboutMeDatas: AboutMe[] = [
  {
    displayName: "이름",
    displayText: "박상은",
    icon: <IdentificationIcon className="w-16 h-16" />,
  },
  {
    displayName: "생년월일",
    displayText: "1998.11.06",
    icon: <CalendarDaysIcon className="w-16 h-16" />,
  },
  {
    displayName: "주소지",
    displayText: "경상남도 진주시 이현동",
    icon: <MapPinIcon className="w-16 h-16" />,
  },
  {
    displayName: "연락처",
    displayText: "010-2103-8259",
    icon: <PhoneIcon className="w-16 h-16" />,
    link: "tel:010-2103-8259",
  },
  {
    displayName: "이메일",
    displayText: "1-blue98@naver.com",
    icon: <EnvelopeIcon className="w-16 h-16" />,
    link: "mailto:1-blue98@naver.com",
  },
  {
    displayName: "학력",
    displayText: "경남과학기술대학교 - 컴퓨터공학과",
    icon: <FlagIcon className="w-16 h-16" />,
  },
  {
    displayName: "깃허브",
    displayText: "https://github.com/1-blue",
    icon: <CodeBracketIcon className="w-16 h-16" />,
    link: "https://github.com/1-blue",
  },
  {
    displayName: "블로그",
    displayText: "https://1-blue.github.io",
    icon: <PencilIcon className="w-16 h-16" />,
    link: "https://1-blue.github.io",
  },
];

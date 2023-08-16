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
  Icon: typeof IdentificationIcon;
  link?: string;
}

/** 2023/08/14 - 내 정보 데이터 - by 1-blue */
export const aboutMeDatas: AboutMe[] = [
  {
    displayName: "이름",
    displayText: "박상은",
    Icon: IdentificationIcon,
  },
  {
    displayName: "생년월일",
    displayText: "1998.11.06",
    Icon: CalendarDaysIcon,
  },
  {
    displayName: "주소지",
    displayText: "경상남도 진주시 이현동",
    Icon: MapPinIcon,
  },
  {
    displayName: "연락처",
    displayText: "010-2103-8259",
    Icon: PhoneIcon,
    link: "tel:010-2103-8259",
  },
  {
    displayName: "이메일",
    displayText: "1-blue98@naver.com",
    Icon: EnvelopeIcon,
    link: "mailto:1-blue98@naver.com",
  },
  {
    displayName: "학력",
    displayText: "경남과학기술대학교 - 컴퓨터공학과",
    Icon: FlagIcon,
  },
  {
    displayName: "깃허브",
    displayText: "https://github.com/1-blue",
    Icon: CodeBracketIcon,
    link: "https://github.com/1-blue",
  },
  {
    displayName: "블로그",
    displayText: "https://1-blue.github.io",
    Icon: PencilIcon,
    link: "https://1-blue.github.io",
  },
];

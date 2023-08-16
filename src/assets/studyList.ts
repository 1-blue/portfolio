export interface Study {
  role: string;
  title: string;
  date: {
    start: Date;
    end: Date;
  };
  summary: string;
  description: string[];
  links: {
    github?: string;
    blog: string;
  };
}

/** 2023/08/16 - 참가했던 스터디들 - by 1-blue */
export const studyList: Study[] = [
  {
    role: "4인 스터디 ( 4/14 )",
    title: "러닝 타입스크립트",
    date: {
      start: new Date(2023, 4, 8),
      end: new Date(2023, 5, 19),
    },
    summary: `러닝 타입스크립트 교재로 매주 두 장씩 돌아가면서 정리 및 발표`,
    description: [
      "Type과 Interface 특징과 차이점, 속성과 메서드 방식, 오버로드 등의 여러 개념들에 대해 인지하고 생각해보는 경험을 했습니다.",
      "여러 유틸리티 타입들을 직접 만들어보면서 동작 원리를 이해하는데 도움이 되었습니다.",
      "기본기부터 응용까지 훝어보면서 전반적인 개념을 정리하는데 도움이 되었습니다.",
    ],
    links: {
      github: `https://github.com/UnsangPark95/typescript_study`,
      // FIXME:
      blog: `https://1-blue.github.io/categories/%EB%9F%AC%EB%8B%9D-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/`,
    },
  },
  {
    role: "6인 스터디 ( 3/12 )",
    title: "자바스크립트 완벽 가이드",
    date: {
      start: new Date(2022, 11, 27),
      end: new Date(2023, 2, 14),
    },
    summary: `자바스크립트 완벽 가이드 교재로 매주 한 장씩 돌아가면서 정리 및 발표`,
    description: [
      "호이스팅, 스코프, 프로토타입, 클로저, 제너레이터, 클래스, 이터레이터 등 많은 개념과 동작 원리에 대해 얘기를 나누고 이해하기 위해 노력했습니다.",
      "npm, npx, babel, eslint, prettier 처럼 생각없이 사용했던 것들에 대해서도 공부하고 이해하고 생각해보는 시간을 가졌습니다.",
      "깊이있게 많은 부분을 다루는 교재라서 몰랐던 부분도 인지하게 되었고 알았던 부분도 다시 생각해보는 시간을 갖게 되었습니다.",
    ],
    links: {
      github: `https://github.com/fivethreeeo/javascript-the-definitive-guide-7th-study`,
      // FIXME:
      blog: `https://1-blue.github.io/categories/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C/`,
    },
  },
  {
    role: "개인 스터디",
    title: "이펙티브 타입스크립트",
    date: {
      start: new Date(2023, 0, 6),
      end: new Date(2023, 1, 24),
    },
    summary: `이펙티브 타입스크립트 교재로 매일 아이템 3개 정리`,
    description: [
      "타입 스크립트가 특정 상황에 특정 방식으로 동작하는 이유 그리고 그것을 활용하는 방법에 대한 내용이 많은 교재였습니다.",
      "덕 타이핑과 구조적 타이핑, 인덱스 시그니처, 타입 가드, any, unknown 등 생소하거나 몰랐던 개념들을 알게 되었습니다.",
      "머리로 이해보다는 몸으로 경험해서 알고 있었던 것들을 머리로 이해하는데 많은 도움이 되었습니다.",
    ],
    links: {
      // FIXME:
      blog: `https://1-blue.github.io/categories/%EC%9D%B4%ED%8E%99%ED%8B%B0%EB%B8%8C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/`,
    },
  },
];

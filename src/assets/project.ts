export interface Project {
  date: {
    start: Date;
    end: Date;
  };
  role: string;
  title: string;
  summary: string;
  description: string;
  images: string[];
  skills: {
    frontend: string[];
    backend: string[];
  };
  links: {
    github: string;
    deploy: string;
    api?: string;
    storybook?: string;
  };
}

// TODO: description 수정하기

const BASE_URL = "https://bleportfolio.s3.ap-northeast-2.amazonaws.com";

/** 2023/08/14 - 내 프로젝트 데이터 - by 1-blue */
export const projects: Project[] = [
  // blegg
  {
    date: {
      start: new Date(2023, 5, 19),
      end: new Date(2023, 7, 1),
    },
    role: "개인 프로젝트",
    title: "blegg",
    summary: "Riot API를 이용한 전적 및 정보 검색 프로젝트",
    description:
      "무료로 사용할 수 있는 라이엇 API를 활용해서 제작한 리그오브레전드 관련 정보 웹사이트입니다." +
      "\n" +
      "게임 플레이와 시청을 좋아해서 초기에는 LCK 순위와 투표 같은 웹사이트를 만들려고 했으나 API를 찾지 못해서 관련 사이트로 변경했습니다." +
      "\n\n" +
      "TypeScript를 적극 활용해서 API를 통해 제공받는 데이터의 타입을 커스타마이징했고 필요한 데이터 타입을 직접 만들어서 요청과 응답에 사용했습니다." +
      "\n\n" +
      "ReactQuery를 이용해서 CRUD에 대한 훅을 만들어서 서버 측 데이터를 캐싱해서 사용했고 " +
      "Storybook을 이용해 상향식으로 컴포넌트 주도 개발에 대해 실습해 보았습니다." +
      "\n\n" +
      "Nest.js의 학습 목적으로 사용해서 프레임워크 사용의 장점, 여러 패턴과 개념에 대해 학습할 수 있었고 " +
      "Local, KaKao, Google, Naver 인증 로직을 구현해 보면서 OAuth의 흐름에 대한 이해와 개념을 학습할 수 있었습니다.",
    images: Array(17)
      .fill(null)
      .map((_, i) => `${BASE_URL}/blegg/${i}.gif`),
    skills: {
      frontend: [
        "TypeScript",
        "React.js",
        "TailwindCss",
        "ReactQuery",
        "Storybook",
      ],
      backend: ["Nest.js", "Prisma", "AWS-S3", "AWS-EC2"],
    },
    links: {
      github: "https://github.com/1-blue/blegg",
      deploy: "https://bleshop.shop",
      api: "https://bleshop.shop/swagger",
      storybook: `https://648fa14a937924b712976e49-jagdginlsz.chromatic.com/?path=/docs`,
    },
  },
  // blegram
  {
    date: {
      start: new Date(2023, 2, 24),
      end: new Date(2023, 5, 5),
    },
    role: "개인 프로젝트",
    title: "blegram",
    summary: "학습 목적으로 인스타그램 클론 프로젝트",
    description:
      "인스타그램의 기능들을 따라 만들면서 학습한 프로젝트입니다." +
      "\n" +
      "유저/게시글/댓글 CRUD, 좋아요/북마크/팔로우, 해시태그, 검색 기능들을 구현했습니다." +
      "\n\n" +
      "JWT를 이용해 직접 access/refresh token을 만들어 관리하는 로직을 구현해봄으로서 JWT와 쿠키를 이용한 인증 방식에 대한 전반적인 이해를 했습니다." +
      "\n\n" +
      "Recoil을 이용해서 클라이언트 데이터 / ReactQuery를 이용해서 서버 데이터를 관리하는 방법에 대해 학습했고 AWS-S3의 presignedURL이라는 기능을 통해서 브라우저에서 안전하게 이미지를 업로드하는 방법을 알게 되었습니다." +
      "\n\n" +
      "배포는 Vercel을 이용하였고 데이터베이스는 AWS-RDS를 사용하고 있습니다.",
    images: Array(8)
      .fill(null)
      .map((_, i) => `${BASE_URL}/blegram/${i}.gif`),
    skills: {
      frontend: [
        "TypeScript",
        "React.js",
        "Styled-Components",
        "Recoil",
        "ReactQuery",
      ],
      backend: ["JWT", "Prisma", "AWS-S3", "AWS-RDS"],
    },
    links: {
      github: "https://github.com/1-blue/blegram",
      deploy: "https://blegram.vercel.app",
      api: "https://1-blue.gitbook.io/api-blegram",
    },
  },
  // creator connect
  {
    date: {
      start: new Date(2023, 3, 28),
      end: new Date(2023, 4, 30),
    },
    role: "팀 프로젝트 FE 팀원 역할 ( FE 3, BE 4 )",
    title: "creator connect",
    summary: "초보 유튜버들이 소통하기 위한 커뮤니티 프로젝트",
    description:
      "초보 유튜버들이 여러 정보를 공유할 수 있는 커뮤니티입니다." +
      "\n\n" +
      "FE 팀원으로 각 게시글들 CRUD, 팔로잉/팔로워, 북마크/좋아요, 검색, 프로필 로직을 구현했습니다." +
      "\n\n" +
      "API/인증 등에 대해 백엔드 개발자들과 협업하는 과정을 통해 많은 얘기를 나누고 각자의 입장을 이해하는데 도움이 되었습니다." +
      "\n\n" +
      "피그마를 이용한 화면 정의서 구현 / 프로젝트 폴더 구조 및 초기 코드 세팅 / 피드백을 받고 코드를 수정하는 과정을 겪으면서 FE끼리 혹은 FE와 BE간의 대한 협업에 대한 전반적인 과정에 대해 경험할 수 있었습니다.",
    images: Array(5)
      .fill(null)
      .map((_, i) => `${BASE_URL}/creatorconnect/${i}.png`),
    skills: {
      frontend: [
        "TypeScript",
        "Next.js",
        "TailwindCss",
        "Zustand",
        "ReactQuery",
      ],
      backend: [
        "Spring Boot",
        "Spring Security",
        "Gradle",
        "Redis",
        "JWT",
        "thymeleaf",
        "JPA",
      ],
    },
    links: {
      github: "https://github.com/codestates-seb/seb43_main_013",
      deploy: "https://www.hard-coding.com",
      api: "https://youtube-community.gitbook.io/youtube-community",
    },
  },
  // blequotes
  {
    date: {
      start: new Date(2022, 10, 24),
      end: new Date(2023, 1, 18),
    },
    role: "개인 프로젝트",
    title: "blequotes",
    summary: "영화/드라마/도서를 검색하고 명대사를 등록할 수 있는 프로젝트",
    description:
      "MovieDB, Kakao API를 이용해서 얻은 영화/드라마/도서에 대한 정보를 기반으로 만든 웹사이트입니다." +
      "\n\n" +
      "TypeScript / Redux-Toolkit / TailwindCss를 공부하고 적용하는 목적으로 시작했습니다." +
      "\n\n" +
      "TypeScript로 다른 API를 통해 얻는 데이터의 타입을 직접 만들고 커스터마이징하면서 TypeScript과 친해졌고 " +
      "TailwindCss를 사용하면서 편리함에 대해 느끼게 되었고 많이 사용하게 되는 계기가 되었습니다." +
      " 또한 Redux를 공부하고 사용해본 이후에 Redux-Toolkit을 사용하면서 편의성과 TypeScript와의 호환성 제공해주는 것에 대해 알게 되었습니다.",
    images: Array(6)
      .fill(null)
      .map((_, i) => `${BASE_URL}/blequotes/${i}.gif`),
    skills: {
      frontend: ["TypeScript", "React.js", "TailwindCss", "Redux-Toolkit"],
      backend: ["Express.js", "Prisma", "AWS-EC2", "AWS-S3"],
    },
    links: {
      github: "https://github.com/1-blue/blequotes",
      deploy: "https://jslog.co.kr",
      api: "https://github.com/1-blue/blequotes#-api",
    },
  },
];

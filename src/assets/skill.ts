export interface Skill {
  name: string;
  color: string;
  displayName: string;
  description: string;
  link?: string;
}

/** 2023/08/14 - 사용 가능한 도구들 - by 1-blue */
export const toolList: Skill[] = [
  {
    name: "git",
    color: "#F05032",
    displayName: "Git",
    description: `버전 관리에 대해 이해하고 있고, 명령어들을 커맨드라인 명령어로 사용할 수 있습니다.\n또한 Git Flow에 대해 이해하고 사용해본 경험이 있습니다.`,
    link: `https://1-blue.github.io/posts/Git-Flow-&-GitHub-Flow`,
  },
  {
    name: "github",
    color: "#181717",
    displayName: "GitHub",
    description: `Git을 이용해서 관리하는 코드를 공유 및 저장하기 위해 사용합니다.`,
    link: `https://1-blue.github.io/posts/Git-GitHub`,
  },
  {
    name: "gitbook",
    color: "#3884FF",
    displayName: "GitBook",
    description: `API 문서 작성을 위해 사용한 경험이 있습니다.`,
    link: "https://1-blue.gitbook.io/api-blegram",
  },
  {
    name: "visualstudiocode",
    color: "#007ACC",
    displayName: "VSCode",
    description: `주로 사용하는 에디터입니다.`,
  },
  {
    name: "sourcetree",
    color: "#0052CC",
    displayName: "SourceTree",
    description: `Git의 로그를 UI로 보기위해 사용합니다.`,
  },
  {
    name: "windows11",
    color: "#0078D4",
    displayName: "Window11",
    description: `현재 사용중인 운영체제입니다.`,
  },
];

/** 2023/08/14 - 사용 가능한 언어들 - by 1-blue */
export const languageList: Skill[] = [
  {
    name: "javascript",
    color: "#F7DF1E",
    displayName: "JavaScript",
    description: `객체나 배열의 메서드들을 제대로 사용할 수 있습니다.\n 실행 컨텍스트, 프로토타입, 스코프 등에 대한 개념을 알고 있습니다.`,
    link: `https://1-blue.github.io/categories/javascript-the-definitive-guide`,
  },
  {
    name: "typescript",
    color: "#3178C6",
    displayName: "TypeScript",
    description: `필요한 타입을 직접 만들어 적용할 수 있고, 유틸리티 타입들도 활용할 수 있습니다.`,
    link: `https://1-blue.github.io/categories/typescript`,
  },
];

/** 2023/08/14 - 사용 가능한 FE측 기술들 - by 1-blue */
export const frontendSkills: Skill[] = [
  {
    name: "react",
    color: "#61DAFB",
    displayName: "React.js",
    description: `JSX, Hook, State, Component 등의 개념에 대해 이해하고 사용할 수 있습니다.`,
    // TODO:
    link: "https://1-blue.github.io/posts/React%EC%9D%98-%EB%8F%99%EC%9E%91%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0",
  },
  {
    name: "nextdotjs",
    color: "#000000",
    displayName: "Next.js",
    description: `CSR, SSR, SSG, ISR 등의 개념을 이해했고, 12버전을 기준으로 각 개념들을 구현해본 경험이 있습니다.`,
    link: "https://velog.io/@1-blue/CSR-SSR-SSG-ISR-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC-Next.js",
  },
  {
    name: "tailwindcss",
    color: "#06B6D4",
    displayName: "TailwindCss",
    description: `CSS로 가능한 대부분의 것을 사용할 수 있고, 유틸리티 속성이나 커스터마이징을 할 수 있습니다.`,
  },
  {
    name: "styledcomponents",
    color: "#DB7093",
    displayName: "Styled-Components",
    description: `전역 스타일 설정을 할 수 있고, TypeScript를 적용해서 코드를 구현할 수 있습니다.`,
    link: "https://1-blue.github.io/posts/styled-components",
  },
  {
    name: "redux",
    color: "#764ABC",
    displayName: "Redux / Redux-Toolkit",
    description: `Flux와 Redux의 동작 흐름에 대해 이해하고 있고, Redux-Toolkit과 TypeScript를 활용한 코드를 구현할 수 있습니다.`,
    link: "https://1-blue.github.io/posts/Redux",
  },
  {
    name: "reactquery",
    color: "#FF4154",
    displayName: "React-Query / Tanstack-Query",
    description: `서버의 요청할 CRUD에 대한 훅을 만들 수 있고, 서버의 데이터를 관리하기 위해 사용할 수 있습니다.`,
    link: "https://1-blue.github.io/posts/react-query",
  },
  {
    name: "storybook",
    color: "#FF4785",
    displayName: "Storybook",
    description: `CDD를 위해 GitHub Actions와 Chromatic을 이용해 배포해본 경험이 있습니다.`,
    link: "https://1-blue.github.io/posts/Storybook",
  },
];

/** 2023/08/14 - 사용 가능한 BE측 기술들 - by 1-blue */
export const backendSkills: Skill[] = [
  {
    name: "express",
    color: "#000000",
    displayName: "Express",
    description: `Request, Response, Middleware, Router에 대한 이해를 하고 있고, 인증 및 CRUD를 위한 서버를 만들 수 있습니다.`,
    link: "https://1-blue.github.io/posts/Setting-NodeJs",
  },
  {
    name: "prisma",
    color: "#2D3748",
    displayName: "Prisma",
    description: `1:1, 1:N, N:M 관계에 대해 이론적으로 이해하고 있고 코드로 구현할 수 있습니다.`,
    link: "https://1-blue.github.io/posts/prisma",
  },
  {
    name: "amazons3",
    color: "#569A31",
    displayName: "AWS-S3",
    description: `버킷을 생성하고 접근 권한을 열고 이미지를 저장할 수 있습니다.\n또한 presignedURL을 이용해 안전하게 이미지를 저장해본 경험이 있습니다.`,
    link: "https://1-blue.github.io/posts/AWS-S3-presignedURL",
  },
];

/** 2023/08/14 - 사용 가능한 BE측 기술들 - by 1-blue */
export const etcSkills: Skill[] = [
  {
    name: "nestjs",
    color: "#E0234E",
    displayName: "Nest.js",
    description: `공식문서와 각 블로그를 읽으면서 서버를 구성해본 경험이 있습니다.`,
  },
  {
    name: "amazonec2",
    color: "#FF9900",
    displayName: "AWS-EC2",
    description: `개인 프로젝트를 배포할 때 사용해본 경험이 있습니다.`,
  },
  {
    name: "jsonwebtokens",
    color: "#000000",
    displayName: "JWT",
    description: `AccessToken과 RefreshToken을 직접 만들어서 인증을 처리하는 로직을 구현해본 경험이 있습니다.`,
  },
  {
    name: "nginx",
    color: "#009639",
    displayName: "Nginx",
    description: `Nginx와 Certbot을 이용해서 SSL 인증서를 발급받아서 적용해본 경험이 있습니다.`,
    link: "https://1-blue.github.io/posts/deploy",
  },
  {
    name: "recoil",
    color: "#3578E5",
    displayName: "Recoil",
    description: `간단한 상태관리를 위해 사용해본 경험이 있습니다.`,
  },
  {
    name: "mysql",
    color: "#4479A1",
    displayName: "Mysql",
    description: `깊은 개념에 대한 지식은 부족하고 간단한 데이터 CRUD를 위한 SQL을 작성할 수 있습니다.`,
    link: "https://velog.io/@1-blue/mysql",
  },
];

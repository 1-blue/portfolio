import Head from "next/head";

import Introduction from "@src/components/Article/Introduction";
import AboutMe from "@src/components/Article/AboutMe";
import Skills from "@src/components/Article/Skills";
import Projects from "@src/components/Article/Projects";
import StudyList from "@src/components/Article/StudyList";

/** 2023/08/13 - 메인 페이지 - by 1-blue */
const Home = () => {
  return (
    <>
      <Head>
        <title>프론트엔드 포트폴리오 - 박상은</title>
      </Head>

      {/* introduction */}
      <Introduction />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Study */}
      <StudyList />
    </>
  );
};

export default Home;

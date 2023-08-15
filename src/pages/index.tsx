import Introduction from "@src/components/Article/Introduction";
import AboutMe from "@src/components/Article/AboutMe";
import Skills from "@src/components/Article/Skills";
import Projects from "@src/components/Article/Projects";

/** 2023/08/13 - 메인 페이지 - by 1-blue */
const Home = () => {
  return (
    <>
      {/* introduction */}
      <Introduction />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Study */}
      <article></article>
    </>
  );
};

export default Home;

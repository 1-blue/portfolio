import Introduction from "@src/components/Article/Introduction";
import AboutMe from "@src/components/Article/AboutMe";
import Skills from "@src/components/Article/Skills";

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
      <article></article>

      {/* Study */}
      <article></article>
    </>
  );
};

export default Home;

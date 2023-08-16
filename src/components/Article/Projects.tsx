import { projects } from "@src/assets/project";

import Project from "@src/components/Project";

/** 2023/08/15 - (fourth) 내 프로젝트들 컴포넌트 - by 1-blue */
const Projects: React.FC = () => {
  return (
    <article id="projects" className="pt-12 pb-20 px-[4vw] lg:px-[16vw]">
      <section className="max-w-[1080px] mx-auto space-y-8">
        <h3 className="text-4xl font-bold text-center drop-shadow-lg">{`<Projects />`}</h3>

        <ul className="space-y-16">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;

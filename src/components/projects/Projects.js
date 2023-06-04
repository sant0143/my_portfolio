import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectTwo, projectThree } from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="VISIT MY PROJECTS" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CODEPEN CLONE"
          des=" Codepen clone made using react and hooks and the user data will be stored so you can also save your data when the page refreshes"
          src={projectOne}
        />
        <ProjectsCard
          title="Food Website Clone"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Youtube Clone"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;

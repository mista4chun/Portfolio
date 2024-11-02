import PageNav from "../components/PageNav";
import projects from "../Projects.json";
import Data from "../components/Data";

function Projects() {
  return (
    <div className="bg-[#1e1e1e] ">
      <PageNav type="horizontal" />
        <h1 className="mt-3 font-semibold max-w-7xl mx-auto px-4">Stuff I've built...</h1>
      <div className="grid md:grid-cols-3 mt-6 gap-5 px-4 max-w-7xl mx-auto">

      {projects.map((project) => (
        <Data project={project} key={project.id} />
      ))}
      </div>
    </div>
  );
}

export default Projects;

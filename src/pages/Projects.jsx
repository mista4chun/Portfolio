import PageNav from "../components/PageNav";
import projects from "../Projects.json";
import Data from "../components/Data";

function Projects() {
  return (
    <section className="bg-[#1e1e1e] ">
      <PageNav type="horizontal" />
      <h1 className="mx-auto mt-3 max-w-7xl px-4 font-semibold">
        Stuff I've built...
      </h1>
      <div className="mx-auto mt-6 grid max-w-7xl gap-5 px-4 md:grid-cols-3">
        {projects.map((project) => (
          <Data project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

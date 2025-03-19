import PageNav from "../components/PageNav";
import projects from "../Projects.json";
import Data from "../components/Data";
import { AnimatePresence, motion } from "motion/react";

function Projects() {
  const divVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger effect
        duration: 0.5, // Smooth timing
        type: "spring",
        stiffness: 200, // More stiffness for bounce
        damping: 8, // Controls the bounce intensity
      },
    }),
  };
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1e1e1e]"
      >
        <PageNav type="horizontal" />
        <h1 className="mx-auto mt-3 max-w-7xl px-4 pb-8 font-semibold">
          Stuff I've built...
        </h1>
        <div className="mx-auto mt-6 grid max-w-7xl gap-5 px-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <Data
              project={project}
              key={project.id}
              divVariants={divVariants}
              i={i}
            />
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default Projects;

import { motion } from "motion/react";

function Data({ project, divVariants, i }) {
  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      animate="visible"
      custom={i}
    >
      <div className="group relative w-72 uppercase transition-all duration-500 hover:scale-105 md:w-fit">
        <img
          src={project.thumbnail}
          alt=""
          className="h-72 w-72 rounded-3xl md:h-80 md:w-full"
        />
        <div className="absolute inset-0 group-hover:bg-black/50 hover:rounded-3xl">
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
            <div className="flex flex-col space-y-8">
              <div className="hidden text-center group-hover:block">
                <a
                  href={project.source_code}
                  className="border-[#01b6cd] pb-1 font-semibold group-hover:border-b-2 hover:text-[#01b6cd]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view code
                </a>
              </div>
              <div className="hidden text-center group-hover:block">
                <a
                  href={project.demo}
                  className="border-[#01b6cd] pb-1 font-semibold group-hover:border-b-2 hover:text-[#01b6cd]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mb-1 mt-2 text-lg font-semibold uppercase">
        {project.name}
      </h1>
      {/* <p className="text-sm mb-2">{project.description}</p> */}
      <div className="flex items-center gap-5 uppercase">
        <p className="font-montserrat text-sm font-medium">
          {project.tags.join(" ")}{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default Data;

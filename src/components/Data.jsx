function Data({ project }) {
  return (
    <div className="">
      <div className="group relative w-72  hover:scale-105 transition-all duration-500 uppercase md:w-fit ">
        <img
          src={project.thumbnail}
          alt=""
          className="h-72 w-72 md:h-80 md:w-full  rounded-3xl"
        />
        <div className="absolute inset-0 group-hover:bg-black/50 hover:rounded-3xl">
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
            <div className="flex flex-col space-y-8">
              <div className="hidden text-center group-hover:block">
                <a
                  href={project.source_code}
                  className="border-[#01b6cd] pb-1 font-semibold hover:text-[#01b6cd] group-hover:border-b-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view code
                </a>
              </div>
              <div className="hidden text-center group-hover:block">
                <a
                  href={project.demo}
                  className="border-[#01b6cd] pb-1 font-semibold hover:text-[#01b6cd] group-hover:border-b-2"
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
        <p>{project.tags[0]} </p>
        <p>{project.tags[1]}</p>
        <p>{project.tags[2]}</p>
      </div>
    </div>
  );
}

export default Data;

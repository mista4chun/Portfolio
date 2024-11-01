function Data({ project }) {
  return (
    <div className="">
      <div className="relative group md:w-fit w-72  uppercase ">
        <img src={project.thumbnail} alt="" className="h-72 w-72  md:h-80 md:w-full"  />
        <div className="absolute inset-0 group-hover:bg-black/50 ">
          <div className="flex items-center justify-center absolute inset-0 transition-all duration-500 ">
            <div className="flex flex-col space-y-8">

            <div className="group-hover:block hidden   text-center ">

            <a href={project.source_code} className=" group-hover:border-b-2 border-[#01b6cd] pb-1 hover:text-[#01b6cd] font-semibold">view code</a>
            </div>
            <div className="group-hover:block hidden   text-center ">
            <a href={project.demo} className="group-hover:border-b-2 border-[#01b6cd] pb-1 hover:text-[#01b6cd] font-semibold">view Project</a>

            </div>
            </div>
        
          </div>
        </div>
      </div>
      <h1 className="font-semibold uppercase text-lg mb-1 mt-2">{project.name}</h1>
        {/* <p className="text-sm mb-2">{project.description}</p> */}
      <div className="flex items-center uppercase gap-5 ">

      <p>{project.tags[0]} </p>
      <p>{project.tags[1]}</p>
      <p>{project.tags[2]}</p>
      </div>

    </div>
  );
}

export default Data;

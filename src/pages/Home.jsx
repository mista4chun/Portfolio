import PageNav from "../components/PageNav";
import Typewriter from "../components/Typewriter";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-[#1e1e1e]">
      <PageNav type="horizontal" />
      <div className="mx-auto mt-36 md:flex max-w-2xl items-center justify-between px-6 pb-24 md:max-w-7xl">
        <article>
          <h1 className="mb-2 text-3xl font-semibold tracking-wider md:text-6xl">
            Mista4chun
          </h1>
          <Typewriter
            text="Software Developer with React."
            speed={100}
            lastWordColor="#01b6cd"
            fontSize="24px"
          />
          <div className="mt-8 hidden gap-8 text-center tracking-wider md:flex">
            <div className="flex flex-col items-center">
              <IoLogoReact className="h-12 w-12 text-[#01b6cd]" />
              <p>React</p>
            </div>

            <div className="flex flex-col items-center">
              <BiLogoTailwindCss className="h-12 w-12 text-[#0088cc]" />
              <p>Tailwindcss</p>
            </div>

            <div className="flex flex-col items-center">
              <FaJs className="h-12 w-12 text-[#ffca28]" />
              <p>Javascript</p>
            </div>

            <div className="flex flex-col items-center">
              <RiSupabaseFill className="h-12 w-12 text-[#40d08f]" />
              <p>Supabase</p>
            </div>

            <div className="flex flex-col items-center">
              <SiNextdotjs className="h-12 w-12 text-[#fff] text-opacity-100" />
              <p>Next.js</p>
            </div>

          
          </div>
        </article>
        <article>
          <img
            src="./avatar.jpg"
            alt=""
            className="hidden h-72 w-72 rounded-full border-4 border-gray-900 md:block"
          />
        </article>

        <article className="flex items-center gap-4 mt-4 text-sm md:hidden">
              <IoLogoReact className="h-10 w-10 text-[#01b6cd]" />

              <BiLogoTailwindCss className="h-10 w-10 text-[#0088cc]" />

              <FaJs className="h-10 w-10 text-[#ffca28]" />

              <RiSupabaseFill className="h-10 w-10 text-[#40d08f]" />

              <SiNextdotjs className="h-10 w-10 text-[#fff] text-opacity-100" />
            </article>
      </div>
      
      <div className="mx-auto  -mt-5 flex max-w-2xl items-center space-x-8 px-8 md:hidden">
        <button className="bg-[#01b6cd] px-4 py-2 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg">
     
          <Link to="/projects">My Work</Link>
        </button>
        <button className="border border-[#01b6cd] px-4 py-2 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg">
          <Link to="/resume">My Resume</Link>
        </button>
      </div>
      <h2 className="text-center font-bigFont hidden md:block  font-semibold text-slate-700/10 text-9xl">
        I build magic!
      </h2>
    </section>
  );
}

export default Home;

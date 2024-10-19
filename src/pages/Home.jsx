import PageNav from "../components/PageNav";
import Typewriter from "../components/Typewriter";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";

function Home() {
  return (
    <section>
      <PageNav type="horizontal" />
      <div className="mt-36 flex items-center justify-between px-8 pb-24">
        <article>
          <h1 className="mb-2 text-6xl font-semibold">Mista4chun</h1>
          <Typewriter
            text="Software Developer with React."
            speed={100}
            lastWordColor="#01b6cd"
            fontSize="24px"
          />
          <div className="mt-8 flex gap-5 text-center">
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
              <SiNextdotjs className="h-12 w-12 text-opacity-100 text-[#000]" />
              <p>Next.js</p>
            </div>
          </div>
        </article>
        <article>
          <img
            src="./avatar.jpg"
            alt=""
            className="h-72 w-72 rounded-full border"
          />
        </article>
      </div>
      <h2 className="font-bigFont text-center text-9xl font-semibold text-slate-700/5 ">
        I build magic!
      </h2>
    </section>
  );
}

export default Home;

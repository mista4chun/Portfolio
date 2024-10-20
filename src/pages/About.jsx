import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import ProgressBar from "../components/ProgressBar";

function About() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((progress) => (progress / 100) * 100);
  }, [progress]);
  return (
    <section className="bg-[#1e1e1e]">
      <PageNav type="horizontal" />
      <div className="mx-auto grid max-w-7xl grid-cols-2  font-redHat items-center gap-6 px-6 leading-relaxed tracking-wide">
        <div className="col-span-2 mx-auto">
          <h1 className="mt-3 text-3xl font-semibold">Frontend Developer</h1>
        </div>

        <article className="flex items-center space-x-3">
          <img
            src="./avatar.jpg"
            alt=""
            className="h-28 w-28 rounded-full border-4 border-gray-900"
          />
          <div>
            <div className="flex items-center space-x-1">
              <h3 className="font-semibold">Name:</h3>
              <p>Hilary Samson</p>
            </div>

            <div className="flex items-center space-x-1">
              <h3 className="font-semibold">Nationality:</h3>
              <p>Nigerian 🇳🇬️</p>
            </div>

            <div className="flex items-center space-x-1">
              <h3 className="font-semibold">College Degree:</h3>
              <p>B.tech Computer Science</p>
            </div>
          </div>
        </article>
        <article>
          <div className="flex items-center space-x-1">
            <h3 className="font-semibold">Aliases:</h3>
            <p>Mista4chun, Fire Hashira</p>
          </div>

          <div className="flex items-center space-x-1">
            <h3 className="font-semibold">zodiac:</h3>
            <p> Gemini (18 June)</p>
          </div>

          <div className="flex items-center space-x-1">
            <h3 className="font-semibold">Availability:</h3>
            <p>Remote, Hybrid & Freelance </p>
          </div>
        </article>

        <article className="col-span-2 ">
          <p>
            I'm highly driven to learn but also deeply
            detail-oriented, which is a powerful combination for problem-solving
            in tech and life. These traits contribute to my ability to find
            solutions, even in the face of frustrating errors. This persistence,
            along with my open-mindedness in seeking help and refining my
            approach, likely serves me well in overcoming challenges.
          </p>
        </article>
        <div className="col-span-2 mx-auto">
          <h2 className="text-3xl font-semibold">Skills</h2>
        </div>
        <article className="flex flex-col space-y-3">
          <div>
            <h3>Html & CSS</h3>
            <ProgressBar progress={80} />
          </div>

          <div>
            <h3>Javascript</h3>
            <ProgressBar progress={85} />
          </div>

          <div>
            <h3>Supabase</h3>
            <ProgressBar progress={75} />
          </div>

          <div>
            <h3>ChatGPT, Midjourney, DALL-E 3 & APIs</h3>
            <ProgressBar progress={80} />
          </div>
        </article>
        <article className="flex flex-col space-y-3">
          <div>
            <h3>React, Redux, React-Router & Nextjs</h3>
            <ProgressBar progress={90} />
          </div>

          <div>
            <h3>Tailwindcss & Shadcn</h3>
            <ProgressBar progress={95} />
          </div>

          <div>
            <h3>Git & Postman</h3>
            <ProgressBar progress={75} />
          </div>

          <div>
            <h3>Figma & Frama motion</h3>
            <ProgressBar progress={60} />
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;

import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import ProgressBar from "../components/ProgressBar";
import { TbZodiacGemini } from "react-icons/tb";
import { AnimatePresence, motion } from "motion/react";

const bioText = [
  "I'm highly driven to learn but also deeply detail-oriented,",
  "which is a powerful combination for problem-solving in tech and life.",
  "These traits contribute to my ability to find solutions,even in the face of frustrating errors.",
  "This persistence, along with my open-mindedness in seeking help and refining my approach, likely serves me well in overcoming challenges.",
];

function About() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((progress) => (progress / 100) * 100);
  }, [progress]);

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5, // Stagger each line
        duration: 0.8, // Smooth entrance
        type: "spring",
        stiffness: 100,
        damping: 10,
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
        <div className="mx-auto mt-3 max-w-full px-6">
          <img
            src="./Image.jpg"
            alt=""
            className="h-32 w-32 rounded-full border-4 border-gray-900 md:hidden"
          />
          <h1 className="mb-3 text-left text-3xl font-semibold md:text-center">
            Frontend Developer & Prompt Engineer
          </h1>
          <article className="grid-col-1 mb-8 grid items-center gap-2 md:grid-cols-2">
            <div className="-ml-4 flex items-center space-x-4 md:-ml-0">
              <img
                src="./Image.jpg"
                alt=""
                className="hidden h-28 w-28 rounded-full border-4 border-gray-900 md:block"
              />
              <div className="">
                <div className="flex items-center space-x-1">
                  <h3 className="font-semibold">Name:</h3>
                  <p>Hilary Samson</p>
                </div>

                <div className="flex items-center space-x-1">
                  <h3 className="font-semibold">Nationality:</h3>
                  <p>Nigerian 🇳🇬️</p>
                </div>

                <div className="flex flex-wrap items-center space-x-1">
                  <h3 className="font-semibold">College Degree:</h3>
                  <p>Computer Science</p>
                </div>
              </div>
            </div>

            <div className=" ">
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold">Aliases:</h3>
                <p>Mista4chun, Fire Hashira</p>
              </div>

              <div className="flex items-center space-x-1">
                <h3 className="font-semibold">zodiac:</h3>
                <p className="flex items-center gap-1">
                  {" "}
                  Gemini{" "}
                  <span>
                    <TbZodiacGemini />
                  </span>
                  (18 June)
                </p>
              </div>

              <div className="flex items-center space-x-1">
                <h3 className="font-semibold">Availability:</h3>
                <p>Remote, Hybrid & Freelance </p>
              </div>
            </div>
          </article>
          {bioText.map((line, index) => (
            <motion.p
              key={index}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              className="mb-5 md:px-3"
            >
              {line}
            </motion.p>
          ))}

          <h2 className="mb-3 text-left text-3xl font-semibold md:text-center">
            skills
          </h2>
          <article className="mb-5 grid items-center gap-x-14 gap-y-3 px-3 md:grid-cols-2">
            <div className="flex flex-col space-y-3">
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
                <ProgressBar progress={90} />
              </div>

              <div>
                <h3>ChatGPT, Midjourney, DALL-E 3 & APIs</h3>
                <ProgressBar progress={80} />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div>
                <h3>React, Redux, React-Router & React Query</h3>
                <ProgressBar progress={90} />
              </div>

              <div>
                <h3>Tailwindcss & Shadcn</h3>
                <ProgressBar progress={95} />
              </div>

              <div>
                <h3>Git & Postman</h3>
                <ProgressBar progress={80} />
              </div>

              <div>
                <h3>Framer motion & Canva</h3>
                <ProgressBar progress={90} />
              </div>
            </div>
          </article>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default About;

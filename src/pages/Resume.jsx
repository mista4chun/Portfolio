import DownloadResume from "../components/DownloadResume";
import PageNav from "../components/PageNav";

import { motion } from "motion/react";

function Resume() {
  // Variants for the container (ul)
  const containerVariants = {
    hidden: { opacity: 0 }, // Initial state
    visible: {
      opacity: 1, // Target state
      transition: {
        staggerChildren: 0.3, // Stagger animation for children
      },
    },
  };

  // Variants for each item (li)
  const itemVariants = {
    hidden: { opacity: 0, x: -20 }, // Start offscreen with opacity 0
    visible: { opacity: 1, x: 0 }, // Fade in and slide into position
  };
  return (
    <section className="bg-[#1e1e1e] pb-6">
      <PageNav type="horizontal" />
      <DownloadResume />

      <div className="mx-auto mt-10 grid max-w-7xl px-3 lg:grid-cols-2">
        <div className="pb-6">
          <h1 className="px-6 pb-4 text-2xl font-bold">✧ Education History </h1>
          <div className="grid grid-cols-[auto_1fr]">
            <article className="px-6">
              <div className="relative h-[600px] w-0.5 bg-gray-100">
                <div className="flex flex-col space-y-32">
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                </div>
              </div>
            </article>
            <motion.ul
              initial="hidden" // Initial animation state
              animate="visible" // Target animation state
              variants={containerVariants} // Apply container animation
              className="mt-2 flex flex-col space-y-[30px] md:space-y-12"
            >
              <motion.li variants={itemVariants} className="pb-1">
                <p className="font-semibold uppercase text-blue-400">
                  Modern HTML & CSS From The Beginning
                </p>
                <p>Udemy INC. and Traversy Media.</p>
                <p>2023</p>
              </motion.li>
              <motion.li variants={itemVariants} className="pb-1">
                <p className="font-semibold uppercase text-blue-400">
                  Modern JavaScript From The Beginning 2.0
                </p>
                <p>Traversy Media</p>
                <p>2023</p>
              </motion.li>
              <motion.li variants={itemVariants} className="pb-2">
                <p className="font-semibold uppercase text-blue-400">
                  The Ultimate Git Course
                </p>
                <p>CodeWithMosh</p>
                <p>2023</p>
              </motion.li>
              <motion.li variants={itemVariants} className="pb-2.5">
                <p className="font-semibold uppercase text-blue-400">
                  The Ultimate React course, Next.js, Redux
                </p>
                <p>Udemy INCt</p>
                <p>2024</p>
              </motion.li>
              <motion.li variants={itemVariants}>
                <p className="font-semibold uppercase text-blue-400">
                  Computer Science
                </p>
                <p>Abubakar Tafawa balewa University</p>
                <p>2021</p>
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <div>
          <h1 className="px-6 pb-4 text-2xl font-bold">
            ✧ Professional Experience
          </h1>
          <div className="grid grid-cols-[auto_1fr]">
            <article className="px-6">
              <div className="relative h-[420px] w-0.5 bg-gray-100">
                <div className="flex flex-col space-y-32">
                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  <div>
                    <span className="absolute -ml-1.5 mt-9 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>
                  <div>
                    <span className="absolute -ml-1.5 mt-16 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  {/*<div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div>

                  <div>
                    <span className="absolute -ml-1.5 mt-4 h-3.5 w-3.5 rounded-full bg-blue-400"></span>
                  </div> */}
                </div>
              </div>
            </article>
            <motion.ul
              initial="hidden" // Initial animation state
              animate="visible" // Target animation state
              variants={containerVariants}
              className="mt-2 flex flex-col space-y-12"
            >
              <motion.li variants={itemVariants} className="pb-2.5">
                <p className="font-semibold uppercase text-blue-400">
                  Uplift Nigeria. Bauchi State, Nigeria
                </p>
                <p>Front-End Developer</p>
                <p>remote</p>
                <p>2024 - Present</p>
              </motion.li>
              <motion.li variants={itemVariants} className="pb-2">
                <p className="font-semibold uppercase text-blue-400">
                  nHub Foundation
                </p>
                <p>Web Developer & Instructor</p>
                <p>physical: Plateau State, Nigeria</p>

                <p>2023 - 2024</p>
              </motion.li>
              <motion.li variants={itemVariants} className="pb-2">
                <p className="font-semibold uppercase text-blue-400">
                  Good Communications
                </p>
                <p>physical: Plateau State, Nigeria</p>
                <p> Sales Rep</p>
                <p>2019 - 2020</p>
              </motion.li>

              {/* <div className="pb-2">
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div>
              <div>
                <p className="text-blue-400">Udemy frontend School</p>
                <p>Learnt frontend developement</p>
                <p>2022</p>
              </div> */}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

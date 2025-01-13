import { LuDownload } from "react-icons/lu";
import { motion } from "motion/react";

const DownloadResume = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <a
        href="/hilary_resume.pdf"
        download="Hilary_Resume.pdf"
        className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
      >
        <motion.div
          initial={{ transform: "translateX(-20px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring" }}
        >
          <LuDownload className="text-lg" />
        </motion.div>
        Download My Resume
      </a>
    </div>
  );
};

export default DownloadResume;

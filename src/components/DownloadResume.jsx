import { LuDownload } from "react-icons/lu";

const DownloadResume = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <a
        href="/hilary_resume.pdf" // Path to your resume file in the public folder
        download="Hilary_Resume.pdf" // Suggests a name for the downloaded file
        className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-600"
      >
       <LuDownload  className="text-lg"/>
        Download My Resume
      </a>
    </div>
  );
};

export default DownloadResume;

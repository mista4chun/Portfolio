import { FaGithub } from "react-icons/fa";


function RepoCard({ repo }) {
  return (
    <div className="flex flex-col items-start justify-between rounded-md bg-[#1f2429] border border-[#333333] px-2 py-3">
      <h3 className="font-semibold text-[#01b6cd]">{repo.name}</h3>

      <p>
        {repo.description === null ? (
          <p>View project to get more details</p>
        ) : (
          repo.description
        )}
      </p>

      <div className="flex items-center gap-2 pt-4 text-[#01b6cd]">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <FaGithub height={20} width={20} className="" />
        </a>

      
      </div>
    </div>
  );
}

export default RepoCard;

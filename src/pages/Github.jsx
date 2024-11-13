import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/helper";
import GitHubCalendar from "react-github-calendar";

import PageNav from "../components/PageNav";
import RepoCard from "../components/RepoCard";
import Spinner from "../components/Spinner";

function GitHubData() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        // Fetch user data
        const userRes = await fetch(
          `https://api.github.com/users/${import.meta.env.VITE_REACT_APP_USERNAME}`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_REACT_APP_API_KEY}`,
            },
          },
        );
        const userData = await userRes.json();
        setUser(userData);

        // Fetch repository data
        const repoRes = await fetch(
          `https://api.github.com/users/${import.meta.env.VITE_REACT_APP_USERNAME}/repos?per_page=100`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_REACT_APP_API_KEY}`,
            },
          },
        );
        let repoData = await repoRes.json();

        // Check if repos is an array, shuffle, and take top 4
        if (Array.isArray(repoData)) {
          repoData = shuffleArray(repoData).slice(0, 4);
          setRepos(repoData);
        } else {
          setRepos([]);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      }
    };

    fetchGitHubData();
  }, []); // Empty dependency array to run only once on component mount

  if (error)
    return (
      <p className="flex items-center justify-center text-3xl font-semibold">
        {error} 😢️
      </p>
    );

  return (
    <section className="">
      <PageNav type="horizontal" />
      {!isLoading ? (
        <>
          <div className="mx-auto w-full px-2 text-center md:px-4">
            <div className="my-7 rounded-md border border-[#333333] bg-[#1f2429] pt-6">
              <h1 className="text-xl font-semibold tracking-wider">
                {user.name}
              </h1>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-20 rounded-full"
                />
                <p>{user.followers} followers</p>
                <p className="border-x-2 border-[#01b6cd] px-3">
                  {user.public_repos} repos
                </p>
              </div>
              <button className="my-4 rounded-full bg-[#01b6cd] px-8 py-1 font-semibold capitalize text-gray-800 transition-opacity duration-150 hover:bg-[#37b7cb]">
                <a
                  href="https://github.com/mista4chun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open github
                </a>
              </button>
            </div>

            <div className="mb-8 grid gap-5 md:grid-cols-4 px-2 ">
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
          <div className="hidden items-center justify-center md:flex">
            <GitHubCalendar
              username={import.meta.env.VITE_REACT_APP_USERNAME}
            />
          </div>{" "}
        </>
      ) : (
        <Spinner />
      )}
    </section>
  );
}

export default GitHubData;

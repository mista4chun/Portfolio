import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { LuFileJson2 } from "react-icons/lu";
import { FaJs } from "react-icons/fa";
import { PiMarkdownLogoFill } from "react-icons/pi";

function PageNav({ type }) {
  const styles = {
    vertical: "text-sm leading-relaxed ",
    horizontal: "flex gap-8   px-3  border divide-x divide-[#2b2b2b] text-sm py-1 bg-[#181818] border-[#2b2b2b]",
  };

  return (
    <nav className={styles[type]}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={
              type === "vertical"
                ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                : "flex items-center gap-1 pl-4"
            }
          >
            <FaReact className="text-[#01b6cd]" />
            home.jsx
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/about"
            className={
              type === "vertical"
                ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                : "flex items-center gap-1 pl-4"
            }
          >
            <FaHtml5 className="text-[#e44d26]" />
            about.html
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/resume"
            className={
              type === "vertical"
                ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                : "flex items-center gap-1 pl-4"
            }
          >
            <LuFileJson2 className="text-[#f8be2d]" />
            resume.json
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/projects"
            className={
              type === "vertical"
                ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                : "flex items-center gap-1 pl-4"
            }
          >
            <FaJs className="text-[#ffca28]" />
            projects.js
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="/github"
            className={
              type === "vertical"
                ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                : "flex items-center gap-1 pl-4"
            }
          >
            <PiMarkdownLogoFill className="text-[#42a5f5]" />
            github.md
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

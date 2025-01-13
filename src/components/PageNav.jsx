import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { LuFileJson2 } from "react-icons/lu";
import { FaJs } from "react-icons/fa";
import { PiMarkdownLogoFill } from "react-icons/pi";

function PageNav({ type }) {
  const styles = {
    vertical: "text-xs leading-relaxed ",
    horizontal:
      "flex  items-center  border  md:text-sm  bg-[#181818] border-[#2b2b2b]",
  };

  return (
    <nav className={styles[type]}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                type === "vertical"
                  ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                  : "flex items-center gap-1 pl-4",
                isActive
                  ? type === "horizontal"
                    ? "border-t border-[#01b6cd] bg-[#1e1e1e] px-4 py-1"
                    : ""
                  : type === "horizontal"
                    ? "border border-[#2b2b2b] px-4 py-1"
                    : "",
              ].join(" ")
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
            className={({ isActive }) =>
              [
                type === "vertical"
                  ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                  : "flex items-center gap-1 pl-4",
                isActive
                  ? type === "horizontal"
                    ? "border-t border-[#01b6cd] bg-[#1e1e1e] px-4 py-1"
                    : ""
                  : type === "horizontal"
                    ? "border border-[#2b2b2b] px-4 py-1"
                    : "",
              ].join(" ")
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
            className={({ isActive }) =>
              [
                type === "vertical"
                  ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                  : "flex items-center gap-1 pl-4",
                isActive
                  ? type === "horizontal"
                    ? "border-t border-[#01b6cd] bg-[#1e1e1e] px-4 py-1"
                    : ""
                  : type === "horizontal"
                    ? "border border-[#2b2b2b] px-4 py-1"
                    : "",
              ].join(" ")
            }
          >
            <LuFileJson2 className="text-[#f8be2d]" />
            resume.json
          </NavLink>
        </li>
      </ul>
      <ul className="hidden md:block">
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              [
                type === "vertical"
                  ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                  : "flex items-center gap-1 pl-4",
                isActive
                  ? type === "horizontal"
                    ? "border-t border-[#01b6cd] bg-[#1e1e1e] px-4 py-1"
                    : ""
                  : type === "horizontal"
                    ? "border border-[#2b2b2b] px-4 py-1"
                    : "",
              ].join(" ")
            }
          >
            <FaJs className="text-[#ffca28]" />
            projects.js
          </NavLink>
        </li>
      </ul>
      <ul className="hidden md:block">
        <li>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              [
                type === "vertical"
                  ? "flex items-center gap-1 pl-4 hover:bg-gray-800/50"
                  : "flex items-center gap-1 pl-4",
                isActive
                  ? type === "horizontal"
                    ? "border-t border-[#01b6cd] bg-[#1e1e1e] px-4 py-1"
                    : ""
                  : type === "horizontal"
                    ? "border border-[#2b2b2b] px-4 py-1"
                    : "",
              ].join(" ")
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

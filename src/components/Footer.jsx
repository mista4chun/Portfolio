import { GoGitBranch } from "react-icons/go";
import { GoXCircle } from "react-icons/go";
import { GoAlert } from "react-icons/go";
import { VscCheckAll } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";
import { FaReact } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex items-center justify-between border border-[#2b2b2b] text-gray-400 pl-2 pr-4 text-sm tracking-wider">
      <article className="flex items-center gap-2.5">
        <a
          href="https://github.com/mista4chun/Portfolio"
          className="flex items-center"
        >
          <GoGitBranch />
          <p>main</p>
        </a>
        <div className="flex items-center gap-2">
          <GoXCircle />
          <GoAlert />
        </div>
      </article>
      <article className="flex items-center space-x-8">
        <div className="flex items-center gap-1">
          <FaReact  />
          <p>Powered by React </p>
        </div>
        <div className="flex items-center gap-1">
          <VscCheckAll />
          <p> Prettier </p>
        </div>
        <VscBell  />
      </article>
    </footer>
  );
}

export default Footer;

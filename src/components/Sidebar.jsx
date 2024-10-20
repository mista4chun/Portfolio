import { VscFiles } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";

const Socials = [
  {
    icon: <FaWhatsapp className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: < CiFacebook className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: <FaXTwitter className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />,
    path: "https://x.com/mista4chun",
  },
  {
    icon: <CiLinkedin className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: <AiOutlineMail className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: <LuInstagram className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />,
    path: "https://www.instagram.com/fortune_mg/",
  },
];

function Sidebar() {
  return (
    <div className="flex w-14 flex-col items-center justify-between border border-[#2b2b2b] py-2">
      <div className="flex flex-col items-center gap-4">
        <NavLink to="/">
          <VscFiles className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />
        </NavLink>
        <NavLink to="/github">
          <FaGithub className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />
        </NavLink>

        {Socials.map(({ icon, path }, index) => (
          <div key={index}>
            <a href={path}>
              <p>{icon}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3">
        <NavLink to="/about">
          <VscAccount className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />
        </NavLink>
        <NavLink to="/settings">
          <VscSettingsGear className="h-6 w-6 text-slate-400/50 hover:text-gray-200" />
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

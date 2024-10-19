import { VscFiles } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";

const Socials = [
  {
    icon: <FaWhatsapp className="h-6 w-6 text-slate-400" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: <FaFacebook className="h-6 w-6 text-slate-400" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: <FaXTwitter className="h-6 w-6 text-slate-400" />,
    path: "https://x.com/mista4chun",
  },
  {
    icon: <FaLinkedin className="h-6 w-6 text-slate-400" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: <MdMarkEmailRead className="h-6 w-6 text-slate-400" />,
    path: "https://web.facebook.com/hilary.samson",
  },
  {
    icon: <LuInstagram className="h-6 w-6 text-slate-400" />,
    path: "https://www.instagram.com/fortune_mg/",
  },
];

function Sidebar() {
  return (
    <div className="flex w-14 flex-col items-center justify-between border py-2">
      <div className="flex flex-col items-center gap-4">
        <NavLink to="/">
          <VscFiles className="h-6 w-6 text-slate-400" />
        </NavLink>
        <NavLink to="/github">
          <FaGithub className="h-6 w-6 text-slate-400" />
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
          <VscAccount className="h-6 w-6 text-slate-400" />
        </NavLink>
        <NavLink to="/settings">
          <VscSettingsGear className="h-6 w-6 text-slate-400" />
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

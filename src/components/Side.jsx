import { useState } from "react";
import PageNav from "./PageNav";
import { VscEllipsis } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

function Side() {
  const [show, setShow] = useState(true);

  return (
    <div className="w-56 max-w-md border border-[#2b2b2b]">
      <div className="mb-3 flex items-center justify-between px-4">
        <h1 className="text-sm">EXPLORER</h1>
        <VscEllipsis />
      </div>
      <button
        className="flex cursor-pointer items-center px-4 transition-all duration-300"
        onClick={() => setShow(!show)}
      >
        {show ? <VscChevronDown /> : <VscChevronRight />}
        <span className="text-xs font-semibold tracking-wider">PORTFOLIO</span>
      </button>
      {show && <PageNav type="vertical" />}
    </div>
  );
}

export default Side;

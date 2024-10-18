import { useState } from "react";
import PageNav from "./PageNav";
import { VscEllipsis } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

function Side() {
  const [show, setShow] = useState(false);
  const [chevron, setChevron] = useState(false);

  function handleShow() {
    setShow(!show);
    setChevron(!chevron);
  }
  return (
    <div className="w-44 max-w-md border">
      <div className="mb-4 flex items-center justify-between px-4">
        <h1 className="text-sm">EXPLORER</h1>
        <VscEllipsis />
      </div>
      <button className="flex cursor-pointer items-center transition-all duration-300 px-4" onClick={handleShow}>
        {chevron ? <VscChevronDown /> : <VscChevronRight />}
        <span className="text-sm font-semibold tracking-wider">PORTFOLIO</span>
      </button>
      {show && <PageNav type="vertical" />}
    </div>
  );
}

export default Side;

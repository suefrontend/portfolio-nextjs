"use client";
import { PiPencilLight } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import { PiWrenchLight } from "react-icons/pi";

function HighlightItem(props) {
  const { id, title, description, icon } = props;

  const iconName = {
    "ui-design": <PiPencilLight size={50} />,
    "web-development": <BiLogoReact size={50} />,
    "website-renewal": <PiWrenchLight size={50} />,
  };

  return (
    <div className="card text-center p-4">
      <div className="flex-column items-center justify-center py-10">
        <div className="border-black border-2 rounded-full inline-block">{iconName[icon]}</div>
        <h2 className="uppercase text-sm">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default HighlightItem;

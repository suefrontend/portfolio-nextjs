"use client";
import { PiPencilLight } from "react-icons/pi";
import { BiLogoReact } from "react-icons/bi";
import { PiWrenchLight } from "react-icons/pi";

function HighlightItem(props) {
  const { id, title, description, icon } = props;

  const iconName = {
    "ui-design": <PiPencilLight size={50} />,
    "web-development": <BiLogoReact size={50} />,
    "website-renewal": <PiWrenchLight size={50} />,
  };

  return (
    <div className="card bg-white">
      <div className="borderCard text-center p-4">
        <div className="flex-column items-center justify-center py-10">
          <div className="border-pink text-pink border-2 w-28 h-28 rounded-full inline-block flex items-center justify-center mx-auto mb-4">
            {iconName[icon]}
          </div>
          <h2 className="uppercase text-sm">{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HighlightItem;

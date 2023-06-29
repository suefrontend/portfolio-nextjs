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
    <div className="card border bg-white relative md:text-center md:pt-10 md:pb-6 md:px-4 lg:pt-16 lg:pb-12 lg:px-10 max-md:p-6 max-md:flex items-center">
      <div className="box-border box-border-leftTop" />
      <div className="box-border box-border-leftBottom" />
      <div className="box-border box-border-rightTop" />
      <div className="box-border box-border-rightBottom" />
      <div className="lg:mb-12 md:mb-8">
        <div className="border-pink text-pink border-2 md:w-28 md:h-28 max-md:w-20 max-md:h-20 rounded-full flex items-center justify-center mx-auto md:mb-6 max-md:mr-6">
          {iconName[icon]}
        </div>
        <h2 className="uppercase text-sm max-md:hidden font-bold">{title}</h2>
      </div>
      <div>
        <h2 className="uppercase text-base mb-2 font-bold md:hidden">
          {title}
        </h2>
        <p className="md:leading-8 max-md:leading-6">{description}</p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default HighlightItem;

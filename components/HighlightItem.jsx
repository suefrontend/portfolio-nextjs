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
<<<<<<< HEAD
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
=======
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
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
    </div>
  );
}

export default HighlightItem;

import React from "react";

function SkillItem(props) {
  const { title, percentage } = props;

  const percengateToWidth = {
    "20%": "w-1/5",
    "25%": "w-1/4",
    "30%": "w-1/3",
    "40%": "w-2/5",
    "50%": "w-1/2",
    "60%": "w-3/5",
    "75%": "w-3/4",
    "80%": "w-4/5",
    "85%": "w-5/6",
    "90%": "w-11/12",
    "100%": "w-full",
  };

  return (
    <div className="mb-4">
      <span className="text-sm">{title}</span>
      <div className="skill-container bg-gray-300 mt-2">
        <div
          className={`skill-percentage bg-pink ${percengateToWidth[percentage]}`}
        ></div>
      </div>
    </div>
  );
}

export default SkillItem;

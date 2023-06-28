"use client";
import SkillItem from "@components/SkillItem";

function SkillList() {
  const skills = [
    { id: 1, title: "HTML/CSS", percentage: "100%" },
    { id: 2, title: "JavaScript", percentage: "85%" },
    { id: 3, title: "React", percentage: "85%" },
    { id: 4, title: "WordPress", percentage: "60%" },
    { id: 5, title: "Node.js", percentage: "60%" },
    { id: 6, title: "Express", percentage: "60%" },
    { id: 7, title: "Sass", percentage: "90%" },
    { id: 8, title: "Next.js", percentage: "75%" },
    { id: 9, title: "SQL", percentage: "60%" },
    { id: 10, title: "Figma", percentage: "85%" },
    { id: 11, title: "PhotoShop", percentage: "85%" },
    { id: 12, title: "React Native", percentage: "60%" },
  ];

  const renderedList = skills.map((skill) => {
    return (
      <SkillItem
        key={skill.id}
        title={skill.title}
        percentage={skill.percentage}
      />
    );
  });

  return (
    <div className="grid max-sm:gap-x-4 grid-cols-4 xl:w-1/2 md:max-xl:w-9/12 mx-auto pt-6 mb-12 gap-x-10">
      {renderedList}
    </div>
  );
}

export default SkillList;

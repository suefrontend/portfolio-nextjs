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
<<<<<<< HEAD
    { id: 8, title: "Next.js", percentage: "60%" },
    { id: 9, title: "SQL", percentage: "60%" },
    { id: 10, title: "Figma", percentage: "80%" },
=======
    { id: 8, title: "Next.js", percentage: "75%" },
    { id: 9, title: "SQL", percentage: "60%" },
    { id: 10, title: "Figma", percentage: "85%" },
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
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
<<<<<<< HEAD
    <div className="grid max-sm:gap-x-4 grid-cols-4 mx-auto pt-6 mb-12 gap-x-10">
=======
    <div className="grid grid-cols-4 w-2/4 mx-auto pt-8 mb-12 gap-x-10">
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
      {renderedList}
    </div>
  );
}

export default SkillList;

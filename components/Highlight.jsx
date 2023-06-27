"use client";

import HighlightItem from "./HighlightItem";

const Highlight = () => {
  const highlight = [
    {
      id: 1,
      title: "UI Design",
      description:
        "I research and design experiences that feel seamless to users, paying attention to every little detail. I design with the code in mind, ensuring it's easy to maintain.",
      icon: "",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "I am passionate about creating useful applications that people can use in their everyday life. I enjoy challenges and coming up with creative solutions to solve problems.",
      icon: "",
    },
    {
      id: 3,
      title: "Website Renewal",
      description:
        "By analyzing the current issues of the website, I make strategic improvements to optimize its performance and user experience while maximizing its successful aspects.",
      icon: "",
    },
  ];

  const renderedList = highlight.map((item) => {
    return (
      <HighlightItem
        key={item.id}
        title={item.title}
        description={item.description}
        icon={item.icon}
      />
    );
  });

  return (
    <div className="container mx-auto">
      <p className="text-center">
        I have over 6+ years of experience working as a web developer. I have
        created websites and successfully completed projects for various
        organizations in Canada and Japan, spanning from small businesses to the
        UN.
      </p>
      <div className="grid grid-cols-3 gap-7">{renderedList}</div>
    </div>
  );
};

export default Highlight;

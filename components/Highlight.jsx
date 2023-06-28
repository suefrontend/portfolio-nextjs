"use client";

import HighlightItem from "./HighlightItem";

const Highlight = () => {
  const highlight = [
    {
      id: 1,
      title: "UI Design",
      description:
        "I research and design experiences that feel seamless to users, paying attention to every little detail. I design with the code in mind, ensuring it's easy to maintain.",
      icon: "ui-design",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "I am passionate about creating useful applications that people can use in their everyday life. I enjoy challenges and coming up with creative solutions to solve problems.",
      icon: "web-development",
    },
    {
      id: 3,
      title: "Website Renewal",
      description:
        "By analyzing the current issues of the website, I make strategic improvements to optimize its performance and user experience while maximizing its successful aspects.",
      icon: "website-renewal",
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
      <h2
        className="text-center mb-14 title text-lg pb-1 tracking-wide"
        key="project-list"
      >
        Highlights
      </h2>
      <p className="leading-8 text-center md:w-2/4 mx-auto mb-10">
        I have over 6+ years of experience working as a web developer. <br />I
        have created websites and successfully completed projects for various
        organizations in Canada and Japan, spanning from small businesses to the
        UN.
      </p>
      <div className="grid md:grid-cols-3 md:gap-7 max-md:gap-4">{renderedList}</div>
    </div>
  );
};

export default Highlight;

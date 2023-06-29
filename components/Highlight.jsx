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
<<<<<<< HEAD
        "By analyzing the current issues of the website, I make strategic improvements to optimize its user experience while maximizing its successful aspects.",
=======
        "By analyzing the current issues of the website, I make strategic improvements to optimize its performance and user experience while maximizing its successful aspects.",
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
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
<<<<<<< HEAD
    <div className="min-lg:w-3/4 2xl:w-3/4 container">
      {/* w-4/6 -> 66.666667%; w-3/4 -> 75% */}
=======
    <div className="container mx-auto">
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
      <h2
        className="text-center mb-14 title text-lg pb-1 tracking-wide"
        key="project-list"
      >
        Highlights
      </h2>
<<<<<<< HEAD
      <p className="leading-8 text-center md:w-2/4 mx-auto mb-10">
        {" "}
        {/* md:w-2/4 */}
=======
      <p className="text-center w-2/4 mx-auto mb-10">
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
        I have over 6+ years of experience working as a web developer. <br />I
        have created websites and successfully completed projects for various
        organizations in Canada and Japan, spanning from small businesses to the
        UN.
      </p>
<<<<<<< HEAD
      <div className="grid md:grid-cols-3 md:gap-4 lg:gap-6 max-md:gap-4 2xl:gap-12">
        {renderedList}
      </div>
=======
      <div className="grid grid-cols-3 gap-7">{renderedList}</div>
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
    </div>
  );
};

export default Highlight;

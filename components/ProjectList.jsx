"use client";
import ProjectItem from "@components/ProjectItem";

function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "Wiki Map - Map Sharing App",
      subtitle: "Lighthouse Labs Midterm Group Project",
      description:
        "Wiki Map is an interactive map sharing app built with Google Map API, Express, EJS and PostgresSQL. Perfect tool for planning trips, finding great restaurants, or simply identifying places that are important to you.",
      skills: [
        "Google Map API",
        "Node.js",
        "Express",
        "EJS",
        "PostgresSQL",
        "Bootstrap",
        "UI Design",
      ],
      github: "https://github.com/suefrontend/wikiMap",
      image: "/images/project/wikimap.png",
    },
    {
      id: 2,
      title: "First Aide - Health Care App",
      subtitle: "Lighthouse Labs Final Group Project",
      description:
        "First Aide is an AI-powered first aid app. It instantly provides users with accurate medical instructions during emergencies, offering intelligent suggestions and recommendations based on their input.",
      skills: [
        "OpenAI",
        "React Native",
        "Tailwind CSS",
        "Express",
        "PostgresSQL",
        "UI Design",
      ],
      github: "https://github.com/suefrontend/first-aide-client",
      image: "/images/project/first-aide.png",
    },
    // {
    //   id: 3,
    //   title: "SnapNews - Educational Quiz App",
    //   subtitle: "Personal Project",
    //   description:
    //     "SnapNews is a quiz app that utilizes BBC news RSS. Users select from a group of thumbnails, the image that best matches a provided headline. It's a fun and interactive way to test your knowledge and stay updated with the latest news.",
    //   skills: ["React", "API", "UI Design"],
    //   github:
    //     "https://github.com/suefrontend/match-headline-and-thumbnail-react",
    //   image: "/images/project/wikimap.png",
    // },
  ];

  const renderedList = projects.map((project, index) => {
    const isOdd = index % 2 !== 0;

    return (
      <ProjectItem
        key={project.id}
        title={project.title}
        subtitle={project.subtitle}
        description={project.description}
        skills={project.skills}
        github={project.github}
        image={project.image}
        isOdd={isOdd}
      />
    );
  });

  return (
    <div className="my-20">
      <h2
        className="text-center mb-14 title text-lg pb-1 tracking-wide"
        key="project-list"
      >
        Projects
      </h2>
      {/* xl:w-4/6 */}
      <div
        className="container flex flex-col lg:gap-y-24 md:gap-y-16 max-md:gap-y-16"
        key="project-list-item"
      >
        {renderedList}
      </div>
    </div>
  );
}

export default ProjectList;

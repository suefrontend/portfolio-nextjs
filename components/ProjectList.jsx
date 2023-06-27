"use client";

function ProjectList() {
  const projects = [
    {
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
    },
    {
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
    },
    {
      title: "SnapNews - Educational Quiz App",
      subtitle: "Personal Project",
      description:
        "SnapNews is a quiz app that utilizes BBC news RSS. Users select from a group of thumbnails, the image that best matches a provided headline. It's a fun and interactive way to test your knowledge and stay updated with the latest news.",
      skills: ["React", "API", "UI Design"],
      github:
        "https://github.com/suefrontend/match-headline-and-thumbnail-react",
    },
  ];

  return <div>ProjectList</div>;
}

export default ProjectList;

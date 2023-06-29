"use client";

import SkillList from "@components/SkillList";

function About() {
  return (
    <div className="my-20 container">
      <h2 className="text-center mb-12 title text-lg pb-1 tracking-wide">
        About Me
      </h2>
      <h3 className="text-pink text-center text-lg">
        Expanding from Front-end to Full-stack
      </h3>
      <div className="xl:w-1/2 md:max-xl:w-9/12 mx-auto pt-6 mb-16 leading-8">
        <p className="mb-6">
          I'm a software developer with a background in web design. After
          gaining experience in creating static websites and CMS-based web
          applications, I decided to go beyond informational websites and focus
          on building web applications that people can actually use in their
          day-to-day lives.
        </p>
        <p>
          To make the transition to a full-stack software developer, I joined a
          coding bootcamp at Lighthouse Labs in 2023. It was an eye-opening
          experience that provided me with a broader perspective on the field. I
          am continuously expanding my skill set by learning new technologies
          every day.
        </p>
      </div>
      <div>
        <h3 className="text-pink text-center text-lg">Skills &amp; Tools</h3>
        <SkillList />
      </div>
    </div>
  );
}

export default About;

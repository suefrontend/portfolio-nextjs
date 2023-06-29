"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

function ProjectItem(props) {
  const { id, title, subtitle, description, skills, github, image, isOdd } =
    props;

  return (
    // flex-row-reverse
    <div
      className={`md:flex md:gap-10 lg:gap-20 ${
        isOdd ? "flex-row-reverse" : ""
      }`}
      key={id}
    >
      <div style={{ borderWidth: "1px" }} className="max-md:mb-6">
        <Image src={image} width={1100} height={315} alt={title} />
      </div>
      <div>
        <h3 className="text-2xl">{title}</h3>
        <span className="text-pink block">{subtitle}</span>
        <p className="py-8 leading-6">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span className="bg-gray-100 text-xs py-1 px-2">{skill}</span>
          ))}
        </div>
        <div className="flex gap-2 text-center text-sm mt-4">
          <a
            href="/"
            className="bg-pink flex-1 py-2 text-white flex items-center justify-center relative btn-pink"
            onClick={(e) => {
              e.preventDefault();
              alert("I'm working on this page right now!");
            }}
          >
            <span className="mt-1">Detail</span>
          </a>
          <a
            href={github}
            target="_blank"
            className="bg-white border-x border-t border-pink flex-1 py-2 text-pink flex items-center justify-center gap-2 relative btn-white"
          >
            <FaGithub size={20} className="text-pink" />
            <span className="mt-1">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

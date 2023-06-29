"use client";
import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
import { FaGithub } from "react-icons/fa";
=======
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c

function ProjectItem(props) {
  const { id, title, subtitle, description, skills, github, image, isOdd } =
    props;

  return (
    // flex-row-reverse
<<<<<<< HEAD
    <div
      className={`md:flex md:gap-10 ${
        isOdd ? "flex-row-reverse" : ""
      }`}
      key={id}
    >
      <div className="relative max-md:mb-6 w-full max-md:h-60">
        <Image
          src={image}
          fill
          alt={title}
          className="object-contain"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* </div> */}
      </div>
      <div className="flex-2">
        <h3 className="text-2xl">{title}</h3>
        <span className="text-pink block">{subtitle}</span>
        <p className="md:py-10 max-md:py-8 leading-7">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span className="bg-bglightgrey text-xs py-1 px-2 text-lightgrey">
              {skill}
            </span>
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
=======
    <div className={`flex gap-20 ${isOdd ? "flex-row-reverse" : ""}`} key={id}>
      <div style={{ borderWidth: "1px" }}>
        <Image src={image} width={1100} height={315} alt={title} />
      </div>
      <div>
        <h3 className="text-2xl">{title}</h3>
        <span className="text-pink block">{subtitle}</span>
        <p className="py-8 leading-6">{description}</p>
        <div className="mb-6">
          {skills.map((skill) => (
            <span className="bg-gray-100 mr-2 text-xs py-1 px-2">{skill}</span>
          ))}
        </div>
        <div className="flex gap-2 text-center text-sm mt-4">
          <Link href="/" className="bg-pink flex-1 py-2 text-white">
            Detail
          </Link>
          <Link
            href={github}
            target="_blank"
            className="border border-pink flex-1 py-2"
          >
            Github
          </Link>
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

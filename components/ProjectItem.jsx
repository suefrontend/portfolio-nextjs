"use client";
import Link from "next/link";
import Image from "next/image";

function ProjectItem(props) {
  const { id, title, subtitle, description, skills, github, image, isOdd } =
    props;

  return (
    // flex-row-reverse
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
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

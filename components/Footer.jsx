import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-4">
<<<<<<< HEAD
      <ul className="flex mx-auto justify-between md:w-1/4 max-md:w-1/2 mb-4">
        <li className="bg-gray-100 p-3 rounded-full">
          <Link href="https://github.com/suefrontend" target="_blank">
            <FaGithub size={20} className="text-gray-400" />
          </Link>
        </li>
        <li className="bg-gray-100 p-3 rounded-full">
=======
      <ul className="flex mx-auto justify-between w-2/5 mb-4">
        <li className="bg-slate-200 p-3 rounded-full">
          <Link href="https://github.com/suefrontend" target="_blank">
            <FaGithub size={20} color="#ababab" />
          </Link>
        </li>
        <li className="bg-slate-200 p-3 rounded-full">
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
          <Link
            href="https://www.linkedin.com/in/kayano-oyama/"
            target="_blank"
          >
<<<<<<< HEAD
            <FaLinkedin size={20} className="text-gray-400" />
          </Link>
        </li>
        <li className="bg-gray-100 p-3 rounded-full">
          <a href="mailto:oyamakayano@gmail.com">
            <FaEnvelope size={20} className="text-gray-400" />
          </a>
=======
            <FaLinkedin size={20} color="#ababab" />
          </Link>
        </li>
        <li className="bg-slate-200 p-3 rounded-full">
          <Link href="/">
            <FaEnvelope size={20} color="#ababab" />
          </Link>
>>>>>>> 557af377ff4de47387b9efd5be834ce1ce5e720c
        </li>
      </ul>
      <span className="text-xs">&copy; 2023 Kayano Oyama</span>
    </footer>
  );
}

export default Footer;

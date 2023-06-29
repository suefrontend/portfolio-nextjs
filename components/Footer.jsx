import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-4">
      <ul className="flex mx-auto justify-between md:w-1/4 max-md:w-1/2 mb-4">
        <li className="bg-gray-100 p-3 rounded-full">
          <Link href="https://github.com/suefrontend" target="_blank">
            <FaGithub size={20} className="text-gray-400" />
          </Link>
        </li>
        <li className="bg-gray-100 p-3 rounded-full">
          <Link
            href="https://www.linkedin.com/in/kayano-oyama/"
            target="_blank"
          >
            <FaLinkedin size={20} className="text-gray-400" />
          </Link>
        </li>
        <li className="bg-gray-100 p-3 rounded-full">
          <a href="mailto:oyamakayano@gmail.com">
            <FaEnvelope size={20} className="text-gray-400" />
          </a>
        </li>
      </ul>
      <span className="text-xs">&copy; 2023 Kayano Oyama</span>
    </footer>
  );
}

export default Footer;

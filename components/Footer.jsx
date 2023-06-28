import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-center py-4">
      <ul className="flex mx-auto justify-between w-2/5 mb-4">
        <li className="bg-slate-200 p-3 rounded-full">
          <Link href="https://github.com/suefrontend" target="_blank">
            <FaGithub size={20} color="#ababab" />
          </Link>
        </li>
        <li className="bg-slate-200 p-3 rounded-full">
          <Link
            href="https://www.linkedin.com/in/kayano-oyama/"
            target="_blank"
          >
            <FaLinkedin size={20} color="#ababab" />
          </Link>
        </li>
        <li className="bg-slate-200 p-3 rounded-full">
          <Link href="mailto:oyamakayano@gmail.com">
            <FaEnvelope size={20} color="#ababab" />
          </Link>
        </li>
      </ul>
      <span className="text-xs">&copy; 2023 Kayano Oyama</span>
    </footer>
  );
}

export default Footer;

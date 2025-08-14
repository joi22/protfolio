import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-gray-900 text-white py-2 ">


      {/* Social Icons */}
      <div className="mx-5 flex justify-end items-center space-x-6 text-xl">
        <a href="https://github.com/joi22" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaGithub />
        </a>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          <FaWhatsapp />
        </a>
        <a href="www.linkedin.com/in/muhammad-uzair-b96379263" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

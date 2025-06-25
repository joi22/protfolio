import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-gray-900 text-white py-2 ">
      {/* Centered Message */}
      <div className="text-center text-sm sm:text-base font-medium">
        Welcome to my portfolio — let’s connect!
      </div>

      {/* Social Icons */}
      <div className="mx-5 flex justify-center items-center space-x-6 text-xl">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaGithub />
        </a>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

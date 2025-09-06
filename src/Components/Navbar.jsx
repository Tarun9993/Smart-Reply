import { useState } from "react";
import { FaChrome, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/smart.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#ffff] flex justify-between items-center shadow-2xl border-b px-4 md:px-10 py-1 h-16 md:h-20">
      <img src={logo} alt="logo" className="h-16 md:h-20 lg:h-28" />
      <button className="hidden md:flex bg-[#3771E0] text-white items-center gap-3 font-semibold px-4 md:px-6 py-2 rounded-xl hover:bg-[#6197ED] cursor-pointer text-sm md:text-base">
        <FaChrome size={18} />
        Add to Chrome - It's Free
      </button>
      <div
        className="md:hidden cursor-pointer text-gray-700 z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-20">
          <button className="bg-[#3771E0] text-white flex items-center gap-3 font-semibold px-6 py-3 rounded-xl hover:bg-[#6197ED] cursor-pointer">
            <FaChrome size={18} />
            Add to Chrome - It's Free
          </button>
        </div>
      )}
    </nav>
  );
}

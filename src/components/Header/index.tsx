import { MenuIcon, XIcon } from "lucide-react";
import Logo from "./../../assets/logo.png";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="w-screen bg-white flex justify-center py-6 relative">
      <div className="w-[340px] flex justify-between">
        <a href="#">
          <img src={Logo} alt="Logo" className="h-8" />
        </a>

        <button onClick={toggleMenu} className="cursor-pointer">
          <MenuIcon size={30} />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 cursor-pointer"
          onClick={closeMenu}
        />
      )}

      {/* Menu */}
      <nav
        className={`fixed h-screen w-[250px] py-5 bg-[#000000db] top-0 z-20 transition-all duration-300 ${
          menuOpen ? "left-0" : "-left-[250px]"
        }`}
      >
        <button
          className="px-2 absolute right-0 cursor-pointer"
          onClick={closeMenu}
        >
          <XIcon color="white" size={35} />
        </button>

        <ul className="flex flex-col mt-9">
          <li>
            <a className="block p-5 text-white text-center text-[18px] hover:text-gray-300 cursor-pointer">
              Home
            </a>
          </li>

          <li>
            <a className="block p-5 text-white text-center text-[18px] hover:text-gray-300 cursor-pointer">
              About Us
            </a>
          </li>

          <li>
            <a className="block p-5 text-white text-center text-[18px] hover:text-gray-300 cursor-pointer">
              Contact
            </a>
          </li>

          <li>
            <a className="block p-5 text-white text-center text-[18px] hover:text-gray-300 cursor-pointer">
              Community
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { useState } from "react";
import Logotype from "@/components/Header/components/Logotype";
import Menu from "@/components/Header/components/Menu";
import Contact from "@/components/Header/components/Contact";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-general w-full">
      <nav className="flex items-center px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex-shrink-0">
          <Logotype />
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <Menu />
        </div>

        <div className="hidden lg:flex flex-shrink-0">
          <Contact />
        </div>

        <button
          className="lg:hidden p-2 text-general ml-auto"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>
      </nav>

      <div
        className={`lg:hidden flex flex-col items-center px-4 sm:px-6 py-4 overflow-hidden transition-all duration-300 ease-in-out
    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <Menu mobile />
        <Contact />
      </div>
    </header>
  );
};

export default Header;

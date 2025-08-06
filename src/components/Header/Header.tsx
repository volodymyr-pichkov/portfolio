import Logotype from "@/components/Header/components/Logotype";
import Menu from "@/components/Header/components/Menu";
import Contact from "@/components/Header/components/Contact";

const Header: React.FC = () => {
  return (
    <header className="text-general w-full">
      <nav className="flex flex-wrap justify-between items-center">
        <Logotype />
        <Menu />
        <Contact />
      </nav>
    </header>
  );
};

export default Header;

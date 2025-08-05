import Logotype from "@/components/Header/components/Logotype";
import Menu from "@/components/Header/components/Menu";
import Contact from "@/components/Header/components/Contact";

const Header: React.FC = () => {
  return (
    <header className="text-general w-full">
      <nav className="flex justify-between items-center px-8 gap-64">
        <Logotype />
        <Menu />
        <Contact />
      </nav>
    </header>
  );
};

export default Header;

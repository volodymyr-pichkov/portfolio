import Logotype from "./components/Logotype";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

const Header: React.FC = () => {
  return (
    <header className="text-general">
      <nav className="flex px-8 justify-between items-center">
        <Logotype />
        <Menu />
        <Contact />
      </nav>
    </header>
  );
};

export default Header;

import Logotype from "./components/Logotype";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (): React.ReactElement => {
  return (
    <header className="bg-black text-general">
      <nav className="flex px-8 justify-between items-center">
        <Logotype />
        <Menu />
        <Contact />
      </nav>
    </header>
  );
};

export default Header;

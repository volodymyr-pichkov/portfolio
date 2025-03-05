import Title from "./components/Title";
import Menu from "./components/Menu";
import Catalog from "./components/Catalog";

interface MainProps {}

const Main: React.FC<MainProps> = (): React.ReactElement => {
  return (
    <main className="text-white">
      <Title />
      <nav>
        <Menu />
      </nav>
      <Catalog />
    </main>
  );
};

export default Main;

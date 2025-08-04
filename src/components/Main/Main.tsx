import Title from "./components/Title";
import Menu from "./components/Menu";
import Catalog from "./components/Catalog";

const Main: React.FC = () => {
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

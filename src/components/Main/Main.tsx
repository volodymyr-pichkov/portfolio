import Menu from "./components/Menu";
import Title from "./components/Title";

interface MainProps {}

const Main: React.FC<MainProps> = (): React.ReactElement => {
  return (
    <main className="text-white">
      <Title />
      <nav>
        <Menu />
      </nav>
    </main>
  );
};

export default Main;

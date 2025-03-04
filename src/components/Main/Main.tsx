import Menu from "./components/Menu";
import Title from "./components/Title";

interface MainProps {}

const Main: React.FC<MainProps> = (): React.ReactElement => {
  return (
    <main className="bg-black text-white">
      <Title />
      <nav>
        <Menu />
      </nav>
    </main>
  );
};

export default Main;

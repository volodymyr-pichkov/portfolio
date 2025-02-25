import MainMenu from "./components/MainMenu";
import Title from "./components/Title";

interface MainProps {}

const Main: React.FC<MainProps> = (): React.ReactElement => {
  return (
    <main className="bg-black text-white">
      <Title />
      <nav>
        <MainMenu />
      </nav>
    </main>
  );
};

export default Main;

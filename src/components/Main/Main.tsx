import Title from "@/components/Main/components/Title";
import Menu from "@/components/Main/components/Menu";
import Catalog from "@/components/Main/components/Catalog";

const Main: React.FC = () => {
  return (
    <main className="text-white">
      <Title />
      <Menu />
      <Catalog />
    </main>
  );
};

export default Main;

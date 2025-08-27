import { useState } from "react";
import Title from "@/components/Main/components/Title";
import Menu from "@/components/Main/components/Menu";
import Catalog from "@/components/Main/components/Catalog";

const Main: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");

  return (
    <main className="text-white w-full">
      <Title />
      <Menu selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
      <Catalog selectedGenre={selectedGenre} />
    </main>
  );
};

export default Main;

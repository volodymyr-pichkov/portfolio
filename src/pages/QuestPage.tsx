import { useParams } from "react-router-dom";
import { cards } from "@/data/questsData";
import Header from "@/components/Header/Header";
import MainQuest from "@/components/Main/MainQuest";
import Footer from "@/components/Footer/Footer";

const QuestPage: React.FC = () => {
  const { id } = useParams();
  const quest = cards.find((q) => q.id === id);

  if (!quest) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Квест не найден
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${quest.image})` }}
    >
        <Header />
        <MainQuest quest={quest} />
        <Footer />
    </div>
  );
};

export default QuestPage;

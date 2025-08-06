import { useParams } from "react-router-dom";
import { cards } from "@/data/questsData";
import Header from "@/components/Header/Header";
import QuestDetails from "@/pages/Quest/components/QuestDetails";
import Footer from "@/components/Footer/Footer";

const Quest: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const quest = id ? cards.find((q) => q.id === id) : undefined;

  if (!quest) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Квест не найден
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${quest.image})` }}
    >
      <Header />
      <QuestDetails quest={quest} />
      <Footer />
    </div>
  );
};

export default Quest;

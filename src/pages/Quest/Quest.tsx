import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { cards } from "@/data/questsData";
import QuestDetails from "@/pages/Quest/components/QuestDetails";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Quest: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [quest, setQuest] = useState<(typeof cards)[0] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const found = id ? cards.find((q) => q.id === id) : undefined;
      setQuest(found);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div
          className="w-16 h-16 border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"
          role="status"
          aria-label="Loading"
        />
      </div>
    );
  }

  if (!quest) {
    return (
      <div className="min-h-screen flex justify-center items-center text-4xl text-red-500 font-black text-center">
        Квест не найден
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${quest.image})`,
      }}
    >
      <Header />
      <div className="flex-1">
        <QuestDetails quest={quest} />
      </div>
      <Footer />
    </div>
  );
};

export default Quest;

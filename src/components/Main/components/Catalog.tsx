import { Link } from "react-router-dom";

const Catalog: React.FC = () => {
  const cards = [
    {
      title: "Склеп",
      players: "2-5 чел",
      difficulty: "сложный",
      image: "src/assets/images/sklep.png",
      path: "#",
    },
    {
      title: "Маньяк",
      players: "3-6 чел",
      difficulty: "средний",
      image: "src/assets/images/manyak.png",
      path: "#",
    },
    {
      title: "Ритуал",
      players: "3-5 чел",
      difficulty: "легкий",
      image: "src/assets/images/ritual.png",
      path: "#",
    },
    {
      title: "Марс-2056",
      players: "2-4 чел",
      difficulty: "легкий",
      image: "src/assets/images/mars-2056.png",
      path: "#",
    },
    {
      title: "Тайны старого особняка",
      players: "2-5 чел",
      difficulty: "легкий",
      image: "src/assets/images/mansion.png",
      path: "#",
    },
    {
      title: "Хижина в лесу",
      players: "4-7 чел",
      difficulty: "средний",
      image: "src/assets/images/hizhina.png",
      path: "#",
    },
    {
      title: "Фатальный эксперимент",
      players: "5-8 чел",
      difficulty: "сложный",
      image: "src/assets/images/experiment.png",
      path: "#",
    },
    {
      title: "Метро 2033",
      players: "6-8 чел",
      difficulty: "средний",
      image: "src/assets/images/metro-2033.png",
      path: "#",
    },
    {
      title: "Старый чердак",
      players: "2-3 чел",
      difficulty: "легкий",
      image: "src/assets/images/cherdak.png",
      path: "#",
    },
  ];

  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-6 mt-14 ml-[136px] mr-[150px]">
      {cards.map((card, index) => (
        <Link to={card.path} key={index} className="relative">
          <img src={card.image} alt={card.title} className="w-full h-auto" />
          <div className="absolute bottom-0">
            <h3>{card.title}</h3>
            <p>{card.players}</p>
            <p>{card.difficulty}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Catalog;

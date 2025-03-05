const Catalog: React.FC = () => {
    const cards = [
      { title: "Склеп", image: "src/assets/catalog/sklep.png" },
      { title: "Маньяк", image: "src/assets/catalog/manyak.png" },
      { title: "Ритуал", image: "src/assets/catalog/ritual.png" },
      { title: "Марс-2056", image: "src/assets/catalog/mars-2056.png" },
      { title: "Тайны старого особняка", image: "src/assets/catalog/mansion.png" },
      { title: "Хижина в лесу", image: "src/assets/catalog/hizhina.png" },
      { title: "Фатальный эксперимент", image: "src/assets/catalog/experiment.png" },
      { title: "Метро 2033", image: "src/assets/catalog/metro-2033.png" },
      { title: "Старый чердак", image: "src/assets/catalog/cherdak.png" },
    ];
  
    return (
      <div className="grid grid-rows-3 grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index}>
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>
    );
  };
  
  export default Catalog;
  
import { Link } from "react-router-dom";
import { QuestType, cards } from "@data/questsData";

const Catalog: React.FC = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-x-6 gap-y-8 mt-12 pl-[8.5rem] pr-[9.3rem]">

      {cards.map(({ id, image, title, players, difficulty }: QuestType) => (

        <Link to={`/quest/${id}`} key={id} className="relative">
          <img src={image} alt={title} className="w-full h-auto" />
          <div className="absolute bottom-0 left-0 right-0">
            <h3>{title}</h3>
            <div>
            <p>{players}</p>
            <p>{difficulty}</p>
            </div>
          </div>
        </Link>
        
      ))}

    </div>
  );
};

export default Catalog;

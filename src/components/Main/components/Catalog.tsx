import { Link } from "react-router-dom";
import { QuestType, cards } from "@data/questsData";
import playerIcon from "@/assets/icons/player.svg";
import difficultyIcon from "@/assets/icons/difficulty.svg";

const Catalog: React.FC = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-x-6 gap-y-8 mt-12 ml-[8.5rem] mr-[9.3rem]">
      {cards.map(({ id, image, title, players, difficulty }: QuestType) => (
        <Link to={`/quest/${id}`} key={id} className="relative">
          <div className="relative overflow-hidden rounded">
            <img src={image} alt={title} className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-iconFade" />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <h3 className="text-white lining-nums proportional-nums font-raleway text-2xl non-italic font-bold leading-[1.8rem] pl-5 pt-20">
              {title}
            </h3>
            <div className="flex items-center pl-5 pb-5 mt-4">
              <span className="flex gap-2 lining-nums proportional-nums font-raleway text-xs non-italic font-medium leading-[1.1rem] text-questInfo opacity-80">
                <img
                  src={playerIcon}
                  alt="Иконка игроков"
                  className="w-4 h-4"
                />
                {players}
              </span>
              <div className="border-r stroke-1 stroke-divider opacity-50 mx-3 h-5"></div>
              <span className="flex gap-2 lining-nums proportional-nums font-raleway text-xs non-italic font-medium leading-[1.1rem] text-questInfo opacity-80">
                <img
                  src={difficultyIcon}
                  alt="Иконка сложности"
                  className="w-4 h-4"
                />
                {difficulty}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Catalog;

import { Link } from "react-router-dom";
import { QuestType, cards } from "@data/questsData";
import playerIcon from "@/assets/icons/player.svg";
import difficultyIcon from "@/assets/icons/difficulty.svg";

interface CatalogProps {
  selectedGenre: string;
}

const Catalog: React.FC<CatalogProps> = ({ selectedGenre }) => {
  const filteredCards =
    selectedGenre === "all"
      ? cards
      : cards.filter((card) => card.genre === selectedGenre);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8 mt-8 sm:mt-10 md:mt-12 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-24 2xl:px-0 2xl:ml-[8.5rem] 2xl:mr-[9.3rem]">
      {filteredCards.map(
        ({ id, image, title, players, difficulty }: QuestType) => (
          <Link to={`/quest/${id}`} key={id} className="relative">
            <div className="relative overflow-hidden rounded">
              <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-iconFade" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
              <h3 className="text-white lining-nums proportional-nums font-raleway text-xl sm:text-2xl non-italic font-bold leading-[1.6rem] sm:leading-[1.8rem] pl-5 pt-16 sm:pt-20 pr-5">
                {title}
              </h3>
              <div className="flex items-center pl-5 pr-5 pb-5 mt-3 sm:mt-4">
                <span className="flex gap-2 lining-nums proportional-nums font-raleway text-[10px] sm:text-xs non-italic font-medium leading-[1.1rem] text-questInfo opacity-80">
                  <img
                    src={playerIcon}
                    alt="Иконка игроков"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  />
                  {players}
                </span>
                <div className="border-r stroke-1 stroke-divider opacity-50 mx-2 sm:mx-3 h-5"></div>
                <span className="flex gap-2 lining-nums proportional-nums font-raleway text-[10px] sm:text-xs non-italic font-medium leading-[1.1rem] text-questInfo opacity-80">
                  <img
                    src={difficultyIcon}
                    alt="Иконка сложности"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  />
                  {difficulty}
                </span>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Catalog;

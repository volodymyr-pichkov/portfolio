import { QuestType } from "@data/questsData";
import playerIcon from "@/assets/icons/player.svg";
import difficultyIcon from "@/assets/icons/difficulty.svg";
import durationIcon from "@/assets/icons/duration.svg";

interface QuestDetailsProps {
  quest: QuestType;
}

const QuestDetails: React.FC<QuestDetailsProps> = ({
  quest: { genre, title, duration, players, difficulty, description },
}) => {
  // ПОВЫСЬ КАЧЕСТВО КАРТИНОК
  return (
    <main className="flex">
      <div className="flex flex-col pl-600 mt-16 pr-20">
        <p className="text-navigation font-raleway text-sm non-italic font-medium leading-[1.25rem] lowercase">
          {genre}
        </p>
        <h1 className="text-white font-raleway text-8xl non-italic font-black leading-[5.5rem] tracking-tighter uppercase">
          {title}
        </h1>
        <div className="flex items-center mt-8 pl-8">
          <span className="flex lining-nums proportional-nums font-raleway text-xs non-italic font-medium leading-[1.1rem] text-questInfo opacity-80 gap-1">
            <img
              src={durationIcon}
              alt="Иконка длительности"
              className="w-4 h-4"
            />
            {duration}
          </span>
          <div className="border-r stroke-1 stroke-dividerLight opacity-30 mx-6 h-6"></div>

          <span className="flex gap-2 lining-nums proportional-nums font-raleway text-xs non-italic font-medium leading-[1.1rem] text-questInfo opacity-80">
            <img src={playerIcon} alt="Иконка игроков" className="w-4 h-4" />
            {players}
          </span>
          <div className="border-r stroke-1 stroke-dividerLight opacity-30 mx-6 h-6"></div>

          <span className="flex lining-nums proportional-nums font-raleway text-xs non-italic font-medium leading-[1.1rem] text-questInfo opacity-80 gap-1">
            <img
              src={difficultyIcon}
              alt="Иконка сложности"
              className="w-4 h-4"
            />
            {difficulty}
          </span>
        </div>
        <p className="text-questInfo lining-nums proportional-nums font-raleway text-sm non-italic font-medium leading-[1.5rem] mt-5 text-pretty break-words max-w-xl pl-8">
          {description}
        </p>
      </div>
      {/* <button className="">
          <span className="">ЗАБРОНИРОВАТЬ</span>
        </button> */}
    </main>
  );
};

export default QuestDetails;

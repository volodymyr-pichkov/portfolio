import { useState } from "react";
import { QuestType } from "@data/questsData";
import playerIcon from "@/assets/icons/player.svg";
import difficultyIcon from "@/assets/icons/difficulty.svg";
import durationIcon from "@/assets/icons/duration.svg";
import BookingPopup from "@/pages/Quest/components/BookingPopup/BookingPopup";
import { genreMap } from "@/data/genreMap";

interface QuestDetailsProps {
  quest: QuestType;
}

const QuestDetails: React.FC<QuestDetailsProps> = ({
  quest: { genre, title, duration, players, difficulty, description },
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="flex">
      <div className="flex flex-col w-full px-4 sm:px-8 md:pl-24 md:pr-12 lg:pl-40 lg:pr-20 mt-10 md:mt-16 max-w-screen-2xl">
        <p className="text-navigation font-raleway text-sm non-italic font-medium leading-[1.25rem] lowercase">
          {genreMap[genre] || genre}
        </p>
        <h1 className="text-white font-raleway text-4xl sm:text-5xl md:text-7xl lg:text-8xl non-italic font-black leading-tight md:leading-[5.5rem] tracking-tighter uppercase">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 md:mt-8 md:pl-8">
          <span className="flex lining-nums proportional-nums font-raleway text-xs sm:text-sm non-italic font-medium leading-[1.1rem] text-questInfo opacity-80 gap-1">
            <img
              src={durationIcon}
              alt="Иконка длительности"
              className="w-4 h-4"
            />
            {duration}
          </span>
          <div className="hidden md:block border-r stroke-1 stroke-dividerLight opacity-30 mx-6 h-6"></div>

          <span className="flex gap-2 lining-nums proportional-nums font-raleway text-xs sm:text-sm non-italic font-medium leading-[1.1rem] text-questInfo opacity-80">
            <img src={playerIcon} alt="Иконка игроков" className="w-4 h-4" />
            {players}
          </span>
          <div className="hidden md:block border-r stroke-1 stroke-dividerLight opacity-30 mx-6 h-6"></div>

          <span className="flex lining-nums proportional-nums font-raleway text-xs sm:text-sm non-italic font-medium leading-[1.1rem] text-questInfo opacity-80 gap-1">
            <img
              src={difficultyIcon}
              alt="Иконка сложности"
              className="w-4 h-4"
            />
            {difficulty}
          </span>
        </div>
        <p className="text-questInfo lining-nums proportional-nums font-raleway text-sm sm:text-base non-italic font-medium leading-[1.6rem] mt-4 md:mt-5 text-pretty break-words max-w-2xl md:pl-8">
          {description}
        </p>

        <button
          type="button"
          onClick={() => setIsPopupOpen(true)}
          className="text-white bg-navigation font-raleway text-sm sm:text-base non-italic font-extrabold leading-normal tracking-wider px-8 sm:px-12 py-4 sm:py-5 mt-6 sm:mt-8 md:mt-10 w-fit rounded-full uppercase md:ml-8"
        >
          Забронировать
        </button>
      </div>

      {isPopupOpen && <BookingPopup onClose={() => setIsPopupOpen(false)} />}
    </main>
  );
};

export default QuestDetails;

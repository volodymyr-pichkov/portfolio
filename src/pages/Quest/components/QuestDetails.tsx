import { QuestType } from "@data/questsData";

interface QuestDetailsProps {
  quest: QuestType;
}

const QuestDetails: React.FC<QuestDetailsProps> = ({
  quest: { genre, title, duration, players, difficulty, description },
}) => {
  return (
    <main className="flex text-general">
      <div className="flex flex-col pl-[600px] pr-[216px] pb-[124px] pt-[77px]">
        <p className="text-navigation font-raleway text-sm non-italic font-medium leading-5">
          {genre}
        </p>
        <h1 className="text-general text-8xl non-italic font-black leading-[88px] tracking-light">
          {title}
        </h1>
        <p>{duration}</p>
        <p>{players}</p>
        <p>{difficulty}</p>
        <p>{description}</p>
        <button className="bg-navigation rounded-[66px] w-[250px] h-[65px] md:w-[200px] md:h-[55px] sm:w-[150px] sm:h-[50px] transition duration-300 hover:brightness-110">
          <span className="font-raleway text-base font-extrabold tracking-description">
            ЗАБРОНИРОВАТЬ
          </span>
        </button>
      </div>
    </main>
  );
};

export default QuestDetails;

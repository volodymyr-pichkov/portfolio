const list = "src/assets/list.svg";
const adventures = "src/assets/adventures.svg";
const horrors = "src/assets/horrors.svg";
const mysticism = "src/assets/mysticism.svg";
const detective = "src/assets/detective.svg";
const sciFi = "src/assets/sci-fi.svg";
const divide = "src/assets/vertical-divide.svg";

const MainMenu: React.FC = (): React.ReactElement => {
  return (
    <ul className="flex justify-between items-center">
      <li className="flex">
        <img src={list} alt="list" />
        Все квесты
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={adventures} alt="adventures" />
        Приключения
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={horrors} alt="horrors" />
        Ужасы
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={mysticism} alt="mysticism" />
        Мистика
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={detective} alt="detective" />
        Детектив
        <img src={divide} />
      </li>
      <li>
        <img src={sciFi} alt="sci-fi" />
        Sci-fi
      </li>
    </ul>
  );
};

export default MainMenu;

import list from "../../../assets/catalog/list.svg";
import adventures from "../../../assets/catalog/adventures.svg";
import horrors from "../../../assets/catalog/horrors.svg";
import mysticism from "../../../assets/catalog/mysticism.svg";
import detective from "../../../assets/catalog/detective.svg";
import sciFi from "../../../assets/catalog/sci-fi.svg";
import divide from "../../../assets/catalog/vertical-divide.svg";

const Menu: React.FC = (): React.ReactElement => {
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

export default Menu;

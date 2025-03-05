import list from "@/assets/catalog/list.svg";
import adventures from "@/assets/catalog/adventures.svg";
import horrors from "@/assets/catalog/horrors.svg";
import mysticism from "@/assets/catalog/mysticism.svg";
import detective from "@/assets/catalog/detective.svg";
import sciFi from "@/assets/catalog/sci-fi.svg";
import divide from "@/assets/catalog/vertical-divide.svg";

const Menu: React.FC = (): React.ReactElement => {
  return (
    <ul className="flex justify-between items-center pt-[57px] ml-[136px] mr-[200px]">
      <li className="flex">
        <img src={list} alt="list" className="mr-3" />
        <p className="mr-10">Все квесты</p>
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={adventures} alt="adventures" className="mr-3" />
        <p className="mr-10">Приключения</p>
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={horrors} alt="horrors" className="mr-3" />
        <p className="mr-10">Ужасы</p>
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={mysticism} alt="mysticism" className="mr-3" />
        <p className="mr-10">Мистика</p>
        <img src={divide} />
      </li>
      <li className="flex">
        <img src={detective} alt="detective" className="mr-3" />
        <p className="mr-10">Детектив</p>
        <img src={divide} />
      </li>
      <li>
        <img src={sciFi} alt="sci-fi" className="mr-3" />
        <p>Sci-fi</p>
      </li>
    </ul>
  );
};

export default Menu;

import { Link } from "react-router-dom";
import list from "@/assets/catalog/list.svg";
import adventures from "@/assets/catalog/adventures.svg";
import horrors from "@/assets/catalog/horrors.svg";
import mysticism from "@/assets/catalog/mysticism.svg";
import detective from "@/assets/catalog/detective.svg";
import sciFi from "@/assets/catalog/sci-fi.svg";

const Menu: React.FC = (): React.ReactElement => {
  return (
    <ul className="flex justify-between items-center pt-[57px] ml-[136px] mr-[200px]">
      <Link to="#">
      <li className="flex border-r border-white border-opacity-30">
        <img src={list} alt="list" className="mr-3" />
        <p className="mr-10">Все квесты</p>
      </li>
      </Link>
      <Link to="#">
      <li className="flex border-r border-white border-opacity-30">
        <img src={adventures} alt="adventures" className="mr-3" />
        <p className="mr-10">Приключения</p>
      </li>
      </Link>
      <Link to="#">
      <li className="flex border-r border-white border-opacity-30">
        <img src={horrors} alt="horrors" className="mr-3" />
        <p className="mr-10">Ужасы</p>
      </li>
      </Link>
      <Link to="#">
      <li className="flex border-r border-white border-opacity-30">
        <img src={mysticism} alt="mysticism" className="mr-3" />
        <p className="mr-10">Мистика</p>
      </li>
      </Link>
      <Link to="#">
      <li className="flex border-r border-white border-opacity-30">
        <img src={detective} alt="detective" className="mr-3" />
        <p className="mr-10">Детектив</p>
      </li>
      </Link>
      <Link to="#">
      <li className="flex">
        <img src={sciFi} alt="sci-fi" className="mr-3" />
        <p>Sci-fi</p>
      </li>
      </Link>
    </ul>
  );
};

export default Menu;

import { NavLink } from "react-router-dom";
import list from "@/assets/icons/list.svg";
import adventures from "@/assets/icons/adventures.svg";
import horrors from "@/assets/icons/horrors.svg";
import mysticism from "@/assets/icons/mysticism.svg";
import detective from "@/assets/icons/detective.svg";
import sciFi from "@/assets/icons/sci-fi.svg";

const Menu: React.FC = (): React.ReactElement => {
  return (
    <ul className="flex justify-between items-center pt-[57px] ml-[136px] mr-[200px]">
      <NavLink to="#">
        {({ isActive }) => (
          <li className="flex border-r border-white border-opacity-30">
            <img src={list} alt="list" className="mr-3" />
            <p
              className={`mr-10 ${
                isActive ? "shrink-0 border-b-2 border-navigation" : ""
              }`}
            >
              Все квесты
            </p>
          </li>
        )}
      </NavLink>
      <NavLink to="#">
        <li className="flex border-r border-white border-opacity-30">
          <img src={adventures} alt="adventures" className="mr-3" />
          <p className="mr-10">Приключения</p>
        </li>
      </NavLink>
      <NavLink to="#">
        <li className="flex border-r border-white border-opacity-30">
          <img src={horrors} alt="horrors" className="mr-3" />
          <p className="mr-10">Ужасы</p>
        </li>
      </NavLink>
      <NavLink to="#">
        <li className="flex border-r border-white border-opacity-30">
          <img src={mysticism} alt="mysticism" className="mr-3" />
          <p className="mr-10">Мистика</p>
        </li>
      </NavLink>
      <NavLink to="#">
        <li className="flex border-r border-white border-opacity-30">
          <img src={detective} alt="detective" className="mr-3" />
          <p className="mr-10">Детектив</p>
        </li>
      </NavLink>
      <NavLink to="/invalid-path">
        <li className="flex">
          <img src={sciFi} alt="sci-fi" className="mr-3" />
          <p>Sci-fi</p>
        </li>
      </NavLink>
    </ul>
  );
};

export default Menu;

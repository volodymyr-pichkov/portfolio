import { NavLink, useLocation } from "react-router-dom";

const Menu: React.FC = () => {
  const location = useLocation();
  const isQuestActive =
    location.pathname === "/" || location.pathname.startsWith("/quest/");

  return (
    <ul className="flex flex-wrap items-center gap-12 pt-10 pb-4 font-raleway text-sm non-italic font-semibold leading-normal tracking-navigation lining-nums	proportional-nums">
      <li>
        <NavLink
          to="/"
          className={() => (isQuestActive ? "text-navigation" : "text-general")}
        >
          КВЕСТЫ
        </NavLink>
      </li>
      <li>
        <NavLink to="#">НОВИЧКАМ</NavLink>
      </li>
      <li>
        <NavLink to="#">ОТЗЫВЫ</NavLink>
      </li>
      <li>
        <NavLink to="#">АКЦИИ</NavLink>
      </li>
      <li>
        <NavLink to="#">КОНТАКТЫ</NavLink>
      </li>
    </ul>
  );
};

export default Menu;

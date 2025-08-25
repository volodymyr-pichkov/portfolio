import { NavLink, useLocation } from "react-router-dom";

const Menu: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const location = useLocation();
  const isQuestActive =
    location.pathname === "/" || location.pathname.startsWith("/quest/");

  return (
    <ul
      className={`
        ${
          mobile
            ? "flex flex-col gap-4 pt-2 pb-2"
            : "hidden md:flex flex-wrap items-center gap-6 lg:gap-10 xl:gap-12 pt-6 sm:pt-8 md:pt-10 pb-2 sm:pb-3 md:pb-4"
        }
        font-raleway text-xs sm:text-sm md:text-base font-semibold tracking-navigation
      `}
    >
      <li>
        <NavLink
          to="/"
          className={isQuestActive ? "text-navigation" : "text-general"}
        >
          КВЕСТЫ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/novichkam"
          className={({ isActive }) =>
            isActive ? "text-navigation" : "text-general"
          }
        >
          НОВИЧКАМ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/otzyvy"
          className={({ isActive }) =>
            isActive ? "text-navigation" : "text-general"
          }
        >
          ОТЗЫВЫ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/akcii"
          className={({ isActive }) =>
            isActive ? "text-navigation" : "text-general"
          }
        >
          АКЦИИ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? "text-navigation" : "text-general"
          }
        >
          КОНТАКТЫ
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;

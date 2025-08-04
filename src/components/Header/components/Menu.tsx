import { NavLink, Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <ul className="flex gap-12 pt-10 mb-4 font-raleway font-semibold text-sm break-words tracking-navigation">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-navigation" : "text-general"
          }
        >
          КВЕСТЫ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#"
          // className={({ isActive }) =>
          //   isActive ? "text-navigation" : "text-general"
          // }
        >
          НОВИЧКАМ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#"
          // className={({ isActive }) =>
          //   isActive ? "text-navigation" : "text-general"
          // }
        >
          ОТЗЫВЫ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="#"
          // className={({ isActive }) =>
          //   isActive ? "text-navigation" : "text-general"
          // }
        >
          АКЦИИ
        </NavLink>
      </li>
      <li>
        <Link to="#">КОНТАКТЫ</Link>
      </li>
    </ul>
  );
};

export default Menu;

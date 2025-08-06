import { NavLink } from "react-router-dom";
import list from "@/assets/icons/list.svg";
import adventures from "@/assets/icons/adventures.svg";
import horrors from "@/assets/icons/horrors.svg";
import mysticism from "@/assets/icons/mysticism.svg";
import detective from "@/assets/icons/detective.svg";
import sciFi from "@/assets/icons/sci-fi.svg";

interface MenuItem {
  to: string;
  icon: string;
  alt: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { to: "#", icon: list, alt: "list", label: "Все квесты" },
  { to: "/1", icon: adventures, alt: "adventures", label: "Приключения" },
  { to: "/2", icon: horrors, alt: "horrors", label: "Ужасы" },
  { to: "/3", icon: mysticism, alt: "mysticism", label: "Мистика" },
  { to: "/4", icon: detective, alt: "detective", label: "Детектив" },
  { to: "/5", icon: sciFi, alt: "sci-fi", label: "Sci-fi" },
];

const Menu: React.FC = () => {
  return (
    <nav>
      <ul
        className="
        flex justify-between items-center pt-[57px]
        px-4           /* добавляем внутренние отступы слева и справа */
        sm:px-8        /* на маленьких экранах немного больше отступов */
        md:ml-[136px] md:mr-[200px]  /* на средних и выше - старые отступы */
        overflow-x-auto whitespace-nowrap /* чтобы меню можно было скроллить, если очень узко */
      "
      >
        {menuItems.map(({ to, icon, alt, label }, index) => (
          <li
            key={alt}
            className={`flex items-center ${
              index !== menuItems.length - 1
                ? "border-r border-white border-opacity-30"
                : ""
            }`}
          >
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center px-2 sm:px-4 ${
                  isActive ? "shrink-0 border-b-2 border-navigation" : ""
                }`
              }
            >
              <img src={icon} alt={alt} className="mr-2 sm:mr-3" />
              <p className="text-sm sm:text-base">{label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

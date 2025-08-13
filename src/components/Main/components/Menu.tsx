import list from "@/assets/icons/list.svg";
import adventures from "@/assets/icons/adventures.svg";
import horrors from "@/assets/icons/horrors.svg";
import mysticism from "@/assets/icons/mysticism.svg";
import detective from "@/assets/icons/detective.svg";
import sciFi from "@/assets/icons/sci-fi.svg";

interface MenuItem {
  genre: string;
  icon: string;
  alt: string;
  label: string;
}

interface MenuProps {
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
}

const menuItems: MenuItem[] = [
  { genre: "all", icon: list, alt: "list", label: "Все квесты" },
  {
    genre: "adventures",
    icon: adventures,
    alt: "adventures",
    label: "Приключения",
  },
  { genre: "horrors", icon: horrors, alt: "horrors", label: "Ужасы" },
  { genre: "mysticism", icon: mysticism, alt: "mysticism", label: "Мистика" },
  { genre: "detective", icon: detective, alt: "detective", label: "Детектив" },
  { genre: "sci-fi", icon: sciFi, alt: "sci-fi", label: "Sci-fi" },
];

const Menu: React.FC<MenuProps> = ({ selectedGenre, onSelectGenre }) => {
  return (
    <nav className="flex items-center pl-[8.5rem] mt-12">
      <ul className="flex gap-x-10">
        {menuItems.map(({ genre, icon, alt, label }, index) => (
          <li
            key={alt}
            className={`flex ${
              index !== menuItems.length - 1
                ? "border-r border-white border-opacity-30"
                : ""
            }`}
          >
            <button
              onClick={() => onSelectGenre(genre)}
              className="flex items-center gap-x-3 pr-[2.5rem]"
            >
              <img src={icon} alt={alt} />
              <p
                className={
                  selectedGenre === genre ? "border-b-2 border-navigation" : ""
                }
              >
                {label}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

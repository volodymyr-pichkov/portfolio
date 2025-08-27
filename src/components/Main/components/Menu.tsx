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
    <nav className="flex items-center mt-6 sm:mt-8 md:mt-12 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-24 2xl:pl-[8.5rem] overflow-x-auto">
      <ul className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 whitespace-nowrap">
        {menuItems.map(({ genre, icon, alt, label }) => (
          <li
            key={alt}
            className="flex sm:border-r sm:border-white sm:border-opacity-30 last:border-none"
          >
            <button
              onClick={() => onSelectGenre(genre)}
              className="flex items-center gap-x-2 sm:gap-x-3 pr-4 sm:pr-8 md:pr-10 lg:pr-[2.5rem]"
            >
              <img src={icon} alt={alt} className="w-5 h-5 sm:w-6 sm:h-6" />
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

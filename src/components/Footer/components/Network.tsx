import facebook from "@/assets/network/facebook.svg";
import telegram from "@/assets/network/telegram.svg";

const Network: React.FC = () => {
  return (
    <div className="flex gap-2 pl-8 pb-6">
      <a
        href="https://www.facebook.com/?locale=ru_RU"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="shrink-0 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        <img
          src={facebook}
          alt="Facebook"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        />
      </a>
      <a
        href="https://web.telegram.org/k/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="shrink-0 transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
      >
        <img
          src={telegram}
          alt="Telegram"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        />
      </a>
    </div>
  );
};

export default Network;

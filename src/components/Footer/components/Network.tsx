import facebook from "@/assets/network/facebook.svg";
import telegram from "@/assets/network/telegram.svg";

const Network: React.FC = () => {
  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
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
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
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
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
        />
      </a>
    </div>
  );
};

export default Network;

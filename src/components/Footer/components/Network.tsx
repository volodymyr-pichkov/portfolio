import facebook from "@/assets/network/facebook.svg";
import telegram from "@/assets/network/telegram.svg";

const Network: React.FC = () => {
  return (
    <div className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-50 flex gap-3 sm:gap-4">
      <a
        href="https://www.facebook.com/?locale=ru_RU"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="group inline-flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center overflow-hidden rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          src={facebook}
          alt="Facebook"
          className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transition-transform duration-200 group-hover:scale-110"
        />
      </a>
      <a
        href="https://web.telegram.org/k/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="group inline-flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center overflow-hidden rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <img
          src={telegram}
          alt="Telegram"
          className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transition-transform duration-200 group-hover:scale-110"
        />
      </a>
    </div>
  );
};

export default Network;

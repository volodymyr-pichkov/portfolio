import facebook from "@/assets/network/facebook.svg";
import telegram from "@/assets/network/telegram.svg";

const Network: React.FC = () => {
  return (
    <div className="flex shrink-0 gap-2 pl-8 pb-6">
      <a
        href="https://www.facebook.com/?locale=ru_RU"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebook} alt="facebook" className="w-7 h-7" />
      </a>
      <a
        href="https://web.telegram.org/k/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={telegram} alt="telegram" className="w-7 h-7" />
      </a>
    </div>
  );
};

export default Network;

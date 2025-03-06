import { Link } from "react-router-dom";

import skype from "/src/assets/footer/skype.svg";
import vk from "/src/assets/footer/vk.svg";

const Network: React.FC = () => {
  return (
    <div className="flex gap-2">
      <Link
        to="#"
        className="flex justify-center items-center w-7 h-7 bg-skype rounded-full border border-black"
      >
        <img src={skype} alt="skype" />
      </Link>
      <Link to="#">
        <img src={vk} alt="vkontakte" />
      </Link>
    </div>
  );
};

export default Network;

const ellipse = "/src/assets/ellipse.svg";
const skype = "/src/assets/skype.svg";
const vk = "/src/assets/vk.svg";

const Network: React.FC = () => {
  return (
    <div className="flex gap-2">
      <img src={ellipse} alt="skype ellipse" className="relative" />
      <img src={skype} alt="skype" className="absolute" />
      <img src={vk} alt="vkontakte" />
    </div>
  );
};

export default Network;

const skype = "/src/assets/footer/skype.svg";
const vk = "/src/assets/footer/vk.svg";

const Network: React.FC = () => {
  return (
    <div className="flex gap-2">
      <div className="flex justify-center items-center w-7 h-7 bg-skype rounded-full border border-black">
        <img src={skype} alt="skype" />
      </div>
      <img src={vk} alt="vkontakte" />
    </div>
  );
};

export default Network;

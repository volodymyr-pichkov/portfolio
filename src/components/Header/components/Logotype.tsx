const logo = "/src/assets/logo.svg";
const typo = "/src/assets/typo.svg";

const Logotype: React.FC = (): React.ReactElement => {
  return (
    <div className="flex">
      <img src={logo} alt="logo" />
      <img src={typo} alt="typography" />
    </div>
  );
};

export default Logotype;

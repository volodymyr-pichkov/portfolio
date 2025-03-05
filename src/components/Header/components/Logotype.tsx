import logo from "/src/assets/header/logo.svg";
import typo from "/src/assets/header/typography.svg";

const Logotype: React.FC = (): React.ReactElement => {
  return (
    <div className="flex pt-6">
      <img src={logo} alt="logo" className="mr-2" />
      <img src={typo} alt="typography" />
    </div>
  );
};

export default Logotype;

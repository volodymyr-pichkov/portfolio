import logo from "/src/assets/header/logo.png";

const Logotype: React.FC = (): React.ReactElement => {
  return (
    <div className="flex pt-6">
      <img src={logo} alt="logo"/>
    </div>
  );
};

export default Logotype;

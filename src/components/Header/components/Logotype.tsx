import { Link } from "react-router-dom";
import logo from "@/assets/logotype/logo.png";

const Logotype: React.FC = () => {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="shrink-0 pt-6 pb-0" />
    </Link>
  );
};

export default Logotype;

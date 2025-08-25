import { Link } from "react-router-dom";
import logo from "@/assets/logotype/logo.png";

const Logotype: React.FC = () => {
  return (
    <Link to="/" className="shrink-0">
      <img
        src={logo}
        alt="Company Logo"
        className="pt-4 sm:pt-6 w-28 sm:w-32 md:w-36 lg:w-40 cursor-pointer"
      />
    </Link>
  );
};

export default Logotype;

import Network from "./components/Network";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (): React.ReactElement => {
  return (
    <footer className="bg-black text-white">
    <Network />
    </footer>
  );
};

export default Footer;

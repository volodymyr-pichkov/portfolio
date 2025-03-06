import Network from "./components/Network";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (): React.ReactElement => {
  return (
    <footer className="fixed bottom-0 left-0 w-full px-8 pb-6">
    <Network />
    </footer>
  );
};

export default Footer;

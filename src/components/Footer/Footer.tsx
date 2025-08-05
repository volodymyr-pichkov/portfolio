import Network from "@/components/Footer/components/Network";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex items-start fixed bottom-0 left-0 w-full">
        <Network />
      </footer>
      <div className="fixed bottom-0 left-0 w-full h-20 bg-footerFade opacity-80 pointer-events-none" />
    </>
  );
};

export default Footer;

import Network from "@/components/Footer/components/Network";
// НУЖЕН ФИКС ВЫХОДА ЗА ЭКРАН
const Footer: React.FC = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 w-full h-20 z-20">
        <Network />
      </footer>
      <div className="fixed bottom-0 left-0 right-0 w-full h-20 bg-footerFade opacity-80 pointer-events-none z-10" />
    </>
  );
};

export default Footer;

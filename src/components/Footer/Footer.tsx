import Network from "@/components/Footer/components/Network";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        className="absolute bottom-0 left-0 right-0 w-full h-20 z-20"
        role="contentinfo"
        aria-label="Contact Information"
      >
        <div className="h-full flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <Network />
        </div>
      </footer>

      <div className="absolute bottom-0 left-0 right-0 w-full h-20 bg-footerFade opacity-80 pointer-events-none z-10" />
    </>
  );
};

export default Footer;

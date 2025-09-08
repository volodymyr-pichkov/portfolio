import Network from "@/components/Footer/components/Network";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full h-20"
      role="contentinfo"
      aria-label="Contact Information"
    >
      <div className="h-full flex items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-24 py-4">
        <Network />
      </div>
    </footer>
  );
};

export default Footer;
